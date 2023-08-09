import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
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
  makerMargin: BigNumber;
  /** The timestamp when the position was opened */
  openTimestamp: PositionStructOutput["openTimestamp"];
  /** The timestamp when the position was claimed */
  claimTimestamp?: BigNumber;
  /** The quantity of the position */
  qty: PositionStructOutput["qty"];
}

/**
 * Represents a Chromatic position.
 */
export interface IPosition {
  /** The position identifier */
  id: BigNumber;
  /** The version of the oracle when the position was opened */
  openVersion: BigNumber;
  /** The version of the oracle when the position was closed */
  closeVersion: BigNumber;
  /** The quantity of the position */
  qty: BigNumber;
  /** The timestamp when the position was opened */
  openTimestamp: BigNumber;
  /** The timestamp when the position was closed */
  closeTimestamp: BigNumber;
  /** The amount of collateral that a trader must provide */
  takerMargin: BigNumber;
  /** The owner of the position, usually it is the account address of trader */
  owner: string;
  /** The bin margins for the position, it represents the amount of collateral for each bin */
  _binMargins: BinMarginStructOutput[];
  /** The denominator of the protocol's % share of the fees */
  _feeProtocol: number;
  /** The amount of maker's margin */
  makerMargin: BigNumber;
  /** The price of the underlying asset when position was closed. */
  closePrice: BigNumber | undefined;
  /** The price of the underlying asset when position was opened. */
  openPrice: BigNumber | undefined;
  /** The timestamp when the position was claimed */
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
        positions
          .map((position) => [position.openVersion.add(1), position.closeVersion.add(1)])
          .flat()
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
          openPrice: oracleVersionData.find((oracle) =>
            oracle.version?.eq(position.openVersion.add(1))
          )?.price,
          closePrice: position.closeVersion.eq(0)
            ? null
            : oracleVersionData.find((oracle) => oracle.version?.eq(position.closeVersion.add(1)))
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
    const filteredInterests = (await this.getInterestRateRecords(marketAddress))
      .filter((fee) => fee.beginTimestamp.lte(BigNumber.from(to)))
      .sort((a, b) => b.beginTimestamp.sub(a.beginTimestamp).toNumber());

    let totalInterest = BigNumber.from(0);

    for (let fee of filteredInterests) {
      const from = Math.max(fee.beginTimestamp.toNumber(), position.openTimestamp.toNumber());
      const period = to - from;
      to = fee.beginTimestamp.toNumber();

      const x = position.makerMargin;
      const y = fee.annualRateBPS.mul(period);
      let calculatedInterest = x.mul(y).div(denominator);

      if (x.mul(y).mod(denominator).gt(0)) {
        calculatedInterest = calculatedInterest.add(1);
      }

      totalInterest = totalInterest.add(calculatedInterest);
      if (fee.beginTimestamp.lte(position.openTimestamp)) break;
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
    entryPrice: BigNumber,
    exitPrice: BigNumber,
    position: PositionParam,
    options: { includeInterest: boolean } = { includeInterest: true }
  ): Promise<BigNumber> {
    let delta = exitPrice.sub(entryPrice);
    let pnl = position.qty.mul(delta).div(entryPrice);
    if (options.includeInterest) {
      const interest = await this.getInterest(marketAddress, position);
      pnl = pnl.sub(interest);
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
    entryPrice: BigNumber | undefined,
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
    entryPrice: BigNumber,
    position: PositionParam,
    isProfitStop: boolean
  ) {
    const interest = await this.getInterest(marketAddress, position);
    const margin = isProfitStop ? position.makerMargin : position.takerMargin;
    const marginWithInterest = isProfitStop ? margin.add(interest) : margin.sub(interest);
    let delta = entryPrice.mul(marginWithInterest).div(position.qty);
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
    entryPrice: BigNumber | undefined,
    position: PositionParam
  ) {
    if (!entryPrice) return;
    const delta = await this.getDeltaForLiquidation(marketAddress, entryPrice, position, true);
    return entryPrice.add(delta);
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
    entryPrice: BigNumber | undefined,
    position: PositionParam
  ) {
    if (!entryPrice) return;
    const delta = await this.getDeltaForLiquidation(marketAddress, entryPrice, position, false);
    return entryPrice.sub(delta);
  }
}
