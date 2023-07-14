import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { Client } from "../Client";
import { LIQUIDATION_PRICE_PRECISION, QTY_LEVERAGE_PRECISION } from "../constants";
import { InterestRate } from "../gen/contracts/core/ChromaticMarketFactory";
import {
  BinMarginStructOutput,
  PositionStructOutput,
} from "../gen/contracts/core/interfaces/IChromaticMarket";
import { handleBytesError, logger } from "../utils/helpers";

type InterestParam = Pick<PositionParam, "makerMargin" | "claimTimestamp" | "openTimestamp">;

/**
 * Represents the parameters of a Chromatic position.
 */
export interface PositionParam {
  id?: PositionStructOutput["id"];
  takerMargin: PositionStructOutput["takerMargin"];
  makerMargin: BigNumber;
  openTimestamp: PositionStructOutput["openTimestamp"];
  claimTimestamp?: BigNumber;
  qty: PositionStructOutput["qty"];
  leverage: PositionStructOutput["leverage"];
}

/**
 * Represents a Chromatic position.
 */
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

/**
 * Represents a Chromatic position and provides methods to interact with it.
 */
export class ChromaticPosition {
  private settlementTokenAddress: string;
  private interestRateRecords: InterestRate.RecordStructOutput[];

  /**
   * Creates a new instance of ChromaticPosition.
   * @param _client The Chromatic Client instance.
   */
  constructor(private readonly _client: Client) {}

  /**
   * Retrieves the contract instances associated with Chromatic Position.
   * @returns An object containing the contract instances of Lens, Market, and Market Factory.
   */
  contracts() {
    return {
      lens: this._client.lens().contracts().lens,
      market: this._client.market().contracts().market,
      marketFactory: this._client.marketFactory().contracts().marketFactory,
    };
  }

  /**
   * Retrieves positions from the Chromatic Market contract.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param positionIds An array of position IDs.
   * @returns A promise that resolves to an array of positions.
   */
  async getPositions(marketAddress: string, positionIds: BigNumberish[]) {
    return await handleBytesError(async () => {
      const positions = await this.contracts().market(marketAddress).getPositions(positionIds);
      const lensContract = this.contracts().lens;
      const oracleVersions = new Set(
        positions.map((position) => [position.openVersion, position.closeVersion]).flat()
      );

      const oracleVersionData = await Promise.all(
        [...oracleVersions].map((version) => lensContract.oracleVersion(marketAddress, version))
      );
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
    }, this._client.provider);
  }

  /**
   * Retrieves the interest rate records for the specified market address.
   * @param marketAddress The address of the Chromatic Market contract.
   * @returns A promise that resolves to an array of interest rate records.
   */
  async getInterestRateRecords(marketAddress: string) {
    if (this.interestRateRecords != null) {
      return this.interestRateRecords;
    }
    if (!this.settlementTokenAddress) {
      this.settlementTokenAddress = await handleBytesError(
        async () => await this.contracts().market(marketAddress).settlementToken(),
        this._client.provider
      );
    }
    this.interestRateRecords = await handleBytesError(
      async () =>
        await this.contracts().marketFactory.getInterestRateRecords(this.settlementTokenAddress),
      this._client.provider
    );
    return this.interestRateRecords;
  }

  /**
   * Retrieves the interest for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param position The position parameters.
   * @returns A promise that resolves to the interest.
   */
  async getInterest(marketAddress: string, position: InterestParam) {
    const yearSecond = 3600 * 24 * 365;
    const denominator = BigNumber.from(yearSecond * 10000);
    let to = position.claimTimestamp?.toNumber() || Math.floor(Date.now() / 1000);
    const filteredInterestFees = (await this.getInterestRateRecords(marketAddress))
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

  /**
   * Calculates the profit and loss (PNL) for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param exitPrice The exit price of the position.
   * @param position The position parameters.
   * @param options Optional parameters for PNL calculation.
   * @returns A promise that resolves to the PNL value.
   */
  async getPnl(
    marketAddress: string,
    entryPrice: BigNumber,
    exitPrice: BigNumber,
    position: PositionParam,
    tokenDecimal: number,
    options: { includeInterestFee: boolean } = { includeInterestFee: true }
  ): Promise<BigNumber> {
    const leveragedQty = position.qty
      .mul(position.leverage)
      .mul(10 ** tokenDecimal)
      .div(QTY_LEVERAGE_PRECISION);
    let delta = exitPrice.sub(entryPrice);
    let pnl = leveragedQty.mul(delta).div(entryPrice);
    if (options.includeInterestFee) {
      const interestFee = await this.getInterest(marketAddress, position);
      pnl = pnl.sub(interestFee);
    }
    return pnl;
  }

  /**
   * Calculates the liquidation price for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param position The position parameters.
   * @param oraclePriceDecimals The number of decimals used for the oracle price.
   * @returns A promise that resolves to an object containing the profit stop price and loss cut price.
   */
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

  /**
   * Calculates the delta for liquidation price calculation.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param position The position parameters.
   * @param isProfitStop A flag indicating whether it is for the profit stop price calculation.
   * @param oraclePriceDecimals The number of decimals used for the oracle price.
   * @returns A promise that resolves to the delta value.
   */
  private async getDeltaForLiquidation(
    marketAddress: string,
    entryPrice: BigNumber,
    position: PositionParam,
    isProfitStop: boolean,
    oraclePriceDecimals: number
  ) {
    const interestFee = await this.getInterest(marketAddress, position);
    const margin = isProfitStop ? position.makerMargin : position.takerMargin;
    const leveragedQty = position.qty.mul(position.leverage);
    const pricePrecision = BigNumber.from(QTY_LEVERAGE_PRECISION).mul(LIQUIDATION_PRICE_PRECISION);
    const marginWithInterest = isProfitStop ? margin.add(interestFee) : margin.sub(interestFee);
    //18 + 18 + 10 - 10  36
    // 6 + 6 + 10 - 10  12
    let delta = entryPrice
      .mul(marginWithInterest.mul(pricePrecision))
      .div(leveragedQty)
      .div(LIQUIDATION_PRICE_PRECISION)
      .div(BigNumber.from(10).pow(oraclePriceDecimals));
    return delta;
  }

  /**
   * Calculates the profit stop price for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param position The position parameters.
   * @param oraclePriceDecimals The number of decimals used for the oracle price.
   * @returns A promise that resolves to the profit stop price.
   */
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

  /**
   * Calculates the loss cut price for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param position The position parameters.
   * @param oraclePriceDecimals The number of decimals used for the oracle price.
   * @returns A promise that resolves to the loss cut price.
   */
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
