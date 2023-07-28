import { BigNumberish } from "ethers";
import { Client } from "../Client";
import { QTY_LEVERAGE_PRECISION, QTY_PRECISION } from "../constants";
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
  /** The quantity of the position, with 4 decimal places */
  qty: PositionStructOutput["qty"];
  /** The leverage BPS applied to the position */
  leverage: PositionStructOutput["leverage"];
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
  /** The quantity of the position, with 4 decimal places */
  qty: bigint;
  /** The leverage BPS applied to the position */
  leverage: bigint;
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
  /** The denominator of the protocol's % share of the fees */
  _feeProtocol: bigint;
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
        positions.map((position) => [position.openVersion, position.closeVersion]).flat()
      );

      const oracleVersionData = await Promise.all(
        [...oracleVersions].map((version) => lensContract.oracleVersion(marketAddress, version))
      );
      logger("oracleVersionData", oracleVersionData);

      return positions.map((position) => {
        return {
          ...position,
          makerMargin: position._binMargins.reduce((acc, bin) => acc + bin.amount, BigInt(0)),
          openPrice: oracleVersionData.find((oracle) => oracle.version == position.openVersion)
            ?.price,
          closePrice:
            position.closeVersion === 0n
              ? null
              : oracleVersionData.find((oracle) => oracle.version == position.closeVersion)?.price,
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
    const filteredInterestFees = (await this.getInterestRateRecords(marketAddress))
      .filter((fee) => fee.beginTimestamp <= BigInt(to))
      .sort((a, b) => Number(b.beginTimestamp - a.beginTimestamp));

    let totalInterestFee = BigInt(0);

    for (let fee of filteredInterestFees) {
      const from =
        fee.beginTimestamp > position.openTimestamp ? fee.beginTimestamp : position.openTimestamp;
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
   * @param tokenDecimals The decimals of the settlement token.
   * @param options Optional parameters for PNL calculation.
   * @returns A promise that resolves to the PNL value.
   */
  async getPnl(
    marketAddress: string,
    entryPrice: bigint,
    exitPrice: bigint,
    position: PositionParam,
    tokenDecimals: number,
    options: { includeInterestFee: boolean } = { includeInterestFee: true }
  ): Promise<bigint> {
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
    marketAddress: string,
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
    marketAddress: string,
    entryPrice: bigint,
    position: PositionParam,
    isProfitStop: boolean,
    oraclePriceDecimals: number
  ): Promise<bigint> {
    const interestFee = await this.getInterest(marketAddress, position);
    const margin = isProfitStop ? position.makerMargin : position.takerMargin;
    const marginWithInterest = isProfitStop ? margin + interestFee : margin - interestFee;
    let delta =
      (entryPrice * BigInt(marginWithInterest) * BigInt(QTY_PRECISION)) /
      position.qty /
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
    marketAddress: string,
    entryPrice: bigint | undefined,
    position: PositionParam,
    oraclePriceDecimals: number
  ): Promise<bigint | undefined> {
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
    marketAddress: string,
    entryPrice: bigint | undefined,
    position: PositionParam,
    oraclePriceDecimals: number
  ): Promise<bigint | undefined> {
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
