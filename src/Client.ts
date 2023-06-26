import { Provider } from "@ethersproject/providers";
import { Contract, Signer, ethers } from "ethers";
import {
  ChromaticMarketFactory,
  ChromaticPosition,
  ChromaticMarket,
  ChromaticLiquidity,
  ChromaticRouter,
} from "./entities";
import {
  ChromaticLens as ChromaticLensContract,
  ChromaticLens__factory,
  ChromaticRouter as ChromaticRouterContract,
  ChromaticRouter__factory,
  getDeployedAddress,
} from "./gen";
export class Client {
  private _marketFactory: ChromaticMarketFactory;
  private _market: ChromaticMarket;
  private _position: ChromaticPosition;
  private _contracts: Record<string, Contract> = {};
  private _liquidity: ChromaticLiquidity;
  private _router: ChromaticRouter;
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

  public lens(): ChromaticLensContract {
    // if (!this._contracts["ChromaticLens"]) {
    this._contracts["ChromaticLens"] = ChromaticLens__factory.connect(
      getDeployedAddress("ChromaticLens", this.chainName),
      this.signer || this.provider
    );
    // }
    return this._contracts["ChromaticLens"] as ChromaticLensContract;
  }

  public marketFactory(): ChromaticMarketFactory {
    // if (!this._marketFactory) {
    this._marketFactory = new ChromaticMarketFactory(
      getDeployedAddress("ChromaticMarketFactory", this.chainName),
      this
    );
    return this._marketFactory;
    // }
    // return this._marketFactory;
  }

  market(): ChromaticMarket {
    // if (!this._market) {
    this._market = new ChromaticMarket(this);
    // }
    return this._market;
  }

  currentMarket() {
    return this._market;
  }

  position() {
    // if (!this._position)
    this._position = new ChromaticPosition(this);
    return this._position;
  }

  liquidity() {
    // if (!this._liquidity)
    this._liquidity = new ChromaticLiquidity(this);
    return this._liquidity;
  }

  router(): ChromaticRouter {
    // if (!this._router)
    this._router = new ChromaticRouter(this);
    return this._router;
  }

  routerContract(): ChromaticRouterContract {
    // if (!this._contracts["ChromaticRouter"])
    this._contracts["ChromaticRouter"] = ChromaticRouter__factory.connect(
      getDeployedAddress("ChromaticRouter", this.chainName),
      this.signer || this.provider
    );
    return this._contracts["ChromaticRouter"] as ChromaticRouterContract;
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
