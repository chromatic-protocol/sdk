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

export type BinMarginStruct = {
  tradingFeeRate: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
};

export type BinMarginStructOutput = [number, BigNumber] & {
  tradingFeeRate: number;
  amount: BigNumber;
};

export type PositionStruct = {
  id: PromiseOrValue<BigNumberish>;
  openVersion: PromiseOrValue<BigNumberish>;
  closeVersion: PromiseOrValue<BigNumberish>;
  qty: PromiseOrValue<BigNumberish>;
  leverage: PromiseOrValue<BigNumberish>;
  openTimestamp: PromiseOrValue<BigNumberish>;
  closeTimestamp: PromiseOrValue<BigNumberish>;
  takerMargin: PromiseOrValue<BigNumberish>;
  owner: PromiseOrValue<string>;
  _binMargins: BinMarginStruct[];
  _feeProtocol: PromiseOrValue<BigNumberish>;
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

export interface MarketTradeFacetInterface extends utils.Interface {
  functions: {
    "claimPosition(uint256,address,bytes)": FunctionFragment;
    "closePosition(uint256)": FunctionFragment;
    "getPositions(uint256[])": FunctionFragment;
    "openPosition(int224,uint32,uint256,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimPosition"
      | "closePosition"
      | "getPositions"
      | "openPosition"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimPosition",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositions",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;

  events: {
    "ClaimPosition(address,int256,uint256,tuple)": EventFragment;
    "ClosePosition(address,tuple)": EventFragment;
    "OpenPosition(address,tuple)": EventFragment;
    "TransferProtocolFee(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClosePosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferProtocolFee"): EventFragment;
}

export interface ClaimPositionEventObject {
  account: string;
  pnl: BigNumber;
  interest: BigNumber;
  position: PositionStructOutput;
}
export type ClaimPositionEvent = TypedEvent<
  [string, BigNumber, BigNumber, PositionStructOutput],
  ClaimPositionEventObject
>;

export type ClaimPositionEventFilter = TypedEventFilter<ClaimPositionEvent>;

export interface ClosePositionEventObject {
  account: string;
  position: PositionStructOutput;
}
export type ClosePositionEvent = TypedEvent<
  [string, PositionStructOutput],
  ClosePositionEventObject
>;

export type ClosePositionEventFilter = TypedEventFilter<ClosePositionEvent>;

export interface OpenPositionEventObject {
  account: string;
  position: PositionStructOutput;
}
export type OpenPositionEvent = TypedEvent<
  [string, PositionStructOutput],
  OpenPositionEventObject
>;

export type OpenPositionEventFilter = TypedEventFilter<OpenPositionEvent>;

export interface TransferProtocolFeeEventObject {
  positionId: BigNumber;
  amount: BigNumber;
}
export type TransferProtocolFeeEvent = TypedEvent<
  [BigNumber, BigNumber],
  TransferProtocolFeeEventObject
>;

export type TransferProtocolFeeEventFilter =
  TypedEventFilter<TransferProtocolFeeEvent>;

export interface MarketTradeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketTradeFacetInterface;

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
     * Claims the position by transferring the available funds to the recipient.      The caller must be the owner of the position.      The position must be eligible for claim in the current oracle version.      The claimed amount is determined based on the position's profit and loss (pnl).      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotPermitted` error if the caller is not permitted to perform the action as they are not the owner of the position.      Throws a `NotClaimablePosition` error if the position cannot be claimed as it is not eligible for claim in the current oracle version.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
     * @param data Additional data for the claim callback.
     * @param positionId The ID of the position to claim.
     * @param recipient The address of the recipient of the claimed position.
     */
    claimPosition(
      positionId: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * This function allows the owner of the position to close it. The position must exist, be owned by the caller,      and not have already been closed. Upon successful closure, the position is settled, and a `ClosePosition` event is emitted.      If the position is closed in a different oracle version than the open version, a claim position task is created by the liquidator.      Otherwise, the position is immediately claimed, and a `ClaimPosition` event is emitted.      Throws a `NotExistPosition` error if the specified position does not exist.      Throws a `NotPermitted` error if the caller is not the owner of the position.      Throws an `AlreadyClosedPosition` error if the position has already been closed.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
     * @param positionId The ID of the position to close.
     */
    closePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Retrieves multiple positions by their IDs.
     * @param positionIds The IDs of the positions to retrieve.
     */
    getPositions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [PositionStructOutput[]] & { _positions: PositionStructOutput[] }
    >;

    /**
     * Throws a `TooSmallTakerMargin` error if the `takerMargin` is smaller than the minimum required margin for the settlement token.      Throws an `ExceedMaxAllowableLeverage` if the leverage exceeds the maximum allowable leverage.      Throws a `NotAllowableTakerMargin` if the taker margin is not within the allowable range based on the absolute quantity and maximum allowable leverage.      Throws a `NotAllowableMakerMargin` if the maker margin is not within the allowable range based on the absolute quantity and min/max take-profit basis points (BPS).      Throws an `ExceedMaxAllowableTradingFee` if the total trading fee (including protocol fee) exceeds the maximum allowable trading fee (`maxAllowableTradingFee`).      Throws a `NotEnoughMarginTransferred` if the margin settlement token balance did not increase by the required margin amount after the callback. Requirements:  - The `takerMargin` must be greater than or equal to the minimum required margin for the settlement token.  - The position parameters must pass the validity check, including leverage limits and allowable margin ranges.  - The position is assigned a new ID and stored in the position storage.  - A keeper task for potential liquidation is created by the liquidator.  - An `OpenPosition` event is emitted with the owner's address and the newly opened position details.
     * @param data Additional data for the position callback.
     * @param leverage The leverage of the position in basis points.
     * @param makerMargin The margin amount provided by the maker.
     * @param maxAllowableTradingFee The maximum allowable trading fee for the position.
     * @param qty The quantity of the position.
     * @param takerMargin The margin amount provided by the taker.
     */
    openPosition(
      qty: PromiseOrValue<BigNumberish>,
      leverage: PromiseOrValue<BigNumberish>,
      takerMargin: PromiseOrValue<BigNumberish>,
      makerMargin: PromiseOrValue<BigNumberish>,
      maxAllowableTradingFee: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Claims the position by transferring the available funds to the recipient.      The caller must be the owner of the position.      The position must be eligible for claim in the current oracle version.      The claimed amount is determined based on the position's profit and loss (pnl).      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotPermitted` error if the caller is not permitted to perform the action as they are not the owner of the position.      Throws a `NotClaimablePosition` error if the position cannot be claimed as it is not eligible for claim in the current oracle version.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
   * @param data Additional data for the claim callback.
   * @param positionId The ID of the position to claim.
   * @param recipient The address of the recipient of the claimed position.
   */
  claimPosition(
    positionId: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * This function allows the owner of the position to close it. The position must exist, be owned by the caller,      and not have already been closed. Upon successful closure, the position is settled, and a `ClosePosition` event is emitted.      If the position is closed in a different oracle version than the open version, a claim position task is created by the liquidator.      Otherwise, the position is immediately claimed, and a `ClaimPosition` event is emitted.      Throws a `NotExistPosition` error if the specified position does not exist.      Throws a `NotPermitted` error if the caller is not the owner of the position.      Throws an `AlreadyClosedPosition` error if the position has already been closed.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
   * @param positionId The ID of the position to close.
   */
  closePosition(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Retrieves multiple positions by their IDs.
   * @param positionIds The IDs of the positions to retrieve.
   */
  getPositions(
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<PositionStructOutput[]>;

  /**
   * Throws a `TooSmallTakerMargin` error if the `takerMargin` is smaller than the minimum required margin for the settlement token.      Throws an `ExceedMaxAllowableLeverage` if the leverage exceeds the maximum allowable leverage.      Throws a `NotAllowableTakerMargin` if the taker margin is not within the allowable range based on the absolute quantity and maximum allowable leverage.      Throws a `NotAllowableMakerMargin` if the maker margin is not within the allowable range based on the absolute quantity and min/max take-profit basis points (BPS).      Throws an `ExceedMaxAllowableTradingFee` if the total trading fee (including protocol fee) exceeds the maximum allowable trading fee (`maxAllowableTradingFee`).      Throws a `NotEnoughMarginTransferred` if the margin settlement token balance did not increase by the required margin amount after the callback. Requirements:  - The `takerMargin` must be greater than or equal to the minimum required margin for the settlement token.  - The position parameters must pass the validity check, including leverage limits and allowable margin ranges.  - The position is assigned a new ID and stored in the position storage.  - A keeper task for potential liquidation is created by the liquidator.  - An `OpenPosition` event is emitted with the owner's address and the newly opened position details.
   * @param data Additional data for the position callback.
   * @param leverage The leverage of the position in basis points.
   * @param makerMargin The margin amount provided by the maker.
   * @param maxAllowableTradingFee The maximum allowable trading fee for the position.
   * @param qty The quantity of the position.
   * @param takerMargin The margin amount provided by the taker.
   */
  openPosition(
    qty: PromiseOrValue<BigNumberish>,
    leverage: PromiseOrValue<BigNumberish>,
    takerMargin: PromiseOrValue<BigNumberish>,
    makerMargin: PromiseOrValue<BigNumberish>,
    maxAllowableTradingFee: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Claims the position by transferring the available funds to the recipient.      The caller must be the owner of the position.      The position must be eligible for claim in the current oracle version.      The claimed amount is determined based on the position's profit and loss (pnl).      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotPermitted` error if the caller is not permitted to perform the action as they are not the owner of the position.      Throws a `NotClaimablePosition` error if the position cannot be claimed as it is not eligible for claim in the current oracle version.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
     * @param data Additional data for the claim callback.
     * @param positionId The ID of the position to claim.
     * @param recipient The address of the recipient of the claimed position.
     */
    claimPosition(
      positionId: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * This function allows the owner of the position to close it. The position must exist, be owned by the caller,      and not have already been closed. Upon successful closure, the position is settled, and a `ClosePosition` event is emitted.      If the position is closed in a different oracle version than the open version, a claim position task is created by the liquidator.      Otherwise, the position is immediately claimed, and a `ClaimPosition` event is emitted.      Throws a `NotExistPosition` error if the specified position does not exist.      Throws a `NotPermitted` error if the caller is not the owner of the position.      Throws an `AlreadyClosedPosition` error if the position has already been closed.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
     * @param positionId The ID of the position to close.
     */
    closePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Retrieves multiple positions by their IDs.
     * @param positionIds The IDs of the positions to retrieve.
     */
    getPositions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PositionStructOutput[]>;

    /**
     * Throws a `TooSmallTakerMargin` error if the `takerMargin` is smaller than the minimum required margin for the settlement token.      Throws an `ExceedMaxAllowableLeverage` if the leverage exceeds the maximum allowable leverage.      Throws a `NotAllowableTakerMargin` if the taker margin is not within the allowable range based on the absolute quantity and maximum allowable leverage.      Throws a `NotAllowableMakerMargin` if the maker margin is not within the allowable range based on the absolute quantity and min/max take-profit basis points (BPS).      Throws an `ExceedMaxAllowableTradingFee` if the total trading fee (including protocol fee) exceeds the maximum allowable trading fee (`maxAllowableTradingFee`).      Throws a `NotEnoughMarginTransferred` if the margin settlement token balance did not increase by the required margin amount after the callback. Requirements:  - The `takerMargin` must be greater than or equal to the minimum required margin for the settlement token.  - The position parameters must pass the validity check, including leverage limits and allowable margin ranges.  - The position is assigned a new ID and stored in the position storage.  - A keeper task for potential liquidation is created by the liquidator.  - An `OpenPosition` event is emitted with the owner's address and the newly opened position details.
     * @param data Additional data for the position callback.
     * @param leverage The leverage of the position in basis points.
     * @param makerMargin The margin amount provided by the maker.
     * @param maxAllowableTradingFee The maximum allowable trading fee for the position.
     * @param qty The quantity of the position.
     * @param takerMargin The margin amount provided by the taker.
     */
    openPosition(
      qty: PromiseOrValue<BigNumberish>,
      leverage: PromiseOrValue<BigNumberish>,
      takerMargin: PromiseOrValue<BigNumberish>,
      makerMargin: PromiseOrValue<BigNumberish>,
      maxAllowableTradingFee: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PositionStructOutput>;
  };

  filters: {
    "ClaimPosition(address,int256,uint256,tuple)"(
      account?: PromiseOrValue<string> | null,
      pnl?: PromiseOrValue<BigNumberish> | null,
      interest?: PromiseOrValue<BigNumberish> | null,
      position?: null
    ): ClaimPositionEventFilter;
    ClaimPosition(
      account?: PromiseOrValue<string> | null,
      pnl?: PromiseOrValue<BigNumberish> | null,
      interest?: PromiseOrValue<BigNumberish> | null,
      position?: null
    ): ClaimPositionEventFilter;

    "ClosePosition(address,tuple)"(
      account?: PromiseOrValue<string> | null,
      position?: null
    ): ClosePositionEventFilter;
    ClosePosition(
      account?: PromiseOrValue<string> | null,
      position?: null
    ): ClosePositionEventFilter;

    "OpenPosition(address,tuple)"(
      account?: PromiseOrValue<string> | null,
      position?: null
    ): OpenPositionEventFilter;
    OpenPosition(
      account?: PromiseOrValue<string> | null,
      position?: null
    ): OpenPositionEventFilter;

    "TransferProtocolFee(uint256,uint256)"(
      positionId?: PromiseOrValue<BigNumberish> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): TransferProtocolFeeEventFilter;
    TransferProtocolFee(
      positionId?: PromiseOrValue<BigNumberish> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): TransferProtocolFeeEventFilter;
  };

  estimateGas: {
    /**
     * Claims the position by transferring the available funds to the recipient.      The caller must be the owner of the position.      The position must be eligible for claim in the current oracle version.      The claimed amount is determined based on the position's profit and loss (pnl).      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotPermitted` error if the caller is not permitted to perform the action as they are not the owner of the position.      Throws a `NotClaimablePosition` error if the position cannot be claimed as it is not eligible for claim in the current oracle version.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
     * @param data Additional data for the claim callback.
     * @param positionId The ID of the position to claim.
     * @param recipient The address of the recipient of the claimed position.
     */
    claimPosition(
      positionId: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * This function allows the owner of the position to close it. The position must exist, be owned by the caller,      and not have already been closed. Upon successful closure, the position is settled, and a `ClosePosition` event is emitted.      If the position is closed in a different oracle version than the open version, a claim position task is created by the liquidator.      Otherwise, the position is immediately claimed, and a `ClaimPosition` event is emitted.      Throws a `NotExistPosition` error if the specified position does not exist.      Throws a `NotPermitted` error if the caller is not the owner of the position.      Throws an `AlreadyClosedPosition` error if the position has already been closed.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
     * @param positionId The ID of the position to close.
     */
    closePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Retrieves multiple positions by their IDs.
     * @param positionIds The IDs of the positions to retrieve.
     */
    getPositions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Throws a `TooSmallTakerMargin` error if the `takerMargin` is smaller than the minimum required margin for the settlement token.      Throws an `ExceedMaxAllowableLeverage` if the leverage exceeds the maximum allowable leverage.      Throws a `NotAllowableTakerMargin` if the taker margin is not within the allowable range based on the absolute quantity and maximum allowable leverage.      Throws a `NotAllowableMakerMargin` if the maker margin is not within the allowable range based on the absolute quantity and min/max take-profit basis points (BPS).      Throws an `ExceedMaxAllowableTradingFee` if the total trading fee (including protocol fee) exceeds the maximum allowable trading fee (`maxAllowableTradingFee`).      Throws a `NotEnoughMarginTransferred` if the margin settlement token balance did not increase by the required margin amount after the callback. Requirements:  - The `takerMargin` must be greater than or equal to the minimum required margin for the settlement token.  - The position parameters must pass the validity check, including leverage limits and allowable margin ranges.  - The position is assigned a new ID and stored in the position storage.  - A keeper task for potential liquidation is created by the liquidator.  - An `OpenPosition` event is emitted with the owner's address and the newly opened position details.
     * @param data Additional data for the position callback.
     * @param leverage The leverage of the position in basis points.
     * @param makerMargin The margin amount provided by the maker.
     * @param maxAllowableTradingFee The maximum allowable trading fee for the position.
     * @param qty The quantity of the position.
     * @param takerMargin The margin amount provided by the taker.
     */
    openPosition(
      qty: PromiseOrValue<BigNumberish>,
      leverage: PromiseOrValue<BigNumberish>,
      takerMargin: PromiseOrValue<BigNumberish>,
      makerMargin: PromiseOrValue<BigNumberish>,
      maxAllowableTradingFee: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Claims the position by transferring the available funds to the recipient.      The caller must be the owner of the position.      The position must be eligible for claim in the current oracle version.      The claimed amount is determined based on the position's profit and loss (pnl).      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotPermitted` error if the caller is not permitted to perform the action as they are not the owner of the position.      Throws a `NotClaimablePosition` error if the position cannot be claimed as it is not eligible for claim in the current oracle version.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
     * @param data Additional data for the claim callback.
     * @param positionId The ID of the position to claim.
     * @param recipient The address of the recipient of the claimed position.
     */
    claimPosition(
      positionId: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This function allows the owner of the position to close it. The position must exist, be owned by the caller,      and not have already been closed. Upon successful closure, the position is settled, and a `ClosePosition` event is emitted.      If the position is closed in a different oracle version than the open version, a claim position task is created by the liquidator.      Otherwise, the position is immediately claimed, and a `ClaimPosition` event is emitted.      Throws a `NotExistPosition` error if the specified position does not exist.      Throws a `NotPermitted` error if the caller is not the owner of the position.      Throws an `AlreadyClosedPosition` error if the position has already been closed.      Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback.
     * @param positionId The ID of the position to close.
     */
    closePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves multiple positions by their IDs.
     * @param positionIds The IDs of the positions to retrieve.
     */
    getPositions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Throws a `TooSmallTakerMargin` error if the `takerMargin` is smaller than the minimum required margin for the settlement token.      Throws an `ExceedMaxAllowableLeverage` if the leverage exceeds the maximum allowable leverage.      Throws a `NotAllowableTakerMargin` if the taker margin is not within the allowable range based on the absolute quantity and maximum allowable leverage.      Throws a `NotAllowableMakerMargin` if the maker margin is not within the allowable range based on the absolute quantity and min/max take-profit basis points (BPS).      Throws an `ExceedMaxAllowableTradingFee` if the total trading fee (including protocol fee) exceeds the maximum allowable trading fee (`maxAllowableTradingFee`).      Throws a `NotEnoughMarginTransferred` if the margin settlement token balance did not increase by the required margin amount after the callback. Requirements:  - The `takerMargin` must be greater than or equal to the minimum required margin for the settlement token.  - The position parameters must pass the validity check, including leverage limits and allowable margin ranges.  - The position is assigned a new ID and stored in the position storage.  - A keeper task for potential liquidation is created by the liquidator.  - An `OpenPosition` event is emitted with the owner's address and the newly opened position details.
     * @param data Additional data for the position callback.
     * @param leverage The leverage of the position in basis points.
     * @param makerMargin The margin amount provided by the maker.
     * @param maxAllowableTradingFee The maximum allowable trading fee for the position.
     * @param qty The quantity of the position.
     * @param takerMargin The margin amount provided by the taker.
     */
    openPosition(
      qty: PromiseOrValue<BigNumberish>,
      leverage: PromiseOrValue<BigNumberish>,
      takerMargin: PromiseOrValue<BigNumberish>,
      makerMargin: PromiseOrValue<BigNumberish>,
      maxAllowableTradingFee: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
