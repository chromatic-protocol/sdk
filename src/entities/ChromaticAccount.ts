import { BigNumber } from "ethers"
import { Client } from "../Client"
import { ChromaticAccount__factory } from "../gen"
import { PromiseOnlySuccess } from "../utils/helpers"

export interface TokenBalancesResult {
  token: string;
  balance: BigNumber;
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
    const tx = await this.contracts().router().createAccount();
    return tx.wait();
  }

  /**
   * Retrieves the current Chromatic Account.
   * @returns A promise that resolves to the Chromatic Account details.
   */
  async getAccount() {
    return await this.contracts().router().getAccount();
  }

  /**
   * Retrieves the position IDs associated with a specific market.
   * @param marketAddress The address of the market.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to an array of position IDs.
   */
  async getPositionIds(marketAddress: string, accountAddress?: string) {
    const currAccountAddress = await this.getCurrentAddress();
    const chromaticAcc = this.contracts().account(accountAddress || currAccountAddress);
    return await chromaticAcc.getPositionIds(marketAddress);
  }

  /**
   * Retrieves the balance of a specific token in the Chromatic Account.
   * @param token The address of the token.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to the balance of the token.
   */
  async balance(token: string, accountAddress?: string) {
    const currAccountAddress = await this.getCurrentAddress();
    return this.contracts()
      .account(accountAddress || currAccountAddress)
      .balance(token);
  }

  /**
   * Retrieves the balances of multiple tokens in the Chromatic Account.
   * @param tokens An array of token addresses.
   * @param accountAddress The address of the account (optional).
   * @returns A promise that resolves to an array of TokenBalancesResult objects.
   */
  async balances(tokens: string[], accountAddress?: string): Promise<TokenBalancesResult[]> {
    const currAccountAddress = await this.getCurrentAddress();
    return PromiseOnlySuccess(
      tokens.map(async (token) => {
        return {
          token,
          balance: await this.contracts()
            .account(accountAddress || currAccountAddress)
            .balance(token),
        } satisfies TokenBalancesResult;
      }) || []
    );
  }

  /**
   * Retrieves the current account address.
   * @returns A promise that resolves to the current account address.
   */
  private async getCurrentAddress() {
    if (!this._currentAccountAddress)
      this._currentAccountAddress = await this.contracts().router().getAccount();
    return this._currentAccountAddress;
  }
}
