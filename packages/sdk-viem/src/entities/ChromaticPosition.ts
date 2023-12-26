import { Address } from "viem";
import { Client } from "../Client";
import { handleBytesError } from "../utils/helpers";
import { subgraphSdk } from "../lib/graphql";

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
  /** The position identifier */
  id?: bigint;
  /** The amount of collateral that a trader must provide */
  takerMargin: bigint;
  /** The amount of maker's margin */
  makerMargin: bigint;
  /** The timestamp when the position was opened */
  openTimestamp: bigint;
  /** The timestamp when the position was claimed */
  claimTimestamp?: bigint;
  /** The quantity of the position */
  qty: bigint;
}
interface InterestRateRecord {
  /** The annual interest rate in basis points (BPS) */
  annualRateBPS: bigint;
  /** The timestamp when the interest rate record begins */
  beginTimestamp: bigint;
}
/**
 * Represents a Chromatic position.
 */
export interface IPosition {
  /** The position identifier */
  id: bigint;
  /** The version of the oracle when the position was opened */
  openVersion: bigint;
  /** The version of the oracle when the position was closed */
  closeVersion: bigint;
  /** The quantity of the position */
  qty: bigint;
  /** The timestamp when the position was opened */
  openTimestamp: bigint;
  /** The timestamp when the position was closed */
  closeTimestamp: bigint;
  /** The amount of collateral that a trader must provide */
  takerMargin: bigint;
  /** The owner of the position, usually it is the account address of trader */
  owner: string;
  /** The bin margins for the position, it represents the amount of collateral for each bin */
  _binMargins: IBinMargin[];

  /** The protocol fee rate for the market */
  _protocolFeeRate: number;
  /** The amount of maker's margin */
  makerMargin: bigint;
  /** The price of the underlying asset when position was closed. */
  closePrice: bigint | undefined;
  /** The price of the underlying asset when position was opened. */
  openPrice: bigint | undefined;
  /** The timestamp when the position was claimed */
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
        positions.map((position) => [position.openVersion + 1n, position.closeVersion + 1n]).flat()
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
          openPrice: oracleVersionData.find((oracle) => oracle.version == position.openVersion + 1n)
            ?.price,
          closePrice:
            position.closeVersion === 0n
              ? null
              : oracleVersionData.find((oracle) => oracle.version == position.closeVersion + 1n)
                  ?.price,
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
    const { chromaticMarket: chromaticMarketMeta } = await subgraphSdk.getMarketMeta({
      id: marketAddress,
    });
    if (!this.settlementTokenAddress) {
      this.settlementTokenAddress = chromaticMarketMeta?.settlementToken;
    }
    const { interestRatesSnapshots } = await subgraphSdk.getInterestRecordSnapshots({
      settlementToken: this.settlementTokenAddress,
    });

    this.interestRateRecords = [
      ...interestRatesSnapshots[0]?.rates.map((rate) => {
        return {
          annualRateBPS: BigInt(rate.annualRateBPS || 0n),
          beginTimestamp: BigInt(rate.beginTimestamp || 0n),
        };
      }),
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
    const filteredInterests = (await this.getInterestRateRecords(marketAddress))
      .filter((fee) => fee.beginTimestamp <= BigInt(to))
      .sort((a, b) => Number(b.beginTimestamp - a.beginTimestamp));
    let totalInterest = 0n;
    for (let fee of filteredInterests) {
      const from = BigInt(Math.max(Number(fee.beginTimestamp), Number(position.openTimestamp)));
      const period = to - from;
      to = fee.beginTimestamp;
      const x = position.makerMargin;
      const y = fee.annualRateBPS * period;
      let calculatedInterest = (x * y) / denominator;
      if ((x * y) % denominator > 0n) {
        calculatedInterest = calculatedInterest + 1n;
      }
      totalInterest = totalInterest + calculatedInterest;
      if (fee.beginTimestamp <= position.openTimestamp) break;
    }
    return totalInterest;
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
    marketAddress: Address,
    entryPrice: bigint,
    exitPrice: bigint,
    position: PositionParam,
    options: { includeInterest: boolean } = { includeInterest: true }
  ) {
    let delta = exitPrice - entryPrice;
    let pnl = (position.qty * delta) / entryPrice;
    if (options.includeInterest) {
      const interest = await this.getInterest(marketAddress, position);
      pnl = pnl - interest;
    }
    return pnl;
  }

  /**
   * Calculates the liquidation price for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param position The position parameters.
   * @returns A promise that resolves to an object containing the profit stop price and loss cut price.
   */
  async getLiquidationPrice(
    marketAddress: Address,
    entryPrice: bigint | undefined,
    position: PositionParam
  ) {
    return {
      profitStopPrice: await this.profitStopPrice(marketAddress, entryPrice, position),
      lossCutPrice: await this.lossCutPrice(marketAddress, entryPrice, position),
    };
  }

  /**
   * Calculates the delta for liquidation price calculation.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param position The position parameters.
   * @param isProfitStop A flag indicating whether it is for the profit stop price calculation.
   * @returns A promise that resolves to the delta value.
   */
  private async getDeltaForLiquidation(
    marketAddress: Address,
    entryPrice: bigint,
    position: PositionParam,
    isProfitStop: boolean
  ) {
    const interest = await this.getInterest(marketAddress, position);
    const margin = isProfitStop ? position.makerMargin : position.takerMargin;
    const marginWithInterest = isProfitStop ? margin + interest : margin - interest;
    let delta = (entryPrice * marginWithInterest) / position.qty;
    return delta;
  }

  /**
   * Calculates the profit stop price for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param position The position parameters.
   * @returns A promise that resolves to the profit stop price.
   */
  async profitStopPrice(
    marketAddress: Address,
    entryPrice: bigint | undefined,
    position: PositionParam
  ) {
    if (!entryPrice) return;
    const delta = await this.getDeltaForLiquidation(marketAddress, entryPrice, position, true);
    return entryPrice + delta;
  }

  /**
   * Calculates the loss cut price for a position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param entryPrice The entry price of the position.
   * @param position The position parameters.
   * @returns A promise that resolves to the loss cut price.
   */
  async lossCutPrice(
    marketAddress: Address,
    entryPrice: bigint | undefined,
    position: PositionParam
  ) {
    if (!entryPrice) return;
    const delta = await this.getDeltaForLiquidation(marketAddress, entryPrice, position, false);
    return entryPrice - delta;
  }
}
