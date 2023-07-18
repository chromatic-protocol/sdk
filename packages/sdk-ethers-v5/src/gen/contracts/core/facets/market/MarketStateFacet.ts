/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export interface MarketStateFacetInterface extends utils.Interface {
  functions: {
    "clbToken()": FunctionFragment;
    "factory()": FunctionFragment;
    "feeProtocol()": FunctionFragment;
    "keeperFeePayer()": FunctionFragment;
    "liquidator()": FunctionFragment;
    "oracleProvider()": FunctionFragment;
    "setFeeProtocol(uint8)": FunctionFragment;
    "settlementToken()": FunctionFragment;
    "vault()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
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

  events: {
    "SetFeeProtocol(uint8,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetFeeProtocol"): EventFragment;
}

export interface SetFeeProtocolEventObject {
  feeProtocolOld: number;
  feeProtocolNew: number;
}
export type SetFeeProtocolEvent = TypedEvent<
  [number, number],
  SetFeeProtocolEventObject
>;

export type SetFeeProtocolEventFilter = TypedEventFilter<SetFeeProtocolEvent>;

export interface MarketStateFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketStateFacetInterface;

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
     * Returns the CLB token contract for the market.
     */
    clbToken(overrides?: CallOverrides): Promise<[string] & { _token: string }>;

    /**
     * Returns the factory contract for the market.
     */
    factory(
      overrides?: CallOverrides
    ): Promise<[string] & { _factory: string }>;

    /**
     * Returns the denominator of the protocol's % share of the fees
     */
    feeProtocol(
      overrides?: CallOverrides
    ): Promise<[number] & { _feeProtocol: number }>;

    /**
     * Returns the keeper fee payer contract for the market.
     */
    keeperFeePayer(
      overrides?: CallOverrides
    ): Promise<[string] & { _keeperFeePayer: string }>;

    /**
     * Returns the liquidator contract for the market.
     */
    liquidator(
      overrides?: CallOverrides
    ): Promise<[string] & { _liquidator: string }>;

    /**
     * Returns the oracle provider contract for the market.
     */
    oracleProvider(
      overrides?: CallOverrides
    ): Promise<[string] & { _provider: string }>;

    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol new protocol fee for the market
     */
    setFeeProtocol(
      _feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns the settlement token of the market.
     */
    settlementToken(
      overrides?: CallOverrides
    ): Promise<[string] & { _token: string }>;

    /**
     * Returns the vault contract for the market.
     */
    vault(overrides?: CallOverrides): Promise<[string] & { _vault: string }>;
  };

  /**
   * Returns the CLB token contract for the market.
   */
  clbToken(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the factory contract for the market.
   */
  factory(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the denominator of the protocol's % share of the fees
   */
  feeProtocol(overrides?: CallOverrides): Promise<number>;

  /**
   * Returns the keeper fee payer contract for the market.
   */
  keeperFeePayer(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the liquidator contract for the market.
   */
  liquidator(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the oracle provider contract for the market.
   */
  oracleProvider(overrides?: CallOverrides): Promise<string>;

  /**
   * Set the denominator of the protocol's % share of the fees
   * @param feeProtocol new protocol fee for the market
   */
  setFeeProtocol(
    _feeProtocol: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns the settlement token of the market.
   */
  settlementToken(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the vault contract for the market.
   */
  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     * Returns the CLB token contract for the market.
     */
    clbToken(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the factory contract for the market.
     */
    factory(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the denominator of the protocol's % share of the fees
     */
    feeProtocol(overrides?: CallOverrides): Promise<number>;

    /**
     * Returns the keeper fee payer contract for the market.
     */
    keeperFeePayer(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the liquidator contract for the market.
     */
    liquidator(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the oracle provider contract for the market.
     */
    oracleProvider(overrides?: CallOverrides): Promise<string>;

    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol new protocol fee for the market
     */
    setFeeProtocol(
      _feeProtocol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns the settlement token of the market.
     */
    settlementToken(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the vault contract for the market.
     */
    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "SetFeeProtocol(uint8,uint8)"(
      feeProtocolOld?: null,
      feeProtocolNew?: null
    ): SetFeeProtocolEventFilter;
    SetFeeProtocol(
      feeProtocolOld?: null,
      feeProtocolNew?: null
    ): SetFeeProtocolEventFilter;
  };

  estimateGas: {
    /**
     * Returns the CLB token contract for the market.
     */
    clbToken(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the factory contract for the market.
     */
    factory(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the denominator of the protocol's % share of the fees
     */
    feeProtocol(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the keeper fee payer contract for the market.
     */
    keeperFeePayer(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the liquidator contract for the market.
     */
    liquidator(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the oracle provider contract for the market.
     */
    oracleProvider(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol new protocol fee for the market
     */
    setFeeProtocol(
      _feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns the settlement token of the market.
     */
    settlementToken(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the vault contract for the market.
     */
    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the CLB token contract for the market.
     */
    clbToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the factory contract for the market.
     */
    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the denominator of the protocol's % share of the fees
     */
    feeProtocol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the keeper fee payer contract for the market.
     */
    keeperFeePayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the liquidator contract for the market.
     */
    liquidator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the oracle provider contract for the market.
     */
    oracleProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Set the denominator of the protocol's % share of the fees
     * @param feeProtocol new protocol fee for the market
     */
    setFeeProtocol(
      _feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the settlement token of the market.
     */
    settlementToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the vault contract for the market.
     */
    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
