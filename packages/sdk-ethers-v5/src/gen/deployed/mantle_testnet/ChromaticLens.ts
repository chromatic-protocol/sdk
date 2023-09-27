/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export type ClaimableLiquidityStruct = {
  mintingTokenAmountRequested: BigNumberish;
  mintingCLBTokenAmount: BigNumberish;
  burningCLBTokenAmountRequested: BigNumberish;
  burningCLBTokenAmount: BigNumberish;
  burningTokenAmount: BigNumberish;
};

export type ClaimableLiquidityStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  mintingTokenAmountRequested: BigNumber;
  mintingCLBTokenAmount: BigNumber;
  burningCLBTokenAmountRequested: BigNumber;
  burningCLBTokenAmount: BigNumber;
  burningTokenAmount: BigNumber;
};

export type LiquidityBinStatusStruct = {
  liquidity: BigNumberish;
  freeLiquidity: BigNumberish;
  binValue: BigNumberish;
  tradingFeeRate: BigNumberish;
};

export type LiquidityBinStatusStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  number
] & {
  liquidity: BigNumber;
  freeLiquidity: BigNumber;
  binValue: BigNumber;
  tradingFeeRate: number;
};

export type LpReceiptStruct = {
  id: BigNumberish;
  oracleVersion: BigNumberish;
  amount: BigNumberish;
  recipient: string;
  action: BigNumberish;
  tradingFeeRate: BigNumberish;
};

export type LpReceiptStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  number,
  number
] & {
  id: BigNumber;
  oracleVersion: BigNumber;
  amount: BigNumber;
  recipient: string;
  action: number;
  tradingFeeRate: number;
};

export type PendingLiquidityStruct = {
  oracleVersion: BigNumberish;
  mintingTokenAmountRequested: BigNumberish;
  burningCLBTokenAmountRequested: BigNumberish;
};

export type PendingLiquidityStructOutput = [BigNumber, BigNumber, BigNumber] & {
  oracleVersion: BigNumber;
  mintingTokenAmountRequested: BigNumber;
  burningCLBTokenAmountRequested: BigNumber;
};

export declare namespace ChromaticLens {
  export type CLBBalanceStruct = {
    tokenId: BigNumberish;
    balance: BigNumberish;
    totalSupply: BigNumberish;
    binValue: BigNumberish;
  };

  export type CLBBalanceStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenId: BigNumber;
    balance: BigNumber;
    totalSupply: BigNumber;
    binValue: BigNumber;
  };
}

export declare namespace IOracleProvider {
  export type OracleVersionStruct = {
    version: BigNumberish;
    timestamp: BigNumberish;
    price: BigNumberish;
  };

  export type OracleVersionStructOutput = [BigNumber, BigNumber, BigNumber] & {
    version: BigNumber;
    timestamp: BigNumber;
    price: BigNumber;
  };
}

export interface ChromaticLensInterface extends utils.Interface {
  functions: {
    "claimableLiquidity(address,int16,uint256)": FunctionFragment;
    "claimableLiquidityBatch(address,int16[],uint256)": FunctionFragment;
    "clbBalanceOf(address,address)": FunctionFragment;
    "liquidityBinStatuses(address)": FunctionFragment;
    "lpReceipts(address,address)": FunctionFragment;
    "oracleVersion(address,uint256)": FunctionFragment;
    "pendingLiquidity(address,int16)": FunctionFragment;
    "pendingLiquidityBatch(address,int16[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimableLiquidity"
      | "claimableLiquidityBatch"
      | "clbBalanceOf"
      | "liquidityBinStatuses"
      | "lpReceipts"
      | "oracleVersion"
      | "pendingLiquidity"
      | "pendingLiquidityBatch"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimableLiquidity",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableLiquidityBatch",
    values: [string, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "clbBalanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBinStatuses",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lpReceipts",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleVersion",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingLiquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingLiquidityBatch",
    values: [string, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimableLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableLiquidityBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "clbBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBinStatuses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lpReceipts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingLiquidityBatch",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ChromaticLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChromaticLensInterface;

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
     * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market.
     * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
     * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
     */
    claimableLiquidity(
      market: string,
      tradingFeeRate: BigNumberish,
      _oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ClaimableLiquidityStructOutput]>;

    /**
     * Retrieves the claimable liquidity information for a list of trading fee rates and a specific oracle version from the given Chromatic Market.
     * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
     */
    claimableLiquidityBatch(
      market: string,
      tradingFeeRates: BigNumberish[],
      _oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ClaimableLiquidityStructOutput[]]>;

    /**
     * Retrieves the CLB token balances for the specified owner in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param owner The address of the CLB token owner.
     */
    clbBalanceOf(
      market: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[ChromaticLens.CLBBalanceStructOutput[]]>;

    /**
     * Retrieves the liquidity bin statuses for the specified Chromatic Market.
     * @param market The Chromatic Market contract for which liquidity bin statuses are retrieved.
     */
    liquidityBinStatuses(
      market: string,
      overrides?: CallOverrides
    ): Promise<[LiquidityBinStatusStructOutput[]]>;

    /**
     * Retrieves the LP receipts for the specified owner in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param owner The address of the LP token owner.
     */
    lpReceipts(
      market: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[LpReceiptStructOutput[]] & { result: LpReceiptStructOutput[] }>;

    /**
     * Retrieves the OracleVersion for the specified oracle version in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param version An oracle versions.
     */
    oracleVersion(
      market: string,
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IOracleProvider.OracleVersionStructOutput]>;

    /**
     * Retrieves the pending liquidity information for a specific trading fee rate in the given Chromatic market.
     * @param market The Chromatic market from which to retrieve the pending liquidity information.
     * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
     */
    pendingLiquidity(
      market: string,
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[PendingLiquidityStructOutput]>;

    /**
     * Retrieves the pending liquidity information for a list of trading fee rates in the given Chromatic market.
     * @param market The Chromatic market from which to retrieve the pending liquidity information.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
     */
    pendingLiquidityBatch(
      market: string,
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[PendingLiquidityStructOutput[]]>;
  };

  /**
   * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market.
   * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
   * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
   * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
   */
  claimableLiquidity(
    market: string,
    tradingFeeRate: BigNumberish,
    _oracleVersion: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ClaimableLiquidityStructOutput>;

  /**
   * Retrieves the claimable liquidity information for a list of trading fee rates and a specific oracle version from the given Chromatic Market.
   * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
   * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
   */
  claimableLiquidityBatch(
    market: string,
    tradingFeeRates: BigNumberish[],
    _oracleVersion: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ClaimableLiquidityStructOutput[]>;

  /**
   * Retrieves the CLB token balances for the specified owner in the given Chromatic market.
   * @param market The address of the Chromatic market contract.
   * @param owner The address of the CLB token owner.
   */
  clbBalanceOf(
    market: string,
    owner: string,
    overrides?: CallOverrides
  ): Promise<ChromaticLens.CLBBalanceStructOutput[]>;

  /**
   * Retrieves the liquidity bin statuses for the specified Chromatic Market.
   * @param market The Chromatic Market contract for which liquidity bin statuses are retrieved.
   */
  liquidityBinStatuses(
    market: string,
    overrides?: CallOverrides
  ): Promise<LiquidityBinStatusStructOutput[]>;

  /**
   * Retrieves the LP receipts for the specified owner in the given Chromatic market.
   * @param market The address of the Chromatic market contract.
   * @param owner The address of the LP token owner.
   */
  lpReceipts(
    market: string,
    owner: string,
    overrides?: CallOverrides
  ): Promise<LpReceiptStructOutput[]>;

  /**
   * Retrieves the OracleVersion for the specified oracle version in the given Chromatic market.
   * @param market The address of the Chromatic market contract.
   * @param version An oracle versions.
   */
  oracleVersion(
    market: string,
    version: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IOracleProvider.OracleVersionStructOutput>;

  /**
   * Retrieves the pending liquidity information for a specific trading fee rate in the given Chromatic market.
   * @param market The Chromatic market from which to retrieve the pending liquidity information.
   * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
   */
  pendingLiquidity(
    market: string,
    tradingFeeRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<PendingLiquidityStructOutput>;

  /**
   * Retrieves the pending liquidity information for a list of trading fee rates in the given Chromatic market.
   * @param market The Chromatic market from which to retrieve the pending liquidity information.
   * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
   */
  pendingLiquidityBatch(
    market: string,
    tradingFeeRates: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<PendingLiquidityStructOutput[]>;

  callStatic: {
    /**
     * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market.
     * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
     * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
     */
    claimableLiquidity(
      market: string,
      tradingFeeRate: BigNumberish,
      _oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ClaimableLiquidityStructOutput>;

    /**
     * Retrieves the claimable liquidity information for a list of trading fee rates and a specific oracle version from the given Chromatic Market.
     * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
     */
    claimableLiquidityBatch(
      market: string,
      tradingFeeRates: BigNumberish[],
      _oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ClaimableLiquidityStructOutput[]>;

    /**
     * Retrieves the CLB token balances for the specified owner in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param owner The address of the CLB token owner.
     */
    clbBalanceOf(
      market: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<ChromaticLens.CLBBalanceStructOutput[]>;

    /**
     * Retrieves the liquidity bin statuses for the specified Chromatic Market.
     * @param market The Chromatic Market contract for which liquidity bin statuses are retrieved.
     */
    liquidityBinStatuses(
      market: string,
      overrides?: CallOverrides
    ): Promise<LiquidityBinStatusStructOutput[]>;

    /**
     * Retrieves the LP receipts for the specified owner in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param owner The address of the LP token owner.
     */
    lpReceipts(
      market: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<LpReceiptStructOutput[]>;

    /**
     * Retrieves the OracleVersion for the specified oracle version in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param version An oracle versions.
     */
    oracleVersion(
      market: string,
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IOracleProvider.OracleVersionStructOutput>;

    /**
     * Retrieves the pending liquidity information for a specific trading fee rate in the given Chromatic market.
     * @param market The Chromatic market from which to retrieve the pending liquidity information.
     * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
     */
    pendingLiquidity(
      market: string,
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PendingLiquidityStructOutput>;

    /**
     * Retrieves the pending liquidity information for a list of trading fee rates in the given Chromatic market.
     * @param market The Chromatic market from which to retrieve the pending liquidity information.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
     */
    pendingLiquidityBatch(
      market: string,
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PendingLiquidityStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    /**
     * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market.
     * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
     * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
     */
    claimableLiquidity(
      market: string,
      tradingFeeRate: BigNumberish,
      _oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the claimable liquidity information for a list of trading fee rates and a specific oracle version from the given Chromatic Market.
     * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
     */
    claimableLiquidityBatch(
      market: string,
      tradingFeeRates: BigNumberish[],
      _oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the CLB token balances for the specified owner in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param owner The address of the CLB token owner.
     */
    clbBalanceOf(
      market: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the liquidity bin statuses for the specified Chromatic Market.
     * @param market The Chromatic Market contract for which liquidity bin statuses are retrieved.
     */
    liquidityBinStatuses(
      market: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the LP receipts for the specified owner in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param owner The address of the LP token owner.
     */
    lpReceipts(
      market: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the OracleVersion for the specified oracle version in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param version An oracle versions.
     */
    oracleVersion(
      market: string,
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the pending liquidity information for a specific trading fee rate in the given Chromatic market.
     * @param market The Chromatic market from which to retrieve the pending liquidity information.
     * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
     */
    pendingLiquidity(
      market: string,
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the pending liquidity information for a list of trading fee rates in the given Chromatic market.
     * @param market The Chromatic market from which to retrieve the pending liquidity information.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
     */
    pendingLiquidityBatch(
      market: string,
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market.
     * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
     * @param tradingFeeRate The trading fee rate for which to retrieve the claimable liquidity.
     */
    claimableLiquidity(
      market: string,
      tradingFeeRate: BigNumberish,
      _oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the claimable liquidity information for a list of trading fee rates and a specific oracle version from the given Chromatic Market.
     * @param _oracleVersion The oracle version for which to retrieve the claimable liquidity.
     * @param market The Chromatic Market from which to retrieve the claimable liquidity information.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the claimable liquidity.
     */
    claimableLiquidityBatch(
      market: string,
      tradingFeeRates: BigNumberish[],
      _oracleVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the CLB token balances for the specified owner in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param owner The address of the CLB token owner.
     */
    clbBalanceOf(
      market: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the liquidity bin statuses for the specified Chromatic Market.
     * @param market The Chromatic Market contract for which liquidity bin statuses are retrieved.
     */
    liquidityBinStatuses(
      market: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the LP receipts for the specified owner in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param owner The address of the LP token owner.
     */
    lpReceipts(
      market: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the OracleVersion for the specified oracle version in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param version An oracle versions.
     */
    oracleVersion(
      market: string,
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the pending liquidity information for a specific trading fee rate in the given Chromatic market.
     * @param market The Chromatic market from which to retrieve the pending liquidity information.
     * @param tradingFeeRate The trading fee rate for which to retrieve the pending liquidity.
     */
    pendingLiquidity(
      market: string,
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the pending liquidity information for a list of trading fee rates in the given Chromatic market.
     * @param market The Chromatic market from which to retrieve the pending liquidity information.
     * @param tradingFeeRates The list of trading fee rates for which to retrieve the pending liquidity.
     */
    pendingLiquidityBatch(
      market: string,
      tradingFeeRates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}