/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export type LpReceiptStruct = {
  id: BigNumberish;
  oracleVersion: BigNumberish;
  amount: BigNumberish;
  recipient: string;
  action: BigNumberish;
  tradingFeeRate: BigNumberish;
};

export type LpReceiptStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  number,
  number
] & {
  id: BigNumber;
  oracleVersion: BigNumber;
  amount: BigNumber;
  recipient: string;
  action: number;
  tradingFeeRate: number;
};

export declare namespace IMarketLiquidity {
  export type ClaimableLiquidityStruct = {
    mintingTokenAmountRequested: BigNumberish;
    mintingCLBTokenAmount: BigNumberish;
    burningCLBTokenAmountRequested: BigNumberish;
    burningCLBTokenAmount: BigNumberish;
    burningTokenAmount: BigNumberish;
  };

  export type ClaimableLiquidityStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    mintingTokenAmountRequested: BigNumber;
    mintingCLBTokenAmount: BigNumber;
    burningCLBTokenAmountRequested: BigNumber;
    burningCLBTokenAmount: BigNumber;
    burningTokenAmount: BigNumber;
  };

  export type LiquidityBinValueStruct = {
    binValue: BigNumberish;
    clbTokenTotalSupply: BigNumberish;
  };

  export type LiquidityBinValueStructOutput = [BigNumber, BigNumber] & {
    binValue: BigNumber;
    clbTokenTotalSupply: BigNumber;
  };

  export type LiquidityBinStatusStruct = {
    liquidity: BigNumberish;
    freeLiquidity: BigNumberish;
    binValue: BigNumberish;
    tradingFeeRate: BigNumberish;
  };

  export type LiquidityBinStatusStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    number
  ] & {
    liquidity: BigNumber;
    freeLiquidity: BigNumber;
    binValue: BigNumber;
    tradingFeeRate: number;
  };

  export type PendingLiquidityStruct = {
    oracleVersion: BigNumberish;
    mintingTokenAmountRequested: BigNumberish;
    burningCLBTokenAmountRequested: BigNumberish;
  };

  export type PendingLiquidityStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    oracleVersion: BigNumber;
    mintingTokenAmountRequested: BigNumber;
    burningCLBTokenAmountRequested: BigNumber;
  };
}

export interface MarketLiquidityLensFacetInterface extends utils.Interface {
  functions: {
    "claimableLiquidity(int16,uint256)": FunctionFragment;
    "claimableLiquidityBatch(int16[],uint256)": FunctionFragment;
    "getBinFreeLiquidity(int16)": FunctionFragment;
    "getBinLiquidity(int16)": FunctionFragment;
    "getBinValues(int16[])": FunctionFragment;
    "getBinValuesAt(uint256,int16[])": FunctionFragment;
    "getLpReceipt(uint256)": FunctionFragment;
    "getLpReceipts(uint256[])": FunctionFragment;
    "liquidityBinStatuses()": FunctionFragment;
    "pendingLiquidity(int16)": FunctionFragment;
    "pendingLiquidityBatch(int16[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimableLiquidity"
      | "claimableLiquidityBatch"
      | "getBinFreeLiquidity"
      | "getBinLiquidity"
      | "getBinValues"
      | "getBinValuesAt"
      | "getLpReceipt"
      | "getLpReceipts"
      | "liquidityBinStatuses"
      | "pendingLiquidity"
      | "pendingLiquidityBatch"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimableLiquidity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableLiquidityBatch",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBinFreeLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBinLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBinValues",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBinValuesAt",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getLpReceipt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLpReceipts",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBinStatuses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingLiquidityBatch",
    values: [BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimableLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableLiquidityBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBinFreeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBinLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBinValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBinValuesAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLpReceipt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLpReceipts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBinStatuses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingLiquidityBatch",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MarketLiquidityLensFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketLiquidityLensFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    /**
     * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool.
     * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
     */
    claimableLiquidity(
      tradingFeeRate: BigNumberish,
      oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IMarketLiquidity.ClaimableLiquidityStructOutput]>;

    /**
     * Retrieves the claimable liquidity information for multiple trading fee rates and a specific oracle version from the associated LiquidityPool.
     * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
     */
    claimableLiquidityBatch(
      tradingFeeRates: BigNumberish[],
      oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IMarketLiquidity.ClaimableLiquidityStructOutput[]]>;

    /**
     * Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the available liquidity amount.
     */
    getBinFreeLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    /**
     * Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the liquidity amount.
     */
    getBinLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    /**
     * Retrieves the values of a specific trading fee rate's bins in the liquidity pool.      The value of a bin represents the total valuation of the liquidity in the bin.
     * @param tradingFeeRates The list of trading fee rate for which to retrieve the bin value.
     */
    getBinValues(
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { values: BigNumber[] }>;

    /**
     * Retrieves the values of specific trading fee rates' bins in the liquidity pool at a specific oracle version.      The value of a bin represents the total valuation of the liquidity in the bin.
     * @param oracleVersion The oracle version for which to retrieve the bin values.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the bin values.
     */
    getBinValuesAt(
      oracleVersion: BigNumberish,
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [IMarketLiquidity.LiquidityBinValueStructOutput[]] & {
        values: IMarketLiquidity.LiquidityBinValueStructOutput[];
      }
    >;

    /**
     * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     * @param receiptId The ID of the liquidity receipt to retrieve.
     */
    getLpReceipt(
      receiptId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[LpReceiptStructOutput] & { receipt: LpReceiptStructOutput }>;

    /**
     * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     * @param receiptIds The ID list of the liquidity receipt to retrieve.
     */
    getLpReceipts(
      receiptIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [LpReceiptStructOutput[]] & { receipts: LpReceiptStructOutput[] }
    >;

    /**
     * Retrieves the liquidity bin statuses for the caller's liquidity pool.
     */
    liquidityBinStatuses(
      overrides?: CallOverrides
    ): Promise<[IMarketLiquidity.LiquidityBinStatusStructOutput[]]>;

    /**
     * Retrieves the pending liquidity information for a specific trading fee rate from the associated LiquidityPool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
     */
    pendingLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IMarketLiquidity.PendingLiquidityStructOutput]>;

    /**
     * Retrieves the pending liquidity information for multiple trading fee rates from the associated LiquidityPool.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
     */
    pendingLiquidityBatch(
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[IMarketLiquidity.PendingLiquidityStructOutput[]]>;
  };

  /**
   * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool.
   * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
   * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
   */
  claimableLiquidity(
    tradingFeeRate: BigNumberish,
    oracleVersion: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IMarketLiquidity.ClaimableLiquidityStructOutput>;

  /**
   * Retrieves the claimable liquidity information for multiple trading fee rates and a specific oracle version from the associated LiquidityPool.
   * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
   */
  claimableLiquidityBatch(
    tradingFeeRates: BigNumberish[],
    oracleVersion: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IMarketLiquidity.ClaimableLiquidityStructOutput[]>;

  /**
   * Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the available liquidity amount.
   */
  getBinFreeLiquidity(
    tradingFeeRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the liquidity amount.
   */
  getBinLiquidity(
    tradingFeeRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Retrieves the values of a specific trading fee rate's bins in the liquidity pool.      The value of a bin represents the total valuation of the liquidity in the bin.
   * @param tradingFeeRates The list of trading fee rate for which to retrieve the bin value.
   */
  getBinValues(
    tradingFeeRates: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Retrieves the values of specific trading fee rates' bins in the liquidity pool at a specific oracle version.      The value of a bin represents the total valuation of the liquidity in the bin.
   * @param oracleVersion The oracle version for which to retrieve the bin values.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the bin values.
   */
  getBinValuesAt(
    oracleVersion: BigNumberish,
    tradingFeeRates: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<IMarketLiquidity.LiquidityBinValueStructOutput[]>;

  /**
   * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
   * @param receiptId The ID of the liquidity receipt to retrieve.
   */
  getLpReceipt(
    receiptId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<LpReceiptStructOutput>;

  /**
   * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
   * @param receiptIds The ID list of the liquidity receipt to retrieve.
   */
  getLpReceipts(
    receiptIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<LpReceiptStructOutput[]>;

  /**
   * Retrieves the liquidity bin statuses for the caller's liquidity pool.
   */
  liquidityBinStatuses(
    overrides?: CallOverrides
  ): Promise<IMarketLiquidity.LiquidityBinStatusStructOutput[]>;

  /**
   * Retrieves the pending liquidity information for a specific trading fee rate from the associated LiquidityPool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
   */
  pendingLiquidity(
    tradingFeeRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IMarketLiquidity.PendingLiquidityStructOutput>;

  /**
   * Retrieves the pending liquidity information for multiple trading fee rates from the associated LiquidityPool.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
   */
  pendingLiquidityBatch(
    tradingFeeRates: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<IMarketLiquidity.PendingLiquidityStructOutput[]>;

  callStatic: {
    /**
     * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool.
     * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
     */
    claimableLiquidity(
      tradingFeeRate: BigNumberish,
      oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IMarketLiquidity.ClaimableLiquidityStructOutput>;

    /**
     * Retrieves the claimable liquidity information for multiple trading fee rates and a specific oracle version from the associated LiquidityPool.
     * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
     */
    claimableLiquidityBatch(
      tradingFeeRates: BigNumberish[],
      oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IMarketLiquidity.ClaimableLiquidityStructOutput[]>;

    /**
     * Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the available liquidity amount.
     */
    getBinFreeLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the liquidity amount.
     */
    getBinLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the values of a specific trading fee rate's bins in the liquidity pool.      The value of a bin represents the total valuation of the liquidity in the bin.
     * @param tradingFeeRates The list of trading fee rate for which to retrieve the bin value.
     */
    getBinValues(
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Retrieves the values of specific trading fee rates' bins in the liquidity pool at a specific oracle version.      The value of a bin represents the total valuation of the liquidity in the bin.
     * @param oracleVersion The oracle version for which to retrieve the bin values.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the bin values.
     */
    getBinValuesAt(
      oracleVersion: BigNumberish,
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<IMarketLiquidity.LiquidityBinValueStructOutput[]>;

    /**
     * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     * @param receiptId The ID of the liquidity receipt to retrieve.
     */
    getLpReceipt(
      receiptId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<LpReceiptStructOutput>;

    /**
     * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     * @param receiptIds The ID list of the liquidity receipt to retrieve.
     */
    getLpReceipts(
      receiptIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<LpReceiptStructOutput[]>;

    /**
     * Retrieves the liquidity bin statuses for the caller's liquidity pool.
     */
    liquidityBinStatuses(
      overrides?: CallOverrides
    ): Promise<IMarketLiquidity.LiquidityBinStatusStructOutput[]>;

    /**
     * Retrieves the pending liquidity information for a specific trading fee rate from the associated LiquidityPool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
     */
    pendingLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IMarketLiquidity.PendingLiquidityStructOutput>;

    /**
     * Retrieves the pending liquidity information for multiple trading fee rates from the associated LiquidityPool.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
     */
    pendingLiquidityBatch(
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<IMarketLiquidity.PendingLiquidityStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    /**
     * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool.
     * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
     */
    claimableLiquidity(
      tradingFeeRate: BigNumberish,
      oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the claimable liquidity information for multiple trading fee rates and a specific oracle version from the associated LiquidityPool.
     * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
     */
    claimableLiquidityBatch(
      tradingFeeRates: BigNumberish[],
      oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the available liquidity amount.
     */
    getBinFreeLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the liquidity amount.
     */
    getBinLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the values of a specific trading fee rate's bins in the liquidity pool.      The value of a bin represents the total valuation of the liquidity in the bin.
     * @param tradingFeeRates The list of trading fee rate for which to retrieve the bin value.
     */
    getBinValues(
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the values of specific trading fee rates' bins in the liquidity pool at a specific oracle version.      The value of a bin represents the total valuation of the liquidity in the bin.
     * @param oracleVersion The oracle version for which to retrieve the bin values.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the bin values.
     */
    getBinValuesAt(
      oracleVersion: BigNumberish,
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     * @param receiptId The ID of the liquidity receipt to retrieve.
     */
    getLpReceipt(
      receiptId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     * @param receiptIds The ID list of the liquidity receipt to retrieve.
     */
    getLpReceipts(
      receiptIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the liquidity bin statuses for the caller's liquidity pool.
     */
    liquidityBinStatuses(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Retrieves the pending liquidity information for a specific trading fee rate from the associated LiquidityPool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
     */
    pendingLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the pending liquidity information for multiple trading fee rates from the associated LiquidityPool.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
     */
    pendingLiquidityBatch(
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool.
     * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
     */
    claimableLiquidity(
      tradingFeeRate: BigNumberish,
      oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the claimable liquidity information for multiple trading fee rates and a specific oracle version from the associated LiquidityPool.
     * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
     */
    claimableLiquidityBatch(
      tradingFeeRates: BigNumberish[],
      oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the available liquidity amount.
     */
    getBinFreeLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the liquidity amount.
     */
    getBinLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the values of a specific trading fee rate's bins in the liquidity pool.      The value of a bin represents the total valuation of the liquidity in the bin.
     * @param tradingFeeRates The list of trading fee rate for which to retrieve the bin value.
     */
    getBinValues(
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the values of specific trading fee rates' bins in the liquidity pool at a specific oracle version.      The value of a bin represents the total valuation of the liquidity in the bin.
     * @param oracleVersion The oracle version for which to retrieve the bin values.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the bin values.
     */
    getBinValuesAt(
      oracleVersion: BigNumberish,
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     * @param receiptId The ID of the liquidity receipt to retrieve.
     */
    getLpReceipt(
      receiptId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     * @param receiptIds The ID list of the liquidity receipt to retrieve.
     */
    getLpReceipts(
      receiptIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the liquidity bin statuses for the caller's liquidity pool.
     */
    liquidityBinStatuses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the pending liquidity information for a specific trading fee rate from the associated LiquidityPool.
     * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
     */
    pendingLiquidity(
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the pending liquidity information for multiple trading fee rates from the associated LiquidityPool.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
     */
    pendingLiquidityBatch(
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
