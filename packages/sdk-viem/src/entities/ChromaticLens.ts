import {
  Address,
  decodeFunctionResult,
  encodeFunctionData,
  getContract,
  zeroAddress
} from "viem";
import type { Client } from "../Client";
import { chromaticLensABI, chromaticLensAddress } from "../gen";
import {
  Contract,
  checkWalletClient,
  decodeTokenId,
  encodeTokenId,
  handleBytesError,
} from "../utils/helpers";

/**
 * Represents the result of a liquidity bin.
 */
export interface LiquidityBinResult {
  tradingFeeRate: number;
  clbValue: number;
  liquidity: bigint;
  freeLiquidity: bigint;
}

/**
 * Represents the result of an owned liquidity bin.
 */
export interface OwnedLiquidityBinResult {
  tradingFeeRate: number;
  liquidity: bigint;
  freeLiquidity: bigint;
  clbBalance: bigint;
  clbTotalSupply: bigint;
  clbValue: number;
  removableRate: number;
}

/**
 * Represents the result of a claimable liquidity.
 */
export interface ClaimableLiquidityResult {
  tradingFeeRate: number;
  mintingTokenAmountRequested: bigint;
  mintingCLBTokenAmount: bigint;
  burningCLBTokenAmountRequested: bigint;
  burningCLBTokenAmount: bigint;
  burningTokenAmount: bigint;
}

/**
 * A class representing Chromatic Lens, which provides access to liquidity-related functions.
 */
export class ChromaticLens {
  /**
   * Creates a new instance of ChromaticLens.
   * @param _client The Chromatic Client instance.
   */
  constructor(private _client: Client) {}

  private getContract(lensAddress?: Address): Contract<typeof chromaticLensABI> {
    return getContract({
      address:
        (chromaticLensAddress as Record<number, Address>)[
          this._client.publicClient?.chain?.id || 0
        ] || zeroAddress,
      abi: chromaticLensABI,
      publicClient: this._client.publicClient,
      walletClient: this._client.walletClient,
    });
  }

  /**
   * Retrieves the ChromaticLens contract.
   * @returns The ChromaticLens contract.
   */
  contracts() {
    return {
      lens: this.getContract(),
    };
  }

  /**
   * Retrieves the liquidity bins for a given market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @returns A promise that resolves to an array of LiquidityBinResult.
   */
  async liquidityBins(marketAddress: Address) {
    // : Promise<LiquidityBinResult[]> {
    return await handleBytesError(async () => {
      const market = this._client.market();
      const totalLiquidityBins = await this.getContract().read.liquidityBinStatuses([
        marketAddress,
      ]);
      const clbTokenContract = await market.contracts().clbToken(marketAddress);
      const tokenIds = totalLiquidityBins.map((bin) => encodeTokenId(bin.tradingFeeRate));

      const totalSupplies = await clbTokenContract.read.totalSupplyBatch([tokenIds]);
      return totalLiquidityBins.map((bin, index) => {
        return {
          tradingFeeRate: bin.tradingFeeRate,
          clbValue:
            totalSupplies[index] == BigInt(0)
              ? 0
              : Number(bin.liquidity.toString()) / Number(totalSupplies[index].toString()),
          liquidity: bin.liquidity,
          clbTokenTotalSupply: totalSupplies[index],
          freeLiquidity: bin.freeLiquidity,
        };
      });
    });
  }

  /**
   * Retrieves the owned liquidity bins for a given market and owner.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param ownerAddress The address of the liquidity owner.
   * @returns A promise that resolves to an array of OwnedLiquidityBinResult.
   */
  async ownedLiquidityBins(marketAddress: Address, ownerAddress?: Address) {
    return await handleBytesError(async () => {
      const lens = this.getContract();

      if (!ownerAddress) {
        checkWalletClient(this._client);
      }
      //
      const [totalLiquidityBins, ownedLiquidities] = await Promise.all([
        lens.read.liquidityBinStatuses([marketAddress]),
        lens.read.clbBalanceOf([
          marketAddress,
          ownerAddress ?? (await this._client.walletClient!.account!.address),
        ]),
      ]);

      // tokenId parsing then get tradingFee
      // data merge mapping by tradingFee
      const results = ownedLiquidities.map((ownedBin) => {
        const tradingFeeRate = decodeTokenId(ownedBin.tokenId);
        const targetTotalLiqBin = totalLiquidityBins.find(
          (bin) => bin.tradingFeeRate === tradingFeeRate
        )!;
        // totalSupplyBatch
        return {
          tradingFeeRate,
          liquidity: ownedBin.binValue,
          freeLiquidity: targetTotalLiqBin.freeLiquidity,
          clbBalance: ownedBin.balance,
          clbTotalSupply: ownedBin.totalSupply,
          clbValue:
            ownedBin.totalSupply == BigInt(0)
              ? 0
              : Number(ownedBin.binValue || 0) / Number(ownedBin.totalSupply),
          removableRate:
            targetTotalLiqBin.liquidity == BigInt(0)
              ? 0
              : Number(targetTotalLiqBin.freeLiquidity || 0) / Number(targetTotalLiqBin.liquidity),
        };
      });
      return results.filter((bin) => bin.clbBalance > BigInt(0));
    });
  }

  /**
   * Retrieves the claimable liquidities for a given market and parameters.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param params An array of objects containing tradingFeeRate and oracleVersion.
   * @returns A promise that resolves to an array of ClaimableLiquidityResult.
   */
  async claimableLiquidities(
    marketAddress: Address,
    params: { tradingFeeRate: number; oracleVersion: bigint }[]
  ) {
    return await handleBytesError(async () => {
      const multicallParam = params.map(({ tradingFeeRate, oracleVersion }) =>
        encodeFunctionData({
          abi: chromaticLensABI,
          functionName: "claimableLiquidity",
          args: [marketAddress, tradingFeeRate, oracleVersion],
        })
      );
      const encodedResponses = await this.contracts().lens.read.multicall([multicallParam]);
      const decodedReponses = encodedResponses.map((response) =>
        decodeFunctionResult({
          abi: chromaticLensABI,
          functionName: "claimableLiquidity",
          data: response,
        })
      );
      const results = decodedReponses.map((res, index) => {
        return {
          tradingFeeRate: params[index].tradingFeeRate,
          mintingTokenAmountRequested: res.mintingTokenAmountRequested,
          mintingCLBTokenAmount: res.mintingCLBTokenAmount,
          burningCLBTokenAmountRequested: res.burningCLBTokenAmountRequested,
          burningCLBTokenAmount: res.burningCLBTokenAmount,
          burningTokenAmount: res.burningTokenAmount,
        };
      });
      return results;
    });
  }

  /**
   * Retrieves the LP receipts for a given market and owner.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param owner The address of the LP owner.
   * @returns A promise that resolves to the LP receipts.
   */
  async lpReceipts(marketAddress: Address, owner?: Address) {
    return await handleBytesError(async () => {
      checkWalletClient(this._client);
      return await this.getContract().read.lpReceipts([
        marketAddress,
        owner === undefined ? this._client.walletClient.account!.address : owner!,
      ]);
    });
  }
}
