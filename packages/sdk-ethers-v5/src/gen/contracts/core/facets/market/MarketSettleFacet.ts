/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
  PromiseOrValue,
} from "../../../../common";

export interface MarketSettleFacetInterface extends utils.Interface {
  functions: {
    "settle()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "settle"): FunctionFragment;

  encodeFunctionData(functionFragment: "settle", values?: undefined): string;

  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;

  events: {};
}

export interface MarketSettleFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketSettleFacetInterface;

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
     * This function settles the market by synchronizing the oracle version      and calling the settle function of the liquidity pool.
     * Executes the settlement process for the Chromatic market.
     */
    settle(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * This function settles the market by synchronizing the oracle version      and calling the settle function of the liquidity pool.
   * Executes the settlement process for the Chromatic market.
   */
  settle(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * This function settles the market by synchronizing the oracle version      and calling the settle function of the liquidity pool.
     * Executes the settlement process for the Chromatic market.
     */
    settle(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    /**
     * This function settles the market by synchronizing the oracle version      and calling the settle function of the liquidity pool.
     * Executes the settlement process for the Chromatic market.
     */
    settle(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * This function settles the market by synchronizing the oracle version      and calling the settle function of the liquidity pool.
     * Executes the settlement process for the Chromatic market.
     */
    settle(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}