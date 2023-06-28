import { Provider } from "@ethersproject/providers";
import { BigNumber, BigNumberish, Signer, ethers } from "ethers";
import { Client } from "../Client";
import { ChromaticRouter__factory, getDeployedAddress } from "../gen";
import { logger } from "../utils/helpers";
export interface RouterAddLiquidityParam {
  feeRate: BigNumberish;
  amount: BigNumberish;
}

export interface RouterOpenPositionParam {
  quantity: BigNumberish;
  leverage: BigNumberish;
  takerMargin: BigNumberish;
  makerMargin: BigNumberish;
  maxAllowableTradingFee: BigNumberish;
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

  contracts() {
    return {
      router: (signerOrProvider?: Signer | Provider) => {
        return ChromaticRouter__factory.connect(
          getDeployedAddress("ChromaticRouter", this._client.chainName),
          signerOrProvider || this._client.signer || this._client.provider
        );
      },
    };
  }

  async openPosition(marketAddress: string, param: RouterOpenPositionParam) {
    const transaction = await this.contracts().router().openPosition(
      marketAddress,
      BigNumber.from(param.quantity),
      BigNumber.from(param.leverage),
      BigNumber.from(param.takerMargin),
      BigNumber.from(param.makerMargin),
      BigNumber.from(param.maxAllowableTradingFee),
    );
    return transaction.wait();
  }

  async closePosition(marketAddress: string, param: RouterClosePositionParam) {
    const transaction = await this.contracts()
      .router()
      .closePosition(marketAddress, param.positionId);
    return transaction.wait();
  }

  async claimPosition(marketAdress: string, positionId: BigNumberish) {
    const tx = await this.contracts().router().claimPosition(marketAdress, positionId);
    return tx.wait();
  }

  async approvalClbTokenToRouter(marketAddress: string): Promise<boolean> {
    const clbToken = await this._client.market().clbToken(marketAddress);
    const routerAddress = this.contracts().router().address;
    const signerAddress = await this._client.signer.getAddress();
    if (!(await clbToken.isApprovedForAll(signerAddress, routerAddress))) {
      const tx = await clbToken.setApprovalForAll(routerAddress, true);
      await tx.wait();
      // TODO verify tx
      return tx.blockHash !== undefined;
    }
    return true;
  }

  async approvalSettlementTokenToRouter(marketAddress: string): Promise<boolean> {
    const settlementToken = await this._client.market().settlementToken(marketAddress);
    const routerAddress = this.contracts().router().address;
    const signerAddress = await this._client.signer.getAddress();
    const allowance = await settlementToken.allowance(signerAddress, routerAddress);
    if (!allowance.eq(ethers.constants.MaxUint256)) {
      const tx = await settlementToken.approve(routerAddress, ethers.constants.MaxUint256);
      await tx.wait();
      // TODO verify tx
      return tx.blockHash !== undefined;
    }
    return true;
  }

  async addLiquidity(marketAddress: string, param: RouterAddLiquidityParam, receipient?: string) {
    // TODO check option flag
    if (!(await this.approvalSettlementTokenToRouter(marketAddress))) {
      return;
    }
    const tx = await this.contracts().router().addLiquidity(
      marketAddress,
      param.feeRate,
      param.amount,
      receipient || this._client.signer.getAddress()
    );
    return tx.wait();
  }

  async addLiquidities(
    marketAddress: string,
    params: RouterAddLiquidityParam[],
    recipient?: string
  ) {
    // TODO check option flag
    if (!(await this.approvalSettlementTokenToRouter(marketAddress))) {
      return;
    }
    const feeRates: BigNumberish[] = [];
    const amounts: BigNumberish[] = [];
    recipient = recipient || (await this._client.signer.getAddress());

    params.forEach((param) => {
      feeRates.push(param.feeRate);
      amounts.push(param.amount);
    });
    const tx = await this.contracts()
      .router()
      .addLiquidityBatch(marketAddress, recipient, feeRates, amounts);
    return tx.wait();
  }

  async removeLiquidity(marketAddress: string, param: RouterRemoveLiquidityParam) {
    // TODO check option flag
    if (!(await this.approvalClbTokenToRouter(marketAddress))) {
      return;
    }
    const tx = await this.contracts()
      .router()
      .removeLiquidity(
        marketAddress,
        BigNumber.from(param.feeRate),
        BigNumber.from(param.clbTokenAmount),
        param.receipient || this._client.signer.getAddress()
      );
    return tx.wait();
  }

  async removeLiquidities(
    marketAddress: string,
    params: RouterRemoveLiquidityParam[],
    receipient?: string
  ) {
    // TODO check option flag
    if (!(await this.approvalClbTokenToRouter(marketAddress))) {
      return;
    }
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
    const tx = await this.contracts()
      .router()
      .removeLiquidityBatch(
        marketAddress,
        receipient,
        contractParam.feeRate,
        contractParam.clbTokenAmount
      );
    return tx.wait();
  }

  async claimLiquidity(marketAddress: string, receiptId: BigNumberish) {
    try {
      const tx = await this.contracts()
        .router()
        .claimLiquidity(marketAddress, BigNumber.from(receiptId));
      const result = await tx.wait();
      return result;
    } catch (e) {
      logger("parsed error", this.contracts().router().interface.parseError(e.data.data));
      throw this.contracts().router().interface.parseError(e.data.data);
    }
  }

  async claimLiquidites(marketAddress: string, receiptIds: BigNumberish[]) {
    const tx = await this.contracts().router().claimLiquidityBatch(marketAddress, receiptIds);
    return tx.wait();
  }

  async withdrawLiquidity(marketAddress: string, receiptId) {
    const tx = await this.contracts()
      .router()
      .withdrawLiquidity(marketAddress, BigNumber.from(receiptId));
    return tx.wait();
  }

  async withdrawLiquidities(marketAddress: string, receiptIds: BigNumberish[]) {
    const tx = await this.contracts().router().withdrawLiquidityBatch(
      marketAddress,
      receiptIds
    );
    return tx.wait();
  }
}
