import { Provider } from "@ethersproject/providers";
import { Contract, Signer } from "ethers";
import {
  ChromaticMarketFactory__factory,
  ChromaticMarketFactory as ChromaticMarketFactoryContract,
  ChromaticMarket as ChromaticMarketContract,
  IERC20Metadata__factory,
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

  constructor(addressOrName: string, private client: Client) {
    this.contract = ChromaticMarketFactory__factory.connect(addressOrName, client.provider);
  }

  async registeredSettlementTokens() {
    const totalRegisteredToekenAddrs = await this.contract.registeredSettlementTokens();
    const promise = totalRegisteredToekenAddrs.map(async (address) => {
      const { symbol, decimals } = IERC20Metadata__factory.connect(address, this.client.provider);

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

  async getMarkets(settlementToken: string) {
    const markets = await this.contract.getMarketsBySettlmentToken(settlementToken)
    
  }
}
