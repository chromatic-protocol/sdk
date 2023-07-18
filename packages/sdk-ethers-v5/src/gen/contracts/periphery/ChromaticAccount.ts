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
} from "../../common";

export type BinMarginStruct = {
  tradingFeeRate: BigNumberish;
  amount: BigNumberish;
};

export type BinMarginStructOutput = [number, BigNumber] & {
  tradingFeeRate: number;
  amount: BigNumber;
};

export type PositionStruct = {
  id: BigNumberish;
  openVersion: BigNumberish;
  closeVersion: BigNumberish;
  qty: BigNumberish;
  leverage: BigNumberish;
  openTimestamp: BigNumberish;
  closeTimestamp: BigNumberish;
  takerMargin: BigNumberish;
  owner: string;
  _binMargins: BinMarginStruct[];
  _feeProtocol: BigNumberish;
};

export type PositionStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  number,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  BinMarginStructOutput[],
  number
] & {
  id: BigNumber;
  openVersion: BigNumber;
  closeVersion: BigNumber;
  qty: BigNumber;
  leverage: number;
  openTimestamp: BigNumber;
  closeTimestamp: BigNumber;
  takerMargin: BigNumber;
  owner: string;
  _binMargins: BinMarginStructOutput[];
  _feeProtocol: number;
};

export interface ChromaticAccountInterface extends utils.Interface {
  functions: {
    "balance(address)": FunctionFragment;
    "claimPosition(address,uint256)": FunctionFragment;
    "claimPositionCallback(uint256,bytes)": FunctionFragment;
    "closePosition(address,uint256)": FunctionFragment;
    "getPositionIds(address)": FunctionFragment;
    "hasPositionId(address,uint256)": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "openPosition(address,int224,uint32,uint256,uint256,uint256)": FunctionFragment;
    "openPositionCallback(address,address,uint256,bytes)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balance"
      | "claimPosition"
      | "claimPositionCallback"
      | "closePosition"
      | "getPositionIds"
      | "hasPositionId"
      | "initialize"
      | "openPosition"
      | "openPositionCallback"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "balance", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimPosition",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimPositionCallback",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionIds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasPositionId",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openPositionCallback",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimPositionCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasPositionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPositionCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface ChromaticAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChromaticAccountInterface;

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
     * Returns the balance of the specified token for the account.
     * @param token The address of the token.
     */
    balance(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
     * Claims the specified position in the specified market.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position to claim.
     */
    claimPosition(
      marketAddress: string,
      positionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Callback function called after claiming a position.
     * @param data Additional data related to the callback.
     * @param positionId The ID of the claimed position.
     */
    claimPositionCallback(
      positionId: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
     * Closes the specified position in the specified market.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position to close.
     */
    closePosition(
      marketAddress: string,
      positionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Retrieves an array of position IDs owned by this account for the specified market.
     * @param marketAddress The address of the market.
     */
    getPositionIds(
      market: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    /**
     * Checks if the specified market has the specified position ID.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position.
     */
    hasPositionId(
      market: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Throws an `AlreadyInitialized` error if the account has already been initialized.
     * Initializes the account with the specified owner, router, and market factory addresses.
     * @param _marketFactory The address of the market factory contract.
     * @param _owner The address of the account owner.
     * @param _router The address of the router contract.
     */
    initialize(
      _owner: string,
      _router: string,
      _marketFactory: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * This function can only be called by the chromatic router contract.
     * Opens a new position in the specified market.
     * @param leverage The leverage of the position.
     * @param makerMargin The margin required for the maker.
     * @param marketAddress The address of the market.
     * @param maxAllowableTradingFee The maximum allowable trading fee.
     * @param qty The quantity of the position.
     * @param takerMargin The margin required for the taker.
     */
    openPosition(
      marketAddress: string,
      qty: BigNumberish,
      leverage: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Transfers the required margin from the account to the specified vault.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the settlement token.
     * Callback function called after opening a position.
     * @param data Additional data related to the callback.
     * @param marginRequired The amount of margin required for the position.
     * @param settlementToken The address of the settlement token used in the position.
     * @param vault The address of the vault contract.
     */
    openPositionCallback(
      settlementToken: string,
      vault: string,
      marginRequired: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * This function can only be called by owner.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the specified token.
     * Withdraws the specified amount of tokens from the account.
     * @param amount The amount of tokens to withdraw.
     * @param token The address of the token to withdraw.
     */
    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  /**
   * Returns the balance of the specified token for the account.
   * @param token The address of the token.
   */
  balance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
   * Claims the specified position in the specified market.
   * @param marketAddress The address of the market.
   * @param positionId The ID of the position to claim.
   */
  claimPosition(
    marketAddress: string,
    positionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Callback function called after claiming a position.
   * @param data Additional data related to the callback.
   * @param positionId The ID of the claimed position.
   */
  claimPositionCallback(
    positionId: BigNumberish,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
   * Closes the specified position in the specified market.
   * @param marketAddress The address of the market.
   * @param positionId The ID of the position to close.
   */
  closePosition(
    marketAddress: string,
    positionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Retrieves an array of position IDs owned by this account for the specified market.
   * @param marketAddress The address of the market.
   */
  getPositionIds(
    market: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Checks if the specified market has the specified position ID.
   * @param marketAddress The address of the market.
   * @param positionId The ID of the position.
   */
  hasPositionId(
    market: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Throws an `AlreadyInitialized` error if the account has already been initialized.
   * Initializes the account with the specified owner, router, and market factory addresses.
   * @param _marketFactory The address of the market factory contract.
   * @param _owner The address of the account owner.
   * @param _router The address of the router contract.
   */
  initialize(
    _owner: string,
    _router: string,
    _marketFactory: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * This function can only be called by the chromatic router contract.
   * Opens a new position in the specified market.
   * @param leverage The leverage of the position.
   * @param makerMargin The margin required for the maker.
   * @param marketAddress The address of the market.
   * @param maxAllowableTradingFee The maximum allowable trading fee.
   * @param qty The quantity of the position.
   * @param takerMargin The margin required for the taker.
   */
  openPosition(
    marketAddress: string,
    qty: BigNumberish,
    leverage: BigNumberish,
    takerMargin: BigNumberish,
    makerMargin: BigNumberish,
    maxAllowableTradingFee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Transfers the required margin from the account to the specified vault.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the settlement token.
   * Callback function called after opening a position.
   * @param data Additional data related to the callback.
   * @param marginRequired The amount of margin required for the position.
   * @param settlementToken The address of the settlement token used in the position.
   * @param vault The address of the vault contract.
   */
  openPositionCallback(
    settlementToken: string,
    vault: string,
    marginRequired: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * This function can only be called by owner.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the specified token.
   * Withdraws the specified amount of tokens from the account.
   * @param amount The amount of tokens to withdraw.
   * @param token The address of the token to withdraw.
   */
  withdraw(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Returns the balance of the specified token for the account.
     * @param token The address of the token.
     */
    balance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
     * Claims the specified position in the specified market.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position to claim.
     */
    claimPosition(
      marketAddress: string,
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Callback function called after claiming a position.
     * @param data Additional data related to the callback.
     * @param positionId The ID of the claimed position.
     */
    claimPositionCallback(
      positionId: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
     * Closes the specified position in the specified market.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position to close.
     */
    closePosition(
      marketAddress: string,
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Retrieves an array of position IDs owned by this account for the specified market.
     * @param marketAddress The address of the market.
     */
    getPositionIds(
      market: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Checks if the specified market has the specified position ID.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position.
     */
    hasPositionId(
      market: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Throws an `AlreadyInitialized` error if the account has already been initialized.
     * Initializes the account with the specified owner, router, and market factory addresses.
     * @param _marketFactory The address of the market factory contract.
     * @param _owner The address of the account owner.
     * @param _router The address of the router contract.
     */
    initialize(
      _owner: string,
      _router: string,
      _marketFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * This function can only be called by the chromatic router contract.
     * Opens a new position in the specified market.
     * @param leverage The leverage of the position.
     * @param makerMargin The margin required for the maker.
     * @param marketAddress The address of the market.
     * @param maxAllowableTradingFee The maximum allowable trading fee.
     * @param qty The quantity of the position.
     * @param takerMargin The margin required for the taker.
     */
    openPosition(
      marketAddress: string,
      qty: BigNumberish,
      leverage: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PositionStructOutput>;

    /**
     * Transfers the required margin from the account to the specified vault.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the settlement token.
     * Callback function called after opening a position.
     * @param data Additional data related to the callback.
     * @param marginRequired The amount of margin required for the position.
     * @param settlementToken The address of the settlement token used in the position.
     * @param vault The address of the vault contract.
     */
    openPositionCallback(
      settlementToken: string,
      vault: string,
      marginRequired: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * This function can only be called by owner.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the specified token.
     * Withdraws the specified amount of tokens from the account.
     * @param amount The amount of tokens to withdraw.
     * @param token The address of the token to withdraw.
     */
    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    /**
     * Returns the balance of the specified token for the account.
     * @param token The address of the token.
     */
    balance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
     * Claims the specified position in the specified market.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position to claim.
     */
    claimPosition(
      marketAddress: string,
      positionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Callback function called after claiming a position.
     * @param data Additional data related to the callback.
     * @param positionId The ID of the claimed position.
     */
    claimPositionCallback(
      positionId: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
     * Closes the specified position in the specified market.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position to close.
     */
    closePosition(
      marketAddress: string,
      positionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Retrieves an array of position IDs owned by this account for the specified market.
     * @param marketAddress The address of the market.
     */
    getPositionIds(
      market: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Checks if the specified market has the specified position ID.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position.
     */
    hasPositionId(
      market: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Throws an `AlreadyInitialized` error if the account has already been initialized.
     * Initializes the account with the specified owner, router, and market factory addresses.
     * @param _marketFactory The address of the market factory contract.
     * @param _owner The address of the account owner.
     * @param _router The address of the router contract.
     */
    initialize(
      _owner: string,
      _router: string,
      _marketFactory: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * This function can only be called by the chromatic router contract.
     * Opens a new position in the specified market.
     * @param leverage The leverage of the position.
     * @param makerMargin The margin required for the maker.
     * @param marketAddress The address of the market.
     * @param maxAllowableTradingFee The maximum allowable trading fee.
     * @param qty The quantity of the position.
     * @param takerMargin The margin required for the taker.
     */
    openPosition(
      marketAddress: string,
      qty: BigNumberish,
      leverage: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Transfers the required margin from the account to the specified vault.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the settlement token.
     * Callback function called after opening a position.
     * @param data Additional data related to the callback.
     * @param marginRequired The amount of margin required for the position.
     * @param settlementToken The address of the settlement token used in the position.
     * @param vault The address of the vault contract.
     */
    openPositionCallback(
      settlementToken: string,
      vault: string,
      marginRequired: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * This function can only be called by owner.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the specified token.
     * Withdraws the specified amount of tokens from the account.
     * @param amount The amount of tokens to withdraw.
     * @param token The address of the token to withdraw.
     */
    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the balance of the specified token for the account.
     * @param token The address of the token.
     */
    balance(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
     * Claims the specified position in the specified market.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position to claim.
     */
    claimPosition(
      marketAddress: string,
      positionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Callback function called after claiming a position.
     * @param data Additional data related to the callback.
     * @param positionId The ID of the claimed position.
     */
    claimPositionCallback(
      positionId: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by the chromatic router contract.      Throws a `NotExistPosition` error if the position does not exist.
     * Closes the specified position in the specified market.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position to close.
     */
    closePosition(
      marketAddress: string,
      positionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves an array of position IDs owned by this account for the specified market.
     * @param marketAddress The address of the market.
     */
    getPositionIds(
      market: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Checks if the specified market has the specified position ID.
     * @param marketAddress The address of the market.
     * @param positionId The ID of the position.
     */
    hasPositionId(
      market: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Throws an `AlreadyInitialized` error if the account has already been initialized.
     * Initializes the account with the specified owner, router, and market factory addresses.
     * @param _marketFactory The address of the market factory contract.
     * @param _owner The address of the account owner.
     * @param _router The address of the router contract.
     */
    initialize(
      _owner: string,
      _router: string,
      _marketFactory: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by the chromatic router contract.
     * Opens a new position in the specified market.
     * @param leverage The leverage of the position.
     * @param makerMargin The margin required for the maker.
     * @param marketAddress The address of the market.
     * @param maxAllowableTradingFee The maximum allowable trading fee.
     * @param qty The quantity of the position.
     * @param takerMargin The margin required for the taker.
     */
    openPosition(
      marketAddress: string,
      qty: BigNumberish,
      leverage: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers the required margin from the account to the specified vault.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the settlement token.
     * Callback function called after opening a position.
     * @param data Additional data related to the callback.
     * @param marginRequired The amount of margin required for the position.
     * @param settlementToken The address of the settlement token used in the position.
     * @param vault The address of the vault contract.
     */
    openPositionCallback(
      settlementToken: string,
      vault: string,
      marginRequired: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by owner.      Throws a `NotEnoughBalance` error if the account does not have enough balance of the specified token.
     * Withdraws the specified amount of tokens from the account.
     * @param amount The amount of tokens to withdraw.
     * @param token The address of the token to withdraw.
     */
    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
