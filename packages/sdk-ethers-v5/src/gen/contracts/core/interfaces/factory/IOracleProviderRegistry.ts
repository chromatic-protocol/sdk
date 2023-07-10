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
  PromiseOrValue,
} from "../../../../common";

export declare namespace IOracleProviderRegistry {
  export type OracleProviderPropertiesStruct = {
    minStopLossBPS: PromiseOrValue<BigNumberish>;
    maxStopLossBPS: PromiseOrValue<BigNumberish>;
    minTakeProfitBPS: PromiseOrValue<BigNumberish>;
    maxTakeProfitBPS: PromiseOrValue<BigNumberish>;
    leverageLevel: PromiseOrValue<BigNumberish>;
  };

  export type OracleProviderPropertiesStructOutput = [
    number,
    number,
    number,
    number,
    number
  ] & {
    minStopLossBPS: number;
    maxStopLossBPS: number;
    minTakeProfitBPS: number;
    maxTakeProfitBPS: number;
    leverageLevel: number;
  };
}

export interface IOracleProviderRegistryInterface extends utils.Interface {
  functions: {
    "getOracleProviderProperties(address)": FunctionFragment;
    "isRegisteredOracleProvider(address)": FunctionFragment;
    "registerOracleProvider(address,(uint32,uint32,uint32,uint32,uint8))": FunctionFragment;
    "registeredOracleProviders()": FunctionFragment;
    "unregisterOracleProvider(address)": FunctionFragment;
    "updateLeverageLevel(address,uint8)": FunctionFragment;
    "updateStopLossBPSRange(address,uint32,uint32)": FunctionFragment;
    "updateTakeProfitBPSRange(address,uint32,uint32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getOracleProviderProperties"
      | "isRegisteredOracleProvider"
      | "registerOracleProvider"
      | "registeredOracleProviders"
      | "unregisterOracleProvider"
      | "updateLeverageLevel"
      | "updateStopLossBPSRange"
      | "updateTakeProfitBPSRange"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getOracleProviderProperties",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isRegisteredOracleProvider",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerOracleProvider",
    values: [
      PromiseOrValue<string>,
      IOracleProviderRegistry.OracleProviderPropertiesStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registeredOracleProviders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterOracleProvider",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLeverageLevel",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStopLossBPSRange",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTakeProfitBPSRange",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getOracleProviderProperties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRegisteredOracleProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerOracleProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registeredOracleProviders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterOracleProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLeverageLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStopLossBPSRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTakeProfitBPSRange",
    data: BytesLike
  ): Result;

  events: {
    "OracleProviderRegistered(address,tuple)": EventFragment;
    "OracleProviderUnregistered(address)": EventFragment;
    "UpdateLeverageLevel(address,uint8)": EventFragment;
    "UpdateStopLossBPSRange(address,uint32,uint32)": EventFragment;
    "UpdateTakeProfitBPSRange(address,uint32,uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OracleProviderRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleProviderUnregistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateLeverageLevel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateStopLossBPSRange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateTakeProfitBPSRange"): EventFragment;
}

export interface OracleProviderRegisteredEventObject {
  oracleProvider: string;
  properties: IOracleProviderRegistry.OracleProviderPropertiesStructOutput;
}
export type OracleProviderRegisteredEvent = TypedEvent<
  [string, IOracleProviderRegistry.OracleProviderPropertiesStructOutput],
  OracleProviderRegisteredEventObject
>;

export type OracleProviderRegisteredEventFilter =
  TypedEventFilter<OracleProviderRegisteredEvent>;

export interface OracleProviderUnregisteredEventObject {
  oracleProvider: string;
}
export type OracleProviderUnregisteredEvent = TypedEvent<
  [string],
  OracleProviderUnregisteredEventObject
>;

export type OracleProviderUnregisteredEventFilter =
  TypedEventFilter<OracleProviderUnregisteredEvent>;

export interface UpdateLeverageLevelEventObject {
  oracleProvider: string;
  level: number;
}
export type UpdateLeverageLevelEvent = TypedEvent<
  [string, number],
  UpdateLeverageLevelEventObject
>;

export type UpdateLeverageLevelEventFilter =
  TypedEventFilter<UpdateLeverageLevelEvent>;

export interface UpdateStopLossBPSRangeEventObject {
  oracleProvider: string;
  minStopLossBPS: number;
  maxStopLossBPS: number;
}
export type UpdateStopLossBPSRangeEvent = TypedEvent<
  [string, number, number],
  UpdateStopLossBPSRangeEventObject
>;

export type UpdateStopLossBPSRangeEventFilter =
  TypedEventFilter<UpdateStopLossBPSRangeEvent>;

export interface UpdateTakeProfitBPSRangeEventObject {
  oracleProvider: string;
  minTakeProfitBPS: number;
  maxTakeProfitBPS: number;
}
export type UpdateTakeProfitBPSRangeEvent = TypedEvent<
  [string, number, number],
  UpdateTakeProfitBPSRangeEventObject
>;

export type UpdateTakeProfitBPSRangeEventFilter =
  TypedEventFilter<UpdateTakeProfitBPSRangeEvent>;

export interface IOracleProviderRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOracleProviderRegistryInterface;

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
     * Retrieves the properties of an oracle provider.
     * @param oracleProvider The address of the oracle provider.
     */
    getOracleProviderProperties(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IOracleProviderRegistry.OracleProviderPropertiesStructOutput]>;

    /**
     * Checks if an oracle provider is registered.
     * @param oracleProvider The address of the oracle provider to check.
     */
    isRegisteredOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registerOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      properties: IOracleProviderRegistry.OracleProviderPropertiesStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Gets the registered oracle providers.
     */
    registeredOracleProviders(overrides?: CallOverrides): Promise<[string[]]>;

    /**
     * Unregisters an oracle provider.
     * @param oracleProvider The address of the oracle provider to unregister.
     */
    unregisterOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * The level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1.
     * Updates the leverage level of an oracle provider in the registry.
     * @param level The new leverage level to be set for the oracle provider.
     * @param oracleProvider The address of the oracle provider.
     */
    updateLeverageLevel(
      oracleProvider: PromiseOrValue<string>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Updates the stop-loss basis points range of an oracle provider.
     * @param maxStopLossBPS The new maximum stop-loss basis points.
     * @param oracleProvider The address of the oracle provider@param minStopLossBPS The new minimum stop-loss basis points.
     */
    updateStopLossBPSRange(
      oracleProvider: PromiseOrValue<string>,
      minStopLossBPS: PromiseOrValue<BigNumberish>,
      maxStopLossBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Updates the take-profit basis points range of an oracle provider.
     * @param maxTakeProfitBPS The new maximum take-profit basis points.
     * @param minTakeProfitBPS The new minimum take-profit basis points.
     * @param oracleProvider The address of the oracle provider.
     */
    updateTakeProfitBPSRange(
      oracleProvider: PromiseOrValue<string>,
      minTakeProfitBPS: PromiseOrValue<BigNumberish>,
      maxTakeProfitBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Retrieves the properties of an oracle provider.
   * @param oracleProvider The address of the oracle provider.
   */
  getOracleProviderProperties(
    oracleProvider: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IOracleProviderRegistry.OracleProviderPropertiesStructOutput>;

  /**
   * Checks if an oracle provider is registered.
   * @param oracleProvider The address of the oracle provider to check.
   */
  isRegisteredOracleProvider(
    oracleProvider: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  registerOracleProvider(
    oracleProvider: PromiseOrValue<string>,
    properties: IOracleProviderRegistry.OracleProviderPropertiesStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Gets the registered oracle providers.
   */
  registeredOracleProviders(overrides?: CallOverrides): Promise<string[]>;

  /**
   * Unregisters an oracle provider.
   * @param oracleProvider The address of the oracle provider to unregister.
   */
  unregisterOracleProvider(
    oracleProvider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * The level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1.
   * Updates the leverage level of an oracle provider in the registry.
   * @param level The new leverage level to be set for the oracle provider.
   * @param oracleProvider The address of the oracle provider.
   */
  updateLeverageLevel(
    oracleProvider: PromiseOrValue<string>,
    level: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Updates the stop-loss basis points range of an oracle provider.
   * @param maxStopLossBPS The new maximum stop-loss basis points.
   * @param oracleProvider The address of the oracle provider@param minStopLossBPS The new minimum stop-loss basis points.
   */
  updateStopLossBPSRange(
    oracleProvider: PromiseOrValue<string>,
    minStopLossBPS: PromiseOrValue<BigNumberish>,
    maxStopLossBPS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Updates the take-profit basis points range of an oracle provider.
   * @param maxTakeProfitBPS The new maximum take-profit basis points.
   * @param minTakeProfitBPS The new minimum take-profit basis points.
   * @param oracleProvider The address of the oracle provider.
   */
  updateTakeProfitBPSRange(
    oracleProvider: PromiseOrValue<string>,
    minTakeProfitBPS: PromiseOrValue<BigNumberish>,
    maxTakeProfitBPS: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Retrieves the properties of an oracle provider.
     * @param oracleProvider The address of the oracle provider.
     */
    getOracleProviderProperties(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IOracleProviderRegistry.OracleProviderPropertiesStructOutput>;

    /**
     * Checks if an oracle provider is registered.
     * @param oracleProvider The address of the oracle provider to check.
     */
    isRegisteredOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      properties: IOracleProviderRegistry.OracleProviderPropertiesStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Gets the registered oracle providers.
     */
    registeredOracleProviders(overrides?: CallOverrides): Promise<string[]>;

    /**
     * Unregisters an oracle provider.
     * @param oracleProvider The address of the oracle provider to unregister.
     */
    unregisterOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * The level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1.
     * Updates the leverage level of an oracle provider in the registry.
     * @param level The new leverage level to be set for the oracle provider.
     * @param oracleProvider The address of the oracle provider.
     */
    updateLeverageLevel(
      oracleProvider: PromiseOrValue<string>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Updates the stop-loss basis points range of an oracle provider.
     * @param maxStopLossBPS The new maximum stop-loss basis points.
     * @param oracleProvider The address of the oracle provider@param minStopLossBPS The new minimum stop-loss basis points.
     */
    updateStopLossBPSRange(
      oracleProvider: PromiseOrValue<string>,
      minStopLossBPS: PromiseOrValue<BigNumberish>,
      maxStopLossBPS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Updates the take-profit basis points range of an oracle provider.
     * @param maxTakeProfitBPS The new maximum take-profit basis points.
     * @param minTakeProfitBPS The new minimum take-profit basis points.
     * @param oracleProvider The address of the oracle provider.
     */
    updateTakeProfitBPSRange(
      oracleProvider: PromiseOrValue<string>,
      minTakeProfitBPS: PromiseOrValue<BigNumberish>,
      maxTakeProfitBPS: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OracleProviderRegistered(address,tuple)"(
      oracleProvider?: PromiseOrValue<string> | null,
      properties?: null
    ): OracleProviderRegisteredEventFilter;
    OracleProviderRegistered(
      oracleProvider?: PromiseOrValue<string> | null,
      properties?: null
    ): OracleProviderRegisteredEventFilter;

    "OracleProviderUnregistered(address)"(
      oracleProvider?: PromiseOrValue<string> | null
    ): OracleProviderUnregisteredEventFilter;
    OracleProviderUnregistered(
      oracleProvider?: PromiseOrValue<string> | null
    ): OracleProviderUnregisteredEventFilter;

    "UpdateLeverageLevel(address,uint8)"(
      oracleProvider?: PromiseOrValue<string> | null,
      level?: PromiseOrValue<BigNumberish> | null
    ): UpdateLeverageLevelEventFilter;
    UpdateLeverageLevel(
      oracleProvider?: PromiseOrValue<string> | null,
      level?: PromiseOrValue<BigNumberish> | null
    ): UpdateLeverageLevelEventFilter;

    "UpdateStopLossBPSRange(address,uint32,uint32)"(
      oracleProvider?: PromiseOrValue<string> | null,
      minStopLossBPS?: PromiseOrValue<BigNumberish> | null,
      maxStopLossBPS?: PromiseOrValue<BigNumberish> | null
    ): UpdateStopLossBPSRangeEventFilter;
    UpdateStopLossBPSRange(
      oracleProvider?: PromiseOrValue<string> | null,
      minStopLossBPS?: PromiseOrValue<BigNumberish> | null,
      maxStopLossBPS?: PromiseOrValue<BigNumberish> | null
    ): UpdateStopLossBPSRangeEventFilter;

    "UpdateTakeProfitBPSRange(address,uint32,uint32)"(
      oracleProvider?: PromiseOrValue<string> | null,
      minTakeProfitBPS?: PromiseOrValue<BigNumberish> | null,
      maxTakeProfitBPS?: PromiseOrValue<BigNumberish> | null
    ): UpdateTakeProfitBPSRangeEventFilter;
    UpdateTakeProfitBPSRange(
      oracleProvider?: PromiseOrValue<string> | null,
      minTakeProfitBPS?: PromiseOrValue<BigNumberish> | null,
      maxTakeProfitBPS?: PromiseOrValue<BigNumberish> | null
    ): UpdateTakeProfitBPSRangeEventFilter;
  };

  estimateGas: {
    /**
     * Retrieves the properties of an oracle provider.
     * @param oracleProvider The address of the oracle provider.
     */
    getOracleProviderProperties(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Checks if an oracle provider is registered.
     * @param oracleProvider The address of the oracle provider to check.
     */
    isRegisteredOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      properties: IOracleProviderRegistry.OracleProviderPropertiesStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Gets the registered oracle providers.
     */
    registeredOracleProviders(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Unregisters an oracle provider.
     * @param oracleProvider The address of the oracle provider to unregister.
     */
    unregisterOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * The level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1.
     * Updates the leverage level of an oracle provider in the registry.
     * @param level The new leverage level to be set for the oracle provider.
     * @param oracleProvider The address of the oracle provider.
     */
    updateLeverageLevel(
      oracleProvider: PromiseOrValue<string>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Updates the stop-loss basis points range of an oracle provider.
     * @param maxStopLossBPS The new maximum stop-loss basis points.
     * @param oracleProvider The address of the oracle provider@param minStopLossBPS The new minimum stop-loss basis points.
     */
    updateStopLossBPSRange(
      oracleProvider: PromiseOrValue<string>,
      minStopLossBPS: PromiseOrValue<BigNumberish>,
      maxStopLossBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Updates the take-profit basis points range of an oracle provider.
     * @param maxTakeProfitBPS The new maximum take-profit basis points.
     * @param minTakeProfitBPS The new minimum take-profit basis points.
     * @param oracleProvider The address of the oracle provider.
     */
    updateTakeProfitBPSRange(
      oracleProvider: PromiseOrValue<string>,
      minTakeProfitBPS: PromiseOrValue<BigNumberish>,
      maxTakeProfitBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Retrieves the properties of an oracle provider.
     * @param oracleProvider The address of the oracle provider.
     */
    getOracleProviderProperties(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Checks if an oracle provider is registered.
     * @param oracleProvider The address of the oracle provider to check.
     */
    isRegisteredOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      properties: IOracleProviderRegistry.OracleProviderPropertiesStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the registered oracle providers.
     */
    registeredOracleProviders(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Unregisters an oracle provider.
     * @param oracleProvider The address of the oracle provider to unregister.
     */
    unregisterOracleProvider(
      oracleProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * The level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1.
     * Updates the leverage level of an oracle provider in the registry.
     * @param level The new leverage level to be set for the oracle provider.
     * @param oracleProvider The address of the oracle provider.
     */
    updateLeverageLevel(
      oracleProvider: PromiseOrValue<string>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Updates the stop-loss basis points range of an oracle provider.
     * @param maxStopLossBPS The new maximum stop-loss basis points.
     * @param oracleProvider The address of the oracle provider@param minStopLossBPS The new minimum stop-loss basis points.
     */
    updateStopLossBPSRange(
      oracleProvider: PromiseOrValue<string>,
      minStopLossBPS: PromiseOrValue<BigNumberish>,
      maxStopLossBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Updates the take-profit basis points range of an oracle provider.
     * @param maxTakeProfitBPS The new maximum take-profit basis points.
     * @param minTakeProfitBPS The new minimum take-profit basis points.
     * @param oracleProvider The address of the oracle provider.
     */
    updateTakeProfitBPSRange(
      oracleProvider: PromiseOrValue<string>,
      minTakeProfitBPS: PromiseOrValue<BigNumberish>,
      maxTakeProfitBPS: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}