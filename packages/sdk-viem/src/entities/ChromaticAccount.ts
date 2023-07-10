import { BigNumber } from "ethers";
import { Client } from "../Client";
import { Address, GetContractReturnType, getContract } from "viem";
import { chromaticAccountABI } from "../gen";
import { Contract, PromiseOnlySuccess, checkClient, handleBytesError } from "../utils/helpers";
import { GetLogsReturnType } from "viem/actions";

export interface TokenBalancesResult {
  token: string;
  balance: BigInt;
}

/**
 * Represents a Chromatic Account and provides methods to interact with it.
 */
export class ChromaticAccount {
  private _currentAccountAddress: Address | undefined;

  /**
   * Creates a new instance of ChromaticAccount.
   * @param _client The Chromatic Client instance.
   */
  constructor(private readonly _client: Client) {}

  /**
   * Retrieves the contract instances associated with the Chromatic Account.
   * @returns An object containing the contract instances.
   */
  contracts() {
    return {
      account: (address: Address): Contract<typeof chromaticAccountABI> =>
        getContract({
          address,
          abi: chromaticAccountABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      // ChromaticAccount__factory.connect(address, this._client.signer),
      router: this._client.router().contracts().router,
    };
  }

  /**
   * Creates a new Chromatic Account.
   * @returns A promise that resolves to the transaction receipt of the account creation.
   */
  async createAccount() {
    return await handleBytesError(async () => {
      checkClient(this._client);
      const { request } = await this.contracts().router().simulate.createAccount();
      const hash = await this._client.walletClient.writeContract(request);
      return await this._client.publicClient.waitForTransactionReceipt({ hash });
    });
  }

  /**
   * Retrieves the current Chromatic Account.
   * @returns A promise that resolves to the Chromatic Account details.
   */
  async getAccount() {
    return await handleBytesError(async () => {
      return await this.contracts()
        .router()
        .read.getAccount({ account: this._client.walletClient?.account });
    });
  }

  /**
   * Retrieves the position IDs associated with a specific market.
   * @param marketAddress The address of the market.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to an array of position IDs.
   */
  async getPositionIds(marketAddress: Address, accountAddress?: Address) {
    return await handleBytesError(async () => {
      const currAccountAddress = await this.getCurrentAddress();
      const chromaticAcc = this.contracts().account(accountAddress || currAccountAddress);
      return await chromaticAcc.read.getPositionIds([marketAddress], {
        account: this._client.walletClient?.account,
      });
    });
  }

  /**
   * Retrieves the balance of a specific token in the Chromatic Account.
   * @param token The address of the token.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to the balance of the token.
   */
  async balance(token: Address, accountAddress?: Address) {
    return await handleBytesError(async () => {
      const currAccountAddress = await this.getCurrentAddress();
      return this.contracts()
        .account(accountAddress || currAccountAddress)
        .read.balance([token]);
    });
  }

  /**
   * Retrieves the balances of multiple tokens in the Chromatic Account.
   * @param tokens An array of token addresses.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to an array of TokenBalancesResult objects.
   */
  async balances(tokens: Address[], accountAddress?: Address) {
    // : Promise<TokenBalancesResult[]> {
    return await handleBytesError(async () => {
      const currAccountAddress = await this.getCurrentAddress();
      return PromiseOnlySuccess(
        tokens.map(async (token) => {
          return {
            token,
            balance: await this.contracts()
              .account(accountAddress || currAccountAddress)
              .read.balance([token]),
          } satisfies TokenBalancesResult;
        }) || []
      );
    });
  }

  /**
   * Retrieves the current account address.
   * @returns A promise that resolves to the current account address.
   */
  private async getCurrentAddress() {
    return await handleBytesError(async () => {
      if (!this._currentAccountAddress)
        this._currentAccountAddress = await this.contracts()
          .router()
          .read.getAccount({ account: this._client.walletClient?.account });
      return this._currentAccountAddress;
    });
  }
}
