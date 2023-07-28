import { ZeroAddress } from "ethers";
import { Client } from "../Client";
import { ChromaticAccount__factory } from "../gen";
import { PromiseOnlySuccess, handleBytesError } from "../utils/helpers";

/** @ignore */
export interface TokenBalancesResult {
  token: string;
  balance: bigint;
}

/**
 * Represents a Chromatic Account and provides methods to interact with it.
 */
export class ChromaticAccount {
  private _currentAccountAddress: string;

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
      account: (address?: string) =>
        ChromaticAccount__factory.connect(address, this._client.signer),
      router: this._client.router().contracts().router,
    };
  }

  /**
   * Creates a new Chromatic Account.
   * @returns A promise that resolves to the transaction receipt of the account creation.
   */
  async createAccount() {
    return await handleBytesError(async () => {
      const tx = await this.contracts().router().createAccount();
      return await tx.wait();
    }, this._client.provider);
  }

  /**
   * Retrieves the current Chromatic Account.
   * @returns A promise that resolves to the Chromatic Account details.
   */
  async getAccount() {
    return await handleBytesError(async () => {
      return await this.contracts().router().getAccount();
    }, this._client.provider);
  }

  /**
   * Retrieves the position IDs associated with a specific market.
   * @param marketAddress The address of the market.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to an array of position IDs.
   */
  async getPositionIds(marketAddress: string, accountAddress?: string) {
    return await handleBytesError(async () => {
      const currAccountAddress = await this.getCurrentAddress();
      const targetAccount = accountAddress || currAccountAddress;
      if (!targetAccount || targetAccount === ZeroAddress) {
        return [];
      }
      const chromaticAcc = this.contracts().account(targetAccount);
      return await chromaticAcc.getPositionIds(marketAddress);
    }, this._client.provider);
  }

  /**
   * Retrieves the balance of a specific token in the Chromatic Account.
   * @param token The address of the token.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to the balance of the token.
   */
  async balance(token: string, accountAddress?: string) {
    return await handleBytesError(async () => {
      const currAccountAddress = await this.getCurrentAddress();
      const targetAccount = accountAddress || currAccountAddress;
      if (!targetAccount || targetAccount === ZeroAddress) {
        return 0n;
      }
      return this.contracts().account(targetAccount).balance(token);
    }, this._client.provider);
  }

  /**
   * Retrieves the balances of multiple tokens in the Chromatic Account.
   * @param tokens An array of token addresses.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to an array of TokenBalancesResult objects.
   */
  async balances(tokens: string[], accountAddress?: string): Promise<TokenBalancesResult[]> {
    return await handleBytesError(async () => {
      const currAccountAddress = await this.getCurrentAddress();
      const targetAccount = accountAddress || currAccountAddress;
      if (!targetAccount || targetAccount === ZeroAddress) {
        return [];
      }
      return PromiseOnlySuccess(
        tokens.map(async (token) => {
          return {
            token,
            balance: await this.contracts().account(targetAccount).balance(token),
          } satisfies TokenBalancesResult;
        }) || []
      );
    }, this._client.provider);
  }

  /**
   * Retrieves the current account address.
   * @returns A promise that resolves to the current account address.
   */
  private async getCurrentAddress() {
    return await handleBytesError(async () => {
      if (!this._currentAccountAddress)
        this._currentAccountAddress = await this.contracts().router().getAccount();
      return this._currentAccountAddress;
    }, this._client.provider);
  }
}
