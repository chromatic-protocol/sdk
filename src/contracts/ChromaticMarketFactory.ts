import { Provider } from "@ethersproject/providers";
import { Contract, Signer } from "ethers";
import {
  ChromaticMarketFactory__factory,
  ChromaticMarketFactory as ChromaticMarketFactoryContract,
  ChromaticMarket as ChromaticMarketContract,
} from "../gen";
import { ChromaticMarket } from "./ChromaticMarket";
import type { Client } from "../Client";

interface IChromaticMarketFactory {
  // getMarketContract(address: string): ChromaticMarket;
}

export class ChromaticMarketFactory implements IChromaticMarketFactory {
  contract: ChromaticMarketFactoryContract;

  constructor(addressOrName: string, private client: Client) {
    this.contract = ChromaticMarketFactory__factory.connect(addressOrName, client.provider);
  }
}
