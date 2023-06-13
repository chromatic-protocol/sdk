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
  PromiseOrValue,
} from "../../common";

export type LpReceiptStruct = {
  id: PromiseOrValue<BigNumberish>;
  oracleVersion: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
  action: PromiseOrValue<BigNumberish>;
  tradingFeeRate: PromiseOrValue<BigNumberish>;
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

export declare namespace ChromaticLens {
  export type LiquidityBinValueStruct = {
    tradingFeeRate: PromiseOrValue<BigNumberish>;
    value: PromiseOrValue<BigNumberish>;
  };

  export type LiquidityBinValueStructOutput = [number, BigNumber] & {
    tradingFeeRate: number;
    value: BigNumber;
  };

  export type LiquidityBinsParamStruct = {
    tradingFeeRate: PromiseOrValue<BigNumberish>;
    oracleVersion: PromiseOrValue<BigNumberish>;
  };

  export type LiquidityBinsParamStructOutput = [number, BigNumber] & {
    tradingFeeRate: number;
    oracleVersion: BigNumber;
  };

  export type LiquidityBinStruct = {
    tradingFeeRate: PromiseOrValue<BigNumberish>;
    liquidity: PromiseOrValue<BigNumberish>;
    freeVolume: PromiseOrValue<BigNumberish>;
    clbTokenAmount: PromiseOrValue<BigNumberish>;
    burningAmount: PromiseOrValue<BigNumberish>;
    tokenAmount: PromiseOrValue<BigNumberish>;
  };

  export type LiquidityBinStructOutput = [
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tradingFeeRate: number;
    liquidity: BigNumber;
    freeVolume: BigNumber;
    clbTokenAmount: BigNumber;
    burningAmount: BigNumber;
    tokenAmount: BigNumber;
  };
}

export declare namespace IOracleProvider {
  export type OracleVersionStruct = {
    version: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
  };

  export type OracleVersionStructOutput = [BigNumber, BigNumber, BigNumber] & {
    version: BigNumber;
    timestamp: BigNumber;
    price: BigNumber;
  };
}

export interface ChromaticLensInterface extends utils.Interface {
  functions: {
    "calculateCLBTokenMintingBatch(address,int16[],uint256[])": FunctionFragment;
    "calculateCLBTokenValueBatch(address,int16[],uint256[])": FunctionFragment;
    "liquidityBinValue(address,int16[])": FunctionFragment;
    "liquidityBins(address,(int16,uint256)[])": FunctionFragment;
    "lpReceipts(address,uint256[])": FunctionFragment;
    "oracleAtVersions(address,uint256[])": FunctionFragment;
    "totalSupplies(address,int16[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calculateCLBTokenMintingBatch"
      | "calculateCLBTokenValueBatch"
      | "liquidityBinValue"
      | "liquidityBins"
      | "lpReceipts"
      | "oracleAtVersions"
      | "totalSupplies"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculateCLBTokenMintingBatch",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateCLBTokenValueBatch",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBinValue",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBins",
    values: [PromiseOrValue<string>, ChromaticLens.LiquidityBinsParamStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "lpReceipts",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleAtVersions",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplies",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateCLBTokenMintingBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateCLBTokenValueBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBinValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lpReceipts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleAtVersions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplies",
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
     * Calculates the amount of CLB tokens to be minted for each trading fee rate and specified amount in the given Chromatic market.
     * @param amounts An array of specified amounts.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    calculateCLBTokenMintingBatch(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { results: BigNumber[] }>;

    /**
     * Calculates the value of CLB tokens for each trading fee rate and CLB token amount in the given Chromatic market.
     * @param clbTokenAmounts An array of CLB token amounts.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    calculateCLBTokenValueBatch(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      clbTokenAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { results: BigNumber[] }>;

    /**
     * Retrieves the liquidity bin values for the specified trading fee rates in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    liquidityBinValue(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [ChromaticLens.LiquidityBinValueStructOutput[]] & {
        results: ChromaticLens.LiquidityBinValueStructOutput[];
      }
    >;

    liquidityBins(
      market: PromiseOrValue<string>,
      params: ChromaticLens.LiquidityBinsParamStruct[],
      overrides?: CallOverrides
    ): Promise<
      [ChromaticLens.LiquidityBinStructOutput[]] & {
        results: ChromaticLens.LiquidityBinStructOutput[];
      }
    >;

    /**
     * Retrieves the LP receipts for the specified receipt IDs in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param receiptIds An array of receipt IDs.
     */
    lpReceipts(
      market: PromiseOrValue<string>,
      receiptIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[LpReceiptStructOutput[]] & { result: LpReceiptStructOutput[] }>;

    /**
     * Retrieves the Oracle versions for the specified oracle versions in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param oracleVersions An array of Oracle versions.
     */
    oracleAtVersions(
      market: PromiseOrValue<string>,
      oracleVersions: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [IOracleProvider.OracleVersionStructOutput[]] & {
        results: IOracleProvider.OracleVersionStructOutput[];
      }
    >;

    /**
     * Retrieves the total supply of CLB tokens for each trading fee rate in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    totalSupplies(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { supplies: BigNumber[] }>;
  };

  /**
   * Calculates the amount of CLB tokens to be minted for each trading fee rate and specified amount in the given Chromatic market.
   * @param amounts An array of specified amounts.
   * @param market The address of the Chromatic market contract.
   * @param tradingFeeRates An array of trading fee rates.
   */
  calculateCLBTokenMintingBatch(
    market: PromiseOrValue<string>,
    tradingFeeRates: PromiseOrValue<BigNumberish>[],
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Calculates the value of CLB tokens for each trading fee rate and CLB token amount in the given Chromatic market.
   * @param clbTokenAmounts An array of CLB token amounts.
   * @param market The address of the Chromatic market contract.
   * @param tradingFeeRates An array of trading fee rates.
   */
  calculateCLBTokenValueBatch(
    market: PromiseOrValue<string>,
    tradingFeeRates: PromiseOrValue<BigNumberish>[],
    clbTokenAmounts: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Retrieves the liquidity bin values for the specified trading fee rates in the given Chromatic market.
   * @param market The address of the Chromatic market contract.
   * @param tradingFeeRates An array of trading fee rates.
   */
  liquidityBinValue(
    market: PromiseOrValue<string>,
    tradingFeeRates: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<ChromaticLens.LiquidityBinValueStructOutput[]>;

  liquidityBins(
    market: PromiseOrValue<string>,
    params: ChromaticLens.LiquidityBinsParamStruct[],
    overrides?: CallOverrides
  ): Promise<ChromaticLens.LiquidityBinStructOutput[]>;

  /**
   * Retrieves the LP receipts for the specified receipt IDs in the given Chromatic market.
   * @param market The address of the Chromatic market contract.
   * @param receiptIds An array of receipt IDs.
   */
  lpReceipts(
    market: PromiseOrValue<string>,
    receiptIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<LpReceiptStructOutput[]>;

  /**
   * Retrieves the Oracle versions for the specified oracle versions in the given Chromatic market.
   * @param market The address of the Chromatic market contract.
   * @param oracleVersions An array of Oracle versions.
   */
  oracleAtVersions(
    market: PromiseOrValue<string>,
    oracleVersions: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<IOracleProvider.OracleVersionStructOutput[]>;

  /**
   * Retrieves the total supply of CLB tokens for each trading fee rate in the given Chromatic market.
   * @param market The address of the Chromatic market contract.
   * @param tradingFeeRates An array of trading fee rates.
   */
  totalSupplies(
    market: PromiseOrValue<string>,
    tradingFeeRates: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    /**
     * Calculates the amount of CLB tokens to be minted for each trading fee rate and specified amount in the given Chromatic market.
     * @param amounts An array of specified amounts.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    calculateCLBTokenMintingBatch(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Calculates the value of CLB tokens for each trading fee rate and CLB token amount in the given Chromatic market.
     * @param clbTokenAmounts An array of CLB token amounts.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    calculateCLBTokenValueBatch(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      clbTokenAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Retrieves the liquidity bin values for the specified trading fee rates in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    liquidityBinValue(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<ChromaticLens.LiquidityBinValueStructOutput[]>;

    liquidityBins(
      market: PromiseOrValue<string>,
      params: ChromaticLens.LiquidityBinsParamStruct[],
      overrides?: CallOverrides
    ): Promise<ChromaticLens.LiquidityBinStructOutput[]>;

    /**
     * Retrieves the LP receipts for the specified receipt IDs in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param receiptIds An array of receipt IDs.
     */
    lpReceipts(
      market: PromiseOrValue<string>,
      receiptIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<LpReceiptStructOutput[]>;

    /**
     * Retrieves the Oracle versions for the specified oracle versions in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param oracleVersions An array of Oracle versions.
     */
    oracleAtVersions(
      market: PromiseOrValue<string>,
      oracleVersions: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<IOracleProvider.OracleVersionStructOutput[]>;

    /**
     * Retrieves the total supply of CLB tokens for each trading fee rate in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    totalSupplies(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    /**
     * Calculates the amount of CLB tokens to be minted for each trading fee rate and specified amount in the given Chromatic market.
     * @param amounts An array of specified amounts.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    calculateCLBTokenMintingBatch(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Calculates the value of CLB tokens for each trading fee rate and CLB token amount in the given Chromatic market.
     * @param clbTokenAmounts An array of CLB token amounts.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    calculateCLBTokenValueBatch(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      clbTokenAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the liquidity bin values for the specified trading fee rates in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    liquidityBinValue(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidityBins(
      market: PromiseOrValue<string>,
      params: ChromaticLens.LiquidityBinsParamStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the LP receipts for the specified receipt IDs in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param receiptIds An array of receipt IDs.
     */
    lpReceipts(
      market: PromiseOrValue<string>,
      receiptIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the Oracle versions for the specified oracle versions in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param oracleVersions An array of Oracle versions.
     */
    oracleAtVersions(
      market: PromiseOrValue<string>,
      oracleVersions: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Retrieves the total supply of CLB tokens for each trading fee rate in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    totalSupplies(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Calculates the amount of CLB tokens to be minted for each trading fee rate and specified amount in the given Chromatic market.
     * @param amounts An array of specified amounts.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    calculateCLBTokenMintingBatch(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Calculates the value of CLB tokens for each trading fee rate and CLB token amount in the given Chromatic market.
     * @param clbTokenAmounts An array of CLB token amounts.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    calculateCLBTokenValueBatch(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      clbTokenAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the liquidity bin values for the specified trading fee rates in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    liquidityBinValue(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidityBins(
      market: PromiseOrValue<string>,
      params: ChromaticLens.LiquidityBinsParamStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the LP receipts for the specified receipt IDs in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param receiptIds An array of receipt IDs.
     */
    lpReceipts(
      market: PromiseOrValue<string>,
      receiptIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the Oracle versions for the specified oracle versions in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param oracleVersions An array of Oracle versions.
     */
    oracleAtVersions(
      market: PromiseOrValue<string>,
      oracleVersions: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Retrieves the total supply of CLB tokens for each trading fee rate in the given Chromatic market.
     * @param market The address of the Chromatic market contract.
     * @param tradingFeeRates An array of trading fee rates.
     */
    totalSupplies(
      market: PromiseOrValue<string>,
      tradingFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
