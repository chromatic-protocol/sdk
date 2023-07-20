import { Address, getContract, zeroAddress } from "viem";
import type { Client } from "../Client";
import { chromaticLensABI, chromaticLensAddress, clbTokenABI } from "../gen";
import {
  checkWalletClient,
  decodeTokenId,
  encodeTokenId,
  handleBytesError,
} from "../utils/helpers";
import type { ContractChromaticLens } from "./types";
/**
 * Represents the result of a liquidity bin.
 */
export interface LiquidityBinResult {
  tradingFeeRate: number;
  clbValue: bigint;
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
  clbValue: bigint;
  binValue: bigint;
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

  private getContract(lensAddress?: Address): ContractChromaticLens {
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
    return await handleBytesError(async () => {
      const market = this._client.market();
      const totalLiquidityBins = await this.getContract().read.liquidityBinStatuses([
        marketAddress,
      ]);
      const clbTokenContract = await market.contracts().clbToken(marketAddress);
      const tokenIds = totalLiquidityBins.map((bin) => encodeTokenId(bin.tradingFeeRate));

      const [totalSupplies, clbTokenDecimals] = await Promise.all([
        clbTokenContract.read.totalSupplyBatch([tokenIds]),
        clbTokenContract.read.decimals(),
      ]);

      return totalLiquidityBins.map((bin, index) => {
        return {
          tradingFeeRate: bin.tradingFeeRate,
          clbValue:
            totalSupplies[index] == 0n
              ? 0n
              : (bin.liquidity * 10n ** BigInt(clbTokenDecimals)) / totalSupplies[index],
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

      const clbTokenContract = await this._client.market().contracts().clbToken(marketAddress);
      const [clbTokenDecimals, totalLiquidityBins, ownedLiquidities] = await Promise.all([
        clbTokenContract.read.decimals(),
        lens.read.liquidityBinStatuses([marketAddress]),
        lens.read.clbBalanceOf([
          marketAddress,
          ownerAddress ?? this._client.walletClient!.account!.address,
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
          liquidity: targetTotalLiqBin.liquidity,
          freeLiquidity: targetTotalLiqBin.freeLiquidity,
          binValue: ownedBin.binValue,
          clbTotalSupply: ownedBin.totalSupply,
          clbValue:
            ownedBin.totalSupply == 0n
              ? 0n
              : ((ownedBin.binValue || 0n) * 10n ** BigInt(clbTokenDecimals)) /
                ownedBin.totalSupply,
          clbBalance: ownedBin.balance,
        } satisfies OwnedLiquidityBinResult;
      });
      return results.filter((bin) => bin.clbBalance > 0n);
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
      return await Promise.all(
        params.map(async ({ tradingFeeRate, oracleVersion }) => {
          const res = await this.getContract().read.claimableLiquidity([
            marketAddress,
            tradingFeeRate,
            oracleVersion,
          ]);

          return {
            tradingFeeRate,
            ...res,
          };
        })
      );
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
