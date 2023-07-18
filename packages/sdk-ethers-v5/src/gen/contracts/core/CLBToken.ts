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
} from "../../common";

export interface CLBTokenInterface extends utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "burn(address,uint256,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "description(uint256)": FunctionFragment;
    "exists(uint256)": FunctionFragment;
    "image(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "market()": FunctionFragment;
    "mint(address,uint256,uint256,bytes)": FunctionFragment;
    "name(uint256)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "totalSupply(uint256)": FunctionFragment;
    "totalSupplyBatch(uint256[])": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "balanceOfBatch"
      | "burn"
      | "decimals"
      | "description"
      | "exists"
      | "image"
      | "isApprovedForAll"
      | "market"
      | "mint"
      | "name"
      | "safeBatchTransferFrom"
      | "safeTransferFrom"
      | "setApprovalForAll"
      | "supportsInterface"
      | "totalSupply"
      | "totalSupplyBatch"
      | "uri"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "image", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "market", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "image", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export interface ApprovalForAllEventObject {
  account: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface TransferBatchEventObject {
  operator: string;
  from: string;
  to: string;
  ids: BigNumber[];
  values: BigNumber[];
}
export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  TransferBatchEventObject
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export interface TransferSingleEventObject {
  operator: string;
  from: string;
  to: string;
  id: BigNumber;
  value: BigNumber;
}
export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  TransferSingleEventObject
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export interface URIEventObject {
  value: string;
  id: BigNumber;
}
export type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export interface CLBToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CLBTokenInterface;

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
     * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    /**
     * This function can only be called by the Chromatic Market contract.
     * @param amount The amount of tokens to burn.
     * @param from The address from which to burn tokens.
     * @param id The token ID to burn.
     */
    burn(
      from: string,
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Retrieves the number of decimals used for token amounts.
     */
    decimals(overrides?: CallOverrides): Promise<[number]>;

    /**
     * Retrieves the description of a token.
     * @param id The token ID for which to retrieve the description.
     */
    description(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    /**
     * Indicates whether any token exist with a given id, or not.
     */
    exists(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    /**
     * Retrieves the image URI of a token.
     * @param id The token ID for which to retrieve the image URI.
     */
    image(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    /**
     * See {IERC1155-isApprovedForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    market(overrides?: CallOverrides): Promise<[string]>;

    /**
     * This function can only be called by the Chromatic Market contract.
     * @param amount The amount of tokens to mint.
     * @param data Additional data to pass during the minting process.
     * @param id The token ID to mint.
     * @param to The address to which the minted tokens will be assigned.
     */
    mint(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Retrieves the name of a token.
     * @param id The token ID for which to retrieve the name.
     */
    name(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    /**
     * See {IERC1155-safeBatchTransferFrom}.
     */
    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC1155-safeTransferFrom}.
     */
    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC1155-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Total amount of tokens in with a given id.
     * @param id The token ID for which to retrieve the total supply.
     */
    totalSupply(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Total amounts of tokens in with the given ids.
     * @param ids The token IDs for which to retrieve the total supply.
     */
    totalSupplyBatch(
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    /**
     * Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.
     */
    uri(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  /**
   * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
   */
  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
   */
  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * This function can only be called by the Chromatic Market contract.
   * @param amount The amount of tokens to burn.
   * @param from The address from which to burn tokens.
   * @param id The token ID to burn.
   */
  burn(
    from: string,
    id: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Retrieves the number of decimals used for token amounts.
   */
  decimals(overrides?: CallOverrides): Promise<number>;

  /**
   * Retrieves the description of a token.
   * @param id The token ID for which to retrieve the description.
   */
  description(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * Indicates whether any token exist with a given id, or not.
   */
  exists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  /**
   * Retrieves the image URI of a token.
   * @param id The token ID for which to retrieve the image URI.
   */
  image(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC1155-isApprovedForAll}.
   */
  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  market(overrides?: CallOverrides): Promise<string>;

  /**
   * This function can only be called by the Chromatic Market contract.
   * @param amount The amount of tokens to mint.
   * @param data Additional data to pass during the minting process.
   * @param id The token ID to mint.
   * @param to The address to which the minted tokens will be assigned.
   */
  mint(
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Retrieves the name of a token.
   * @param id The token ID for which to retrieve the name.
   */
  name(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC1155-safeBatchTransferFrom}.
   */
  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC1155-safeTransferFrom}.
   */
  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC1155-setApprovalForAll}.
   */
  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC165-supportsInterface}.
   */
  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Total amount of tokens in with a given id.
   * @param id The token ID for which to retrieve the total supply.
   */
  totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Total amounts of tokens in with the given ids.
   * @param ids The token IDs for which to retrieve the total supply.
   */
  totalSupplyBatch(
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.
   */
  uri(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * This function can only be called by the Chromatic Market contract.
     * @param amount The amount of tokens to burn.
     * @param from The address from which to burn tokens.
     * @param id The token ID to burn.
     */
    burn(
      from: string,
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Retrieves the number of decimals used for token amounts.
     */
    decimals(overrides?: CallOverrides): Promise<number>;

    /**
     * Retrieves the description of a token.
     * @param id The token ID for which to retrieve the description.
     */
    description(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * Indicates whether any token exist with a given id, or not.
     */
    exists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    /**
     * Retrieves the image URI of a token.
     * @param id The token ID for which to retrieve the image URI.
     */
    image(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC1155-isApprovedForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    market(overrides?: CallOverrides): Promise<string>;

    /**
     * This function can only be called by the Chromatic Market contract.
     * @param amount The amount of tokens to mint.
     * @param data Additional data to pass during the minting process.
     * @param id The token ID to mint.
     * @param to The address to which the minted tokens will be assigned.
     */
    mint(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Retrieves the name of a token.
     * @param id The token ID for which to retrieve the name.
     */
    name(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC1155-safeBatchTransferFrom}.
     */
    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC1155-safeTransferFrom}.
     */
    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC1155-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Total amount of tokens in with a given id.
     * @param id The token ID for which to retrieve the total supply.
     */
    totalSupply(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Total amounts of tokens in with the given ids.
     * @param ids The token IDs for which to retrieve the total supply.
     */
    totalSupplyBatch(
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.
     */
    uri(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ApprovalForAll(address,address,bool)"(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;

    "TransferSingle(address,address,address,uint256,uint256)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;

    "URI(string,uint256)"(
      value?: null,
      id?: BigNumberish | null
    ): URIEventFilter;
    URI(value?: null, id?: BigNumberish | null): URIEventFilter;
  };

  estimateGas: {
    /**
     * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * This function can only be called by the Chromatic Market contract.
     * @param amount The amount of tokens to burn.
     * @param from The address from which to burn tokens.
     * @param id The token ID to burn.
     */
    burn(
      from: string,
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Retrieves the number of decimals used for token amounts.
     */
    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Retrieves the description of a token.
     * @param id The token ID for which to retrieve the description.
     */
    description(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Indicates whether any token exist with a given id, or not.
     */
    exists(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Retrieves the image URI of a token.
     * @param id The token ID for which to retrieve the image URI.
     */
    image(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC1155-isApprovedForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    market(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This function can only be called by the Chromatic Market contract.
     * @param amount The amount of tokens to mint.
     * @param data Additional data to pass during the minting process.
     * @param id The token ID to mint.
     * @param to The address to which the minted tokens will be assigned.
     */
    mint(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Retrieves the name of a token.
     * @param id The token ID for which to retrieve the name.
     */
    name(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC1155-safeBatchTransferFrom}.
     */
    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-safeTransferFrom}.
     */
    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Total amount of tokens in with a given id.
     * @param id The token ID for which to retrieve the total supply.
     */
    totalSupply(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Total amounts of tokens in with the given ids.
     * @param ids The token IDs for which to retrieve the total supply.
     */
    totalSupplyBatch(
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.
     */
    uri(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by the Chromatic Market contract.
     * @param amount The amount of tokens to burn.
     * @param from The address from which to burn tokens.
     * @param id The token ID to burn.
     */
    burn(
      from: string,
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the number of decimals used for token amounts.
     */
    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Retrieves the description of a token.
     * @param id The token ID for which to retrieve the description.
     */
    description(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Indicates whether any token exist with a given id, or not.
     */
    exists(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the image URI of a token.
     * @param id The token ID for which to retrieve the image URI.
     */
    image(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-isApprovedForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    market(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by the Chromatic Market contract.
     * @param amount The amount of tokens to mint.
     * @param data Additional data to pass during the minting process.
     * @param id The token ID to mint.
     * @param to The address to which the minted tokens will be assigned.
     */
    mint(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the name of a token.
     * @param id The token ID for which to retrieve the name.
     */
    name(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-safeBatchTransferFrom}.
     */
    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-safeTransferFrom}.
     */
    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Total amount of tokens in with a given id.
     * @param id The token ID for which to retrieve the total supply.
     */
    totalSupply(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Total amounts of tokens in with the given ids.
     * @param ids The token IDs for which to retrieve the total supply.
     */
    totalSupplyBatch(
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.
     */
    uri(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
