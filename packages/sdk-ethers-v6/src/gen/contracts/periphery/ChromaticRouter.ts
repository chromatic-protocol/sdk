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
} from "../../common";

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

export type OpenPositionInfoStruct = {
  id: BigNumberish;
  openVersion: BigNumberish;
  qty: BigNumberish;
  openTimestamp: BigNumberish;
  takerMargin: BigNumberish;
  makerMargin: BigNumberish;
  tradingFee: BigNumberish;
};

export type OpenPositionInfoStructOutput = [
  id: bigint,
  openVersion: bigint,
  qty: bigint,
  openTimestamp: bigint,
  takerMargin: bigint,
  makerMargin: bigint,
  tradingFee: bigint
] & {
  id: bigint;
  openVersion: bigint;
  qty: bigint;
  openTimestamp: bigint;
  takerMargin: bigint;
  makerMargin: bigint;
  tradingFee: bigint;
};

export interface ChromaticRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accountBase"
      | "addLiquidity"
      | "addLiquidityBatch"
      | "addLiquidityBatchCallback"
      | "addLiquidityCallback"
      | "claimLiquidity"
      | "claimLiquidityBatch"
      | "claimLiquidityBatchCallback"
      | "claimLiquidityCallback"
      | "claimPosition"
      | "closePosition"
      | "createAccount"
      | "getAccount"
      | "getLpReceiptIds(address,address)"
      | "getLpReceiptIds(address)"
      | "openPosition"
      | "removeLiquidity"
      | "removeLiquidityBatch"
      | "removeLiquidityBatchCallback"
      | "removeLiquidityCallback"
      | "withdrawLiquidity"
      | "withdrawLiquidityBatch"
      | "withdrawLiquidityBatchCallback"
      | "withdrawLiquidityCallback"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AccountCreated" | "OpenPosition"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accountBase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityBatch",
    values: [AddressLike, AddressLike, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityBatchCallback",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityCallback",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimLiquidity",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimLiquidityBatch",
    values: [AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimLiquidityBatchCallback",
    values: [
      BigNumberish[],
      BigNumberish[],
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimLiquidityCallback",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimPosition",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLpReceiptIds(address,address)",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLpReceiptIds(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityBatch",
    values: [AddressLike, AddressLike, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityBatchCallback",
    values: [AddressLike, BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityCallback",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLiquidity",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLiquidityBatch",
    values: [AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLiquidityBatchCallback",
    values: [
      BigNumberish[],
      BigNumberish[],
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLiquidityCallback",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityBatchCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimLiquidityBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimLiquidityBatchCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimLiquidityCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAccount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLpReceiptIds(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLpReceiptIds(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityBatchCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLiquidityBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLiquidityBatchCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLiquidityCallback",
    data: BytesLike
  ): Result;
}

export namespace AccountCreatedEvent {
  export type InputTuple = [account: AddressLike, owner: AddressLike];
  export type OutputTuple = [account: string, owner: string];
  export interface OutputObject {
    account: string;
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OpenPositionEvent {
  export type InputTuple = [
    marketAddress: AddressLike,
    trader: AddressLike,
    account: AddressLike,
    tradingFee: BigNumberish,
    tradingFeeUSD: BigNumberish
  ];
  export type OutputTuple = [
    marketAddress: string,
    trader: string,
    account: string,
    tradingFee: bigint,
    tradingFeeUSD: bigint
  ];
  export interface OutputObject {
    marketAddress: string;
    trader: string;
    account: string;
    tradingFee: bigint;
    tradingFeeUSD: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ChromaticRouter extends BaseContract {
  connect(runner?: ContractRunner | null): ChromaticRouter;
  waitForDeployment(): Promise<this>;

  interface: ChromaticRouterInterface;

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

  accountBase: TypedContractMethod<[], [string], "view">;

  /**
   * Adds liquidity to a ChromaticMarket contract.
   * @param amount The amount to add as liquidity.
   * @param feeRate The fee rate of the liquidity bin.
   * @param market The address of the ChromaticMarket contract.
   * @param recipient The recipient address.
   */
  addLiquidity: TypedContractMethod<
    [
      market: AddressLike,
      feeRate: BigNumberish,
      amount: BigNumberish,
      recipient: AddressLike
    ],
    [LpReceiptStructOutput],
    "nonpayable"
  >;

  /**
   * Adds liquidity to multiple liquidity bins of ChromaticMarket contract in a batch.
   * @param amounts An array of amounts to add as liquidity for each bin.
   * @param feeRates An array of fee rates for each liquidity bin.
   * @param market The address of the ChromaticMarket contract.
   * @param recipient The address of the recipient for each liquidity bin.
   */
  addLiquidityBatch: TypedContractMethod<
    [
      market: AddressLike,
      recipient: AddressLike,
      feeRates: BigNumberish[],
      amounts: BigNumberish[]
    ],
    [LpReceiptStructOutput[]],
    "nonpayable"
  >;

  /**
   * Handles the callback after adding liquidity to the Chromatic protocol.
   * @param data Additional data associated with the liquidity addition.
   * @param settlementToken The address of the settlement token used for adding liquidity.
   * @param vault The address of the vault where the liquidity is added.
   */
  addLiquidityBatchCallback: TypedContractMethod<
    [settlementToken: AddressLike, vault: AddressLike, data: BytesLike],
    [void],
    "nonpayable"
  >;

  /**
   * Handles the callback after adding liquidity to the Chromatic protocol.
   * @param data Additional data associated with the liquidity addition.
   * @param settlementToken The address of the settlement token used for adding liquidity.
   * @param vault The address of the vault where the liquidity is added.
   */
  addLiquidityCallback: TypedContractMethod<
    [settlementToken: AddressLike, vault: AddressLike, data: BytesLike],
    [void],
    "nonpayable"
  >;

  /**
   * This function allows the liquidity provider to claim their liquidity by calling the `claimLiquidity` function in the specified market contract.
   * Claims liquidity from a ChromaticMarket contract.
   * @param market The address of the ChromaticMarket contract.
   * @param receiptId The ID of the LP receipt.
   */
  claimLiquidity: TypedContractMethod<
    [market: AddressLike, receiptId: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Claims liquidity from multiple ChromaticMarket contracts in a batch.
   * @param market The address of the ChromaticMarket contract.
   * @param receiptIds An array of LP receipt IDs to claim liquidity from.
   */
  claimLiquidityBatch: TypedContractMethod<
    [market: AddressLike, _receiptIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  /**
   * Handles the callback after claiming liquidity from the Chromatic protocol.
   * @param data Additional data associated with the liquidity claim.
   * @param depositedAmounts The array of deposited liquidity amounts for each receipt in the batch.
   * @param feeRates The array of trading fee rates associated with each claim in the batch.
   * @param mintedCLBTokenAmounts The array of CLB token amounts minted for each receipt in the batch.
   * @param receiptIds The array of the liquidity receipt IDs.
   */
  claimLiquidityBatchCallback: TypedContractMethod<
    [
      _receiptIds: BigNumberish[],
      arg1: BigNumberish[],
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  /**
   * Handles the callback after claiming liquidity from the Chromatic protocol.
   * @param data Additional data associated with the liquidity claim.
   * @param depositedAmount The amount of liquidity deposited.
   * @param feeRate The trading fee rate associated with the liquidity claim.
   * @param mintedCLBTokenAmount The amount of CLB tokens minted as liquidity.
   * @param receiptId The ID of the liquidity claim receipt.
   */
  claimLiquidityCallback: TypedContractMethod<
    [
      receiptId: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  /**
   * Claims a position from a ChromaticMarket contract.
   * @param market The address of the ChromaticMarket contract.
   * @param positionId The ID of the position to claim.
   */
  claimPosition: TypedContractMethod<
    [market: AddressLike, positionId: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Closes a position in a ChromaticMarket contract.
   * @param market The address of the ChromaticMarket contract.
   * @param positionId The ID of the position to close.
   */
  closePosition: TypedContractMethod<
    [market: AddressLike, positionId: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Only one account can be created per user.      Emits an `AccountCreated` event upon successful creation.
   * Creates a new user account.
   */
  createAccount: TypedContractMethod<[], [void], "nonpayable">;

  /**
   * Retrieves the account of the caller.
   */
  getAccount: TypedContractMethod<[], [string], "view">;

  /**
   * Get the LP receipt IDs associated with a specific market and owner.
   * @param market The address of the ChromaticMarket contract.
   * @param owner The address of the owner.
   */
  "getLpReceiptIds(address,address)": TypedContractMethod<
    [market: AddressLike, owner: AddressLike],
    [bigint[]],
    "view"
  >;

  /**
   * Retrieves the LP receipt IDs of the caller for the specified market.
   * @param market The address of the ChromaticMarket contract.
   */
  "getLpReceiptIds(address)": TypedContractMethod<
    [market: AddressLike],
    [bigint[]],
    "view"
  >;

  /**
   * Opens a new position in a ChromaticMarket contract.
   * @param makerMargin The margin amount for the maker.
   * @param market The address of the ChromaticMarket contract.
   * @param maxAllowableTradingFee The maximum allowable trading fee.
   * @param qty The quantity of the position.
   * @param takerMargin The margin amount for the taker.
   */
  openPosition: TypedContractMethod<
    [
      market: AddressLike,
      qty: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish
    ],
    [OpenPositionInfoStructOutput],
    "nonpayable"
  >;

  /**
   * Removes liquidity from a ChromaticMarket contract.
   * @param clbTokenAmount The amount of CLB tokens to remove as liquidity.
   * @param feeRate The fee rate of the liquidity bin.
   * @param market The address of the ChromaticMarket contract.
   * @param recipient The recipient address.
   */
  removeLiquidity: TypedContractMethod<
    [
      market: AddressLike,
      feeRate: BigNumberish,
      clbTokenAmount: BigNumberish,
      recipient: AddressLike
    ],
    [LpReceiptStructOutput],
    "nonpayable"
  >;

  /**
   * Removes liquidity from multiple ChromaticMarket contracts in a batch.
   * @param clbTokenAmounts An array of CLB token amounts to remove as liquidity for each bin.
   * @param feeRates An array of fee rates for each liquidity bin.
   * @param market The address of the ChromaticMarket contract.
   * @param recipient The address of the recipient for each liquidity bin.
   */
  removeLiquidityBatch: TypedContractMethod<
    [
      market: AddressLike,
      recipient: AddressLike,
      feeRates: BigNumberish[],
      clbTokenAmounts: BigNumberish[]
    ],
    [LpReceiptStructOutput[]],
    "nonpayable"
  >;

  /**
   * Handles the callback after removing liquidity from the Chromatic protocol.
   * @param clbToken The address of the Chromatic liquidity token.
   * @param clbTokenIds The array of the Chromatic liquidity token IDs to be removed.
   * @param data Additional data associated with the liquidity removal.
   */
  removeLiquidityBatchCallback: TypedContractMethod<
    [clbToken: AddressLike, clbTokenIds: BigNumberish[], data: BytesLike],
    [void],
    "nonpayable"
  >;

  /**
   * Handles the callback after removing liquidity from the Chromatic protocol.
   * @param clbToken The address of the Chromatic liquidity token.
   * @param clbTokenId The ID of the Chromatic liquidity token to be removed.
   * @param data Additional data associated with the liquidity removal.
   */
  removeLiquidityCallback: TypedContractMethod<
    [clbToken: AddressLike, clbTokenId: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  /**
   * This function allows the liquidity provider to withdraw their liquidity by calling the `withdrawLiquidity` function in the specified market contract.
   * Withdraws liquidity from a ChromaticMarket contract.
   * @param market The address of the ChromaticMarket contract.
   * @param receiptId The ID of the LP receipt.
   */
  withdrawLiquidity: TypedContractMethod<
    [market: AddressLike, receiptId: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Withdraws liquidity from multiple ChromaticMarket contracts in a batch.
   * @param market The address of the ChromaticMarket contract.
   * @param receiptIds An array of LP receipt IDs to withdraw liquidity from.
   */
  withdrawLiquidityBatch: TypedContractMethod<
    [market: AddressLike, _receiptIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  /**
   * Handles the callback after withdrawing liquidity from the Chromatic protocol.
   * @param burnedCLBTokenAmounts The array of CLB token amounts burned for each receipt in the batch.
   * @param data Additional data associated with the liquidity withdrawal.
   * @param feeRates The array of trading fee rates associated with each withdrawal in the batch.
   * @param receiptIds The array of the liquidity receipt IDs.
   * @param withdrawnAmounts The array of withdrawn liquidity amounts for each receipt in the batch.
   */
  withdrawLiquidityBatchCallback: TypedContractMethod<
    [
      _receiptIds: BigNumberish[],
      arg1: BigNumberish[],
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  /**
   * Handles the callback after withdrawing liquidity from the Chromatic protocol.
   * @param burnedCLBTokenAmount The amount of CLB tokens burned during the withdrawal.
   * @param data Additional data associated with the liquidity withdrawal.
   * @param feeRate The trading fee rate associated with the liquidity withdrawal.
   * @param receiptId The ID of the liquidity withdrawal receipt.
   * @param withdrawnAmount The amount of liquidity that has been withdrawn.
   */
  withdrawLiquidityCallback: TypedContractMethod<
    [
      receiptId: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accountBase"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [
      market: AddressLike,
      feeRate: BigNumberish,
      amount: BigNumberish,
      recipient: AddressLike
    ],
    [LpReceiptStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addLiquidityBatch"
  ): TypedContractMethod<
    [
      market: AddressLike,
      recipient: AddressLike,
      feeRates: BigNumberish[],
      amounts: BigNumberish[]
    ],
    [LpReceiptStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addLiquidityBatchCallback"
  ): TypedContractMethod<
    [settlementToken: AddressLike, vault: AddressLike, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addLiquidityCallback"
  ): TypedContractMethod<
    [settlementToken: AddressLike, vault: AddressLike, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimLiquidity"
  ): TypedContractMethod<
    [market: AddressLike, receiptId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimLiquidityBatch"
  ): TypedContractMethod<
    [market: AddressLike, _receiptIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimLiquidityBatchCallback"
  ): TypedContractMethod<
    [
      _receiptIds: BigNumberish[],
      arg1: BigNumberish[],
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimLiquidityCallback"
  ): TypedContractMethod<
    [
      receiptId: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimPosition"
  ): TypedContractMethod<
    [market: AddressLike, positionId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "closePosition"
  ): TypedContractMethod<
    [market: AddressLike, positionId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createAccount"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAccount"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getLpReceiptIds(address,address)"
  ): TypedContractMethod<
    [market: AddressLike, owner: AddressLike],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLpReceiptIds(address)"
  ): TypedContractMethod<[market: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "openPosition"
  ): TypedContractMethod<
    [
      market: AddressLike,
      qty: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish
    ],
    [OpenPositionInfoStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [
      market: AddressLike,
      feeRate: BigNumberish,
      clbTokenAmount: BigNumberish,
      recipient: AddressLike
    ],
    [LpReceiptStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityBatch"
  ): TypedContractMethod<
    [
      market: AddressLike,
      recipient: AddressLike,
      feeRates: BigNumberish[],
      clbTokenAmounts: BigNumberish[]
    ],
    [LpReceiptStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityBatchCallback"
  ): TypedContractMethod<
    [clbToken: AddressLike, clbTokenIds: BigNumberish[], data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityCallback"
  ): TypedContractMethod<
    [clbToken: AddressLike, clbTokenId: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawLiquidity"
  ): TypedContractMethod<
    [market: AddressLike, receiptId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawLiquidityBatch"
  ): TypedContractMethod<
    [market: AddressLike, _receiptIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawLiquidityBatchCallback"
  ): TypedContractMethod<
    [
      _receiptIds: BigNumberish[],
      arg1: BigNumberish[],
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawLiquidityCallback"
  ): TypedContractMethod<
    [
      receiptId: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AccountCreated"
  ): TypedContractEvent<
    AccountCreatedEvent.InputTuple,
    AccountCreatedEvent.OutputTuple,
    AccountCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OpenPosition"
  ): TypedContractEvent<
    OpenPositionEvent.InputTuple,
    OpenPositionEvent.OutputTuple,
    OpenPositionEvent.OutputObject
  >;

  filters: {
    "AccountCreated(address,address)": TypedContractEvent<
      AccountCreatedEvent.InputTuple,
      AccountCreatedEvent.OutputTuple,
      AccountCreatedEvent.OutputObject
    >;
    AccountCreated: TypedContractEvent<
      AccountCreatedEvent.InputTuple,
      AccountCreatedEvent.OutputTuple,
      AccountCreatedEvent.OutputObject
    >;

    "OpenPosition(address,address,address,uint256,uint256)": TypedContractEvent<
      OpenPositionEvent.InputTuple,
      OpenPositionEvent.OutputTuple,
      OpenPositionEvent.OutputObject
    >;
    OpenPosition: TypedContractEvent<
      OpenPositionEvent.InputTuple,
      OpenPositionEvent.OutputTuple,
      OpenPositionEvent.OutputObject
    >;
  };
}
