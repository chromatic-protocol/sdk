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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export declare namespace IOracleProvider {
  export type OracleVersionStruct = {
    version: BigNumberish;
    timestamp: BigNumberish;
    price: BigNumberish;
  };

  export type OracleVersionStructOutput = [BigNumber, BigNumber, BigNumber] & {
    version: BigNumber;
    timestamp: BigNumber;
    price: BigNumber;
  };
}

export interface IOracleProviderInterface extends utils.Interface {
  functions: {
    "atVersion(uint256)": FunctionFragment;
    "currentVersion()": FunctionFragment;
    "description()": FunctionFragment;
    "oracleProviderName()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "sync()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "atVersion"
      | "currentVersion"
      | "description"
      | "oracleProviderName"
      | "supportsInterface"
      | "sync"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "atVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleProviderName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "sync", values?: undefined): string;

  decodeFunctionResult(functionFragment: "atVersion", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleProviderName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;

  events: {};
}

export interface IOracleProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOracleProviderInterface;

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
     * Returns the current oracle version
     * @param version The version of which to lookup
     */
    atVersion(
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IOracleProvider.OracleVersionStructOutput]>;

    /**
     * Returns the current oracle version
     */
    currentVersion(
      overrides?: CallOverrides
    ): Promise<[IOracleProvider.OracleVersionStructOutput]>;

    /**
     * Retrieves the description of the Oracle Provider.
     */
    description(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Retrieves the name of the Oracle Provider.
     */
    oracleProviderName(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * `sync` is expected to be called soon after a phase update occurs in the underlying proxy.      Phase updates should be detected using off-chain mechanism and should trigger a `sync` call      This is feasible in the short term due to how infrequent phase updates are, but phase update      and roundCount detection should eventually be implemented at the contract level.      Reverts if there is more than 1 phase to update in a single sync because we currently cannot      determine the startingRoundId for the intermediary phase.
     * Checks for a new price and updates the internal phase annotation state accordingly
     */
    sync(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  /**
   * Returns the current oracle version
   * @param version The version of which to lookup
   */
  atVersion(
    version: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IOracleProvider.OracleVersionStructOutput>;

  /**
   * Returns the current oracle version
   */
  currentVersion(
    overrides?: CallOverrides
  ): Promise<IOracleProvider.OracleVersionStructOutput>;

  /**
   * Retrieves the description of the Oracle Provider.
   */
  description(overrides?: CallOverrides): Promise<string>;

  /**
   * Retrieves the name of the Oracle Provider.
   */
  oracleProviderName(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
   */
  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * `sync` is expected to be called soon after a phase update occurs in the underlying proxy.      Phase updates should be detected using off-chain mechanism and should trigger a `sync` call      This is feasible in the short term due to how infrequent phase updates are, but phase update      and roundCount detection should eventually be implemented at the contract level.      Reverts if there is more than 1 phase to update in a single sync because we currently cannot      determine the startingRoundId for the intermediary phase.
   * Checks for a new price and updates the internal phase annotation state accordingly
   */
  sync(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Returns the current oracle version
     * @param version The version of which to lookup
     */
    atVersion(
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IOracleProvider.OracleVersionStructOutput>;

    /**
     * Returns the current oracle version
     */
    currentVersion(
      overrides?: CallOverrides
    ): Promise<IOracleProvider.OracleVersionStructOutput>;

    /**
     * Retrieves the description of the Oracle Provider.
     */
    description(overrides?: CallOverrides): Promise<string>;

    /**
     * Retrieves the name of the Oracle Provider.
     */
    oracleProviderName(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * `sync` is expected to be called soon after a phase update occurs in the underlying proxy.      Phase updates should be detected using off-chain mechanism and should trigger a `sync` call      This is feasible in the short term due to how infrequent phase updates are, but phase update      and roundCount detection should eventually be implemented at the contract level.      Reverts if there is more than 1 phase to update in a single sync because we currently cannot      determine the startingRoundId for the intermediary phase.
     * Checks for a new price and updates the internal phase annotation state accordingly
     */
    sync(
      overrides?: CallOverrides
    ): Promise<IOracleProvider.OracleVersionStructOutput>;
  };

  filters: {};

  estimateGas: {
    /**
     * Returns the current oracle version
     * @param version The version of which to lookup
     */
    atVersion(
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the current oracle version
     */
    currentVersion(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Retrieves the description of the Oracle Provider.
     */
    description(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Retrieves the name of the Oracle Provider.
     */
    oracleProviderName(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * `sync` is expected to be called soon after a phase update occurs in the underlying proxy.      Phase updates should be detected using off-chain mechanism and should trigger a `sync` call      This is feasible in the short term due to how infrequent phase updates are, but phase update      and roundCount detection should eventually be implemented at the contract level.      Reverts if there is more than 1 phase to update in a single sync because we currently cannot      determine the startingRoundId for the intermediary phase.
     * Checks for a new price and updates the internal phase annotation state accordingly
     */
    sync(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the current oracle version
     * @param version The version of which to lookup
     */
    atVersion(
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the current oracle version
     */
    currentVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Retrieves the description of the Oracle Provider.
     */
    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Retrieves the name of the Oracle Provider.
     */
    oracleProviderName(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * `sync` is expected to be called soon after a phase update occurs in the underlying proxy.      Phase updates should be detected using off-chain mechanism and should trigger a `sync` call      This is feasible in the short term due to how infrequent phase updates are, but phase update      and roundCount detection should eventually be implemented at the contract level.      Reverts if there is more than 1 phase to update in a single sync because we currently cannot      determine the startingRoundId for the intermediary phase.
     * Checks for a new price and updates the internal phase annotation state accordingly
     */
    sync(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
