import { BigNumber, BigNumberish, Contract, Signer } from "ethers";
import {
  ChromaticMarket__factory,
  ChromaticMarket as ChromaticMarketContract,
  CLBToken__factory,
  CLBToken,
  IOracleProvider,
  IOracleProvider__factory,
  IERC20__factory,
  IERC20,
} from "../gen";
import type { Client } from "../Client";
import { token } from "../gen/@openzeppelin/contracts";

export class ChromaticMarket {
  private oracleProvider: IOracleProvider;
  _client: Client;
  constructor(client: Client) {
    this._client = client;
  }

  // getContract(address: string) {
  //   return ChromaticMarket__factory.connect(address, this._client.signer || this._client.provider);
  // }

  contracts() {
    return {
      market: (marketAddress: string) =>
        ChromaticMarket__factory.connect(
          marketAddress,
          this._client.signer || this._client.provider
        ),
    };
  }

  async settlementToken(marketAddress: string): Promise<IERC20> {
    return IERC20__factory.connect(
      await this.contracts().market(marketAddress).settlementToken(),
      this._client.signer || this._client.provider
    );
  }

  async clbToken(marketAddress: string): Promise<CLBToken> {
    return CLBToken__factory.connect(
      await this.contracts().market(marketAddress).clbToken(),
      this._client.signer || this._client.provider
    );
  }

  async clbTokenMeta(marketAddress: string, tokenId: BigNumberish) {
    const clbTokenContract = await this.clbToken(marketAddress);
    const [name, image, description, decimals] = await Promise.all([
      clbTokenContract.name(tokenId),
      clbTokenContract.image(tokenId),
      clbTokenContract.description(tokenId),
      clbTokenContract.decimals(),
    ]);
    return {
      name,
      image,
      description,
      decimals,
    };
  }

  async getOracleProviderContract(marketAddress: string): Promise<IOracleProvider> {
    const marketContract = this.contracts().market(marketAddress);

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

  async getMarketName(marketAddress: string) {
    return (await this.getOracleProviderContract(marketAddress)).description();
  }

  async getCurrentPrices(
    marketAddresses: string[]
  ): Promise<{ market: string; value: IOracleProvider.OracleVersionStructOutput }[]> {
    return await Promise.all(
      marketAddresses.map(async (address) => {
        return {
          market: address,
          value: await this.getCurrentPrice(address),
        };
      })
    );
  }
}
