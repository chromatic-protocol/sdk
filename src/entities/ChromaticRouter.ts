import { BigNumber, BigNumberish } from "ethers";
import { Client } from "../Client";

export interface RouterAddLiquidityParam {
  feeRate: BigNumberish;
  amount: BigNumberish;
}

export interface RouterOpenPositionParam {
  quantity: BigNumberish;
  leverage: BigNumberish;
  takerMargin: BigNumberish;
  makerMargin: BigNumberish;
  tradingFee: BigNumberish;
}

export interface RouterClosePositionParam {
  marketAdddress?: string;
  positionId: BigNumberish;
}
export interface RouterRemoveLiquidityParam {
  feeRate: BigNumberish;
  receipient?: string;
  clbTokenAmount: BigNumberish;
}

export class ChromaticRouter {
  _client: Client;
  constructor(client: Client) {
    this._client = client;
  }

  get routerContract() {
    return this._client.routerContract();
  }

  async openPosition(marketAddress: string, param: RouterOpenPositionParam) {
    const transaction = await this.routerContract.openPosition(
      marketAddress,
      BigNumber.from(param.quantity),
      BigNumber.from(param.leverage),
      BigNumber.from(param.takerMargin),
      BigNumber.from(param.makerMargin),
      BigNumber.from(param.tradingFee)
    );
    return transaction.wait();
  }

  async closePosition(marketAddress: string, param: RouterClosePositionParam) {
    const transaction = await this.routerContract.closePosition(marketAddress, param.positionId);
    return transaction.wait();
  }

  async addLiquidity(marketAddress: string, param: RouterAddLiquidityParam, receipient?: string) {
    return this.routerContract.addLiquidity(
      marketAddress,
      param.feeRate,
      param.amount,
      receipient || this._client.signer.getAddress()
    );
  }

  async addLiquidities(
    marketAddress: string,
    params: RouterAddLiquidityParam[],
    recipient?: string
  ) {
    const feeRates: BigNumberish[] = [];
    const amounts: BigNumberish[] = [];
    recipient = recipient || (await this._client.signer.getAddress());

    params.forEach((param) => {
      feeRates.push(param.feeRate);
      amounts.push(param.amount);
    });
    const tx = await this.routerContract.addLiquidityBatch(
      marketAddress,
      recipient,
      feeRates,
      amounts
    );
    return tx.wait();
  }

  async removeLiquidity(marketAddress: string, param: RouterRemoveLiquidityParam) {
    const tx = await this.routerContract.removeLiquidity(
      marketAddress,
      BigNumber.from(param.feeRate),
      BigNumber.from(param.clbTokenAmount),
      param.receipient || this._client.signer.getAddress()
    );
    return tx.wait();
  }

  async removeLiquidities(
    marketAdddress: string,
    params: RouterRemoveLiquidityParam[],
    receipient?: string
  ) {
    receipient = receipient || (await this._client.signer.getAddress());
    const contractParam = params.reduce(
      (contractParam, param) => {
        contractParam["clbTokenAmount"].push(param.clbTokenAmount);
        contractParam["feeRate"].push(param.feeRate);
        return contractParam;
      },
      {
        clbTokenAmount: [],
        feeRate: [],
      } as { clbTokenAmount: BigNumberish[]; feeRate: BigNumberish[] }
    );
    const tx = await this.routerContract.removeLiquidityBatch(
      marketAdddress,
      receipient,
      contractParam.feeRate,
      contractParam.clbTokenAmount
    );
    return tx.wait();
  }

  async claimLiquidity(marketAddress: string, receiptId: BigNumberish) {
    const tx = await this.routerContract.claimLiquidity(marketAddress, BigNumber.from(receiptId));
    return tx.wait();
  }

  async claimLiquidites(marketAddress: string, receiptIds: BigNumberish[]) {
    const tx = await this.routerContract.claimLiquidityBatch(marketAddress, receiptIds);
    return tx.wait();
  }

  async withdrawLiquidity(marketAddress: string, receiptId) {
    const tx = await this.routerContract.withdrawLiquidity(
      marketAddress,
      BigNumber.from(receiptId)
    );
    return tx.wait();
  }
}
