import { Provider } from "@ethersproject/providers";
import { Contract, Signer } from "ethers";
import {
  ChromaticMarketFactory__factory,
  ChromaticMarketFactory as ChromaticMarketFactoryContract,
  ChromaticMarket as ChromaticMarketContract,
  IERC20Metadata__factory,
  getDeployedAddress,
} from "../gen";
import { ChromaticMarket } from "./ChromaticMarket";
import type { Client } from "../Client";

export interface SettlementToken {
  name: string;
  address: string;
  decimals: number;
}
export class ChromaticMarketFactory {
  // contract: ChromaticMarketFactoryContract;

  constructor(addressOrName: string, private _client: Client) {
    // this.contract = ChromaticMarketFactory__factory.connect(addressOrName, this._client.provider);
  }

  private factoryContract(addressOrName?: string) {
    return ChromaticMarketFactory__factory.connect(
      addressOrName || getDeployedAddress("ChromaticMarketFactory", this._client.chainName),
      this._client.provider
    );
  }
  contracts() {
    return {
      marketFactory: this.factoryContract(),
    };
  }

  async registeredSettlementTokens() {
    const totalRegisteredTokenAddrs =
      await this.contracts().marketFactory.registeredSettlementTokens();
    const promise = totalRegisteredTokenAddrs.map(async (address) => {
      const { symbol, decimals } = IERC20Metadata__factory.connect(address, this._client.provider);

      return {
        name: await symbol(),
        address,
        decimals: await decimals(),
      } satisfies SettlementToken;
    });

    const response = await Promise.allSettled(promise);
    const fulfilled = response
      .filter(
        (result): result is PromiseFulfilledResult<SettlementToken> => result.status === "fulfilled"
      )
      .map(({ value }) => value);

    return fulfilled;
  }

  async currentInterestRate(settlementToken: string) {
    return this.contracts().marketFactory.currentInterestRate(settlementToken);
  }

  async getMarkets(settlementToken: string) {
    const marketAddresses = await this.contracts().marketFactory.getMarketsBySettlmentToken(
      settlementToken
    );
    const market = this._client.market();
    const orcales = await market.getCurrentPrices(marketAddresses);

    return Promise.all(
      orcales.map(async (orcale) => {
        const { market: address, value } = orcale;
        return {
          address,
          oracleValue: value,
          description: await market.getMarketName(address),
        };
      })
    );
  }
}
