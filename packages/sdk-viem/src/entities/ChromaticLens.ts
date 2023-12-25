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
import groupBy from "lodash/groupBy";
import { lpGraphSdk, subgraphSdk } from "../lib/graphql";
import { GetBlockNumberParameters } from "viem";
import {
  GetChromaticMarketBinStatusesQuery,
  LiquidityBinStatus,
} from "../lib/graphql/sdk/subgraph";
import { ClbTokenTotalSupply } from "../lib/graphql/sdk/position";
/**
 * Represents the result of a liquidity bin.
 */
export interface LiquidityBinResult {
  /** The trading fee rate for the liquidity bin*/
  tradingFeeRate: number;
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
 * Represents the result of a pending liquidity.
 */
export interface PendingLiquidityResult {
  /** The oracle version for pending liquidity */
  oracleVersion: bigint;
  /** The amount of pending settlement token for minting */
  mintingTokenAmountRequested: bigint;
  /** The amount of pending CLB tokens requested for burning */
  burningCLBTokenAmountRequested: bigint;
  /** The trading fee rate for the liquidity bin*/
  tradingFeeRate: number;
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
  // /** The actual amount of CLB tokens minted */
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
  findFromCLBTotalSupplies(bins: Partial<ClbTokenTotalSupply>[]) {
    return (tokenId: bigint) => {
      const result = bins.find((bin) => BigInt(bin.id || 0) === tokenId);
      return BigInt(result?.amount || 0n) || 0n;
    };
  }
  /**
   * Retrieves the liquidity bins for a given market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @returns A promise that resolves to an array of LiquidityBinResult.
   */
  async liquidityBins(marketAddress: Address) {
    return await handleBytesError(async () => {
      const { chromaticMarketBinStatuses: result, clbtokens: clbTokens } =
        await subgraphSdk.getChromaticMarketBinStatusesAndCLBMeta({
          market: marketAddress,
        });
      const [{ decimals: clbTokenDecimals }] = clbTokens;

      const [{ statuses, ...chromaticBinStatusMeta }] = result;
      const blockNumber = chromaticBinStatusMeta.blockNumber;

      const { clbtokenTotalSupplies } = await subgraphSdk.getCLBTokenTotalSupplies({ blockNumber });
      const totalAmountFinder = this.findFromCLBTotalSupplies(clbtokenTotalSupplies);
      return statuses.map((binStatus) => {
        const clbTotalSupply = totalAmountFinder(encodeTokenId(binStatus.tradingFeeRate));
        return {
          tradingFeeRate: binStatus.tradingFeeRate,
          clbValue:
            clbTotalSupply == 0n
              ? 0n
              : (BigInt(binStatus.binValue || 0n) * 10n ** BigInt(clbTokenDecimals)) /
                clbTotalSupply,
          liquidity: binStatus.liquidity,
          clbTokenTotalSupply: clbTotalSupply,
          freeLiquidity: binStatus.freeLiquidity,
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
      const { chromaticMarketBinStatuses: result, clbtokens: clbTokens } =
        await subgraphSdk.getChromaticMarketBinStatusesAndCLBMeta({
          market: marketAddress,
        });

      const [{ decimals: clbTokenDecimals }] = clbTokens;
      const [{ statuses: binStatuses, ...chromaticBinStatusMeta }] = result;
      const blockNumber = chromaticBinStatusMeta.blockNumber;
      const { clbtokenTotalSupplies } = await subgraphSdk.getCLBTokenTotalSupplies({ blockNumber });
      const totalAmountFinder = this.findFromCLBTotalSupplies(clbtokenTotalSupplies);
      const [ownedLiquidities] = await Promise.all([
        lens.read.clbBalanceOf([
          marketAddress,
          ownerAddress ?? this._client.walletClient!.account!.address,
        ]),
      ]);
      const results = ownedLiquidities.map((ownedLiquidity) => {
        const clbTotalSupply = totalAmountFinder(ownedLiquidity.tokenId);
        const tradingFeeRate = decodeTokenId(ownedLiquidity.tokenId);
        const liquidityStatus = binStatuses.find(
          (binStatus) => binStatus.tradingFeeRate === tradingFeeRate
        );
        return {
          // tokenId: ownedLiquidity.tokenId,
          tradingFeeRate: tradingFeeRate,
          liquidity: BigInt(liquidityStatus?.liquidity || 0n),
          binValue: BigInt(ownedLiquidity.binValue || 0n),
          freeLiquidity: BigInt(liquidityStatus?.freeLiquidity || 0n),
          clbTotalSupply,
          clbValue:
            clbTotalSupply == 0n
              ? 0n
              : (BigInt(ownedLiquidity.binValue || 0n) * 10n ** BigInt(clbTokenDecimals)) /
                clbTotalSupply,
          clbBalance: ownedLiquidity.balance,
        } satisfies OwnedLiquidityBinResult;
      });
      return results.filter((bin) => bin.clbBalance > 0n);
    });
  }

  /**
   * Retrieves the claimable liquidities for a given market and parameters.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param params An array of objects containing tradingFeeRate and oracleVersion.
   * @returns A promise that resolves to an object with mappings between tradingFee and oracleVersion.
   */
  async claimableLiquidities(
    marketAddress: Address,
    params: { tradingFeeRate: number; oracleVersion: bigint }[]
  ) {
    return await handleBytesError(async () => {
      //TODO use subgraph data?
      const groupedByOV = groupBy(params, (p) => p.oracleVersion);

      // Get claimable liquidities for each oracleVersion and tradingFeeRate
      const claimableLiquidities = await Promise.all(
        Object.entries(groupedByOV).map(async ([ov, params]) => {
          const tradingFees = new Set(params.map((param) => param.tradingFeeRate));
          const claimableLiquiditiesByOv = await this.getContract().read.claimableLiquidityBatch([
            marketAddress,
            Array.from(tradingFees),
            BigInt(ov),
          ]);

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
    });
  }

  /**
   * Retrieves the pending liquidities for a given market and trading fee rates.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param tradingFeeRates An array of tradingFeeRate.
   * @returns A promise that resolves to an array of PendingLiquidity.
   */
  async pendingLiquidityBatch(
    marketAddress: Address,
    tradingFeeRates: number[]
  ): Promise<Array<PendingLiquidityResult>> {
    return await handleBytesError(async () => {
      //TODO use subgraph data?
      const uniqTradingFeeRates = Array.from(new Set(tradingFeeRates));
      const pendingLiquidities = await this.getContract().read.pendingLiquidityBatch([
        marketAddress,
        uniqTradingFeeRates,
      ]);
      return uniqTradingFeeRates.map((feeRate, index) => ({
        tradingFeeRate: feeRate,
        ...pendingLiquidities[index],
      })) satisfies Array<PendingLiquidityResult>;
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
       //TODO use subgraph data?
      checkWalletClient(this._client);
      return await this.getContract().read.lpReceipts([
        marketAddress,
        owner === undefined ? this._client.walletClient.account!.address : owner!,
      ]);
    });
  }
}
