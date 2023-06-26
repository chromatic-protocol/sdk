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

interface IChromaticMarketFactory {
  // getMarketContract(address: string): ChromaticMarket;
}

export interface SettlementToken {
  name: string;
  address: string;
  decimals: number;
}
export class ChromaticMarketFactory implements IChromaticMarketFactory {
  contract: ChromaticMarketFactoryContract;

  constructor(addressOrName: string, private _client: Client) {
    this.contract = ChromaticMarketFactory__factory.connect(addressOrName, this._client.provider);
  }

  async registeredSettlementTokens() {
    const totalRegisteredTokenAddrs = await this.contract.registeredSettlementTokens();
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
    return this.contract.currentInterestRate(settlementToken);
  }

  async getMarkets(settlementToken: string) {
    const marketAddresses = await this.contract.getMarketsBySettlmentToken(settlementToken);
    const market = this._client.market();
    const orcales = await market.getCurrentPrices(marketAddresses);

    return Promise.all(
      orcales.map(async (orcale) => {
        const { market: address, value } = orcale;
        return {
          address,
          oracleValue : value,
          description: await market.getMarketName(address),
        };
      })
    );
  }
}
