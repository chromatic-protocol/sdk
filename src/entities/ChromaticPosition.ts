import { BinMarginStructOutput, PositionStructOutput } from "../gen/contracts/core/ChromaticMarket";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";

import { LIQUIDATION_PRICE_PRECISION, QTY_LEVERAGE_PRECISION } from "../constants";
import { Client } from "../Client";
import { ethers } from "ethers";
import { IOracleProvider } from "../gen";
import { logger } from "../utils/helpers";
import { ConstructorFragment } from "@ethersproject/abi";

export interface PositionParam {
  id?: PositionStructOutput["id"];
  takerMargin: PositionStructOutput["takerMargin"];
  makerMargin: BigNumber;
  openTimestamp: PositionStructOutput["openTimestamp"];
  claimTimestamp?: BigNumber;
  qty: PositionStructOutput["qty"];
  leverage: PositionStructOutput["leverage"];
}
type InterestFeeParam = Pick<PositionParam, "makerMargin" | "claimTimestamp" | "openTimestamp">;
export interface IPosition {
  id: BigNumber;
  openVersion: BigNumber;
  closeVersion: BigNumber;
  qty: BigNumber;
  leverage: number;
  openTimestamp: BigNumber;
  closeTimestamp: BigNumber;
  takerMargin: BigNumber;
  owner: string;
  _binMargins: BinMarginStructOutput[];
  _feeProtocol: number;
  makerMargin: BigNumber;
  closePrice: BigNumber | undefined;
  openPrice: BigNumber | undefined;
  claimTimestamp?: BigNumber;
}
export class ChromaticPosition {
  private settlementTokenAddress: string;
  private interestRateRecords;
  _client: Client;
  private _contracts;
  constructor(client: Client) {
    this._client = client;
  }

  contracts() {
    return {
      lens: this._client.lens().contracts().lens,
      market: this._client.market().contracts().market,
      marketFactory: this._client.marketFactory().contracts().marketFactory,
    };
  }
  async getPositions(marketAddress: string, positionIds: BigNumberish[]) {
    const positions = await this.contracts().market(marketAddress).getPositions(positionIds);
    const lensContract = this.contracts().lens;
    const oracleVersions = new Set(
      positions.map((position) => [position.openVersion, position.closeVersion]).flat()
    );

    const multicallParam = [...oracleVersions].map((version) =>
      lensContract.interface.encodeFunctionData("oracleVersion", [marketAddress, version])
    );

    const encodedResponses = (await lensContract.multicall(multicallParam)) as string[];
    const oracleVersionData = encodedResponses
      .map((response) => lensContract.interface.decodeFunctionResult("oracleVersion", response))
      .flat() as IOracleProvider.OracleVersionStructOutput[];
    logger("oracleVersionData", oracleVersionData);

    return positions.map((position) => {
      return {
        ...position,
        makerMargin: position._binMargins.reduce(
          (acc, bin) => acc.add(bin.amount),
          BigNumber.from(0)
        ),
        openPrice: oracleVersionData.find((oracle) => oracle.version?.eq(position.openVersion))
          ?.price,
        closePrice: oracleVersionData.find((oracle) => oracle.version?.eq(position.closeVersion))
          ?.price,
      } as IPosition;
    });
  }

  async getBpsRecords(marketAddress: string) {
    if (this.interestRateRecords != null) {
      return this.interestRateRecords;
    }
    if (!this.settlementTokenAddress) {
      this.settlementTokenAddress = await this.contracts().market(marketAddress).settlementToken();
    }

    this.interestRateRecords = await this.contracts().marketFactory.getInterestRateRecords(
      this.settlementTokenAddress
    );
    return this.interestRateRecords;
  }

  async getInterestFee(marketAddress: string, position: InterestFeeParam) {
    const yearSecond = 3600 * 24 * 365;
    const denominator = BigNumber.from(yearSecond * 10000);
    let to = position.claimTimestamp?.toNumber() || Math.floor(Date.now() / 1000);
    const filteredInterestFees = (await this.getBpsRecords(marketAddress))
      .filter((fee) => fee.beginTimestamp.lte(BigNumber.from(to)))
      .sort((a, b) => b.beginTimestamp.sub(a.beginTimestamp).toNumber());

    let totalInterestFee = BigNumber.from(0);

    for (let fee of filteredInterestFees) {
      const from = Math.max(fee.beginTimestamp.toNumber(), position.openTimestamp.toNumber());
      const period = to - from;
      to = fee.beginTimestamp.toNumber();

      const x = position.makerMargin;
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
    marketAddress: string,
    entryPrice: BigNumber,
    exitPrice: BigNumber,
    position: PositionParam,
    options: { includeInterestFee: boolean } = { includeInterestFee: true }
  ): Promise<BigNumber> {
    const leveragedQty = position.qty.mul(position.leverage);
    let delta = exitPrice.sub(entryPrice).abs();
    if (leveragedQty.lt(0)) delta = delta.mul(-1);
    let pnl = leveragedQty.abs().mul(delta).div(entryPrice);
    if (options.includeInterestFee) {
      const interestFee = await this.getInterestFee(marketAddress, position);
      pnl = pnl.sub(interestFee);
    }
    return pnl;
  }

  async getLiquidationPrice(
    marketAddress: string,
    entryPrice: BigNumber | undefined,
    position: PositionParam,
    oraclePriceDecimals: number
  ) {
    return {
      profitStopPrice: await this.profitStopPrice(
        marketAddress,
        entryPrice,
        position,
        oraclePriceDecimals
      ),
      lossCutPrice: await this.lossCutPrice(
        marketAddress,
        entryPrice,
        position,
        oraclePriceDecimals
      ),
    };
  }


  private async getDeltaForLiquidation(
    marketAddress: string,
    entryPrice: BigNumber,
    position: PositionParam,
    isProfitStop: boolean,
    oraclePriceDecimals: number
  ) {
    const interestFee = await this.getInterestFee(marketAddress, position);
    const margin = isProfitStop ? position.makerMargin : position.takerMargin;
    const leveragedQty = position.qty.mul(position.leverage); 
    const pricePrecision = BigNumber.from(QTY_LEVERAGE_PRECISION).mul(LIQUIDATION_PRICE_PRECISION);
    const marginWithInterest = isProfitStop ? margin.add(interestFee) : margin.sub(interestFee);
    let delta = entryPrice //18 + 18 + 10 - 10  36 
                          // 6 + 6 + 10 - 10  12
      .mul(marginWithInterest.mul(pricePrecision)).div(leveragedQty)
      .div(LIQUIDATION_PRICE_PRECISION)
      .div(BigNumber.from(10).pow(oraclePriceDecimals))
    return delta;
  }

  async profitStopPrice(
    marketAddress: string,
    entryPrice: BigNumber | undefined,
    position: PositionParam,
    oraclePriceDecimals: number
  ) {
    if (!entryPrice) return;
    const delta = await this.getDeltaForLiquidation(
      marketAddress,
      entryPrice,
      position,
      true,
      oraclePriceDecimals
    );
    return entryPrice.add(delta);
  }

  async lossCutPrice(
    marketAddress: string,
    entryPrice: BigNumber | undefined,
    position: PositionParam,
    oraclePriceDecimals: number
  ) {
    if (!entryPrice) return;
    const delta = await this.getDeltaForLiquidation(
      marketAddress,
      entryPrice,
      position,
      false,
      oraclePriceDecimals
    );
    return entryPrice.sub(delta);
  }
}
