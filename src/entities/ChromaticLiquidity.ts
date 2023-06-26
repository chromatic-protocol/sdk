import { BigNumber, BigNumberish, Signer } from "ethers";
import type { Client } from "../Client";

export class ChromaticLiquidity {
  _client: Client;

  constructor(client: Client) {
    this._client = client;
  }
  get routerContract() {
    return this._client.routerContract();
  }
  get marketContractAddress() {
    return this._client.currentMarket().contract.address;
  }

  // FIXME use core contract without router
  async addLiquidity(param) {
    // return this.routerContract.addLiquidity(
    //   this.marketContractAddress,
    //   param.feeRate,
    //   param.amount,
    //   param.recipient
    // );
  }

  // FIXME use core contract without router
  // async addLiquidities(params) {
  //   //TODO change to use multicall
  //   const feeRates = [];
  //   const amounts = [];
  //   const recipients = [];
  //   params.forEach((param) => {
  //     feeRates.push(param.feeRate);
  //     amounts.push(param.amount);
  //     recipients.push(param.recipient);
  //   });
  //   return this.routerContract.addLiquidityBatch(
  //     this.marketContractAddress,
  //     recipients
  //     feeRates,
  //     amounts,
      
  //   );
  // }

  // FIXME use core contract without router
  async removeLiquidity(feeRate: BigNumberish, clbTokenAmount: BigNumberish) {
    return this.routerContract.removeLiquidity(
      this.marketContractAddress,
      BigNumber.from(feeRate),
      BigNumber.from(clbTokenAmount),
      this._client.signer.getAddress()
    );
  }

  // FIXME use core contract without router
  async claimLiquidity(receiptId: BigNumberish, waitForTransaction = true) {
    const receipt = this.routerContract.claimLiquidity(
      this.marketContractAddress,
      BigNumber.from(receiptId)
    );
    if (waitForTransaction) {
      return (await receipt).wait();
    }
    return receipt;
  }

  // FIXME use core contract without router
  async withdrawLiquidity(receiptId) {
    return this.routerContract.withdrawLiquidity(
      this.marketContractAddress,
      BigNumber.from(receiptId)
    );
  }
}
