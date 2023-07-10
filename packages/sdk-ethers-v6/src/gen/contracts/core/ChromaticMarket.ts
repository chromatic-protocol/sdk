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

export type BinMarginStruct = {
  tradingFeeRate: BigNumberish;
  amount: BigNumberish;
};

export type BinMarginStructOutput = [tradingFeeRate: bigint, amount: bigint] & {
  tradingFeeRate: bigint;
  amount: bigint;
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
  owner: AddressLike;
  _binMargins: BinMarginStruct[];
  _feeProtocol: BigNumberish;
};

export type PositionStructOutput = [
  id: bigint,
  openVersion: bigint,
  closeVersion: bigint,
  qty: bigint,
  leverage: bigint,
  openTimestamp: bigint,
  closeTimestamp: bigint,
  takerMargin: bigint,
  owner: string,
  _binMargins: BinMarginStructOutput[],
  _feeProtocol: bigint
] & {
  id: bigint;
  openVersion: bigint;
  closeVersion: bigint;
  qty: bigint;
  leverage: bigint;
  openTimestamp: bigint;
  closeTimestamp: bigint;
  takerMargin: bigint;
  owner: string;
  _binMargins: BinMarginStructOutput[];
  _feeProtocol: bigint;
};

export declare namespace ILiquidity {
  export type ClaimableLiquidityStruct = {
    mintingTokenAmountRequested: BigNumberish;
    mintingCLBTokenAmount: BigNumberish;
    burningCLBTokenAmountRequested: BigNumberish;
    burningCLBTokenAmount: BigNumberish;
    burningTokenAmount: BigNumberish;
  };

  export type ClaimableLiquidityStructOutput = [
    mintingTokenAmountRequested: bigint,
    mintingCLBTokenAmount: bigint,
    burningCLBTokenAmountRequested: bigint,
    burningCLBTokenAmount: bigint,
    burningTokenAmount: bigint
  ] & {
    mintingTokenAmountRequested: bigint;
    mintingCLBTokenAmount: bigint;
    burningCLBTokenAmountRequested: bigint;
    burningCLBTokenAmount: bigint;
    burningTokenAmount: bigint;
  };

  export type LiquidityBinStatusStruct = {
    liquidity: BigNumberish;
    freeLiquidity: BigNumberish;
    binValue: BigNumberish;
    tradingFeeRate: BigNumberish;
  };

  export type LiquidityBinStatusStructOutput = [
    liquidity: bigint,
    freeLiquidity: bigint,
    binValue: bigint,
    tradingFeeRate: bigint
  ] & {
    liquidity: bigint;
    freeLiquidity: bigint;
    binValue: bigint;
    tradingFeeRate: bigint;
  };
}

export interface ChromaticMarketInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addLiquidity"
      | "checkClaimPosition"
      | "checkLiquidation"
      | "claimLiquidity"
      | "claimPosition(uint256,address,bytes)"
      | "claimPosition(uint256,address,uint256)"
      | "claimableLiquidity"
      | "clbToken"
      | "closePosition"
      | "distributeEarningToBins"
      | "factory"
      | "getBinFreeLiquidity"
      | "getBinLiquidity"
      | "getBinValues"
      | "getLpReceipt"
      | "getPositions"
      | "keeperFeePayer"
      | "liquidate"
      | "liquidator"
      | "liquidityBinStatuses"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "openPosition"
      | "oracleProvider"
      | "removeLiquidity"
      | "setFeeProtocol"
      | "settle"
      | "settlementToken"
      | "supportsInterface"
      | "vault"
      | "withdrawLiquidity"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddLiquidity"
      | "ClaimLiquidity"
      | "ClaimPosition"
      | "ClosePosition"
      | "Liquidate"
      | "OpenPosition"
      | "RemoveLiquidity"
      | "SetFeeProtocol"
      | "TransferProtocolFee"
      | "WithdrawLiquidity"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "checkClaimPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkLiquidation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimLiquidity",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimPosition(uint256,address,bytes)",
    values: [BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimPosition(uint256,address,uint256)",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableLiquidity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "clbToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeEarningToBins",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBinFreeLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBinLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBinValues",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getLpReceipt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositions",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "keeperFeePayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBinStatuses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeProtocol",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "settle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "settlementToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawLiquidity",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkClaimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimPosition(uint256,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimPosition(uint256,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "clbToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeEarningToBins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBinFreeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBinLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBinValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLpReceipt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "keeperFeePayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBinStatuses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "settlementToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLiquidity",
    data: BytesLike
  ): Result;
}

export namespace AddLiquidityEvent {
  export type InputTuple = [recipient: AddressLike, receipt: LpReceiptStruct];
  export type OutputTuple = [recipient: string, receipt: LpReceiptStructOutput];
  export interface OutputObject {
    recipient: string;
    receipt: LpReceiptStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimLiquidityEvent {
  export type InputTuple = [
    recipient: AddressLike,
    clbTokenAmount: BigNumberish,
    receipt: LpReceiptStruct
  ];
  export type OutputTuple = [
    recipient: string,
    clbTokenAmount: bigint,
    receipt: LpReceiptStructOutput
  ];
  export interface OutputObject {
    recipient: string;
    clbTokenAmount: bigint;
    receipt: LpReceiptStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimPositionEvent {
  export type InputTuple = [
    account: AddressLike,
    pnl: BigNumberish,
    interest: BigNumberish,
    position: PositionStruct
  ];
  export type OutputTuple = [
    account: string,
    pnl: bigint,
    interest: bigint,
    position: PositionStructOutput
  ];
  export interface OutputObject {
    account: string;
    pnl: bigint;
    interest: bigint;
    position: PositionStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClosePositionEvent {
  export type InputTuple = [account: AddressLike, position: PositionStruct];
  export type OutputTuple = [account: string, position: PositionStructOutput];
  export interface OutputObject {
    account: string;
    position: PositionStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidateEvent {
  export type InputTuple = [
    account: AddressLike,
    usedKeeperFee: BigNumberish,
    position: PositionStruct
  ];
  export type OutputTuple = [
    account: string,
    usedKeeperFee: bigint,
    position: PositionStructOutput
  ];
  export interface OutputObject {
    account: string;
    usedKeeperFee: bigint;
    position: PositionStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OpenPositionEvent {
  export type InputTuple = [account: AddressLike, position: PositionStruct];
  export type OutputTuple = [account: string, position: PositionStructOutput];
  export interface OutputObject {
    account: string;
    position: PositionStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveLiquidityEvent {
  export type InputTuple = [recipient: AddressLike, receipt: LpReceiptStruct];
  export type OutputTuple = [recipient: string, receipt: LpReceiptStructOutput];
  export interface OutputObject {
    recipient: string;
    receipt: LpReceiptStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace TransferProtocolFeeEvent {
  export type InputTuple = [positionId: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [positionId: bigint, amount: bigint];
  export interface OutputObject {
    positionId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawLiquidityEvent {
  export type InputTuple = [
    recipient: AddressLike,
    amount: BigNumberish,
    burnedCLBTokenAmount: BigNumberish,
    receipt: LpReceiptStruct
  ];
  export type OutputTuple = [
    recipient: string,
    amount: bigint,
    burnedCLBTokenAmount: bigint,
    receipt: LpReceiptStructOutput
  ];
  export interface OutputObject {
    recipient: string;
    amount: bigint;
    burnedCLBTokenAmount: bigint;
    receipt: LpReceiptStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ChromaticMarket extends BaseContract {
  connect(runner?: ContractRunner | null): ChromaticMarket;
  waitForDeployment(): Promise<this>;

  interface: ChromaticMarketInterface;

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
   * Adds liquidity to the market.
   * @param data Additional data for the liquidity callback.
   * @param recipient The address to receive the liquidity tokens.
   * @param tradingFeeRate The trading fee rate for the liquidity.
   */
  addLiquidity: TypedContractMethod<
    [recipient: AddressLike, tradingFeeRate: BigNumberish, data: BytesLike],
    [LpReceiptStructOutput],
    "nonpayable"
  >;

  /**
   * Checks if a position is eligible for claim.
   * @param positionId The ID of the position to check.
   */
  checkClaimPosition: TypedContractMethod<
    [positionId: BigNumberish],
    [boolean],
    "view"
  >;

  /**
   * Checks if a position is eligible for liquidation.
   * @param positionId The ID of the position to check.
   */
  checkLiquidation: TypedContractMethod<
    [positionId: BigNumberish],
    [boolean],
    "view"
  >;

  /**
   * Claims liquidity from a liquidity receipt.
   * @param data Additional data for the liquidity callback.
   * @param receiptId The ID of the liquidity receipt.
   */
  claimLiquidity: TypedContractMethod<
    [receiptId: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  /**
   * Claims a closed position in the market.
   * @param data Additional data for the claim callback.
   * @param positionId The ID of the position to claim.
   * @param recipient The address of the recipient of the claimed position.
   */
  "claimPosition(uint256,address,bytes)": TypedContractMethod<
    [positionId: BigNumberish, recipient: AddressLike, data: BytesLike],
    [void],
    "nonpayable"
  >;

  /**
   * Claims a closed position on behalf of a keeper.
   * @param keeper The address of the keeper claiming the position.
   * @param keeperFee The native token amount of the keeper's fee.
   * @param positionId The ID of the position to claim.
   */
  "claimPosition(uint256,address,uint256)": TypedContractMethod<
    [positionId: BigNumberish, keeper: AddressLike, keeperFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool.
   * @param oracleVersion The oracle version for which to retrieve the claimable liquidity.
   * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
   */
  claimableLiquidity: TypedContractMethod<
    [tradingFeeRate: BigNumberish, oracleVersion: BigNumberish],
    [ILiquidity.ClaimableLiquidityStructOutput],
    "view"
  >;

  clbToken: TypedContractMethod<[], [string], "view">;

  /**
   * Closes a position in the market.
   * @param positionId The ID of the position to close.
   */
  closePosition: TypedContractMethod<
    [positionId: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * Distributes earning to the liquidity bins.
   * @param earning The amount of earning to distribute.
   * @param marketBalance The balance of the market.
   */
  distributeEarningToBins: TypedContractMethod<
    [earning: BigNumberish, marketBalance: BigNumberish],
    [void],
    "nonpayable"
  >;

  factory: TypedContractMethod<[], [string], "view">;

  /**
   * Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the available liquidity amount.
   */
  getBinFreeLiquidity: TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [bigint],
    "view"
  >;

  /**
   * Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool.
   * @param tradingFeeRate The trading fee rate for which to retrieve the liquidity amount.
   */
  getBinLiquidity: TypedContractMethod<
    [tradingFeeRate: BigNumberish],
    [bigint],
    "view"
  >;

  /**
   * Retrieves the values of a specific trading fee rate's bins in the liquidity pool.      The value of a bin represents the total valuation of the liquidity in the bin.
   * @param tradingFeeRates The list of trading fee rate for which to retrieve the bin value.
   */
  getBinValues: TypedContractMethod<
    [tradingFeeRates: BigNumberish[]],
    [bigint[]],
    "view"
  >;

  /**
   * Retrieves the liquidity receipt with the given receipt ID.      It throws NotExistLpReceipt if the specified receipt ID does not exist.
   * @param receiptId The ID of the liquidity receipt to retrieve.
   */
  getLpReceipt: TypedContractMethod<
    [receiptId: BigNumberish],
    [LpReceiptStructOutput],
    "view"
  >;

  /**
   * Retrieves multiple positions by their IDs.
   * @param positionIds The IDs of the positions to retrieve.
   */
  getPositions: TypedContractMethod<
    [positionIds: BigNumberish[]],
    [PositionStructOutput[]],
    "view"
  >;

  keeperFeePayer: TypedContractMethod<[], [string], "view">;

  /**
   * Liquidates a position.
   * @param keeper The address of the keeper performing the liquidation.
   * @param keeperFee The native token amount of the keeper's fee.
   * @param positionId The ID of the position to liquidate.
   */
  liquidate: TypedContractMethod<
    [positionId: BigNumberish, keeper: AddressLike, keeperFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  liquidator: TypedContractMethod<[], [string], "view">;

  /**
   * Retrieves the liquidity bin statuses for the caller's liquidity pool.
   */
  liquidityBinStatuses: TypedContractMethod<
    [],
    [ILiquidity.LiquidityBinStatusStructOutput[]],
    "view"
  >;

  /**
   * Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` (i.e. 0xbc197c81, or its own function selector).
   * @param data Additional data with no specified format
   * @param from The address which previously owned the token
   * @param ids An array containing ids of each token being transferred (order and length must match values array)
   * @param operator The address which initiated the batch transfer (i.e. msg.sender)
   * @param values An array containing amounts of each token being transferred (order and length must match ids array)
   */
  onERC1155BatchReceived: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "view"
  >;

  /**
   * Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` (i.e. 0xf23a6e61, or its own function selector).
   * @param data Additional data with no specified format
   * @param from The address which previously owned the token
   * @param id The ID of the token being transferred
   * @param operator The address which initiated the transfer (i.e. msg.sender)
   * @param value The amount of tokens being transferred
   */
  onERC1155Received: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "view"
  >;

  /**
   * Opens a new position in the market.
   * @param data Additional data for the position callback.
   * @param leverage The leverage of the position in basis points.
   * @param makerMargin The margin amount provided by the maker.
   * @param maxAllowableTradingFee The maximum allowable trading fee for the position.
   * @param qty The quantity of the position.
   * @param takerMargin The margin amount provided by the taker.
   */
  openPosition: TypedContractMethod<
    [
      qty: BigNumberish,
      leverage: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish,
      data: BytesLike
    ],
    [PositionStructOutput],
    "nonpayable"
  >;

  oracleProvider: TypedContractMethod<[], [string], "view">;

  /**
   * Removes liquidity from the market.
   * @param data Additional data for the liquidity callback.
   * @param recipient The address to receive the removed liquidity.
   * @param tradingFeeRate The trading fee rate for the liquidity.
   */
  removeLiquidity: TypedContractMethod<
    [recipient: AddressLike, tradingFeeRate: BigNumberish, data: BytesLike],
    [LpReceiptStructOutput],
    "nonpayable"
  >;

  /**
   * Set the denominator of the protocol's % share of the fees
   * @param feeProtocol new protocol fee for the market
   */
  setFeeProtocol: TypedContractMethod<
    [feeProtocol: BigNumberish],
    [void],
    "nonpayable"
  >;

  /**
   * This function settles the market by synchronizing the oracle version      and calling the settle function of the liquidity pool.
   * Executes the settlement process for the Chromatic market.
   */
  settle: TypedContractMethod<[], [void], "nonpayable">;

  settlementToken: TypedContractMethod<[], [string], "view">;

  /**
   * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
   */
  supportsInterface: TypedContractMethod<
    [interfaceID: BytesLike],
    [boolean],
    "view"
  >;

  vault: TypedContractMethod<[], [string], "view">;

  /**
   * Withdraws liquidity from a liquidity receipt.
   * @param data Additional data for the liquidity callback.
   * @param receiptId The ID of the liquidity receipt.
   */
  withdrawLiquidity: TypedContractMethod<
    [receiptId: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [recipient: AddressLike, tradingFeeRate: BigNumberish, data: BytesLike],
    [LpReceiptStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "checkClaimPosition"
  ): TypedContractMethod<[positionId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "checkLiquidation"
  ): TypedContractMethod<[positionId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "claimLiquidity"
  ): TypedContractMethod<
    [receiptId: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimPosition(uint256,address,bytes)"
  ): TypedContractMethod<
    [positionId: BigNumberish, recipient: AddressLike, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimPosition(uint256,address,uint256)"
  ): TypedContractMethod<
    [positionId: BigNumberish, keeper: AddressLike, keeperFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimableLiquidity"
  ): TypedContractMethod<
    [tradingFeeRate: BigNumberish, oracleVersion: BigNumberish],
    [ILiquidity.ClaimableLiquidityStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "clbToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "closePosition"
  ): TypedContractMethod<[positionId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "distributeEarningToBins"
  ): TypedContractMethod<
    [earning: BigNumberish, marketBalance: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getBinFreeLiquidity"
  ): TypedContractMethod<[tradingFeeRate: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBinLiquidity"
  ): TypedContractMethod<[tradingFeeRate: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBinValues"
  ): TypedContractMethod<[tradingFeeRates: BigNumberish[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getLpReceipt"
  ): TypedContractMethod<
    [receiptId: BigNumberish],
    [LpReceiptStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPositions"
  ): TypedContractMethod<
    [positionIds: BigNumberish[]],
    [PositionStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "keeperFeePayer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "liquidate"
  ): TypedContractMethod<
    [positionId: BigNumberish, keeper: AddressLike, keeperFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "liquidityBinStatuses"
  ): TypedContractMethod<
    [],
    [ILiquidity.LiquidityBinStatusStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "openPosition"
  ): TypedContractMethod<
    [
      qty: BigNumberish,
      leverage: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish,
      data: BytesLike
    ],
    [PositionStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "oracleProvider"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [recipient: AddressLike, tradingFeeRate: BigNumberish, data: BytesLike],
    [LpReceiptStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFeeProtocol"
  ): TypedContractMethod<[feeProtocol: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "settle"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "settlementToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceID: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawLiquidity"
  ): TypedContractMethod<
    [receiptId: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AddLiquidity"
  ): TypedContractEvent<
    AddLiquidityEvent.InputTuple,
    AddLiquidityEvent.OutputTuple,
    AddLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "ClaimLiquidity"
  ): TypedContractEvent<
    ClaimLiquidityEvent.InputTuple,
    ClaimLiquidityEvent.OutputTuple,
    ClaimLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "ClaimPosition"
  ): TypedContractEvent<
    ClaimPositionEvent.InputTuple,
    ClaimPositionEvent.OutputTuple,
    ClaimPositionEvent.OutputObject
  >;
  getEvent(
    key: "ClosePosition"
  ): TypedContractEvent<
    ClosePositionEvent.InputTuple,
    ClosePositionEvent.OutputTuple,
    ClosePositionEvent.OutputObject
  >;
  getEvent(
    key: "Liquidate"
  ): TypedContractEvent<
    LiquidateEvent.InputTuple,
    LiquidateEvent.OutputTuple,
    LiquidateEvent.OutputObject
  >;
  getEvent(
    key: "OpenPosition"
  ): TypedContractEvent<
    OpenPositionEvent.InputTuple,
    OpenPositionEvent.OutputTuple,
    OpenPositionEvent.OutputObject
  >;
  getEvent(
    key: "RemoveLiquidity"
  ): TypedContractEvent<
    RemoveLiquidityEvent.InputTuple,
    RemoveLiquidityEvent.OutputTuple,
    RemoveLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "SetFeeProtocol"
  ): TypedContractEvent<
    SetFeeProtocolEvent.InputTuple,
    SetFeeProtocolEvent.OutputTuple,
    SetFeeProtocolEvent.OutputObject
  >;
  getEvent(
    key: "TransferProtocolFee"
  ): TypedContractEvent<
    TransferProtocolFeeEvent.InputTuple,
    TransferProtocolFeeEvent.OutputTuple,
    TransferProtocolFeeEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawLiquidity"
  ): TypedContractEvent<
    WithdrawLiquidityEvent.InputTuple,
    WithdrawLiquidityEvent.OutputTuple,
    WithdrawLiquidityEvent.OutputObject
  >;

  filters: {
    "AddLiquidity(address,tuple)": TypedContractEvent<
      AddLiquidityEvent.InputTuple,
      AddLiquidityEvent.OutputTuple,
      AddLiquidityEvent.OutputObject
    >;
    AddLiquidity: TypedContractEvent<
      AddLiquidityEvent.InputTuple,
      AddLiquidityEvent.OutputTuple,
      AddLiquidityEvent.OutputObject
    >;

    "ClaimLiquidity(address,uint256,tuple)": TypedContractEvent<
      ClaimLiquidityEvent.InputTuple,
      ClaimLiquidityEvent.OutputTuple,
      ClaimLiquidityEvent.OutputObject
    >;
    ClaimLiquidity: TypedContractEvent<
      ClaimLiquidityEvent.InputTuple,
      ClaimLiquidityEvent.OutputTuple,
      ClaimLiquidityEvent.OutputObject
    >;

    "ClaimPosition(address,int256,uint256,tuple)": TypedContractEvent<
      ClaimPositionEvent.InputTuple,
      ClaimPositionEvent.OutputTuple,
      ClaimPositionEvent.OutputObject
    >;
    ClaimPosition: TypedContractEvent<
      ClaimPositionEvent.InputTuple,
      ClaimPositionEvent.OutputTuple,
      ClaimPositionEvent.OutputObject
    >;

    "ClosePosition(address,tuple)": TypedContractEvent<
      ClosePositionEvent.InputTuple,
      ClosePositionEvent.OutputTuple,
      ClosePositionEvent.OutputObject
    >;
    ClosePosition: TypedContractEvent<
      ClosePositionEvent.InputTuple,
      ClosePositionEvent.OutputTuple,
      ClosePositionEvent.OutputObject
    >;

    "Liquidate(address,uint256,tuple)": TypedContractEvent<
      LiquidateEvent.InputTuple,
      LiquidateEvent.OutputTuple,
      LiquidateEvent.OutputObject
    >;
    Liquidate: TypedContractEvent<
      LiquidateEvent.InputTuple,
      LiquidateEvent.OutputTuple,
      LiquidateEvent.OutputObject
    >;

    "OpenPosition(address,tuple)": TypedContractEvent<
      OpenPositionEvent.InputTuple,
      OpenPositionEvent.OutputTuple,
      OpenPositionEvent.OutputObject
    >;
    OpenPosition: TypedContractEvent<
      OpenPositionEvent.InputTuple,
      OpenPositionEvent.OutputTuple,
      OpenPositionEvent.OutputObject
    >;

    "RemoveLiquidity(address,tuple)": TypedContractEvent<
      RemoveLiquidityEvent.InputTuple,
      RemoveLiquidityEvent.OutputTuple,
      RemoveLiquidityEvent.OutputObject
    >;
    RemoveLiquidity: TypedContractEvent<
      RemoveLiquidityEvent.InputTuple,
      RemoveLiquidityEvent.OutputTuple,
      RemoveLiquidityEvent.OutputObject
    >;

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

    "TransferProtocolFee(uint256,uint256)": TypedContractEvent<
      TransferProtocolFeeEvent.InputTuple,
      TransferProtocolFeeEvent.OutputTuple,
      TransferProtocolFeeEvent.OutputObject
    >;
    TransferProtocolFee: TypedContractEvent<
      TransferProtocolFeeEvent.InputTuple,
      TransferProtocolFeeEvent.OutputTuple,
      TransferProtocolFeeEvent.OutputObject
    >;

    "WithdrawLiquidity(address,uint256,uint256,tuple)": TypedContractEvent<
      WithdrawLiquidityEvent.InputTuple,
      WithdrawLiquidityEvent.OutputTuple,
      WithdrawLiquidityEvent.OutputObject
    >;
    WithdrawLiquidity: TypedContractEvent<
      WithdrawLiquidityEvent.InputTuple,
      WithdrawLiquidityEvent.OutputTuple,
      WithdrawLiquidityEvent.OutputObject
    >;
  };
}
