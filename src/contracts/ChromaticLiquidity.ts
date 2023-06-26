import { BigNumber, BigNumberish, Signer } from "ethers";
import type { Client } from "../Client";
export interface AddLiquidityParam {
  feeRate: BigNumberish;
  amount: BigNumberish;
  recipient?: string;
}
export class ChromaticLiquidity {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }
  get routerContract() {
    return this.client.routerContract();
  }
  get marketContractAddress() {
    return this.client.currentMarket().contract.address;
  }

  async addLiquidity(param: AddLiquidityParam) {
    return this.routerContract.addLiquidity(
      this.marketContractAddress,
      param.feeRate,
      param.amount,
      param.recipient
    );
  }

  async addLiquidities(params: AddLiquidityParam[]) {
    const feeRates = [];
    const amounts = [];
    const recipients = [];
    params.forEach((param) => {
      feeRates.push(param.feeRate);
      amounts.push(param.amount);
      recipients.push(param.recipient);
    });
    return this.routerContract.addLiquidityBatch(
      this.marketContractAddress,
      feeRates,
      amounts,
      recipients
    );
  }
  async removeLiquidity(feeRate: BigNumberish, clbTokenAmount: BigNumberish) {
    return this.routerContract.removeLiquidity(
      this.marketContractAddress,
      BigNumber.from(feeRate),
      BigNumber.from(clbTokenAmount),
      this.client.signer.getAddress()
    );
  }

  async claimLiquidity(receiptId: BigNumberish) {
    return this.routerContract.claimLiquidity(
      this.marketContractAddress,
      BigNumber.from(receiptId)
    );
  }

  async withdrawLiquidity(receiptId) {
    return this.routerContract.withdrawLiquidity(
      this.marketContractAddress,
      BigNumber.from(receiptId)
    );
  }
}
