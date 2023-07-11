import type { Client } from "../Client";
import { ChromaticLens__factory, getDeployedAddress } from "../gen";
import { IMarketLiquidity } from "../gen/contracts/core/interfaces/IChromaticMarket";
import { decodeTokenId, encodeTokenId, handleBytesError } from "../utils/helpers";

/**
 * Represents the result of a liquidity bin.
 */
export interface LiquidityBinResult {
  tradingFeeRate: bigint;
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

      const totalSupplies = await clbToken.totalSupplyBatch(tokenIds);

      return totalLiquidityBins.map((bin, index) => {
        return {
          tradingFeeRate: bin.tradingFeeRate,
          clbValue:
            totalSupplies[index] == 0n
              ? 0
              : Number(bin.liquidity.toString()) / Number(totalSupplies[index].toString()),
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

      const totalLiquidityBins = await this.getContract().liquidityBinStatuses(marketAddress);
      const ownedLiquidities = await this.getContract().clbBalanceOf(
        marketAddress,
        ownerAddress ?? (await this._client.signer.getAddress())
      );

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
          liquidity: ownedBin.binValue,
          freeLiquidity: targetTotalLiqBin.freeLiquidity,
          clbBalance: ownedBin.balance,
          clbTotalSupply: ownedBin.totalSupply,
          clbValue:
            ownedBin.totalSupply == 0n
              ? 0
              : Number(ownedBin.binValue.toString() || 0) / Number(ownedBin.totalSupply.toString()),
          removableRate:
            targetTotalLiqBin.liquidity == 0n
              ? 0
              : Number(targetTotalLiqBin.freeLiquidity.toString() || 0) /
                Number(targetTotalLiqBin.liquidity.toString()),
        };
      });

      return results.filter((bin) => bin.clbBalance > 0n);
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
    params: { tradingFeeRate: number; oracleVersion: bigint }[]
  ): Promise<ClaimableLiquidityResult[]> {
    return await handleBytesError(async () => {
      const multicallParam = params.map(({ tradingFeeRate, oracleVersion }) =>
        this.getContract().interface.encodeFunctionData("claimableLiquidity", [
          marketAddress,
          tradingFeeRate,
          oracleVersion,
        ])
      );

      const encodedResponses = (await this.getContract().multicall(multicallParam)) as string[];
      const decodedReponses = encodedResponses
        .map((response) =>
          this.getContract().interface.decodeFunctionResult("claimableLiquidity", response)
        )
        .flat() as IMarketLiquidity.ClaimableLiquidityStructOutput[];

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
