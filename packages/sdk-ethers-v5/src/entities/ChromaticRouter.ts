import { Provider } from "@ethersproject/providers";
import { BigNumber, BigNumberish, Signer } from "ethers";
import { Client } from "../Client";
import { ChromaticRouter__factory, getDeployedAddress } from "../gen";
import { handleBytesError } from "../utils/helpers";

/**
 * Represents the parameters for adding liquidity to a market using the ChromaticRouter.
 */
export interface RouterAddLiquidityParam {
  /** The fee rate of the liquidity bin */
  feeRate: BigNumberish;
  /** The amount to add as liquidity */
  amount: BigNumberish;
}

/**
 * Represents the parameters for opening a position using the ChromaticRouter.
 */
export interface RouterOpenPositionParam {
  /** The quantity of the position */
  quantity: BigNumberish;
  /** The margin required for the taker */
  takerMargin: BigNumberish;
  /** The margin required for the maker */
  makerMargin: BigNumberish;
  /** The maximum allowable trading fee */
  maxAllowableTradingFee: BigNumberish;
}

/**
 * Represents the parameters for removing liquidity from a market using the ChromaticRouter.
 */
export interface RouterRemoveLiquidityParam {
  /** The fee rate of the liquidity bin */
  feeRate: BigNumberish;
  /** The recipient address */
  recipient?: string;
  /** The amount of CLB tokens to remove as liquidity */
  clbTokenAmount: BigNumberish;
}

/**
 * Represents the ChromaticRouter, which is used to interact with ChromaticRouter contracts.
 */
export class ChromaticRouter {
  /**
   * Creates an instance of ChromaticRouter.
   * @param _client The Client instance used to connect to the Chromatic contracts.
   */
  constructor(private readonly _client: Client) {}

  /**
   * Retrieves the ChromaticRouter contract instance.
   * @returns A contract instance for the ChromaticRouter.
   */
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

  /**
   * Opens a new position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param param The parameters for opening the position.
   * @returns A promise that resolves to the transaction receipt of the position opening.
   */
  async openPosition(marketAddress: string, param: RouterOpenPositionParam) {
    return await handleBytesError(async () => {
      const transaction = await this.contracts()
        .router()
        .openPosition(
          marketAddress,
          BigNumber.from(param.quantity),
          BigNumber.from(param.takerMargin),
          BigNumber.from(param.makerMargin),
          BigNumber.from(param.maxAllowableTradingFee)
        );
      return await transaction.wait();
    }, this._client.provider);
  }

  /**
   * Closes an existing position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param positionId The ID of the position to close.
   * @returns A promise that resolves to the transaction receipt of the position closing.
   */
  async closePosition(marketAddress: string, positionId: BigNumberish) {
    return await handleBytesError(async () => {
      const transaction = await this.contracts().router().closePosition(marketAddress, positionId);
      return transaction.wait();
    }, this._client.provider);
  }

  /**
   * Claims a position in the specified market.
   * @param marketAdress The address of the Chromatic Market contract.
   * @param positionId The ID of the position to claim.
   * @returns A promise that resolves to the transaction receipt of the position claiming.
   */
  async claimPosition(marketAdress: string, positionId: BigNumberish) {
    return await handleBytesError(async () => {
      const tx = await this.contracts().router().claimPosition(marketAdress, positionId);
      return tx.wait();
    }, this._client.provider);
  }

  /**
   * Approves the CLB token for the ChromaticRouter contract.
   * @param marketAddress The address of the Chromatic Market contract.
   * @returns A promise that resolves to a boolean indicating whether the approval was successful.
   */
  async approvalClbTokenToRouter(marketAddress: string): Promise<boolean> {
    const clbToken = await this._client.market().clbToken(marketAddress);
    const routerAddress = this.contracts().router().address;
    const signerAddress = await this._client.signer.getAddress();
    const isApprovedForAll = async () =>
      await clbToken.isApprovedForAll(signerAddress, routerAddress);
    if (!(await isApprovedForAll())) {
      const tx = await clbToken.setApprovalForAll(routerAddress, true);
      await tx.wait();
      if (tx.blockHash) {
        return await isApprovedForAll();
      }
      return false;
    }
    return true;
  }

  /**
   * Approves the settlement token for the ChromaticRouter contract.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param amount The allowance of Chromatic Router over the caller's tokens
   * @returns A promise that resolves to a boolean indicating whether the approval was successful.
   */
  async approvalSettlementTokenToRouter(
    marketAddress: string,
    amount: BigNumberish
  ): Promise<boolean> {
    const settlementToken = await this._client.market().settlementToken(marketAddress);
    const routerAddress = this.contracts().router().address;
    const signerAddress = await this._client.signer.getAddress();
    const allowance = async () => await settlementToken.allowance(signerAddress, routerAddress);
    if ((await allowance()).lt(amount)) {
      const tx = await settlementToken.approve(routerAddress, amount);
      await tx.wait();
      if (tx.blockHash) {
        return (await allowance()).gte(amount);
      }
      return false;
    }
    return true;
  }

  /**
   * Adds liquidity to the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param param The parameters for adding liquidity.
   * @param recipient The recipient address for the liquidity tokens.
   * @returns A promise that resolves to the transaction receipt of the liquidity addition.
   */
  async addLiquidity(marketAddress: string, param: RouterAddLiquidityParam, recipient?: string) {
    if (!(await this.approvalSettlementTokenToRouter(marketAddress, param.amount))) {
      throw new Error("SettlementToken: insufficient allowance");
    }

    return await handleBytesError(async () => {
      const tx = await this.contracts()
        .router()
        .addLiquidity(
          marketAddress,
          param.feeRate,
          param.amount,
          recipient || (await this._client.signer.getAddress())
        );
      return await tx.wait();
    }, this._client.provider);
  }

  /**
   * Adds multiple liquidity positions to the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param params The array of parameters for adding liquidity.
   * @param recipient The recipient address for the liquidity tokens.
   * @returns A promise that resolves to the transaction receipt of the liquidity additions.
   */
  async addLiquidities(
    marketAddress: string,
    params: RouterAddLiquidityParam[],
    recipient?: string
  ) {
    const totalAmount = params.reduce((prev, curr) => prev.add(curr.amount), BigNumber.from(0));
    if (!(await this.approvalSettlementTokenToRouter(marketAddress, totalAmount))) {
      throw new Error("SettlementToken: insufficient allowance");
    }

    return await handleBytesError(async () => {
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
      return await tx.wait();
    }, this._client.provider);
  }

  /**
   * Removes liquidity from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param param The parameters for removing liquidity.
   * @returns A promise that resolves to the transaction receipt of the liquidity removal.
   */
  async removeLiquidity(marketAddress: string, param: RouterRemoveLiquidityParam) {
    if (!(await this.approvalClbTokenToRouter(marketAddress))) {
      throw new Error("CLB Token: not approved");
    }

    return await handleBytesError(async () => {
      const tx = await this.contracts()
        .router()
        .removeLiquidity(
          marketAddress,
          BigNumber.from(param.feeRate),
          BigNumber.from(param.clbTokenAmount),
          param.recipient || (await this._client.signer.getAddress())
        );
      return await tx.wait();
    }, this._client.provider);
  }

  /**
   * Removes multiple liquidity positions from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param params The array of parameters for removing liquidity.
   * @param recipient The recipient address for the liquidity tokens.
   * @returns A promise that resolves to the transaction receipt of the liquidity removals.
   */
  async removeLiquidities(
    marketAddress: string,
    params: RouterRemoveLiquidityParam[],
    recipient?: string
  ) {
    if (!(await this.approvalClbTokenToRouter(marketAddress))) {
      throw new Error("CLB Token: not approved");
    }

    return await handleBytesError(async () => {
      recipient = recipient || (await this._client.signer.getAddress());
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
          recipient,
          contractParam.feeRate,
          contractParam.clbTokenAmount
        );
      return await tx.wait();
    }, this._client.provider);
  }

  /**
   * Claims a liquidity position from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param receiptId The ID of the liquidity position to claim.
   * @returns A promise that resolves to the transaction receipt of the liquidity position claiming.
   */
  async claimLiquidity(marketAddress: string, receiptId: BigNumberish) {
    return await handleBytesError(async () => {
      const tx = await this.contracts()
        .router()
        .claimLiquidity(marketAddress, BigNumber.from(receiptId));
      return await tx.wait();
    }, this._client.provider);
  }

  /**
   * Claims multiple liquidity positions from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param receiptIds The array of IDs of the liquidity positions to claim.
   * @returns A promise that resolves to the transaction receipt of the liquidity positions claiming.
   */
  async claimLiquidites(marketAddress: string, receiptIds: BigNumberish[]) {
    return await handleBytesError(async () => {
      const tx = await this.contracts().router().claimLiquidityBatch(marketAddress, receiptIds);
      return await tx.wait();
    }, this._client.provider);
  }

  /**
   * Withdraws a liquidity position from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param receiptId The ID of the liquidity position to withdraw.
   * @returns A promise that resolves to the transaction receipt of the liquidity position withdrawal.
   */
  async withdrawLiquidity(marketAddress: string, receiptId: BigNumberish) {
    return await handleBytesError(async () => {
      const tx = await this.contracts()
        .router()
        .withdrawLiquidity(marketAddress, BigNumber.from(receiptId));
      return await tx.wait();
    }, this._client.provider);
  }

  /**
   * Withdraws multiple liquidity positions from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param receiptIds The array of IDs of the liquidity positions to withdraw.
   * @returns A promise that resolves to the transaction receipt of the liquidity positions withdrawal.
   */
  async withdrawLiquidities(marketAddress: string, receiptIds: BigNumberish[]) {
    return await handleBytesError(async () => {
      const tx = await this.contracts().router().withdrawLiquidityBatch(marketAddress, receiptIds);
      return await tx.wait();
    }, this._client.provider);
  }
}
