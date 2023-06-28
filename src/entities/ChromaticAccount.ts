import { BigNumber, Signer } from "ethers";
import { Client } from "../Client";
import { ChromaticAccount__factory } from "../gen";
import { PromiseOnlySuccess } from "../utils/helpers";

export interface TokenBalancesResult {
  token: string;
  balance: BigNumber;
}
export class ChromaticAccount {
  constructor(private readonly _client: Client) {}

  private _currentAccountAddress: string;

  contracts() {
    return {
      account: (address?: string) =>
        ChromaticAccount__factory.connect(address, this._client.signer),
      router: this._client.router().contracts().router,
    };
  }
  async createAccount() {
    const tx = await this.contracts().router().createAccount();
    return tx.wait();
  }

  async getAccount(signer?: Signer) {
    return await this.contracts().router().getAccount();
  }

  async getPositionIds(marketAddress: string, accountAddress?: string) {
    const currAccountAddress = await this.getCurrentAddress();
    const chromaticAcc = this.contracts().account(accountAddress || currAccountAddress);
    return await chromaticAcc.getPositionIds(marketAddress);
  }

  async balance(token: string, accountAddress?: string) {
    const currAccountAddress = await this.getCurrentAddress();
    return this.contracts()
      .account(accountAddress || currAccountAddress)
      .balance(token);
  }

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
  private async getCurrentAddress() {
    if (!this._currentAccountAddress)
      this._currentAccountAddress = await this.contracts().router().getAccount();
    return this._currentAccountAddress;
  }
}
