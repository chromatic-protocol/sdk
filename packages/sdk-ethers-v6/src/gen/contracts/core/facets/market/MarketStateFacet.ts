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
      | "factory"
      | "feeProtocol"
      | "keeperFeePayer"
      | "liquidator"
      | "oracleProvider"
      | "setFeeProtocol"
      | "settlementToken"
      | "vault"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "SetFeeProtocol"): EventFragment;

  encodeFunctionData(functionFragment: "clbToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeProtocol",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "keeperFeePayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeProtocol",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settlementToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(functionFragment: "clbToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "keeperFeePayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
}

export namespace SetFeeProtocolEvent {
  export type InputTuple = [
    feeProtocolOld: BigNumberish,
    feeProtocolNew: BigNumberish
  ];
  export type OutputTuple = [feeProtocolOld: bigint, feeProtocolNew: bigint];
  export interface OutputObject {
    feeProtocolOld: bigint;
    feeProtocolNew: bigint;
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
   * Returns the factory contract for the market.
   */
  factory: TypedContractMethod<[], [string], "view">;

  /**
   * Returns the denominator of the protocol's % share of the fees
   */
  feeProtocol: TypedContractMethod<[], [bigint], "view">;

  /**
   * Returns the keeper fee payer contract for the market.
   */
  keeperFeePayer: TypedContractMethod<[], [string], "view">;

  /**
   * Returns the liquidator contract for the market.
   */
  liquidator: TypedContractMethod<[], [string], "view">;

  /**
   * Returns the oracle provider contract for the market.
   */
  oracleProvider: TypedContractMethod<[], [string], "view">;

  /**
   * Set the denominator of the protocol's % share of the fees
   * @param feeProtocol new protocol fee for the market
   */
  setFeeProtocol: TypedContractMethod<
    [_feeProtocol: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Returns the settlement token of the market.
   */
  settlementToken: TypedContractMethod<[], [string], "view">;

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
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeProtocol"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "keeperFeePayer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "liquidator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "oracleProvider"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFeeProtocol"
  ): TypedContractMethod<[_feeProtocol: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "settlementToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "SetFeeProtocol"
  ): TypedContractEvent<
    SetFeeProtocolEvent.InputTuple,
    SetFeeProtocolEvent.OutputTuple,
    SetFeeProtocolEvent.OutputObject
  >;

  filters: {
    "SetFeeProtocol(uint8,uint8)": TypedContractEvent<
      SetFeeProtocolEvent.InputTuple,
      SetFeeProtocolEvent.OutputTuple,
      SetFeeProtocolEvent.OutputObject
    >;
    SetFeeProtocol: TypedContractEvent<
      SetFeeProtocolEvent.InputTuple,
      SetFeeProtocolEvent.OutputTuple,
      SetFeeProtocolEvent.OutputObject
    >;
  };
}
