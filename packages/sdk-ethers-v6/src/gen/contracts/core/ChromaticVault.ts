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

export interface ChromaticVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "automate"
      | "cancelMakerEarningDistributionTask"
      | "cancelMarketEarningDistributionTask"
      | "createMakerEarningDistributionTask"
      | "createMarketEarningDistributionTask"
      | "dedicatedMsgSender"
      | "distributeMakerEarning"
      | "distributeMarketEarning"
      | "flashLoan"
      | "getPendingBinShare"
      | "makerBalances"
      | "makerEarningDistributionTaskIds"
      | "makerMarketBalances"
      | "marketEarningDistributionTaskIds"
      | "onAddLiquidity"
      | "onClaimPosition"
      | "onOpenPosition"
      | "onSettlePendingLiquidity"
      | "onWithdrawLiquidity"
      | "pendingDeposits"
      | "pendingMakerEarnings"
      | "pendingMarketEarnings"
      | "pendingWithdrawals"
      | "resolveMakerEarningDistribution"
      | "resolveMarketEarningDistribution"
      | "takerBalances"
      | "takerMarketBalances"
      | "transferKeeperFee"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FlashLoan"
      | "MakerEarningDistributed"
      | "MarketEarningAccumulated"
      | "MarketEarningDistributed"
      | "OnAddLiquidity"
      | "OnClaimPosition"
      | "OnOpenPosition"
      | "OnSettlePendingLiquidity"
      | "OnWithdrawLiquidity"
      | "TransferKeeperFee(uint256,uint256)"
      | "TransferKeeperFee(address,uint256,uint256)"
      | "TransferProtocolFee"
  ): EventFragment;

  encodeFunctionData(functionFragment: "automate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelMakerEarningDistributionTask",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelMarketEarningDistributionTask",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createMakerEarningDistributionTask",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarketEarningDistributionTask",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dedicatedMsgSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributeMakerEarning",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeMarketEarning",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [AddressLike, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingBinShare",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "makerBalances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "makerEarningDistributionTaskIds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "makerMarketBalances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marketEarningDistributionTaskIds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onAddLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onClaimPosition",
    values: [BigNumberish, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onOpenPosition",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onSettlePendingLiquidity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onWithdrawLiquidity",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingDeposits",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingMakerEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingMarketEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingWithdrawals",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveMakerEarningDistribution",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveMarketEarningDistribution",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "takerBalances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "takerMarketBalances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferKeeperFee",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "automate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelMakerEarningDistributionTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelMarketEarningDistributionTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMakerEarningDistributionTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMarketEarningDistributionTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dedicatedMsgSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeMakerEarning",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeMarketEarning",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPendingBinShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makerBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makerEarningDistributionTaskIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makerMarketBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketEarningDistributionTaskIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onAddLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onClaimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onOpenPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onSettlePendingLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onWithdrawLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingMakerEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingMarketEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveMakerEarningDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveMarketEarningDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "takerBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "takerMarketBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferKeeperFee",
    data: BytesLike
  ): Result;
}

export namespace FlashLoanEvent {
  export type InputTuple = [
    sender: AddressLike,
    recipient: AddressLike,
    amount: BigNumberish,
    paid: BigNumberish,
    paidToTakerPool: BigNumberish,
    paidToMakerPool: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    recipient: string,
    amount: bigint,
    paid: bigint,
    paidToTakerPool: bigint,
    paidToMakerPool: bigint
  ];
  export interface OutputObject {
    sender: string;
    recipient: string;
    amount: bigint;
    paid: bigint;
    paidToTakerPool: bigint;
    paidToMakerPool: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MakerEarningDistributedEvent {
  export type InputTuple = [
    token: AddressLike,
    earning: BigNumberish,
    usedKeeperFee: BigNumberish
  ];
  export type OutputTuple = [
    token: string,
    earning: bigint,
    usedKeeperFee: bigint
  ];
  export interface OutputObject {
    token: string;
    earning: bigint;
    usedKeeperFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MarketEarningAccumulatedEvent {
  export type InputTuple = [market: AddressLike, earning: BigNumberish];
  export type OutputTuple = [market: string, earning: bigint];
  export interface OutputObject {
    market: string;
    earning: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MarketEarningDistributedEvent {
  export type InputTuple = [
    market: AddressLike,
    earning: BigNumberish,
    usedKeeperFee: BigNumberish,
    marketBalance: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    earning: bigint,
    usedKeeperFee: bigint,
    marketBalance: bigint
  ];
  export interface OutputObject {
    market: string;
    earning: bigint;
    usedKeeperFee: bigint;
    marketBalance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OnAddLiquidityEvent {
  export type InputTuple = [market: AddressLike, amount: BigNumberish];
  export type OutputTuple = [market: string, amount: bigint];
  export interface OutputObject {
    market: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OnClaimPositionEvent {
  export type InputTuple = [
    market: AddressLike,
    positionId: BigNumberish,
    recipient: AddressLike,
    takerMargin: BigNumberish,
    settlementAmount: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    positionId: bigint,
    recipient: string,
    takerMargin: bigint,
    settlementAmount: bigint
  ];
  export interface OutputObject {
    market: string;
    positionId: bigint;
    recipient: string;
    takerMargin: bigint;
    settlementAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OnOpenPositionEvent {
  export type InputTuple = [
    market: AddressLike,
    positionId: BigNumberish,
    takerMargin: BigNumberish,
    tradingFee: BigNumberish,
    protocolFee: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    positionId: bigint,
    takerMargin: bigint,
    tradingFee: bigint,
    protocolFee: bigint
  ];
  export interface OutputObject {
    market: string;
    positionId: bigint;
    takerMargin: bigint;
    tradingFee: bigint;
    protocolFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OnSettlePendingLiquidityEvent {
  export type InputTuple = [
    market: AddressLike,
    pendingDeposit: BigNumberish,
    pendingWithdrawal: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    pendingDeposit: bigint,
    pendingWithdrawal: bigint
  ];
  export interface OutputObject {
    market: string;
    pendingDeposit: bigint;
    pendingWithdrawal: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OnWithdrawLiquidityEvent {
  export type InputTuple = [
    market: AddressLike,
    amount: BigNumberish,
    recipient: AddressLike
  ];
  export type OutputTuple = [market: string, amount: bigint, recipient: string];
  export interface OutputObject {
    market: string;
    amount: bigint;
    recipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferKeeperFee_uint256_uint256_Event {
  export type InputTuple = [fee: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [fee: bigint, amount: bigint];
  export interface OutputObject {
    fee: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferKeeperFee_address_uint256_uint256_Event {
  export type InputTuple = [
    market: AddressLike,
    fee: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [market: string, fee: bigint, amount: bigint];
  export interface OutputObject {
    market: string;
    fee: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferProtocolFeeEvent {
  export type InputTuple = [
    market: AddressLike,
    positionId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    market: string,
    positionId: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    market: string;
    positionId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ChromaticVault extends BaseContract {
  connect(runner?: ContractRunner | null): ChromaticVault;
  waitForDeployment(): Promise<this>;

  interface: ChromaticVaultInterface;

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

  automate: TypedContractMethod<[], [string], "view">;

  /**
   * Cancels a maker earning distribution task for a token.
   * @param token The address of the settlement token.
   */
  cancelMakerEarningDistributionTask: TypedContractMethod<
    [token: AddressLike],
    [void],
    "nonpayable"
  >;

  /**
   * Cancels a market earning distribution task for a market.
   * @param market The address of the market.
   */
  cancelMarketEarningDistributionTask: TypedContractMethod<
    [market: AddressLike],
    [void],
    "nonpayable"
  >;

  /**
   * Creates a maker earning distribution task for a token.
   * @param token The address of the settlement token.
   */
  createMakerEarningDistributionTask: TypedContractMethod<
    [token: AddressLike],
    [void],
    "nonpayable"
  >;

  /**
   * Creates a market earning distribution task for a market.
   * @param market The address of the market.
   */
  createMarketEarningDistributionTask: TypedContractMethod<
    [market: AddressLike],
    [void],
    "nonpayable"
  >;

  dedicatedMsgSender: TypedContractMethod<[], [string], "view">;

  /**
   * Distributes the maker earning for a token to the each markets.
   * @param token The address of the settlement token.
   */
  distributeMakerEarning: TypedContractMethod<
    [token: AddressLike],
    [void],
    "nonpayable"
  >;

  /**
   * Distributes the market earning for a market to the each bins.
   * @param market The address of the market.
   */
  distributeMarketEarning: TypedContractMethod<
    [market: AddressLike],
    [void],
    "nonpayable"
  >;

  /**
   * Executes a flash loan.
   * @param amount The amount of the flash loan.
   * @param data Additional data for the flash loan.
   * @param recipient The address to receive the flash loan.
   * @param token The address of the token for the flash loan.
   */
  flashLoan: TypedContractMethod<
    [
      token: AddressLike,
      amount: BigNumberish,
      recipient: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  /**
   * The pending share of earnings is calculated based on the bin balance, maker balances, and market balances.
   * Retrieves the pending share of earnings for a specific bin (subset) of funds in a market.
   * @param binBalance The balance of funds in the bin.
   * @param market The address of the market.
   */
  getPendingBinShare: TypedContractMethod<
    [market: AddressLike, binBalance: BigNumberish],
    [bigint],
    "view"
  >;

  makerBalances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  makerEarningDistributionTaskIds: TypedContractMethod<
    [arg0: AddressLike],
    [string],
    "view"
  >;

  makerMarketBalances: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  marketEarningDistributionTaskIds: TypedContractMethod<
    [arg0: AddressLike],
    [string],
    "view"
  >;

  /**
   * This function can only be called by a market contract.
   * Called when liquidity is added to the vault by a market contract.
   * @param amount The amount of liquidity being added.
   */
  onAddLiquidity: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * This function can only be called by a market contract.
   * Called when a position is claimed by a market contract.
   * @param positionId The ID of the claimed position.
   * @param recipient The address that will receive the settlement amount.
   * @param settlementAmount The amount to be settled for the position.
   * @param takerMargin The margin amount provided by the taker for the position.
   */
  onClaimPosition: TypedContractMethod<
    [
      positionId: BigNumberish,
      recipient: AddressLike,
      takerMargin: BigNumberish,
      settlementAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  /**
   * This function can only be called by a market contract.
   * Called when a position is opened by a market contract.
   * @param positionId The ID of the opened position.
   * @param protocolFee The protocol fee associated with the position.
   * @param takerMargin The margin amount provided by the taker for the position.
   * @param tradingFee The trading fee associated with the position.
   */
  onOpenPosition: TypedContractMethod<
    [
      positionId: BigNumberish,
      takerMargin: BigNumberish,
      tradingFee: BigNumberish,
      protocolFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  /**
   * This function can only be called by a market contract.
   * Called when pending liquidity is settled in the vault by a market contract.
   * @param pendingDeposit The amount of pending deposits being settled.
   * @param pendingWithdrawal The amount of pending withdrawals being settled.
   */
  onSettlePendingLiquidity: TypedContractMethod<
    [pendingDeposit: BigNumberish, pendingWithdrawal: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * This function can only be called by a market contract.
   * Called when liquidity is withdrawn from the vault by a market contract.
   * @param amount The amount of liquidity to be withdrawn.
   * @param recipient The address that will receive the withdrawn liquidity.
   */
  onWithdrawLiquidity: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  pendingDeposits: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  pendingMakerEarnings: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  pendingMarketEarnings: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  pendingWithdrawals: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  /**
   * Resolves the maker earning distribution for a specific token.
   * @param token The address of the settlement token.
   */
  resolveMakerEarningDistribution: TypedContractMethod<
    [token: AddressLike],
    [[boolean, string] & { canExec: boolean; execPayload: string }],
    "view"
  >;

  /**
   * Resolves the market earning distribution for a market.
   * @param market The address of the market.
   */
  resolveMarketEarningDistribution: TypedContractMethod<
    [market: AddressLike],
    [[boolean, string] & { canExec: boolean; execPayload: string }],
    "view"
  >;

  takerBalances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  takerMarketBalances: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  /**
   * This function can only be called by a market contract.
   * Transfers the keeper fee from the market to the specified keeper.
   * @param fee The amount of the fee to transfer as native token.
   * @param keeper The address of the keeper to receive the fee.
   * @param margin The margin amount used for the fee payment.
   */
  transferKeeperFee: TypedContractMethod<
    [keeper: AddressLike, fee: BigNumberish, margin: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "automate"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cancelMakerEarningDistributionTask"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cancelMarketEarningDistributionTask"
  ): TypedContractMethod<[market: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createMakerEarningDistributionTask"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createMarketEarningDistributionTask"
  ): TypedContractMethod<[market: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "dedicatedMsgSender"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "distributeMakerEarning"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "distributeMarketEarning"
  ): TypedContractMethod<[market: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "flashLoan"
  ): TypedContractMethod<
    [
      token: AddressLike,
      amount: BigNumberish,
      recipient: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getPendingBinShare"
  ): TypedContractMethod<
    [market: AddressLike, binBalance: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "makerBalances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "makerEarningDistributionTaskIds"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "makerMarketBalances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "marketEarningDistributionTaskIds"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "onAddLiquidity"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "onClaimPosition"
  ): TypedContractMethod<
    [
      positionId: BigNumberish,
      recipient: AddressLike,
      takerMargin: BigNumberish,
      settlementAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onOpenPosition"
  ): TypedContractMethod<
    [
      positionId: BigNumberish,
      takerMargin: BigNumberish,
      tradingFee: BigNumberish,
      protocolFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onSettlePendingLiquidity"
  ): TypedContractMethod<
    [pendingDeposit: BigNumberish, pendingWithdrawal: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onWithdrawLiquidity"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pendingDeposits"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingMakerEarnings"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingMarketEarnings"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingWithdrawals"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "resolveMakerEarningDistribution"
  ): TypedContractMethod<
    [token: AddressLike],
    [[boolean, string] & { canExec: boolean; execPayload: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "resolveMarketEarningDistribution"
  ): TypedContractMethod<
    [market: AddressLike],
    [[boolean, string] & { canExec: boolean; execPayload: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "takerBalances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "takerMarketBalances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferKeeperFee"
  ): TypedContractMethod<
    [keeper: AddressLike, fee: BigNumberish, margin: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "FlashLoan"
  ): TypedContractEvent<
    FlashLoanEvent.InputTuple,
    FlashLoanEvent.OutputTuple,
    FlashLoanEvent.OutputObject
  >;
  getEvent(
    key: "MakerEarningDistributed"
  ): TypedContractEvent<
    MakerEarningDistributedEvent.InputTuple,
    MakerEarningDistributedEvent.OutputTuple,
    MakerEarningDistributedEvent.OutputObject
  >;
  getEvent(
    key: "MarketEarningAccumulated"
  ): TypedContractEvent<
    MarketEarningAccumulatedEvent.InputTuple,
    MarketEarningAccumulatedEvent.OutputTuple,
    MarketEarningAccumulatedEvent.OutputObject
  >;
  getEvent(
    key: "MarketEarningDistributed"
  ): TypedContractEvent<
    MarketEarningDistributedEvent.InputTuple,
    MarketEarningDistributedEvent.OutputTuple,
    MarketEarningDistributedEvent.OutputObject
  >;
  getEvent(
    key: "OnAddLiquidity"
  ): TypedContractEvent<
    OnAddLiquidityEvent.InputTuple,
    OnAddLiquidityEvent.OutputTuple,
    OnAddLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "OnClaimPosition"
  ): TypedContractEvent<
    OnClaimPositionEvent.InputTuple,
    OnClaimPositionEvent.OutputTuple,
    OnClaimPositionEvent.OutputObject
  >;
  getEvent(
    key: "OnOpenPosition"
  ): TypedContractEvent<
    OnOpenPositionEvent.InputTuple,
    OnOpenPositionEvent.OutputTuple,
    OnOpenPositionEvent.OutputObject
  >;
  getEvent(
    key: "OnSettlePendingLiquidity"
  ): TypedContractEvent<
    OnSettlePendingLiquidityEvent.InputTuple,
    OnSettlePendingLiquidityEvent.OutputTuple,
    OnSettlePendingLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "OnWithdrawLiquidity"
  ): TypedContractEvent<
    OnWithdrawLiquidityEvent.InputTuple,
    OnWithdrawLiquidityEvent.OutputTuple,
    OnWithdrawLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "TransferKeeperFee(uint256,uint256)"
  ): TypedContractEvent<
    TransferKeeperFee_uint256_uint256_Event.InputTuple,
    TransferKeeperFee_uint256_uint256_Event.OutputTuple,
    TransferKeeperFee_uint256_uint256_Event.OutputObject
  >;
  getEvent(
    key: "TransferKeeperFee(address,uint256,uint256)"
  ): TypedContractEvent<
    TransferKeeperFee_address_uint256_uint256_Event.InputTuple,
    TransferKeeperFee_address_uint256_uint256_Event.OutputTuple,
    TransferKeeperFee_address_uint256_uint256_Event.OutputObject
  >;
  getEvent(
    key: "TransferProtocolFee"
  ): TypedContractEvent<
    TransferProtocolFeeEvent.InputTuple,
    TransferProtocolFeeEvent.OutputTuple,
    TransferProtocolFeeEvent.OutputObject
  >;

  filters: {
    "FlashLoan(address,address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      FlashLoanEvent.InputTuple,
      FlashLoanEvent.OutputTuple,
      FlashLoanEvent.OutputObject
    >;
    FlashLoan: TypedContractEvent<
      FlashLoanEvent.InputTuple,
      FlashLoanEvent.OutputTuple,
      FlashLoanEvent.OutputObject
    >;

    "MakerEarningDistributed(address,uint256,uint256)": TypedContractEvent<
      MakerEarningDistributedEvent.InputTuple,
      MakerEarningDistributedEvent.OutputTuple,
      MakerEarningDistributedEvent.OutputObject
    >;
    MakerEarningDistributed: TypedContractEvent<
      MakerEarningDistributedEvent.InputTuple,
      MakerEarningDistributedEvent.OutputTuple,
      MakerEarningDistributedEvent.OutputObject
    >;

    "MarketEarningAccumulated(address,uint256)": TypedContractEvent<
      MarketEarningAccumulatedEvent.InputTuple,
      MarketEarningAccumulatedEvent.OutputTuple,
      MarketEarningAccumulatedEvent.OutputObject
    >;
    MarketEarningAccumulated: TypedContractEvent<
      MarketEarningAccumulatedEvent.InputTuple,
      MarketEarningAccumulatedEvent.OutputTuple,
      MarketEarningAccumulatedEvent.OutputObject
    >;

    "MarketEarningDistributed(address,uint256,uint256,uint256)": TypedContractEvent<
      MarketEarningDistributedEvent.InputTuple,
      MarketEarningDistributedEvent.OutputTuple,
      MarketEarningDistributedEvent.OutputObject
    >;
    MarketEarningDistributed: TypedContractEvent<
      MarketEarningDistributedEvent.InputTuple,
      MarketEarningDistributedEvent.OutputTuple,
      MarketEarningDistributedEvent.OutputObject
    >;

    "OnAddLiquidity(address,uint256)": TypedContractEvent<
      OnAddLiquidityEvent.InputTuple,
      OnAddLiquidityEvent.OutputTuple,
      OnAddLiquidityEvent.OutputObject
    >;
    OnAddLiquidity: TypedContractEvent<
      OnAddLiquidityEvent.InputTuple,
      OnAddLiquidityEvent.OutputTuple,
      OnAddLiquidityEvent.OutputObject
    >;

    "OnClaimPosition(address,uint256,address,uint256,uint256)": TypedContractEvent<
      OnClaimPositionEvent.InputTuple,
      OnClaimPositionEvent.OutputTuple,
      OnClaimPositionEvent.OutputObject
    >;
    OnClaimPosition: TypedContractEvent<
      OnClaimPositionEvent.InputTuple,
      OnClaimPositionEvent.OutputTuple,
      OnClaimPositionEvent.OutputObject
    >;

    "OnOpenPosition(address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      OnOpenPositionEvent.InputTuple,
      OnOpenPositionEvent.OutputTuple,
      OnOpenPositionEvent.OutputObject
    >;
    OnOpenPosition: TypedContractEvent<
      OnOpenPositionEvent.InputTuple,
      OnOpenPositionEvent.OutputTuple,
      OnOpenPositionEvent.OutputObject
    >;

    "OnSettlePendingLiquidity(address,uint256,uint256)": TypedContractEvent<
      OnSettlePendingLiquidityEvent.InputTuple,
      OnSettlePendingLiquidityEvent.OutputTuple,
      OnSettlePendingLiquidityEvent.OutputObject
    >;
    OnSettlePendingLiquidity: TypedContractEvent<
      OnSettlePendingLiquidityEvent.InputTuple,
      OnSettlePendingLiquidityEvent.OutputTuple,
      OnSettlePendingLiquidityEvent.OutputObject
    >;

    "OnWithdrawLiquidity(address,uint256,address)": TypedContractEvent<
      OnWithdrawLiquidityEvent.InputTuple,
      OnWithdrawLiquidityEvent.OutputTuple,
      OnWithdrawLiquidityEvent.OutputObject
    >;
    OnWithdrawLiquidity: TypedContractEvent<
      OnWithdrawLiquidityEvent.InputTuple,
      OnWithdrawLiquidityEvent.OutputTuple,
      OnWithdrawLiquidityEvent.OutputObject
    >;

    "TransferKeeperFee(uint256,uint256)": TypedContractEvent<
      TransferKeeperFee_uint256_uint256_Event.InputTuple,
      TransferKeeperFee_uint256_uint256_Event.OutputTuple,
      TransferKeeperFee_uint256_uint256_Event.OutputObject
    >;
    "TransferKeeperFee(address,uint256,uint256)": TypedContractEvent<
      TransferKeeperFee_address_uint256_uint256_Event.InputTuple,
      TransferKeeperFee_address_uint256_uint256_Event.OutputTuple,
      TransferKeeperFee_address_uint256_uint256_Event.OutputObject
    >;

    "TransferProtocolFee(address,uint256,uint256)": TypedContractEvent<
      TransferProtocolFeeEvent.InputTuple,
      TransferProtocolFeeEvent.OutputTuple,
      TransferProtocolFeeEvent.OutputObject
    >;
    TransferProtocolFee: TypedContractEvent<
      TransferProtocolFeeEvent.InputTuple,
      TransferProtocolFeeEvent.OutputTuple,
      TransferProtocolFeeEvent.OutputObject
    >;
  };
}