import { Provider } from "@ethersproject/providers";
import { Contract, Signer } from "ethers";
import {
  ChromaticMarketFactory__factory,
  ChromaticMarketFactory as IChromaticMarketFactory,
} from "../gen";
import { ChromaticMarket, ChromaticMarketImpl } from "./ChromaticMarket";

interface ChromaticMarketFactoryEx {
  getMarketContract(address: string): ChromaticMarket;
}

export class ChromaticMarketFactoryImpl extends Contract implements ChromaticMarketFactoryEx {
  private contract: IChromaticMarketFactory;

  constructor(addressOrName: string, private signerOrProvider: Signer | Provider) {
    super(addressOrName, ChromaticMarketFactory__factory.abi, signerOrProvider);
    this.contract = this as unknown as IChromaticMarketFactory;
  }

  getMarketContract(address: string): ChromaticMarket {
    return new ChromaticMarketImpl(address, this.signerOrProvider) as unknown as ChromaticMarket;
  }
}

export interface ChromaticMarketFactory extends IChromaticMarketFactory, ChromaticMarketFactoryEx {}
