import { Provider } from "@ethersproject/providers";
import { Contract, Signer, ethers } from "ethers";
import {
  ChromaticLens,
  ChromaticMarket,
  ChromaticMarketFactory,
  ChromaticPosition,
  ChromaticRouter,
} from "./entities";
import { getDeployedAddress } from "./gen";

import { ChromaticAccount } from "./entities/ChromaticAccount";


export class Client {
  private _contracts: Record<string, Contract> = {};
  private _signer: Signer;
  private _provider: Provider;

  get signer(): Signer {
    return this._signer;
  }

  get provider(): Provider {
    return this._provider;
  }

  setSignerOrProvider(signerOrProvider: Signer | Provider) {}
  set signer(signer: Signer) {
    //TODO reinitialize contract if signer changeed
    this._signer = signer;
  }
  set provider(provider: Provider | undefined) {
    // reinitialize contract if signer changeed
    this._provider = provider;
  }

  constructor(public chainName: string, signerOrProvider: Signer | Provider) {
    if (isSigner(signerOrProvider)) {
      this.signer = signerOrProvider as Signer;
      this.provider = signerOrProvider.provider as Provider;
    } else if (isProvider(signerOrProvider)) {
      this.provider = signerOrProvider;
    } else {
      this.provider = ethers.getDefaultProvider();
    }
  }

  public lens(): ChromaticLens {
    return new ChromaticLens(this);
  }

  public marketFactory(): ChromaticMarketFactory {
    return new ChromaticMarketFactory(
      getDeployedAddress("ChromaticMarketFactory", this.chainName),
      this
    );
  }

  market(): ChromaticMarket {
    return new ChromaticMarket(this);
  }

  position() {
    return new ChromaticPosition(this);
  }

  router(): ChromaticRouter {
    return new ChromaticRouter(this);
  }

  account(): ChromaticAccount {
    return new ChromaticAccount(this);
  }

  contracts() {
    return this._contracts;
  }
}

function isSigner(signerOrProvider: Signer | Provider): signerOrProvider is Signer {
  return signerOrProvider["_isSigner"];
}

function isProvider(signerOrProvider: Signer | Provider): signerOrProvider is Provider {
  return signerOrProvider["_isProvider"];
}
