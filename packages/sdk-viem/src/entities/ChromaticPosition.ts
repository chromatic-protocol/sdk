import { Address } from "viem";
import { Client } from "../Client";
import { LIQUIDATION_PRICE_PRECISION, QTY_LEVERAGE_PRECISION } from "../constants";
import { handleBytesError } from "../utils/helpers";

type InterestParam = Pick<PositionParam, "makerMargin" | "claimTimestamp" | "openTimestamp">;

/** @ignore */
export interface IBinMargin {
  tradingFeeRate: number;
  amount: bigint;
}
/**
 * Represents the parameters of a Chromatic position.
 */
export interface PositionParam {
  id?: bigint;
  takerMargin: bigint;
  makerMargin: bigint;
  openTimestamp: bigint;
  claimTimestamp?: bigint;
  qty: bigint;
  leverage: number;
}
interface InterestRateRecord {
  annualRateBPS: bigint;
  beginTimestamp: bigint;
}
/**
 * Represents a Chromatic position.
 */
export interface IPosition {
  id: bigint;
  openVersion: bigint;
  closeVersion: bigint;
  qty: bigint;
  leverage: number;
  openTimestamp: bigint;
  closeTimestamp: bigint;
  takerMargin: bigint;
  owner: string;
  _binMargins: IBinMargin[];
  _feeProtocol: number;
  makerMargin: bigint;
  closePrice: bigint | undefined;
  openPrice: bigint | undefined;
  claimTimestamp?: bigint;
}

/**
 * Represents a Chromatic position and provides methods to interact with it.
 */
export class ChromaticPosition {
  private settlementTokenAddress: Address | undefined;
  private interestRateRecords: InterestRateRecord[] = [];

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
  async getPositions(marketAddress: Address, positionIds: bigint[]) {
    return await handleBytesError(async () => {
      const positions = await this.contracts()
        .market(marketAddress)
        .read.getPositions([positionIds]);
      const lensContract = this.contracts().lens;
      const oracleVersions = new Set(
        positions.map((position) => [position.openVersion, position.closeVersion]).flat()
      );

      const oracleVersionData = await Promise.all(
        [...oracleVersions].map((version) =>
          lensContract.read.oracleVersion([marketAddress, version])
        )
      );

      return positions.map((position) => {
        return {
          ...position,
          _binMargins: [...position._binMargins],
          makerMargin: position._binMargins.reduce((acc, bin) => acc + bin.amount, 0n),
          openPrice: oracleVersionData.find((oracle) => oracle.version == position.openVersion)
            ?.price,
          closePrice:
            position.closeVersion === 0n
              ? null
              : oracleVersionData.find((oracle) => oracle.version == position.closeVersion)?.price,
        } as IPosition;
      });
    });
  }

  /**
   * Retrieves the interest rate records for the specified market address.
   * @param marketAddress The address of the Chromatic Market contract.
   * @returns A promise that resolves to an array of interest rate records.
   */
  async getInterestRateRecords(marketAddress: Address) {
    if (this.interestRateRecords != null) {
      return this.interestRateRecords;
    }
    if (!this.settlementTokenAddress) {
      this.settlementTokenAddress = await handleBytesError(
        async () => await this.contracts().market(marketAddress).read.settlementToken()
      );
    }
    this.interestRateRecords = [
      ...(await handleBytesError(
        async () =>
          await this.contracts().marketFactory.read.getInterestRateRecords([
            this.settlementTokenAddress!,
          ])
      )),
    ];
    return this.interestRateRecords;
  }

  /**
   * Retrieves the interest for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param position The position parameters.
   * @returns A promise that resolves to the interest.
   */
  async getInterest(marketAddress: Address, position: InterestParam) {
    const yearSecond = 3600 * 24 * 365;
    const denominator = BigInt(yearSecond * 10000);
    let to = position.claimTimestamp || BigInt(Math.floor(Date.now() / 1000));
    const filteredInterestFees = (await this.getInterestRateRecords(marketAddress))
      .filter((fee) => fee.beginTimestamp <= BigInt(to))
      .sort((a, b) => Number(b.beginTimestamp - a.beginTimestamp));
    let totalInterestFee = 0n;
    for (let fee of filteredInterestFees) {
      const from = BigInt(Math.max(Number(fee.beginTimestamp), Number(position.openTimestamp)));
      const period = to - from;
      to = fee.beginTimestamp;
      const x = position.makerMargin;
      const y = fee.annualRateBPS * period;
      let calculatedInterestFee = (x * y) / denominator;
      if ((x * y) % denominator > 0n) {
        calculatedInterestFee = calculatedInterestFee + 1n;
      }
      totalInterestFee = totalInterestFee + calculatedInterestFee;
      if (fee.beginTimestamp <= position.openTimestamp) break;
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
   * @param tokenDecimals The decimals of the settlement token.
   * @returns A promise that resolves to the PNL value.
   */
  async getPnl(
    marketAddress: Address,
    entryPrice: bigint,
    exitPrice: bigint,
    position: PositionParam,
    tokenDecimals: number,
    options: { includeInterestFee: boolean } = { includeInterestFee: true }
  ) {
    const leveragedQty =
      (position.qty * BigInt(position.leverage) * BigInt(10 ** tokenDecimals)) /
      BigInt(QTY_LEVERAGE_PRECISION);
    let delta = exitPrice - entryPrice;
    let pnl = (leveragedQty * delta) / entryPrice;
    if (options.includeInterestFee) {
      const interestFee = await this.getInterest(marketAddress, position);
      pnl = pnl - interestFee;
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
    marketAddress: Address,
    entryPrice: bigint | undefined,
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
    marketAddress: Address,
    entryPrice: bigint,
    position: PositionParam,
    isProfitStop: boolean,
    oraclePriceDecimals: number
  ) {
    const interestFee = await this.getInterest(marketAddress, position);
    const margin = isProfitStop ? position.makerMargin : position.takerMargin;
    const leveragedQty = position.qty * BigInt(position.leverage);
    const pricePrecision = BigInt(QTY_LEVERAGE_PRECISION) * BigInt(LIQUIDATION_PRICE_PRECISION);
    const marginWithInterest = isProfitStop ? margin + interestFee : margin - interestFee;
    let delta =
      (entryPrice * BigInt(marginWithInterest * BigInt(pricePrecision))) /
      leveragedQty /
      BigInt(LIQUIDATION_PRICE_PRECISION) /
      10n ** BigInt(oraclePriceDecimals);
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
    marketAddress: Address,
    entryPrice: bigint | undefined,
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
    return entryPrice + delta;
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
    marketAddress: Address,
    entryPrice: bigint | undefined,
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
    return entryPrice - delta;
  }
}
