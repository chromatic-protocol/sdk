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
} from "../../../../common";

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

export interface MarketLiquidateFacetInterface extends utils.Interface {
  functions: {
    "checkClaimPosition(uint256)": FunctionFragment;
    "checkLiquidation(uint256)": FunctionFragment;
    "claimPosition(uint256,address,uint256)": FunctionFragment;
    "liquidate(uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkClaimPosition"
      | "checkLiquidation"
      | "claimPosition"
      | "liquidate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkClaimPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkLiquidation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimPosition",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkClaimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;

  events: {
    "ClaimPositionByKeeper(address,int256,uint256,uint256,(uint256,uint256,uint256,int224,uint32,uint256,uint256,uint256,address,(uint16,uint256)[],uint8))": EventFragment;
    "Liquidate(address,int256,uint256,uint256,(uint256,uint256,uint256,int224,uint32,uint256,uint256,uint256,address,(uint16,uint256)[],uint8))": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimPositionByKeeper"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
}

export interface ClaimPositionByKeeperEventObject {
  account: string;
  pnl: BigNumber;
  interest: BigNumber;
  usedKeeperFee: BigNumber;
  position: PositionStructOutput;
}
export type ClaimPositionByKeeperEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, PositionStructOutput],
  ClaimPositionByKeeperEventObject
>;

export type ClaimPositionByKeeperEventFilter =
  TypedEventFilter<ClaimPositionByKeeperEvent>;

export interface LiquidateEventObject {
  account: string;
  pnl: BigNumber;
  interest: BigNumber;
  usedKeeperFee: BigNumber;
  position: PositionStructOutput;
}
export type LiquidateEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, PositionStructOutput],
  LiquidateEventObject
>;

export type LiquidateEventFilter = TypedEventFilter<LiquidateEvent>;

export interface MarketLiquidateFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketLiquidateFacetInterface;

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
     * Checks if a position is eligible for claim.
     * @param positionId The ID of the position to check.
     */
    checkClaimPosition(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Checks if a position is eligible for liquidation.
     * @param positionId The ID of the position to check.
     */
    checkLiquidation(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _liquidate: boolean }>;

    /**
     * This function can only be called by the chromatic liquidator contract.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotClaimablePosition` error if the position's close version is not in the past, indicating that it is not claimable.
     * @param keeper The address of the keeper claiming the position.
     * @param keeperFee The native token amount of the keeper's fee.
     * @param positionId The ID of the position to claim.
     */
    claimPosition(
      positionId: BigNumberish,
      keeper: string,
      keeperFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * This function can only be called by the chromatic liquidator contract.      The liquidation process checks if the position should be liquidated based on its profitability.      If the position does not meet the liquidation criteria, the function returns without performing any action.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws an `AlreadyClosedPosition` error if the position is already closed.
     * @param keeper The address of the keeper performing the liquidation.
     * @param keeperFee The native token amount of the keeper's fee.
     * @param positionId The ID of the position to liquidate.
     */
    liquidate(
      positionId: BigNumberish,
      keeper: string,
      keeperFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  /**
   * Checks if a position is eligible for claim.
   * @param positionId The ID of the position to check.
   */
  checkClaimPosition(
    positionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Checks if a position is eligible for liquidation.
   * @param positionId The ID of the position to check.
   */
  checkLiquidation(
    positionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * This function can only be called by the chromatic liquidator contract.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotClaimablePosition` error if the position's close version is not in the past, indicating that it is not claimable.
   * @param keeper The address of the keeper claiming the position.
   * @param keeperFee The native token amount of the keeper's fee.
   * @param positionId The ID of the position to claim.
   */
  claimPosition(
    positionId: BigNumberish,
    keeper: string,
    keeperFee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * This function can only be called by the chromatic liquidator contract.      The liquidation process checks if the position should be liquidated based on its profitability.      If the position does not meet the liquidation criteria, the function returns without performing any action.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws an `AlreadyClosedPosition` error if the position is already closed.
   * @param keeper The address of the keeper performing the liquidation.
   * @param keeperFee The native token amount of the keeper's fee.
   * @param positionId The ID of the position to liquidate.
   */
  liquidate(
    positionId: BigNumberish,
    keeper: string,
    keeperFee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Checks if a position is eligible for claim.
     * @param positionId The ID of the position to check.
     */
    checkClaimPosition(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Checks if a position is eligible for liquidation.
     * @param positionId The ID of the position to check.
     */
    checkLiquidation(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * This function can only be called by the chromatic liquidator contract.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotClaimablePosition` error if the position's close version is not in the past, indicating that it is not claimable.
     * @param keeper The address of the keeper claiming the position.
     * @param keeperFee The native token amount of the keeper's fee.
     * @param positionId The ID of the position to claim.
     */
    claimPosition(
      positionId: BigNumberish,
      keeper: string,
      keeperFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * This function can only be called by the chromatic liquidator contract.      The liquidation process checks if the position should be liquidated based on its profitability.      If the position does not meet the liquidation criteria, the function returns without performing any action.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws an `AlreadyClosedPosition` error if the position is already closed.
     * @param keeper The address of the keeper performing the liquidation.
     * @param keeperFee The native token amount of the keeper's fee.
     * @param positionId The ID of the position to liquidate.
     */
    liquidate(
      positionId: BigNumberish,
      keeper: string,
      keeperFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ClaimPositionByKeeper(address,int256,uint256,uint256,(uint256,uint256,uint256,int224,uint32,uint256,uint256,uint256,address,(uint16,uint256)[],uint8))"(
      account?: string | null,
      pnl?: BigNumberish | null,
      interest?: BigNumberish | null,
      usedKeeperFee?: null,
      position?: null
    ): ClaimPositionByKeeperEventFilter;
    ClaimPositionByKeeper(
      account?: string | null,
      pnl?: BigNumberish | null,
      interest?: BigNumberish | null,
      usedKeeperFee?: null,
      position?: null
    ): ClaimPositionByKeeperEventFilter;

    "Liquidate(address,int256,uint256,uint256,(uint256,uint256,uint256,int224,uint32,uint256,uint256,uint256,address,(uint16,uint256)[],uint8))"(
      account?: string | null,
      pnl?: BigNumberish | null,
      interest?: BigNumberish | null,
      usedKeeperFee?: null,
      position?: null
    ): LiquidateEventFilter;
    Liquidate(
      account?: string | null,
      pnl?: BigNumberish | null,
      interest?: BigNumberish | null,
      usedKeeperFee?: null,
      position?: null
    ): LiquidateEventFilter;
  };

  estimateGas: {
    /**
     * Checks if a position is eligible for claim.
     * @param positionId The ID of the position to check.
     */
    checkClaimPosition(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Checks if a position is eligible for liquidation.
     * @param positionId The ID of the position to check.
     */
    checkLiquidation(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * This function can only be called by the chromatic liquidator contract.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotClaimablePosition` error if the position's close version is not in the past, indicating that it is not claimable.
     * @param keeper The address of the keeper claiming the position.
     * @param keeperFee The native token amount of the keeper's fee.
     * @param positionId The ID of the position to claim.
     */
    claimPosition(
      positionId: BigNumberish,
      keeper: string,
      keeperFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * This function can only be called by the chromatic liquidator contract.      The liquidation process checks if the position should be liquidated based on its profitability.      If the position does not meet the liquidation criteria, the function returns without performing any action.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws an `AlreadyClosedPosition` error if the position is already closed.
     * @param keeper The address of the keeper performing the liquidation.
     * @param keeperFee The native token amount of the keeper's fee.
     * @param positionId The ID of the position to liquidate.
     */
    liquidate(
      positionId: BigNumberish,
      keeper: string,
      keeperFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Checks if a position is eligible for claim.
     * @param positionId The ID of the position to check.
     */
    checkClaimPosition(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Checks if a position is eligible for liquidation.
     * @param positionId The ID of the position to check.
     */
    checkLiquidation(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by the chromatic liquidator contract.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws a `NotClaimablePosition` error if the position's close version is not in the past, indicating that it is not claimable.
     * @param keeper The address of the keeper claiming the position.
     * @param keeperFee The native token amount of the keeper's fee.
     * @param positionId The ID of the position to claim.
     */
    claimPosition(
      positionId: BigNumberish,
      keeper: string,
      keeperFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by the chromatic liquidator contract.      The liquidation process checks if the position should be liquidated based on its profitability.      If the position does not meet the liquidation criteria, the function returns without performing any action.      Throws a `NotExistPosition` error if the requested position does not exist.      Throws an `AlreadyClosedPosition` error if the position is already closed.
     * @param keeper The address of the keeper performing the liquidation.
     * @param keeperFee The native token amount of the keeper's fee.
     * @param positionId The ID of the position to liquidate.
     */
    liquidate(
      positionId: BigNumberish,
      keeper: string,
      keeperFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
