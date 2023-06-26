import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import {
  ChromaticMarketFactory,
  ChromaticMarketFactoryImpl,
} from "./contracts/ChromaticMarketFactory";
import { getDeployedAddress } from "./gen";

export class Client {
  private _marketFactory: ChromaticMarketFactory;

  constructor(public chainName: string, private signerOrProvider: Signer | Provider) {}

  public marketFactory(): ChromaticMarketFactory {
    if (!this._marketFactory) {
      this._marketFactory = new ChromaticMarketFactoryImpl(
        getDeployedAddress("ChromaticMarketFactory", this.chainName),
        this.signerOrProvider,
      ) as unknown as ChromaticMarketFactory;
    }
    return this._marketFactory;
  }
}
