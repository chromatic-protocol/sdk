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
  client: Client;
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
        this.client.signer || this.client.provider
      );
    }
    return this.oracleProvider;
  }

  async getCurrentPrice(): Promise<IOracleProvider.OracleVersionStruct> {
    const contract = await this.getOracleProviderContract();
    return contract.currentVersion();
  }

  async getPositions(positionIds: BigNumberish[]) {
    const positions = await this.contract.getPositions(positionIds);
    const oracleVersions = new Set(
      positions.map((position) => [position.openVersion, position.closeVersion]).flat()
    );
    const oraclePrices = await (
      await this.getOracleProviderContract()
    ).atVersions([...oracleVersions]);
    return positions.map((position) => {
      return {
        ...position,
        openPrice: oraclePrices.find((price) => price.version.eq(position.openVersion)),
        closePrice: oraclePrices.find((price) => price.version.eq(position.closeVersion)),
      };
    });
  }

  async getOraclePrice(): Promise<IOracleProvider.OracleVersionStructOutput> {
    return (await this.getOracleProviderContract()).currentVersion();
  }
}
