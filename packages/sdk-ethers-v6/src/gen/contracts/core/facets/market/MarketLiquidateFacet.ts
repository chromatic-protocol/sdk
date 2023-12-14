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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

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
  liquidator: AddressLike;
  _protocolFeeRate: BigNumberish;
  _binMargins: BinMarginStruct[];
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
  liquidator: string,
  _protocolFeeRate: bigint,
  _binMargins: BinMarginStructOutput[]
] & {
  id: bigint;
  openVersion: bigint;
  closeVersion: bigint;
  qty: bigint;
  openTimestamp: bigint;
  closeTimestamp: bigint;
  takerMargin: bigint;
  owner: string;
  liquidator: string;
  _protocolFeeRate: bigint;
  _binMargins: BinMarginStructOutput[];
};

export interface MarketLiquidateFacetInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "checkClaimPosition"
      | "checkLiquidation"
      | "claimPosition"
      | "liquidate"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ClaimPositionByKeeper" | "Liquidate"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "checkClaimPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkLiquidation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimPosition",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkClaimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
}

export namespace ClaimPositionByKeeperEvent {
  export type InputTuple = [
    account: AddressLike,
    pnl: BigNumberish,
    interest: BigNumberish,
    usedKeeperFee: BigNumberish,
    position: PositionStruct
  ];
  export type OutputTuple = [
    account: string,
    pnl: bigint,
    interest: bigint,
    usedKeeperFee: bigint,
    position: PositionStructOutput
  ];
  export interface OutputObject {
    account: string;
    pnl: bigint;
    interest: bigint;
    usedKeeperFee: bigint;
    position: PositionStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidateEvent {
  export type InputTuple = [
    account: AddressLike,
    pnl: BigNumberish,
    interest: BigNumberish,
    usedKeeperFee: BigNumberish,
    position: PositionStruct
  ];
  export type OutputTuple = [
    account: string,
    pnl: bigint,
    interest: bigint,
    usedKeeperFee: bigint,
    position: PositionStructOutput
  ];
  export interface OutputObject {
    account: string;
    pnl: bigint;
    interest: bigint;
    usedKeeperFee: bigint;
    position: PositionStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MarketLiquidateFacet extends BaseContract {
  connect(runner?: ContractRunner | null): MarketLiquidateFacet;
  waitForDeployment(): Promise<this>;

  interface: MarketLiquidateFacetInterface;

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
   * Checks if a position is eligible for claim.
   * @param positionId The ID of the position to check.
   */
  checkClaimPosition: TypedContractMethod<
    [positionId: BigNumberish],
    [boolean],
    "view"
  >;

  /**
   * Checks if a position is eligible for liquidation.
   * @param positionId The ID of the position to check.
   */
  checkLiquidation: TypedContractMethod<
    [positionId: BigNumberish],
    [boolean],
    "view"
  >;

  /**
   * This function can only be called by the chromatic liquidator contract.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotClaimablePosition` error if the position's close version is not in the past, indicating that it is not claimable.
   * @param keeper The address of the keeper claiming the position.
   * @param keeperFee The native token amount of the keeper's fee.
   * @param positionId The ID of the position to claim.
   */
  claimPosition: TypedContractMethod<
    [positionId: BigNumberish, keeper: AddressLike, keeperFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * This function can only be called by the chromatic liquidator contract.      The liquidation process checks if the position should be liquidated based on its profitability.      If the position does not meet the liquidation criteria, the function returns without performing any action.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws an `AlreadyClosedPosition` error if the position is already closed.
   * @param keeper The address of the keeper performing the liquidation.
   * @param keeperFee The native token amount of the keeper's fee.
   * @param positionId The ID of the position to liquidate.
   */
  liquidate: TypedContractMethod<
    [positionId: BigNumberish, keeper: AddressLike, keeperFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "checkClaimPosition"
  ): TypedContractMethod<[positionId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "checkLiquidation"
  ): TypedContractMethod<[positionId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "claimPosition"
  ): TypedContractMethod<
    [positionId: BigNumberish, keeper: AddressLike, keeperFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidate"
  ): TypedContractMethod<
    [positionId: BigNumberish, keeper: AddressLike, keeperFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ClaimPositionByKeeper"
  ): TypedContractEvent<
    ClaimPositionByKeeperEvent.InputTuple,
    ClaimPositionByKeeperEvent.OutputTuple,
    ClaimPositionByKeeperEvent.OutputObject
  >;
  getEvent(
    key: "Liquidate"
  ): TypedContractEvent<
    LiquidateEvent.InputTuple,
    LiquidateEvent.OutputTuple,
    LiquidateEvent.OutputObject
  >;

  filters: {
    "ClaimPositionByKeeper(address,int256,uint256,uint256,tuple)": TypedContractEvent<
      ClaimPositionByKeeperEvent.InputTuple,
      ClaimPositionByKeeperEvent.OutputTuple,
      ClaimPositionByKeeperEvent.OutputObject
    >;
    ClaimPositionByKeeper: TypedContractEvent<
      ClaimPositionByKeeperEvent.InputTuple,
      ClaimPositionByKeeperEvent.OutputTuple,
      ClaimPositionByKeeperEvent.OutputObject
    >;

    "Liquidate(address,int256,uint256,uint256,tuple)": TypedContractEvent<
      LiquidateEvent.InputTuple,
      LiquidateEvent.OutputTuple,
      LiquidateEvent.OutputObject
    >;
    Liquidate: TypedContractEvent<
      LiquidateEvent.InputTuple,
      LiquidateEvent.OutputTuple,
      LiquidateEvent.OutputObject
    >;
  };
}
