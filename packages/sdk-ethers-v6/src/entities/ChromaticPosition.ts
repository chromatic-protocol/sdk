import { BigNumberish } from "ethers";
import { Client } from "../Client";
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
  /** The position identifier */
  id?: PositionStructOutput["id"];
  /** The amount of collateral that a trader must provide */
  takerMargin: PositionStructOutput["takerMargin"];
  /** The amount of maker's margin */
  makerMargin: bigint;
  /** The timestamp when the position was opened */
  openTimestamp: PositionStructOutput["openTimestamp"];
  /** The timestamp when the position was claimed */
  claimTimestamp?: bigint;
  /** The quantity of the position */
  qty: PositionStructOutput["qty"];
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
  _binMargins: BinMarginStructOutput[];
  /** The protocol fee rate for the market */
  _protocolFeeRate: bigint;
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
        positions.map((position) => [position.openVersion + 1n, position.closeVersion + 1n]).flat()
      );

      const oracleVersionData = await Promise.all(
        [...oracleVersions].map((version) => lensContract.oracleVersion(marketAddress, version))
      );

      return positions.map((position) => {
        return {
          ...position,
          makerMargin: position._binMargins.reduce((acc, bin) => acc + bin.amount, BigInt(0)),
          openPrice: oracleVersionData.find((oracle) => oracle.version == position.openVersion + 1n)
            ?.price,
          closePrice:
            position.closeVersion === 0n
              ? null
              : oracleVersionData.find((oracle) => oracle.version == position.closeVersion + 1n)
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
    const denominator = BigInt(yearSecond * 10000);
    let to = position.claimTimestamp || BigInt(Math.floor(Date.now() / 1000));
    const filteredInterests = (await this.getInterestRateRecords(marketAddress))
      .filter((fee) => fee.beginTimestamp <= BigInt(to))
      .sort((a, b) => Number(b.beginTimestamp - a.beginTimestamp));

    let totalInterest = BigInt(0);

    for (let fee of filteredInterests) {
      const from =
        fee.beginTimestamp > position.openTimestamp ? fee.beginTimestamp : position.openTimestamp;
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
    marketAddress: string,
    entryPrice: bigint,
    exitPrice: bigint,
    position: PositionParam,
    options: { includeInterest: boolean } = { includeInterest: true }
  ): Promise<bigint> {
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
    marketAddress: string,
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
    marketAddress: string,
    entryPrice: bigint,
    position: PositionParam,
    isProfitStop: boolean
  ): Promise<bigint> {
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
    marketAddress: string,
    entryPrice: bigint | undefined,
    position: PositionParam
  ): Promise<bigint | undefined> {
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
    marketAddress: string,
    entryPrice: bigint | undefined,
    position: PositionParam
  ): Promise<bigint | undefined> {
    if (!entryPrice) return;
    const delta = await this.getDeltaForLiquidation(marketAddress, entryPrice, position, false);
    return entryPrice - delta;
  }
}
