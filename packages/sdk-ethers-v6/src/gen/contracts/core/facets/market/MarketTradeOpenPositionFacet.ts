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
} from "../../../../common";

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
  openTimestamp: BigNumberish;
  closeTimestamp: BigNumberish;
  takerMargin: BigNumberish;
  owner: AddressLike;
  liquidator: AddressLike;
  _protocolFeeRate: BigNumberish;
  _binMargins: BinMarginStruct[];
};

export type PositionStructOutput = [
  id: bigint,
  openVersion: bigint,
  closeVersion: bigint,
  qty: bigint,
  openTimestamp: bigint,
  closeTimestamp: bigint,
  takerMargin: bigint,
  owner: string,
  liquidator: string,
  _protocolFeeRate: bigint,
  _binMargins: BinMarginStructOutput[]
] & {
  id: bigint;
  openVersion: bigint;
  closeVersion: bigint;
  qty: bigint;
  openTimestamp: bigint;
  closeTimestamp: bigint;
  takerMargin: bigint;
  owner: string;
  liquidator: string;
  _protocolFeeRate: bigint;
  _binMargins: BinMarginStructOutput[];
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

export interface MarketTradeOpenPositionFacetInterface extends Interface {
  getFunction(nameOrSignature: "openPosition"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddLiquidity"
      | "AddLiquidityBatch"
      | "ClaimLiquidity"
      | "ClaimLiquidityBatch"
      | "ClaimPosition"
      | "ClaimPositionByKeeper"
      | "ClosePosition"
      | "DisplayModeUpdated"
      | "Liquidate"
      | "LiquidityModeUpdated"
      | "OpenPosition"
      | "PositionModeUpdated"
      | "ProtocolFeeRateUpdated"
      | "RemoveLiquidity"
      | "RemoveLiquidityBatch"
      | "WithdrawLiquidity"
      | "WithdrawLiquidityBatch"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "openPosition",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
}

export namespace AddLiquidityEvent {
  export type InputTuple = [receipt: LpReceiptStruct];
  export type OutputTuple = [receipt: LpReceiptStructOutput];
  export interface OutputObject {
    receipt: LpReceiptStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AddLiquidityBatchEvent {
  export type InputTuple = [receipts: LpReceiptStruct[]];
  export type OutputTuple = [receipts: LpReceiptStructOutput[]];
  export interface OutputObject {
    receipts: LpReceiptStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimLiquidityEvent {
  export type InputTuple = [
    receipt: LpReceiptStruct,
    clbTokenAmount: BigNumberish
  ];
  export type OutputTuple = [
    receipt: LpReceiptStructOutput,
    clbTokenAmount: bigint
  ];
  export interface OutputObject {
    receipt: LpReceiptStructOutput;
    clbTokenAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimLiquidityBatchEvent {
  export type InputTuple = [
    receipts: LpReceiptStruct[],
    clbTokenAmounts: BigNumberish[]
  ];
  export type OutputTuple = [
    receipts: LpReceiptStructOutput[],
    clbTokenAmounts: bigint[]
  ];
  export interface OutputObject {
    receipts: LpReceiptStructOutput[];
    clbTokenAmounts: bigint[];
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

export namespace ClaimPositionByKeeperEvent {
  export type InputTuple = [
    account: AddressLike,
    pnl: BigNumberish,
    interest: BigNumberish,
    usedKeeperFee: BigNumberish,
    position: PositionStruct
  ];
  export type OutputTuple = [
    account: string,
    pnl: bigint,
    interest: bigint,
    usedKeeperFee: bigint,
    position: PositionStructOutput
  ];
  export interface OutputObject {
    account: string;
    pnl: bigint;
    interest: bigint;
    usedKeeperFee: bigint;
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

export namespace DisplayModeUpdatedEvent {
  export type InputTuple = [
    displayModeOld: BigNumberish,
    displayModeNew: BigNumberish
  ];
  export type OutputTuple = [displayModeOld: bigint, displayModeNew: bigint];
  export interface OutputObject {
    displayModeOld: bigint;
    displayModeNew: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidateEvent {
  export type InputTuple = [
    account: AddressLike,
    pnl: BigNumberish,
    interest: BigNumberish,
    usedKeeperFee: BigNumberish,
    position: PositionStruct
  ];
  export type OutputTuple = [
    account: string,
    pnl: bigint,
    interest: bigint,
    usedKeeperFee: bigint,
    position: PositionStructOutput
  ];
  export interface OutputObject {
    account: string;
    pnl: bigint;
    interest: bigint;
    usedKeeperFee: bigint;
    position: PositionStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidityModeUpdatedEvent {
  export type InputTuple = [
    liquidityModeOld: BigNumberish,
    liquidityModeNew: BigNumberish
  ];
  export type OutputTuple = [
    liquidityModeOld: bigint,
    liquidityModeNew: bigint
  ];
  export interface OutputObject {
    liquidityModeOld: bigint;
    liquidityModeNew: bigint;
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

export namespace PositionModeUpdatedEvent {
  export type InputTuple = [
    positionModeOld: BigNumberish,
    positionModeNew: BigNumberish
  ];
  export type OutputTuple = [positionModeOld: bigint, positionModeNew: bigint];
  export interface OutputObject {
    positionModeOld: bigint;
    positionModeNew: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProtocolFeeRateUpdatedEvent {
  export type InputTuple = [
    protocolFeeRateOld: BigNumberish,
    protocolFeeRateNew: BigNumberish
  ];
  export type OutputTuple = [
    protocolFeeRateOld: bigint,
    protocolFeeRateNew: bigint
  ];
  export interface OutputObject {
    protocolFeeRateOld: bigint;
    protocolFeeRateNew: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveLiquidityEvent {
  export type InputTuple = [receipt: LpReceiptStruct];
  export type OutputTuple = [receipt: LpReceiptStructOutput];
  export interface OutputObject {
    receipt: LpReceiptStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveLiquidityBatchEvent {
  export type InputTuple = [receipts: LpReceiptStruct[]];
  export type OutputTuple = [receipts: LpReceiptStructOutput[]];
  export interface OutputObject {
    receipts: LpReceiptStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawLiquidityEvent {
  export type InputTuple = [
    receipt: LpReceiptStruct,
    amount: BigNumberish,
    burnedCLBTokenAmount: BigNumberish
  ];
  export type OutputTuple = [
    receipt: LpReceiptStructOutput,
    amount: bigint,
    burnedCLBTokenAmount: bigint
  ];
  export interface OutputObject {
    receipt: LpReceiptStructOutput;
    amount: bigint;
    burnedCLBTokenAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawLiquidityBatchEvent {
  export type InputTuple = [
    receipts: LpReceiptStruct[],
    amounts: BigNumberish[],
    burnedCLBTokenAmounts: BigNumberish[]
  ];
  export type OutputTuple = [
    receipts: LpReceiptStructOutput[],
    amounts: bigint[],
    burnedCLBTokenAmounts: bigint[]
  ];
  export interface OutputObject {
    receipts: LpReceiptStructOutput[];
    amounts: bigint[];
    burnedCLBTokenAmounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MarketTradeOpenPositionFacet extends BaseContract {
  connect(runner?: ContractRunner | null): MarketTradeOpenPositionFacet;
  waitForDeployment(): Promise<this>;

  interface: MarketTradeOpenPositionFacetInterface;

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
   * Throws a `TooSmallTakerMargin` error if the `takerMargin` is smaller than the minimum required margin for the settlement token.      Throws an `ExceedMaxAllowableLeverage` if the leverage exceeds the maximum allowable leverage.      Throws a `NotAllowableMakerMargin` if the maker margin is not within the allowable range based on the absolute quantity and min/max take-profit basis points (BPS).      Throws an `ExceedMaxAllowableTradingFee` if the total trading fee (including protocol fee) exceeds the maximum allowable trading fee (`maxAllowableTradingFee`).      Throws a `NotEnoughMarginTransferred` if the margin settlement token balance did not increase by the required margin amount after the callback. Requirements:  - The `takerMargin` must be greater than or equal to the minimum required margin for the settlement token.  - The position parameters must pass the validity check, including leverage limits and allowable margin ranges.  - The position is assigned a new ID and stored in the position storage.  - A keeper task for potential liquidation is created by the liquidator.  - An `OpenPosition` event is emitted with the owner's address and the newly opened position details.
   * @param data Additional data for the position callback.
   * @param makerMargin The margin amount provided by the maker.
   * @param maxAllowableTradingFee The maximum allowable trading fee for the position.
   * @param qty The quantity of the position.
   * @param takerMargin The margin amount provided by the taker.
   */
  openPosition: TypedContractMethod<
    [
      qty: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish,
      data: BytesLike
    ],
    [OpenPositionInfoStructOutput],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "openPosition"
  ): TypedContractMethod<
    [
      qty: BigNumberish,
      takerMargin: BigNumberish,
      makerMargin: BigNumberish,
      maxAllowableTradingFee: BigNumberish,
      data: BytesLike
    ],
    [OpenPositionInfoStructOutput],
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
    key: "AddLiquidityBatch"
  ): TypedContractEvent<
    AddLiquidityBatchEvent.InputTuple,
    AddLiquidityBatchEvent.OutputTuple,
    AddLiquidityBatchEvent.OutputObject
  >;
  getEvent(
    key: "ClaimLiquidity"
  ): TypedContractEvent<
    ClaimLiquidityEvent.InputTuple,
    ClaimLiquidityEvent.OutputTuple,
    ClaimLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "ClaimLiquidityBatch"
  ): TypedContractEvent<
    ClaimLiquidityBatchEvent.InputTuple,
    ClaimLiquidityBatchEvent.OutputTuple,
    ClaimLiquidityBatchEvent.OutputObject
  >;
  getEvent(
    key: "ClaimPosition"
  ): TypedContractEvent<
    ClaimPositionEvent.InputTuple,
    ClaimPositionEvent.OutputTuple,
    ClaimPositionEvent.OutputObject
  >;
  getEvent(
    key: "ClaimPositionByKeeper"
  ): TypedContractEvent<
    ClaimPositionByKeeperEvent.InputTuple,
    ClaimPositionByKeeperEvent.OutputTuple,
    ClaimPositionByKeeperEvent.OutputObject
  >;
  getEvent(
    key: "ClosePosition"
  ): TypedContractEvent<
    ClosePositionEvent.InputTuple,
    ClosePositionEvent.OutputTuple,
    ClosePositionEvent.OutputObject
  >;
  getEvent(
    key: "DisplayModeUpdated"
  ): TypedContractEvent<
    DisplayModeUpdatedEvent.InputTuple,
    DisplayModeUpdatedEvent.OutputTuple,
    DisplayModeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Liquidate"
  ): TypedContractEvent<
    LiquidateEvent.InputTuple,
    LiquidateEvent.OutputTuple,
    LiquidateEvent.OutputObject
  >;
  getEvent(
    key: "LiquidityModeUpdated"
  ): TypedContractEvent<
    LiquidityModeUpdatedEvent.InputTuple,
    LiquidityModeUpdatedEvent.OutputTuple,
    LiquidityModeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OpenPosition"
  ): TypedContractEvent<
    OpenPositionEvent.InputTuple,
    OpenPositionEvent.OutputTuple,
    OpenPositionEvent.OutputObject
  >;
  getEvent(
    key: "PositionModeUpdated"
  ): TypedContractEvent<
    PositionModeUpdatedEvent.InputTuple,
    PositionModeUpdatedEvent.OutputTuple,
    PositionModeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ProtocolFeeRateUpdated"
  ): TypedContractEvent<
    ProtocolFeeRateUpdatedEvent.InputTuple,
    ProtocolFeeRateUpdatedEvent.OutputTuple,
    ProtocolFeeRateUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RemoveLiquidity"
  ): TypedContractEvent<
    RemoveLiquidityEvent.InputTuple,
    RemoveLiquidityEvent.OutputTuple,
    RemoveLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "RemoveLiquidityBatch"
  ): TypedContractEvent<
    RemoveLiquidityBatchEvent.InputTuple,
    RemoveLiquidityBatchEvent.OutputTuple,
    RemoveLiquidityBatchEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawLiquidity"
  ): TypedContractEvent<
    WithdrawLiquidityEvent.InputTuple,
    WithdrawLiquidityEvent.OutputTuple,
    WithdrawLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawLiquidityBatch"
  ): TypedContractEvent<
    WithdrawLiquidityBatchEvent.InputTuple,
    WithdrawLiquidityBatchEvent.OutputTuple,
    WithdrawLiquidityBatchEvent.OutputObject
  >;

  filters: {
    "AddLiquidity(tuple)": TypedContractEvent<
      AddLiquidityEvent.InputTuple,
      AddLiquidityEvent.OutputTuple,
      AddLiquidityEvent.OutputObject
    >;
    AddLiquidity: TypedContractEvent<
      AddLiquidityEvent.InputTuple,
      AddLiquidityEvent.OutputTuple,
      AddLiquidityEvent.OutputObject
    >;

    "AddLiquidityBatch(tuple[])": TypedContractEvent<
      AddLiquidityBatchEvent.InputTuple,
      AddLiquidityBatchEvent.OutputTuple,
      AddLiquidityBatchEvent.OutputObject
    >;
    AddLiquidityBatch: TypedContractEvent<
      AddLiquidityBatchEvent.InputTuple,
      AddLiquidityBatchEvent.OutputTuple,
      AddLiquidityBatchEvent.OutputObject
    >;

    "ClaimLiquidity(tuple,uint256)": TypedContractEvent<
      ClaimLiquidityEvent.InputTuple,
      ClaimLiquidityEvent.OutputTuple,
      ClaimLiquidityEvent.OutputObject
    >;
    ClaimLiquidity: TypedContractEvent<
      ClaimLiquidityEvent.InputTuple,
      ClaimLiquidityEvent.OutputTuple,
      ClaimLiquidityEvent.OutputObject
    >;

    "ClaimLiquidityBatch(tuple[],uint256[])": TypedContractEvent<
      ClaimLiquidityBatchEvent.InputTuple,
      ClaimLiquidityBatchEvent.OutputTuple,
      ClaimLiquidityBatchEvent.OutputObject
    >;
    ClaimLiquidityBatch: TypedContractEvent<
      ClaimLiquidityBatchEvent.InputTuple,
      ClaimLiquidityBatchEvent.OutputTuple,
      ClaimLiquidityBatchEvent.OutputObject
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

    "ClaimPositionByKeeper(address,int256,uint256,uint256,tuple)": TypedContractEvent<
      ClaimPositionByKeeperEvent.InputTuple,
      ClaimPositionByKeeperEvent.OutputTuple,
      ClaimPositionByKeeperEvent.OutputObject
    >;
    ClaimPositionByKeeper: TypedContractEvent<
      ClaimPositionByKeeperEvent.InputTuple,
      ClaimPositionByKeeperEvent.OutputTuple,
      ClaimPositionByKeeperEvent.OutputObject
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

    "DisplayModeUpdated(uint8,uint8)": TypedContractEvent<
      DisplayModeUpdatedEvent.InputTuple,
      DisplayModeUpdatedEvent.OutputTuple,
      DisplayModeUpdatedEvent.OutputObject
    >;
    DisplayModeUpdated: TypedContractEvent<
      DisplayModeUpdatedEvent.InputTuple,
      DisplayModeUpdatedEvent.OutputTuple,
      DisplayModeUpdatedEvent.OutputObject
    >;

    "Liquidate(address,int256,uint256,uint256,tuple)": TypedContractEvent<
      LiquidateEvent.InputTuple,
      LiquidateEvent.OutputTuple,
      LiquidateEvent.OutputObject
    >;
    Liquidate: TypedContractEvent<
      LiquidateEvent.InputTuple,
      LiquidateEvent.OutputTuple,
      LiquidateEvent.OutputObject
    >;

    "LiquidityModeUpdated(uint8,uint8)": TypedContractEvent<
      LiquidityModeUpdatedEvent.InputTuple,
      LiquidityModeUpdatedEvent.OutputTuple,
      LiquidityModeUpdatedEvent.OutputObject
    >;
    LiquidityModeUpdated: TypedContractEvent<
      LiquidityModeUpdatedEvent.InputTuple,
      LiquidityModeUpdatedEvent.OutputTuple,
      LiquidityModeUpdatedEvent.OutputObject
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

    "PositionModeUpdated(uint8,uint8)": TypedContractEvent<
      PositionModeUpdatedEvent.InputTuple,
      PositionModeUpdatedEvent.OutputTuple,
      PositionModeUpdatedEvent.OutputObject
    >;
    PositionModeUpdated: TypedContractEvent<
      PositionModeUpdatedEvent.InputTuple,
      PositionModeUpdatedEvent.OutputTuple,
      PositionModeUpdatedEvent.OutputObject
    >;

    "ProtocolFeeRateUpdated(uint16,uint16)": TypedContractEvent<
      ProtocolFeeRateUpdatedEvent.InputTuple,
      ProtocolFeeRateUpdatedEvent.OutputTuple,
      ProtocolFeeRateUpdatedEvent.OutputObject
    >;
    ProtocolFeeRateUpdated: TypedContractEvent<
      ProtocolFeeRateUpdatedEvent.InputTuple,
      ProtocolFeeRateUpdatedEvent.OutputTuple,
      ProtocolFeeRateUpdatedEvent.OutputObject
    >;

    "RemoveLiquidity(tuple)": TypedContractEvent<
      RemoveLiquidityEvent.InputTuple,
      RemoveLiquidityEvent.OutputTuple,
      RemoveLiquidityEvent.OutputObject
    >;
    RemoveLiquidity: TypedContractEvent<
      RemoveLiquidityEvent.InputTuple,
      RemoveLiquidityEvent.OutputTuple,
      RemoveLiquidityEvent.OutputObject
    >;

    "RemoveLiquidityBatch(tuple[])": TypedContractEvent<
      RemoveLiquidityBatchEvent.InputTuple,
      RemoveLiquidityBatchEvent.OutputTuple,
      RemoveLiquidityBatchEvent.OutputObject
    >;
    RemoveLiquidityBatch: TypedContractEvent<
      RemoveLiquidityBatchEvent.InputTuple,
      RemoveLiquidityBatchEvent.OutputTuple,
      RemoveLiquidityBatchEvent.OutputObject
    >;

    "WithdrawLiquidity(tuple,uint256,uint256)": TypedContractEvent<
      WithdrawLiquidityEvent.InputTuple,
      WithdrawLiquidityEvent.OutputTuple,
      WithdrawLiquidityEvent.OutputObject
    >;
    WithdrawLiquidity: TypedContractEvent<
      WithdrawLiquidityEvent.InputTuple,
      WithdrawLiquidityEvent.OutputTuple,
      WithdrawLiquidityEvent.OutputObject
    >;

    "WithdrawLiquidityBatch(tuple[],uint256[],uint256[])": TypedContractEvent<
      WithdrawLiquidityBatchEvent.InputTuple,
      WithdrawLiquidityBatchEvent.OutputTuple,
      WithdrawLiquidityBatchEvent.OutputObject
    >;
    WithdrawLiquidityBatch: TypedContractEvent<
      WithdrawLiquidityBatchEvent.InputTuple,
      WithdrawLiquidityBatchEvent.OutputTuple,
      WithdrawLiquidityBatchEvent.OutputObject
    >;
  };
}
