import { Client } from "../Client";

export class ChromaticAccount {
  constructor(private readonly _client: Client) {}

  get contracts() {
    return {
      router: this._client.router().contracts.router,
    };
  }
  async createAccount() {
    const tx = await this.contracts.router.createAccount();
    return tx.wait();
  }

  async getAccount() {
    return await this.contracts.router.getAccount();
  }
}
