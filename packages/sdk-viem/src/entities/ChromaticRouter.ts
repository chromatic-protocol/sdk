import { Address, getContract, zeroAddress } from "viem";
import { Client } from "../Client";
import { MIN_GAS_LIMIT_SETTLE_ALL, MIN_GAS_LIMIT_SETTLE_HALF } from "../const/index";
import { chromaticRouterABI, chromaticRouterAddress } from "../gen";
import { Contract, checkClient, handleBytesError } from "../utils/helpers";
/**
 * Represents the parameters for adding liquidity to a market using the ChromaticRouter.
 */
export interface RouterAddLiquidityParam {
  /** The fee rate of the liquidity bin */
  feeRate: number;
  /** The amount to add as liquidity */
  amount: bigint;
}

/**
 * Represents the parameters for opening a position using the ChromaticRouter.
 */
export interface RouterOpenPositionParam {
  /** The quantity of the position */
  quantity: bigint;
  /** The margin required for the taker */
  takerMargin: bigint;
  /** The margin required for the maker */
  makerMargin: bigint;
  /** The maximum allowable trading fee */
  maxAllowableTradingFee: bigint;
}

/**
 * Represents the parameters for removing liquidity from a market using the ChromaticRouter.
 */
export interface RouterRemoveLiquidityParam {
  /** The fee rate of the liquidity bin */
  feeRate: number;
  /** The recipient address */
  recipient?: Address;
  /** The amount of CLB tokens to remove as liquidity */
  clbTokenAmount: bigint;
}

/** @ignore */
export interface ContractChromaticRouter extends Contract<typeof chromaticRouterABI> {}

export function adjustTakerGasLimit(gas: bigint): bigint {
  return gas >= MIN_GAS_LIMIT_SETTLE_HALF ? gas : MIN_GAS_LIMIT_SETTLE_HALF;
}
export function adjustMakerGasLimit(gas: bigint): bigint {
  return gas >= MIN_GAS_LIMIT_SETTLE_ALL ? gas : MIN_GAS_LIMIT_SETTLE_ALL;
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
      router: (): ContractChromaticRouter =>
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

      const args = [
        marketAddress,
        param.quantity,
        param.takerMargin,
        param.makerMargin,
        param.maxAllowableTradingFee,
      ] as const;

      const options = { account: this._client.walletClient.account! };

      const { request } = await this.contracts().router().simulate.openPosition(args, options);

      const estimatedGas = await this.contracts().router().estimateGas.openPosition(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustTakerGasLimit(estimatedGas),
      });
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

      const args = [marketAddress, positionId] as const;
      const options = {
        account: this._client.walletClient.account!,
      };
      const { request } = await this.contracts().router().simulate.closePosition(args, options);

      const estimatedGas = await this.contracts().router().estimateGas.closePosition(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustTakerGasLimit(estimatedGas),
      });
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

      const args = [marketAdress, positionId] as const;
      const options = {
        account: this._client.walletClient.account!,
      };
      const { request } = await this.contracts().router().simulate.claimPosition(args, options);

      const estimatedGas = await this.contracts().router().estimateGas.claimPosition(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustTakerGasLimit(estimatedGas),
      });
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
    const isApprovedForAll = async () =>
      await clbToken.read.isApprovedForAll([account, routerAddress], {
        account: this._client.walletClient!.account,
      });
    if (!(await isApprovedForAll())) {
      const { request } = await clbToken.simulate.setApprovalForAll([routerAddress, true], {
        account: this._client.walletClient!.account,
      });

      const hash = await this._client.walletClient.writeContract(request);

      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      if (receipt) {
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
  async approvalSettlementTokenToRouter(marketAddress: Address, amount: bigint): Promise<boolean> {
    checkClient(this._client);
    const settlementToken = await this._client.market().contracts().settlementToken(marketAddress);
    const routerAddress = this.contracts().router().address;
    const account = this._client.walletClient.account!.address;
    const allowance = async () =>
      await settlementToken.read.allowance([account, routerAddress], {
        account: this._client.walletClient!.account,
      });

    if (amount > (await allowance())) {
      const { request } = await settlementToken.simulate.approve([routerAddress, amount], {
        account: this._client.walletClient!.account,
      });

      const hash = await this._client.walletClient.writeContract(request);
      const receipt = await this._client.publicClient.waitForTransactionReceipt({ hash });
      if (receipt) {
        return (await allowance()) >= amount;
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
  async addLiquidity(marketAddress: Address, param: RouterAddLiquidityParam, recipient?: Address) {
    checkClient(this._client);

    if (!(await this.approvalSettlementTokenToRouter(marketAddress, param.amount))) {
      throw new Error("SettlementToken: insufficient allowance");
    }

    const args = [
      marketAddress,
      param.feeRate,
      param.amount,
      recipient || this._client.walletClient.account?.address || zeroAddress,
    ] as const;

    const options = { account: this._client.walletClient.account! };

    const { request } = await this.contracts().router().simulate.addLiquidity(args, options);
    const estimatedGas = await this.contracts().router().estimateGas.addLiquidity(args, options);

    const hash = await this._client.walletClient.writeContract({
      ...request,
      gas: adjustMakerGasLimit(estimatedGas),
    });
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

    const totalAmount = params.reduce((prev, curr) => prev + curr.amount, BigInt(0));
    if (!(await this.approvalSettlementTokenToRouter(marketAddress, totalAmount))) {
      throw new Error("SettlementToken: insufficient allowance");
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

      const args = [marketAddress, recipient, feeRates, amounts] as const;
      const options = { account: this._client.walletClient.account! };

      const { request } = await this.contracts().router().simulate.addLiquidityBatch(args, options);
      const estimatedGas = await this.contracts()
        .router()
        .estimateGas.addLiquidityBatch(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
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

    if (!(await this.approvalClbTokenToRouter(marketAddress))) {
      throw new Error("CLB Token: not approved");
    }

    return await handleBytesError(async () => {
      checkClient(this._client);

      const args = [
        marketAddress,
        param.feeRate,
        param.clbTokenAmount,
        param.recipient || this._client.walletClient.account!.address,
      ] as const;
      const options = { account: this._client.walletClient.account! };
      const { request } = await this.contracts().router().simulate.removeLiquidity(args, options);
      const estimatedGas = await this.contracts()
        .router()
        .estimateGas.removeLiquidity(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
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
    recipient?: Address
  ) {
    if (!(await this.approvalClbTokenToRouter(marketAddress))) {
      throw new Error("CLB Token: not approved");
    }

    return await handleBytesError(async () => {
      checkClient(this._client);
      recipient = recipient || this._client.walletClient.account!.address;
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

      const args = [
        marketAddress,
        recipient,
        contractParam.feeRate,
        contractParam.clbTokenAmount,
      ] as const;
      const options = { account: this._client.walletClient.account! };

      const { request } = await this.contracts()
        .router()
        .simulate.removeLiquidityBatch(args, options);

      const estimatedGas = await this.contracts()
        .router()
        .estimateGas.removeLiquidityBatch(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
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

      const args = [marketAddress, receiptId] as const;
      const options = { account: this._client.walletClient.account! };

      const { request } = await this.contracts().router().simulate.claimLiquidity(args, options);
      const estimatedGas = await this.contracts()
        .router()
        .estimateGas.claimLiquidity(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
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

      const args = [marketAddress, receiptIds] as const;
      const options = { account: this._client.walletClient.account! };

      const { request } = await this.contracts()
        .router()
        .simulate.claimLiquidityBatch(args, options);

      const estimatedGas = await this.contracts()
        .router()
        .estimateGas.claimLiquidityBatch(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
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

      const args = [marketAddress, receiptId] as const;
      const options = { account: this._client.walletClient.account! };

      const { request } = await this.contracts().router().simulate.withdrawLiquidity(args, options);
      const estimatedGas = await this.contracts()
        .router()
        .estimateGas.withdrawLiquidity(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
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

      const args = [marketAddress, receiptIds] as const;
      const options = { account: this._client.walletClient.account! };

      const { request } = await this.contracts()
        .router()
        .simulate.withdrawLiquidityBatch(args, options);

      const estimatedGas = await this.contracts()
        .router()
        .estimateGas.withdrawLiquidityBatch(args, options);

      const hash = await this._client.walletClient.writeContract({
        ...request,
        gas: adjustMakerGasLimit(estimatedGas),
      });
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }
}
