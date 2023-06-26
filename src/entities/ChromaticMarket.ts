import { BigNumber, BigNumberish, Contract, Signer } from "ethers";
import {
  ChromaticMarket__factory,
  ChromaticMarket as ChromaticMarketContract,
  OracleProvider,
  OracleProvider__factory,
} from "../gen";
import type { Client } from "../Client";
import { IOracleProvider } from "../gen/contracts/core/OracleProvider";

export class ChromaticMarket {
  contract: ChromaticMarketContract;
  private oracleProvider: OracleProvider;
  _client: Client;
  constructor(addressOrName: string, client: Client) {
    this.contract = ChromaticMarket__factory.connect(
      addressOrName,
      client.signer || client.provider
    );
  }

  async getOracleProviderContract(): Promise<OracleProvider> {
    if (!this.oracleProvider) {
      this.oracleProvider = OracleProvider__factory.connect(
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
