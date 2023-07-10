import { Client } from "../Client";
import {
  Address,
  GetContractReturnType,
  PublicClient,
  WalletClient,
  getContract,
  zeroAddress,
} from "viem";
import { chromaticRouterABI, chromaticRouterAddress } from "../gen";
import { checkClient, Contract, handleBytesError, MAX_UINT256 } from "../utils/helpers";
/**
 * Represents the parameters for adding liquidity to a market using the ChromaticRouter.
 */
export interface RouterAddLiquidityParam {
  feeRate: number;
  amount: bigint;
}

/**
 * Represents the parameters for opening a position using the ChromaticRouter.
 */
export interface RouterOpenPositionParam {
  quantity: bigint;
  leverage: number;
  takerMargin: bigint;
  makerMargin: bigint;
  maxAllowableTradingFee: bigint;
}

/**
 * Represents the parameters for removing liquidity from a market using the ChromaticRouter.
 */
export interface RouterRemoveLiquidityParam {
  feeRate: number;
  receipient?: Address;
  clbTokenAmount: bigint;
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
      router: (): Contract<typeof chromaticRouterABI> =>
        getContract({
          address:
            (chromaticRouterAddress as Record<number, Address>)[
              this._client.publicClient?.chain?.id || 0
            ] || zeroAddress,
          abi: chromaticRouterABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
    };
  }

  /**
   * Opens a new position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param param The parameters for opening the position.
   * @returns A promise that resolves to the transaction receipt of the position opening.
   */
  async openPosition(marketAddress: Address, param: RouterOpenPositionParam) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    return await handleBytesError(async () => {
      checkClient(this._client);

      const { request } = await this.contracts()
        .router()
        .simulate.openPosition(
          [
            marketAddress,
            param.quantity,
            param.leverage,
            param.takerMargin,
            param.makerMargin,
            param.maxAllowableTradingFee,
          ],
          { account: this._client.walletClient.account }
        );

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Closes an existing position in the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param positionId The ID of the position to close.
   * @returns A promise that resolves to the transaction receipt of the position closing.
   */
  async closePosition(marketAddress: Address, positionId: bigint) {
    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .router()
        .simulate.closePosition([marketAddress, positionId], {
          account: this._client.walletClient.account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Claims a position in the specified market.
   * @param marketAdress The address of the Chromatic Market contract.
   * @param positionId The ID of the position to claim.
   * @returns A promise that resolves to the transaction receipt of the position claiming.
   */
  async claimPosition(marketAdress: Address, positionId: bigint) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .router()
        .simulate.claimPosition([marketAdress, positionId], {
          account: this._client.walletClient.account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Approves the CLB token for the ChromaticRouter contract.
   * @param marketAddress The address of the Chromatic Market contract.
   * @returns A promise that resolves to a boolean indicating whether the approval was successful.
   */
  async approvalClbTokenToRouter(marketAddress: Address): Promise<boolean> {
    checkClient(this._client);
    const clbToken = await this._client.market().contracts().clbToken(marketAddress);
    const routerAddress = this.contracts().router().address;
    const account = this._client.walletClient.account!.address;
    if (
      !(await clbToken.read.isApprovedForAll([account, routerAddress], {
        account: this._client.walletClient!.account,
      }))
    ) {
      const { request } = await clbToken.simulate.setApprovalForAll([routerAddress, true], {
        account: this._client.walletClient!.account,
      });

      const hash = await this._client.walletClient.writeContract(request);

      // TODO false condition
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      return receipt !== undefined;
    }
    return true;
  }

  /**
   * Approves the settlement token for the ChromaticRouter contract.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param amount The allowance of Chromatic Router over the caller's tokens
   * @returns A promise that resolves to a boolean indicating whether the approval was successful.
   */
  async approvalSettlementTokenToRouter(marketAddress: Address, amount: bigint): Promise<boolean> {
    checkClient(this._client);
    const settlementToken = await this._client.market().contracts().settlementToken(marketAddress);
    const routerAddress = this.contracts().router().address;
    const account = this._client.walletClient.account!.address;
    const allowance = await settlementToken.read.allowance([account, routerAddress], {
      account: this._client.walletClient!.account,
    });
    if (allowance < amount) {
      const { request } = await settlementToken.simulate.approve([routerAddress, MAX_UINT256], {
        account: this._client.walletClient!.account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      // TODO false condition
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      return receipt !== undefined;
    }
    return true;
  }

  /**
   * Adds liquidity to the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param param The parameters for adding liquidity.
   * @param receipient The recipient address for the liquidity tokens.
   * @returns A promise that resolves to the transaction receipt of the liquidity addition.
   */
  async addLiquidity(marketAddress: Address, param: RouterAddLiquidityParam, receipient?: Address) {
    checkClient(this._client);

    // TODO check option flag
    if (!(await this.approvalSettlementTokenToRouter(marketAddress, param.amount))) {
      return;
    }

    const { request } = await this.contracts()
      .router()
      .simulate.addLiquidity(
        [
          marketAddress,
          param.feeRate,
          param.amount,
          receipient || this._client.walletClient.account?.address || zeroAddress,
        ],
        { account: this._client.walletClient.account }
      );

    const hash = await this._client.walletClient.writeContract(request);
    return await this._client.publicClient.waitForTransactionReceipt({ hash });
  }

  /**
   * Adds multiple liquidity positions to the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param params The array of parameters for adding liquidity.
   * @param recipient The recipient address for the liquidity tokens.
   * @returns A promise that resolves to the transaction receipt of the liquidity additions.
   */
  async addLiquidities(
    marketAddress: Address,
    params: RouterAddLiquidityParam[],
    recipient?: Address
  ) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    // TODO check option flag
    const totalAmount = params.reduce((prev, curr) => prev + curr.amount, BigInt(0));
    if (!(await this.approvalSettlementTokenToRouter(marketAddress, totalAmount))) {
      return;
    }

    return await handleBytesError(async () => {
      checkClient(this._client);
      const feeRates: number[] = [];
      const amounts: bigint[] = [];
      recipient = recipient || this._client.walletClient.account!.address;

      params.forEach((param) => {
        feeRates.push(param.feeRate);
        amounts.push(param.amount);
      });

      const { request } = await this.contracts()
        .router()
        .simulate.addLiquidityBatch([marketAddress, recipient, feeRates, amounts], {
          account: this._client.walletClient.account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Removes liquidity from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param param The parameters for removing liquidity.
   * @returns A promise that resolves to the transaction receipt of the liquidity removal.
   */
  async removeLiquidity(marketAddress: Address, param: RouterRemoveLiquidityParam) {
    if (!this._client.walletClient) {
      throw new Error("Wallet Client is not set");
    }

    // TODO check option flag
    if (!(await this.approvalClbTokenToRouter(marketAddress))) {
      return;
    }

    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .router()
        .simulate.removeLiquidity(
          [
            marketAddress,
            param.feeRate,
            param.clbTokenAmount,
            param.receipient || this._client.walletClient.account!.address,
          ],
          {
            account: this._client.walletClient.account,
          }
        );

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Removes multiple liquidity positions from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param params The array of parameters for removing liquidity.
   * @param recipient The recipient address for the liquidity tokens.
   * @returns A promise that resolves to the transaction receipt of the liquidity removals.
   */
  async removeLiquidities(
    marketAddress: Address,
    params: RouterRemoveLiquidityParam[],
    receipient?: Address
  ) {
    // TODO check option flag
    if (!(await this.approvalClbTokenToRouter(marketAddress))) {
      return;
    }

    return await handleBytesError(async () => {
      checkClient(this._client);
      receipient = receipient || this._client.walletClient.account!.address;
      const contractParam = params.reduce(
        (contractParam, param) => {
          contractParam["clbTokenAmount"].push(param.clbTokenAmount);
          contractParam["feeRate"].push(param.feeRate);
          return contractParam;
        },
        {
          clbTokenAmount: [],
          feeRate: [],
        } as { clbTokenAmount: bigint[]; feeRate: number[] }
      );

      const { request } = await this.contracts()
        .router()
        .simulate.removeLiquidityBatch(
          [marketAddress, receipient, contractParam.feeRate, contractParam.clbTokenAmount],
          {
            account: this._client.walletClient!.account,
          }
        );

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Claims a liquidity position from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param receiptId The ID of the liquidity position to claim.
   * @returns A promise that resolves to the transaction receipt of the liquidity position claiming.
   */
  async claimLiquidity(marketAddress: Address, receiptId: bigint) {
    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .router()
        .simulate.claimLiquidity([marketAddress, receiptId], {
          account: this._client.walletClient.account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Claims multiple liquidity positions from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param receiptIds The array of IDs of the liquidity positions to claim.
   * @returns A promise that resolves to the transaction receipt of the liquidity positions claiming.
   */
  async claimLiquidites(marketAddress: Address, receiptIds: bigint[]) {
    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .router()
        .simulate.claimLiquidityBatch([marketAddress, receiptIds], {
          account: this._client.walletClient.account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Withdraws a liquidity position from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param receiptId The ID of the liquidity position to withdraw.
   * @returns A promise that resolves to the transaction receipt of the liquidity position withdrawal.
   */
  async withdrawLiquidity(marketAddress: Address, receiptId: bigint) {
    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .router()
        .simulate.withdrawLiquidity([marketAddress, receiptId], {
          account: this._client.walletClient.account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Withdraws multiple liquidity positions from the specified market.
   * @param marketAddress The address of the Chromatic Market contract.
   * @param receiptIds The array of IDs of the liquidity positions to withdraw.
   * @returns A promise that resolves to the transaction receipt of the liquidity positions withdrawal.
   */
  async withdrawLiquidities(marketAddress: Address, receiptIds: bigint[]) {
    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts()
        .router()
        .simulate.withdrawLiquidityBatch([marketAddress, receiptIds], {
          account: this._client.walletClient.account,
        });

      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }
}
