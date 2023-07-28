import groupBy from "lodash/groupBy";
import type { Client } from "../Client";
import { ChromaticLens__factory, getDeployedAddress } from "../gen";
import { IMarketLiquidity } from "../gen/contracts/core/interfaces/IChromaticMarket";
import { decodeTokenId, encodeTokenId, handleBytesError } from "../utils/helpers";

/**
 * Represents the result of a liquidity bin.
 */
export interface LiquidityBinResult {
  /** The trading fee rate for the liquidity bin*/
  tradingFeeRate: bigint;
  /**
   * The current value per one CLB token, which includes decimal points.
   * The unrealized profit or loss of the position and adds it to the total value.
   * Additionally, it includes the pending bin share from the market's vault
   */
  clbValue: bigint;
  /** The total liquidity amount (settlement token) for the specified trading fee rate */
  liquidity: bigint;
  /** The available (free) liquidity amount (settlement token) for the specified trading fee rate */
  freeLiquidity: bigint;
}

/**
 * Represents the result of an owned liquidity bin.
 */
export interface OwnedLiquidityBinResult {
  /** The trading fee rate for the liquidity bin*/
  tradingFeeRate: number;
  /** The total liquidity amount (settlement token) for the specified trading fee rate */
  liquidity: bigint;
  /** The available (free) liquidity amount (settlement token) for the specified trading fee rate */
  freeLiquidity: bigint;
  /** The balance of CLB tokens owned by the owner for the specified trading fee rate */
  clbBalance: bigint;
  /** The total supply of CLB tokens for the specified trading fee rate */
  clbTotalSupply: bigint;
  /**
   * The current value per one CLB token, which includes decimal points.
   * The unrealized profit or loss of the position and adds it to the total value.
   * Additionally, it includes the pending bin share from the market's vault
   */
  clbValue: bigint;
  /**
   * The current value of the bin for the specified trading fee rate.
   * The unrealized profit or loss of the position and adds it to the total value.
   * Additionally, it includes the pending bin share from the market's vault
   */
  binValue: bigint;
}

/**
 * Represents the result of a claimable liquidity.
 */
export interface ClaimableLiquidityResult {
  /** The amount of settlement tokens requested for minting */
  mintingTokenAmountRequested: bigint;
  /** The actual amount of CLB tokens minted */
  mintingCLBTokenAmount: bigint;
  /** The amount of CLB tokens requested for burning */
  burningCLBTokenAmountRequested: bigint;
  /** The actual amount of CLB tokens burned */
  burningCLBTokenAmount: bigint;
  /** The amount of settlement tokens equal in value to the burned CLB tokens */
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

  private getContract(lensAddress?: string) {
    return ChromaticLens__factory.connect(
      lensAddress || getDeployedAddress("ChromaticLens", this._client.chainName),
      this._client.signer || this._client.provider
    );
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
  async liquidityBins(marketAddress: string): Promise<LiquidityBinResult[]> {
    return await handleBytesError(async () => {
      const totalLiquidityBins = await this.getContract().liquidityBinStatuses(marketAddress);
      const clbToken = await this._client.market().clbToken(marketAddress);
      const tokenIds = totalLiquidityBins.map((bin) => encodeTokenId(Number(bin.tradingFeeRate)));

      const [totalSupplies, clbTokenDecimals] = await Promise.all([
        clbToken.totalSupplyBatch(tokenIds),
        clbToken.decimals(),
      ]);

      return totalLiquidityBins.map((bin, index) => {
        return {
          tradingFeeRate: bin.tradingFeeRate,
          clbValue:
            totalSupplies[index] == 0n
              ? 0n
              : (bin.binValue * 10n ** clbTokenDecimals) / totalSupplies[index],
          liquidity: bin.liquidity,
          clbTokenTotalSupply: totalSupplies[index],
          freeLiquidity: bin.freeLiquidity,
        };
      });
    }, this._client.provider);
  }

  /**
   * Retrieves the owned liquidity bins for a given market and owner.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param ownerAddress The address of the liquidity owner.
   * @returns A promise that resolves to an array of OwnedLiquidityBinResult.
   */
  async ownedLiquidityBins(
    marketAddress: string,
    ownerAddress?: string
  ): Promise<OwnedLiquidityBinResult[]> {
    return await handleBytesError(async () => {
      if (!ownerAddress && !this._client.signer) {
        throw new Error("signer is required");
      }

      //
      const clbToken = await this._client.market().clbToken(marketAddress);
      const [clbTokenDecimals, totalLiquidityBins, ownedLiquidities] = await Promise.all([
        clbToken.decimals(),
        this.getContract().liquidityBinStatuses(marketAddress),
        this.getContract().clbBalanceOf(
          marketAddress,
          ownerAddress ?? (await this._client.signer.getAddress())
        ),
      ]);

      // tokenId parsing then get tradingFee
      // data merge mapping by tradingFee

      const results = ownedLiquidities.map((ownedBin) => {
        const tradingFeeRate = decodeTokenId(ownedBin.tokenId);
        const targetTotalLiqBin = totalLiquidityBins.find(
          (bin) => bin.tradingFeeRate == BigInt(tradingFeeRate)
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
    }, this._client.provider);
  }

  /**
   * Retrieves the claimable liquidities for a given market and parameters.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param params An array of objects containing tradingFeeRate and oracleVersion.
   * @returns A promise that resolves to an object with mappings between tradingFee and oracleVersion.
   */
  async claimableLiquidities(
    marketAddress: string,
    params: { tradingFeeRate: number; oracleVersion: bigint }[]
  ): Promise<{
    [tradingFeeRate: string | number]: {
      [oracleVersion: string | number]: ClaimableLiquidityResult;
    };
  }> {
    return await handleBytesError(async () => {
      const groupedByOV = groupBy(params, (p) => p.oracleVersion);

      // Get claimable liquidities for each oracleVersion and tradingFeeRate
      const claimableLiquidities = await Promise.all(
        Object.entries(groupedByOV).map(async ([ov, params]) => {
          const tradingFees = new Set(params.map((param) => param.tradingFeeRate));
          const claimableLiquiditiesByOv = await this.getContract().claimableLiquidityBatch(
            marketAddress,
            Array.from(tradingFees),
            BigInt(ov)
          );

          return Array.from(tradingFees).map((fee, index) => {
            return {
              oracleVersion: BigInt(ov),
              ...claimableLiquiditiesByOv[index],
              tradingFeeRate: fee,
            };
          });
        })
      );

      const groupedByFeeAndOV = claimableLiquidities.flat(1).reduce((acc, liq) => {
        acc[`${liq.tradingFeeRate}_${liq.oracleVersion}`] = { ...liq };
        return acc;
      }, {} as { [tradingFeeAndOracleVersion: string]: ClaimableLiquidityResult });

      const result = Object.entries(groupedByFeeAndOV).reduce((acc, [key, value]) => {
        const [tradingFeeRate, oracleVersion] = key.split("_");
        if (!acc[tradingFeeRate]) {
          acc[tradingFeeRate] = {};
        }
        acc[tradingFeeRate][oracleVersion] = value;
        return acc;
      }, {} as { [tradingFeeRate: string | number]: { [oracleVersion: string | number]: ClaimableLiquidityResult } });

      return result;
    }, this._client.provider);
  }

  /**
   * Retrieves the pending liquidities for a given market and trading fee rates.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param tradingFeeRates An array of tradingFeeRate.
   * @returns A promise that resolves to an array of PendingLiquidity.
   */
  async pendingLiquidityBatch(marketAddress: string, tradingFeeRates: number[]) {
    return await handleBytesError(async () => {
      return await this.getContract().pendingLiquidityBatch(marketAddress, tradingFeeRates);
    }, this._client.provider);
  }

  /**
   * Retrieves the LP receipts for a given market and owner.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param owner The address of the LP owner.
   * @returns A promise that resolves to the LP receipts.
   */
  async lpReceipts(marketAddress: string, owner?: string) {
    return await handleBytesError(async () => {
      return await this.getContract().lpReceipts(
        marketAddress,
        owner === undefined ? this._client.signer.getAddress() : owner!
      );
    }, this._client.provider);
  }
}
