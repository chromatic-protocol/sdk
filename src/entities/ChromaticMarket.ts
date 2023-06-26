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
  constructor(client: Client) {
    this._client = client;
  }

  getContract(address: string) {
    return ChromaticMarket__factory.connect(address, this._client.signer || this._client.provider);
  }

  async getOracleProviderContract(marketAddress: string): Promise<IOracleProvider> {
    const marketContract = this.getContract(marketAddress);

    this.oracleProvider = IOracleProvider__factory.connect(
      await marketContract.oracleProvider(),
      this._client.signer || this._client.provider
    );
    return this.oracleProvider;
  }

  async getCurrentPrice(marketAddress: string): Promise<IOracleProvider.OracleVersionStructOutput> {
    const contract = await this.getOracleProviderContract(marketAddress);
    return contract.currentVersion();
  }

  async getCurrentPrices(
    marketAddresses: string[]
  ): Promise<{ market: string; price: IOracleProvider.OracleVersionStructOutput }[]> {
    return await Promise.all(
      marketAddresses.map(async (address) => {
        return {
          market: address,
          price: await this.getCurrentPrice(address),
        };
      })
    );
  }
}
