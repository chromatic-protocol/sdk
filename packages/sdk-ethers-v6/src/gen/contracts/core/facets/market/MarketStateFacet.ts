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

export interface MarketStateFacetInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "clbToken"
      | "displayMode"
      | "factory"
      | "liquidityMode"
      | "oracleProvider"
      | "positionMode"
      | "protocolFeeRate"
      | "settlementToken"
      | "updateDisplayMode"
      | "updateLiquidityMode"
      | "updatePositionMode"
      | "updateProtocolFeeRate"
      | "vault"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DisplayModeUpdated"
      | "LiquidityModeUpdated"
      | "PositionModeUpdated"
      | "ProtocolFeeRateUpdated"
  ): EventFragment;

  encodeFunctionData(functionFragment: "clbToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "displayMode",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidityMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "settlementToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateDisplayMode",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLiquidityMode",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePositionMode",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProtocolFeeRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(functionFragment: "clbToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "displayMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDisplayMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLiquidityMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePositionMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProtocolFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
}

export namespace DisplayModeUpdatedEvent {
  export type InputTuple = [
    displayModeOld: BigNumberish,
    displayModeNew: BigNumberish
  ];
  export type OutputTuple = [displayModeOld: bigint, displayModeNew: bigint];
  export interface OutputObject {
    displayModeOld: bigint;
    displayModeNew: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidityModeUpdatedEvent {
  export type InputTuple = [
    liquidityModeOld: BigNumberish,
    liquidityModeNew: BigNumberish
  ];
  export type OutputTuple = [
    liquidityModeOld: bigint,
    liquidityModeNew: bigint
  ];
  export interface OutputObject {
    liquidityModeOld: bigint;
    liquidityModeNew: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PositionModeUpdatedEvent {
  export type InputTuple = [
    positionModeOld: BigNumberish,
    positionModeNew: BigNumberish
  ];
  export type OutputTuple = [positionModeOld: bigint, positionModeNew: bigint];
  export interface OutputObject {
    positionModeOld: bigint;
    positionModeNew: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProtocolFeeRateUpdatedEvent {
  export type InputTuple = [
    protocolFeeRateOld: BigNumberish,
    protocolFeeRateNew: BigNumberish
  ];
  export type OutputTuple = [
    protocolFeeRateOld: bigint,
    protocolFeeRateNew: bigint
  ];
  export interface OutputObject {
    protocolFeeRateOld: bigint;
    protocolFeeRateNew: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MarketStateFacet extends BaseContract {
  connect(runner?: ContractRunner | null): MarketStateFacet;
  waitForDeployment(): Promise<this>;

  interface: MarketStateFacetInterface;

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
   * Returns the CLB token contract for the market.
   */
  clbToken: TypedContractMethod<[], [string], "view">;

  /**
   * Returns the display mode
   */
  displayMode: TypedContractMethod<[], [bigint], "view">;

  /**
   * Returns the factory contract for the market.
   */
  factory: TypedContractMethod<[], [string], "view">;

  /**
   * Returns the liquidity mode
   */
  liquidityMode: TypedContractMethod<[], [bigint], "view">;

  /**
   * Returns the oracle provider contract for the market.
   */
  oracleProvider: TypedContractMethod<[], [string], "view">;

  /**
   * Returns the position mode
   */
  positionMode: TypedContractMethod<[], [bigint], "view">;

  /**
   * Returns the protocol fee rate
   */
  protocolFeeRate: TypedContractMethod<[], [bigint], "view">;

  /**
   * Returns the settlement token of the market.
   */
  settlementToken: TypedContractMethod<[], [string], "view">;

  /**
   * Update the new display mode
   * @param _displayMode new display mode for the market
   */
  updateDisplayMode: TypedContractMethod<
    [_displayMode: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Update the new liquidity mode
   * @param _liquidityMode new liquidity mode for the market
   */
  updateLiquidityMode: TypedContractMethod<
    [_liquidityMode: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Update the new position mode
   * @param _positionMode new position mode for the market
   */
  updatePositionMode: TypedContractMethod<
    [_positionMode: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Update the new protocol fee rate
   * @param _protocolFeeRate new protocol fee rate for the market
   */
  updateProtocolFeeRate: TypedContractMethod<
    [_protocolFeeRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Returns the vault contract for the market.
   */
  vault: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "clbToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "displayMode"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "liquidityMode"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "oracleProvider"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "positionMode"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "protocolFeeRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "settlementToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "updateDisplayMode"
  ): TypedContractMethod<[_displayMode: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateLiquidityMode"
  ): TypedContractMethod<[_liquidityMode: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePositionMode"
  ): TypedContractMethod<[_positionMode: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateProtocolFeeRate"
  ): TypedContractMethod<
    [_protocolFeeRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "DisplayModeUpdated"
  ): TypedContractEvent<
    DisplayModeUpdatedEvent.InputTuple,
    DisplayModeUpdatedEvent.OutputTuple,
    DisplayModeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "LiquidityModeUpdated"
  ): TypedContractEvent<
    LiquidityModeUpdatedEvent.InputTuple,
    LiquidityModeUpdatedEvent.OutputTuple,
    LiquidityModeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PositionModeUpdated"
  ): TypedContractEvent<
    PositionModeUpdatedEvent.InputTuple,
    PositionModeUpdatedEvent.OutputTuple,
    PositionModeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ProtocolFeeRateUpdated"
  ): TypedContractEvent<
    ProtocolFeeRateUpdatedEvent.InputTuple,
    ProtocolFeeRateUpdatedEvent.OutputTuple,
    ProtocolFeeRateUpdatedEvent.OutputObject
  >;

  filters: {
    "DisplayModeUpdated(uint8,uint8)": TypedContractEvent<
      DisplayModeUpdatedEvent.InputTuple,
      DisplayModeUpdatedEvent.OutputTuple,
      DisplayModeUpdatedEvent.OutputObject
    >;
    DisplayModeUpdated: TypedContractEvent<
      DisplayModeUpdatedEvent.InputTuple,
      DisplayModeUpdatedEvent.OutputTuple,
      DisplayModeUpdatedEvent.OutputObject
    >;

    "LiquidityModeUpdated(uint8,uint8)": TypedContractEvent<
      LiquidityModeUpdatedEvent.InputTuple,
      LiquidityModeUpdatedEvent.OutputTuple,
      LiquidityModeUpdatedEvent.OutputObject
    >;
    LiquidityModeUpdated: TypedContractEvent<
      LiquidityModeUpdatedEvent.InputTuple,
      LiquidityModeUpdatedEvent.OutputTuple,
      LiquidityModeUpdatedEvent.OutputObject
    >;

    "PositionModeUpdated(uint8,uint8)": TypedContractEvent<
      PositionModeUpdatedEvent.InputTuple,
      PositionModeUpdatedEvent.OutputTuple,
      PositionModeUpdatedEvent.OutputObject
    >;
    PositionModeUpdated: TypedContractEvent<
      PositionModeUpdatedEvent.InputTuple,
      PositionModeUpdatedEvent.OutputTuple,
      PositionModeUpdatedEvent.OutputObject
    >;

    "ProtocolFeeRateUpdated(uint16,uint16)": TypedContractEvent<
      ProtocolFeeRateUpdatedEvent.InputTuple,
      ProtocolFeeRateUpdatedEvent.OutputTuple,
      ProtocolFeeRateUpdatedEvent.OutputObject
    >;
    ProtocolFeeRateUpdated: TypedContractEvent<
      ProtocolFeeRateUpdatedEvent.InputTuple,
      ProtocolFeeRateUpdatedEvent.OutputTuple,
      ProtocolFeeRateUpdatedEvent.OutputObject
    >;
  };
}
