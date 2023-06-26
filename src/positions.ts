import { Provider } from "@ethersproject/providers";
import { PositionStructOutput } from "./gen/contracts/core/ChromaticMarket";
import { BigNumber } from "@ethersproject/bignumber";
import {
  ChromaticMarketFactory,
  ChromaticMarketFactory__factory,
  ChromaticMarket__factory,
} from "./gen";
import { DEPLOYED_ADDRESSES } from "./constants";
import { ethers } from "ethers";

export interface PositionParam {
  id?: PositionStructOutput["id"];
  takerMargin: PositionStructOutput["takerMargin"];
  // binMargins: PositionStructOutput["_binMargins"];
  makerMargin: BigNumber;
  openTimestamp: PositionStructOutput["openTimestamp"];
  claimTimestamp: BigNumber;
  qty: PositionStructOutput["qty"];
  leverage: PositionStructOutput["leverage"];
}

export class Positions {
  private marketFactoryContract: ChromaticMarketFactory;
  private settlementTokenAddress: string;
  private interestRateRecords;
  private QTY_DECIMALS = 4;
  private LEVERAGE_DECIMALS = 2;
  private QTY_LEVERAGE_DECIMALS = this.QTY_DECIMALS + this.LEVERAGE_DECIMALS;
  private QTY_LEVERAGE_PRECISION = BigNumber.from(10).pow(this.QTY_LEVERAGE_DECIMALS);
  private LIQUIDATION_PRICE_DECIMALS = 4;
  private LIQUIDATION_PRICE_PRECISION = BigNumber.from(10).pow(this.LIQUIDATION_PRICE_DECIMALS);
  constructor(private readonly marketAddress: string, private readonly provider?: Provider) {
    this.marketFactoryContract = ChromaticMarketFactory__factory.connect(
      DEPLOYED_ADDRESSES.ChromaticMarketFactory,
      this.provider,
    );
  }

  async getBpsRecords() {
    if (this.interestRateRecords != null) {
      return this.interestRateRecords;
    }
    if (!this.settlementTokenAddress) {
      this.settlementTokenAddress = await ChromaticMarket__factory.connect(
        this.marketAddress,
        this.provider,
      ).settlementToken();
    }

    this.interestRateRecords = await this.marketFactoryContract.getInterestRateRecords(
      this.settlementTokenAddress,
    );
    return this.interestRateRecords;
  }

  async getInterestFee(position: PositionParam & { makerMargin?: BigNumber }) {
    const yearSecond = 3600 * 24 * 365;
    const denominator = BigNumber.from(yearSecond * 10000);
    let to = position.claimTimestamp?.toNumber() || Math.floor(Date.now() / 1000);
    const filteredInterestFees = (await this.getBpsRecords())
      .filter((fee) => fee.beginTimestamp.lte(BigNumber.from(to)))
      .sort((a, b) => b.beginTimestamp.sub(a.beginTimestamp).toNumber());

    let totalInterestFee = BigNumber.from(0);

    // calculate total interestFee
    for (let fee of filteredInterestFees) {
      const from = Math.max(fee.beginTimestamp.toNumber(), position.openTimestamp.toNumber());
      const period = to - from;
      to = fee.beginTimestamp.toNumber();

      const x = position.makerMargin;
      // ||
      // position.binMargins.reduce((acc, bin) => acc.add(bin.amount), BigNumber.from(0));
      const y = fee.annualRateBPS.mul(period);
      let calculatedInterestFee = x.mul(y).div(denominator);

      if (x.mul(y).mod(denominator).gt(0)) {
        calculatedInterestFee = calculatedInterestFee.add(1);
      }

      totalInterestFee = totalInterestFee.add(calculatedInterestFee);
      if (fee.beginTimestamp.lte(position.openTimestamp)) break;
    }
    return totalInterestFee;
  }

  async getPnl(
    entryPirce: BigNumber,
    exitPrice: BigNumber,
    position: PositionParam,
  ): Promise<BigNumber> {
    // const interestFee = await this.getInterestFee(position);
    const leveragedQty = position.qty.mul(position.leverage);
    let delta = exitPrice.sub(entryPirce).abs();
    if (leveragedQty.lt(0)) delta = delta.mul(-1);
    return leveragedQty.abs().mul(delta).div(entryPirce);
    // .sub(interestFee)
  }

  async getLiquidationPrice(entryPrice: BigNumber, position: PositionParam) {
    const interestFee = await this.getInterestFee(position);
    const margin = position.takerMargin;
    const leveragedQty = position.qty.mul(position.leverage);

    const pricePrecision = this.QTY_LEVERAGE_PRECISION.mul(this.LIQUIDATION_PRICE_PRECISION);
    let delta = entryPrice
      .mul(margin.sub(interestFee).mul(pricePrecision).div(leveragedQty))
      .div(this.LIQUIDATION_PRICE_PRECISION);

    if (position.qty.lt(0)) {
      delta = delta.mul(-1);
    }

    return {
      profitStopPrice: leveragedQty.gt(0) ? entryPrice.add(delta) : entryPrice.sub(delta),
      lossCutPrice: leveragedQty.gt(0) ? entryPrice.sub(delta) : entryPrice.add(delta),
    };
  }

  removableRate() {}
}
