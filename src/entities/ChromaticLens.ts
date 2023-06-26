import { getDeployedAddress, ChromaticLens__factory } from "../gen";
import { decodeTokenId, encodeTokenId } from "../utils/helpers";
import type { Client } from "../Client";
import { BigNumber, ethers } from "ethers";

export interface LiquidityBinResult {
  tradingFeeRate: number;
  clbValue: number;
  liquidity: BigNumber;
  freeLiquidity: BigNumber;
}

export interface OwnedLiquidityBinResult {
  tradingFeeRate: number;
  liquidity: BigNumber;
  freeLiquidity: BigNumber;
  clbBalance: BigNumber;
  clbTotalSupply: BigNumber;
  clbValue: number;
  removableRate: number;
}

export interface ClaimableLiquidityResult {
  tradingFeeRate: number;
  mintingTokenAmountRequested: BigNumber;
  mintingCLBTokenAmount: BigNumber;
  burningCLBTokenAmountRequested: BigNumber;
  burningCLBTokenAmount: BigNumber;
  burningTokenAmount: BigNumber;
}

export class ChromaticLens {
  constructor(private _client: Client) {}

  getContract(lensAddress?: string) {
    return ChromaticLens__factory.connect(
      lensAddress || getDeployedAddress("ChromaticLens", this._client.chainName),
      this._client.signer || this._client.provider
    );
  }

  /**
   * liquidity bins
   * @param marketAddress
   * @returns
   */
  async liquidityBins(marketAddress: string): Promise<LiquidityBinResult[]> {
    const totalLiquidityBins = await this.getContract().liquidityBinStatuses(marketAddress);
    const clbToken = await this._client.market().clbToken(marketAddress)
    const tokenIds = totalLiquidityBins.map((bin) => encodeTokenId(bin.tradingFeeRate));

    const totalSupplies = await clbToken.totalSupplyBatch(tokenIds);

    return totalLiquidityBins.map((bin, index) => {
      return {
        tradingFeeRate: bin.tradingFeeRate,
        clbValue:
          parseFloat(bin.liquidity.toString()) / parseFloat(totalSupplies[index].toString()),
        liquidity: bin.liquidity,
        freeLiquidity: bin.freeLiquidity,
      };
    });
  }

  async ownedLiquidityBins(
    marketAddress: string,
    ownerAddress?: string
  ): Promise<OwnedLiquidityBinResult[]> {
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
          parseFloat(ownedBin.binValue.toString()) / parseFloat(ownedBin.totalSupply.toString()),
        removableRate:
          parseFloat(targetTotalLiqBin.freeLiquidity.toString()) /
          parseFloat(targetTotalLiqBin.liquidity.toString()),
      };
    });

    return results.filter((bin) => bin.clbBalance.gt(0));
  }

  async claimableLiquidities(
    marketAddress: string,
    params: { tradingFeeRate: number; oracleVersion: BigNumber }[]
  ): Promise<ClaimableLiquidityResult[]> {
    const multicallParam = params.map(({ tradingFeeRate, oracleVersion }) =>
      this.getContract().interface.encodeFunctionData("claimableLiquidity", [
        marketAddress,
        tradingFeeRate,
        oracleVersion,
      ])
    );

    const encodedResponses = (await this.getContract().multicall(multicallParam)) as string[];
    const decodedReponses = encodedResponses.map((response) =>
      this.getContract().interface.decodeFunctionResult("claimableLiquidity", response)
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
  }
}
