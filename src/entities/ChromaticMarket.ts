import { BigNumber, BigNumberish, Contract, Signer } from "ethers";
import {
  ChromaticMarket__factory,
  ChromaticMarket as ChromaticMarketContract,
  IOracleProvider,
  IOracleProvider__factory,
} from "../gen";
import type { Client } from "../Client";


export class ChromaticMarket {
  contract: ChromaticMarketContract;
  private oracleProvider: IOracleProvider;
  _client: Client;
  constructor(addressOrName: string, client: Client) {
    this.contract = ChromaticMarket__factory.connect(
      addressOrName,
      client.signer || client.provider
    );
  }

  async getOracleProviderContract(): Promise<IOracleProvider> {
    if (!this.oracleProvider) {
      this.oracleProvider = IOracleProvider__factory.connect(
        await this.contract.oracleProvider(),
        this._client.signer || this._client.provider
      );
    }

    return this.oracleProvider;
  }

  async getCurrentPrice(): Promise<IOracleProvider.OracleVersionStruct> {
    const contract = await this.getOracleProviderContract();
    return contract.currentVersion();
  }

  async getOraclePrice(): Promise<IOracleProvider.OracleVersionStructOutput> {
    return (await this.getOracleProviderContract()).currentVersion();
  }
}
