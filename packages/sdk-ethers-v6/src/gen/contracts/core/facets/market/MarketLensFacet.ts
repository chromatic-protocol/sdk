/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export type ClaimableLiquidityStruct = {
  mintingTokenAmountRequested: BigNumberish;
  mintingCLBTokenAmount: BigNumberish;
  burningCLBTokenAmountRequested: BigNumberish;
  burningCLBTokenAmount: BigNumberish;
  burningTokenAmount: BigNumberish;
};

export type ClaimableLiquidityStructOutput = [
  mintingTokenAmountRequested: bigint,
  mintingCLBTokenAmount: bigint,
  burningCLBTokenAmountRequested: bigint,
  burningCLBTokenAmount: bigint,
  burningTokenAmount: bigint
] & {
  mintingTokenAmountRequested: bigint;
  mintingCLBTokenAmount: bigint;
  burningCLBTokenAmountRequested: bigint;
  burningCLBTokenAmount: bigint;
  burningTokenAmount: bigint;
};

export type ClosingPositionStruct = {
  closeVersion: BigNumberish;
  totalQty: BigNumberish;
  totalEntryAmount: BigNumberish;
  totalMakerMargin: BigNumberish;
  totalTakerMargin: BigNumberish;
};

export type ClosingPositionStructOutput = [
  closeVersion: bigint,
  totalQty: bigint,
  totalEntryAmount: bigint,
  totalMakerMargin: bigint,
  totalTakerMargin: bigint
] & {
  closeVersion: bigint;
  totalQty: bigint;
  totalEntryAmount: bigint;
  totalMakerMargin: bigint;
  totalTakerMargin: bigint;
};

export type LiquidityBinValueStruct = {
  binValue: BigNumberish;
  clbTokenTotalSupply: BigNumberish;
};

export type LiquidityBinValueStructOutput = [
  binValue: bigint,
  clbTokenTotalSupply: bigint
] & { binValue: bigint; clbTokenTotalSupply: bigint };

export type LpReceiptStruct = {
  id: BigNumberish;
  oracleVersion: BigNumberish;
  amount: BigNumberish;
  recipient: AddressLike;
  action: BigNumberish;
  tradingFeeRate: BigNumberish;
};

export type LpReceiptStructOutput = [
  id: bigint,
  oracleVersion: bigint,
  amount: bigint,
  recipient: string,
  action: bigint,
  tradingFeeRate: bigint
] & {
  id: bigint;
  oracleVersion: bigint;
  amount: bigint;
  recipient: string;
  action: bigint;
  tradingFeeRate: bigint;
};

export type BinMarginStruct = {
  tradingFeeRate: BigNumberish;
  amount: BigNumberish;
};

export type BinMarginStructOutput = [tradingFeeRate: bigint, amount: bigint] & {
  tradingFeeRate: bigint;
  amount: bigint;
};

export type PositionStruct = {
  id: BigNumberish;
  openVersion: BigNumberish;
  closeVersion: BigNumberish;
  qty: BigNumberish;
  openTimestamp: BigNumberish;
  closeTimestamp: BigNumberish;
  takerMargin: BigNumberish;
  owner: AddressLike;
  _binMargins: BinMarginStruct[];
  _feeProtocol: BigNumberish;
};

export type PositionStructOutput = [
  id: bigint,
  openVersion: bigint,
  closeVersion: bigint,
  qty: bigint,
  openTimestamp: bigint,
  closeTimestamp: bigint,
  takerMargin: bigint,
  owner: string,
  _binMargins: BinMarginStructOutput[],
  _feeProtocol: bigint
] & {
  id: bigint;
  openVersion: bigint;
  closeVersion: bigint;
  qty: bigint;
  openTimestamp: bigint;
  closeTimestamp: bigint;
  takerMargin: bigint;
  owner: string;
  _binMargins: BinMarginStructOutput[];
  _feeProtocol: bigint;
};

export type LiquidityBinStatusStruct = {
  liquidity: BigNumberish;
  freeLiquidity: BigNumberish;
  binValue: BigNumberish;
  tradingFeeRate: BigNumberish;
};

export type LiquidityBinStatusStructOutput = [
  liquidity: bigint,
  freeLiquidity: bigint,
  binValue: bigint,
  tradingFeeRate: bigint
] & {
  liquidity: bigint;
  freeLiquidity: bigint;
  binValue: bigint;
  tradingFeeRate: bigint;
};

export type PendingLiquidityStruct = {
  oracleVersion: BigNumberish;
  mintingTokenAmountRequested: BigNumberish;
  burningCLBTokenAmountRequested: BigNumberish;
};

export type PendingLiquidityStructOutput = [
  oracleVersion: bigint,
  mintingTokenAmountRequested: bigint,
  burningCLBTokenAmountRequested: bigint
] & {
  oracleVersion: bigint;
  mintingTokenAmountRequested: bigint;
  burningCLBTokenAmountRequested: bigint;
};

export type PendingPositionStruct = {
  openVersion: BigNumberish;
  totalQty: BigNumberish;
  totalMakerMargin: BigNumberish;
  totalTakerMargin: BigNumberish;
};

export type PendingPositionStructOutput = [
  openVersion: bigint,
  totalQty: bigint,
  totalMakerMargin: bigint,
  totalTakerMargin: bigint
] & {
  openVersion: bigint;
  totalQty: bigint;
  totalMakerMargin: bigint;
  totalTakerMargin: bigint;
};

export interface MarketLensFacetInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimableLiquidity"
      | "claimableLiquidityBatch"
      | "closingPosition"
      | "closingPositionBatch"
      | "getBinFreeLiquidity"
      | "getBinLiquidity"
      | "getBinValues"
      | "getBinValuesAt"
      | "getLpReceipt"
      | "getLpReceipts"
      | "getPosition"
      | "getPositions"
      | "liquidityBinStatuses"
      | "pendingLiquidity"
      | "pendingLiquidityBatch"
      | "pendingPosition"
      | "pendingPositionBatch"
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
    functionFragment: "closingPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closingPositionBatch",
    values: [BigNumberish[]]
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
    functionFragment: "getPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositions",
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
  encodeFunctionData(
    functionFragment: "pendingPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingPositionBatch",
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
    functionFragment: "closingPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closingPositionBatch",
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
    functionFragment: "getPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositions",
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
  decodeFunctionResult(
    functionFragment: "pendingPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingPositionBatch",
    data: BytesLike
  ): Result;
}

export interface MarketLensFacet extends BaseContract {
  connect(runner?: ContractRunner | null): MarketLensFacet;
  waitForDeployment(): Promise<this>;

  interface: MarketLensFacetInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  /**
   * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool.
   * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
   * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
   */
  claimableLiquidity: TypedContractMethod<
    [tradingFeeRate: BigNumberish, oracleVersion: BigNumberish],
    [ClaimableLiquidityStructOutput],
    "view"
  >;

  /**
   * Retrieves the claimable liquidity information for multiple trading fee rates and a specific oracle version from the associated LiquidityPool.
   * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
   */
  claimableLiquidityBatch: TypedContractMethod<
    [tradingFeeRates: BigNumberish[], oracleVersion: BigNumberish],
    [ClaimableLiquidityStructOutput[]],
    "view"
  >;

  /**
   * Retrieves the closing position information for a specific trading fee rate from the associated LiquidityPool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the closing position.
   */
  closingPosition: TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [ClosingPositionStructOutput],
    "view"
  >;

  /**
   * Retrieves the closing position information for multiple trading fee rates from the associated LiquidityPool.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the closing position.
   */
  closingPositionBatch: TypedContractMethod<
    [tradingFeeRates: BigNumberish[]],
    [ClosingPositionStructOutput[]],
    "view"
  >;

  /**
   * Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the available liquidity amount.
   */
  getBinFreeLiquidity: TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [bigint],
    "view"
  >;

  /**
   * Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the liquidity amount.
   */
  getBinLiquidity: TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [bigint],
    "view"
  >;

  /**
   * Retrieves the values of a specific trading fee rate's bins in the liquidity pool.      The value of a bin represents the total valuation of the liquidity in the bin.
   * @param tradingFeeRates The list of trading fee rate for which to retrieve the bin value.
   */
  getBinValues: TypedContractMethod<
    [tradingFeeRates: BigNumberish[]],
    [bigint[]],
    "view"
  >;

  /**
   * Retrieves the values of specific trading fee rates' bins in the liquidity pool at a specific oracle version.      The value of a bin represents the total valuation of the liquidity in the bin.
   * @param oracleVersion The oracle version for which to retrieve the bin values.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the bin values.
   */
  getBinValuesAt: TypedContractMethod<
    [oracleVersion: BigNumberish, tradingFeeRates: BigNumberish[]],
    [LiquidityBinValueStructOutput[]],
    "view"
  >;

  /**
   * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
   * @param receiptId The ID of the liquidity receipt to retrieve.
   */
  getLpReceipt: TypedContractMethod<
    [receiptId: BigNumberish],
    [LpReceiptStructOutput],
    "view"
  >;

  /**
   * Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
   * @param receiptIds The ID list of the liquidity receipt to retrieve.
   */
  getLpReceipts: TypedContractMethod<
    [receiptIds: BigNumberish[]],
    [LpReceiptStructOutput[]],
    "view"
  >;

  /**
   * Throws a `NotExistPosition` error if the position does not exist.
   * @param positionId The ID of the position to retrieve.
   */
  getPosition: TypedContractMethod<
    [positionId: BigNumberish],
    [PositionStructOutput],
    "view"
  >;

  /**
   * Retrieves multiple positions by their IDs.
   * @param positionIds The IDs of the positions to retrieve.
   */
  getPositions: TypedContractMethod<
    [positionIds: BigNumberish[]],
    [PositionStructOutput[]],
    "view"
  >;

  /**
   * Retrieves the liquidity bin statuses for the caller's liquidity pool.
   */
  liquidityBinStatuses: TypedContractMethod<
    [],
    [LiquidityBinStatusStructOutput[]],
    "view"
  >;

  /**
   * Retrieves the pending liquidity information for a specific trading fee rate from the associated LiquidityPool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
   */
  pendingLiquidity: TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [PendingLiquidityStructOutput],
    "view"
  >;

  /**
   * Retrieves the pending liquidity information for multiple trading fee rates from the associated LiquidityPool.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
   */
  pendingLiquidityBatch: TypedContractMethod<
    [tradingFeeRates: BigNumberish[]],
    [PendingLiquidityStructOutput[]],
    "view"
  >;

  /**
   * Retrieves the pending position information for a specific trading fee rate from the associated LiquidityPool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the pending position.
   */
  pendingPosition: TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [PendingPositionStructOutput],
    "view"
  >;

  /**
   * Retrieves the pending position information for multiple trading fee rates from the associated LiquidityPool.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending position.
   */
  pendingPositionBatch: TypedContractMethod<
    [tradingFeeRates: BigNumberish[]],
    [PendingPositionStructOutput[]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimableLiquidity"
  ): TypedContractMethod<
    [tradingFeeRate: BigNumberish, oracleVersion: BigNumberish],
    [ClaimableLiquidityStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "claimableLiquidityBatch"
  ): TypedContractMethod<
    [tradingFeeRates: BigNumberish[], oracleVersion: BigNumberish],
    [ClaimableLiquidityStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "closingPosition"
  ): TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [ClosingPositionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "closingPositionBatch"
  ): TypedContractMethod<
    [tradingFeeRates: BigNumberish[]],
    [ClosingPositionStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBinFreeLiquidity"
  ): TypedContractMethod<[tradingFeeRate: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBinLiquidity"
  ): TypedContractMethod<[tradingFeeRate: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBinValues"
  ): TypedContractMethod<[tradingFeeRates: BigNumberish[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getBinValuesAt"
  ): TypedContractMethod<
    [oracleVersion: BigNumberish, tradingFeeRates: BigNumberish[]],
    [LiquidityBinValueStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLpReceipt"
  ): TypedContractMethod<
    [receiptId: BigNumberish],
    [LpReceiptStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLpReceipts"
  ): TypedContractMethod<
    [receiptIds: BigNumberish[]],
    [LpReceiptStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPosition"
  ): TypedContractMethod<
    [positionId: BigNumberish],
    [PositionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPositions"
  ): TypedContractMethod<
    [positionIds: BigNumberish[]],
    [PositionStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "liquidityBinStatuses"
  ): TypedContractMethod<[], [LiquidityBinStatusStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "pendingLiquidity"
  ): TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [PendingLiquidityStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "pendingLiquidityBatch"
  ): TypedContractMethod<
    [tradingFeeRates: BigNumberish[]],
    [PendingLiquidityStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "pendingPosition"
  ): TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [PendingPositionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "pendingPositionBatch"
  ): TypedContractMethod<
    [tradingFeeRates: BigNumberish[]],
    [PendingPositionStructOutput[]],
    "view"
  >;

  filters: {};
}
