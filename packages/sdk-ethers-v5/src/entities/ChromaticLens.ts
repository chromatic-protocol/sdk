import { BigNumber } from "ethers";
import type { Client } from "../Client";
import { ChromaticLens__factory, getDeployedAddress } from "../gen";
import { IMarketLiquidity } from "../gen/contracts/core/interfaces/IChromaticMarket";
import { decodeTokenId, encodeTokenId, handleBytesError } from "../utils/helpers";

/**
 * Represents the result of a liquidity bin.
 */
export interface LiquidityBinResult {
  tradingFeeRate: number;
  clbValue: BigNumber;
  liquidity: BigNumber;
  freeLiquidity: BigNumber;
}

/**
 * Represents the result of an owned liquidity bin.
 */
export interface OwnedLiquidityBinResult {
  tradingFeeRate: number;
  liquidity: BigNumber;
  freeLiquidity: BigNumber;
  clbBalance: BigNumber;
  clbTotalSupply: BigNumber;
  clbValue: BigNumber;
  removableRate: BigNumber;
}

/**
 * Represents the result of a claimable liquidity.
 */
export interface ClaimableLiquidityResult {
  tradingFeeRate: number;
  mintingTokenAmountRequested: BigNumber;
  mintingCLBTokenAmount: BigNumber;
  burningCLBTokenAmountRequested: BigNumber;
  burningCLBTokenAmount: BigNumber;
  burningTokenAmount: BigNumber;
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
      const tokenIds = totalLiquidityBins.map((bin) => encodeTokenId(bin.tradingFeeRate));

      const [totalSupplies, clbTokenDecimals] = await Promise.all([
        clbToken.totalSupplyBatch(tokenIds),
        clbToken.decimals(),
      ]);

      return totalLiquidityBins.map((bin, index) => {
        return {
          tradingFeeRate: bin.tradingFeeRate,
          clbValue: totalSupplies[index].isZero()
            ? BigNumber.from(0)
            : bin.liquidity.mul(BigNumber.from(10 ** clbTokenDecimals)).div(totalSupplies[index]),
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
          (bin) => bin.tradingFeeRate === tradingFeeRate
        )!;

        // totalSupplyBatch

        return {
          tradingFeeRate,
          liquidity: ownedBin.binValue,
          freeLiquidity: targetTotalLiqBin.freeLiquidity,
          clbBalance: ownedBin.balance,
          clbTotalSupply: ownedBin.totalSupply,
          clbValue: ownedBin.totalSupply.isZero()
            ? BigNumber.from(0)
            : (ownedBin.binValue || BigNumber.from(0))
                .mul(10 ** clbTokenDecimals)
                .div(ownedBin.totalSupply),
          removableRate: targetTotalLiqBin.liquidity.isZero()
            ? BigNumber.from(0)
            : targetTotalLiqBin.freeLiquidity
                .mul(clbTokenDecimals)
                .div(targetTotalLiqBin.liquidity),
        } satisfies OwnedLiquidityBinResult;
      });

      return results.filter((bin) => bin.clbBalance.gt(0));
    }, this._client.provider);
  }

  /**
   * Retrieves the claimable liquidities for a given market and parameters.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param params An array of objects containing tradingFeeRate and oracleVersion.
   * @returns A promise that resolves to an array of ClaimableLiquidityResult.
   */
  async claimableLiquidities(
    marketAddress: string,
    params: { tradingFeeRate: number; oracleVersion: BigNumber }[]
  ): Promise<ClaimableLiquidityResult[]> {
    return await handleBytesError(async () => {
      return await Promise.all(
        params.map(async ({ tradingFeeRate, oracleVersion }) => {
          const res = await this.getContract().claimableLiquidity(
            marketAddress,
            tradingFeeRate,
            oracleVersion
          );

          return {
            tradingFeeRate,
            ...res,
          };
        })
      );
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
        owner === undefined ? await this._client.signer.getAddress() : owner!
      );
    }, this._client.provider);
  }
}
