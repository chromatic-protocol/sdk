import { Provider } from "@ethersproject/providers";
import { Contract, Signer } from "ethers";
import {
  ChromaticMarketFactory,
  ChromaticPosition,
  ChromaticMarket,
  ChromaticLiquidity,
} from "./entities";
import {
  ChromaticLens as ChromaticLensContract,
  ChromaticLens__factory,
  ChromaticRouter as ChromaticRouterContract,
  ChromaticRouter__factory,
  getDeployedAddress,
} from "./gen";
import {} from "./entities/ChromaticPosition";
export class Client {
  private _marketFactory: ChromaticMarketFactory;
  private _market: ChromaticMarket;
  private _position: ChromaticPosition;
  private _contracts: Record<string, Contract> = {};
  private _liquidity: ChromaticLiquidity;

  setSignerOrProvider(signerOrProvider: Signer | Provider) {}
  set signer(signer: Signer) {
    //TODO reinitialize contract if signer changeed
    console.log("signer changed");
  }
  set provider(provider: Provider) {
    // reinitialize contract if signer changeed
    console.log("change provider");
  }
  constructor(public chainName: string, signerOrProvider: Signer | Provider) {
    if (signerOrProvider instanceof Signer && signerOrProvider._isSigner) {
      this.signer = signerOrProvider;
      this.provider = signerOrProvider.provider;
    } else if (signerOrProvider instanceof Provider && signerOrProvider._isProvider) {
      this.provider = signerOrProvider;
    }
  }

  public lens(): ChromaticLensContract {
    if (!this._contracts["ChromaticLens"]) {
      this._contracts["ChromaticLens"] = ChromaticLens__factory.connect(
        getDeployedAddress("ChromaticLens", this.chainName),
        this.signer || this.provider
      );
    }
    return this._contracts["ChromaticLens"] as ChromaticLensContract;
  }
  
  public marketFactory(): ChromaticMarketFactory {
    if (!this._marketFactory) {
      this._marketFactory = new ChromaticMarketFactory(
        getDeployedAddress("ChromaticMarketFactory", this.chainName),
        this
      );
    }
    return this._marketFactory;
  }

  market(marketAddress: string): ChromaticMarket {
    if (!this._market) {
      this._market = new ChromaticMarket(marketAddress, this);
    }
    return this._market;
  }

  currentMarket() {
    return this._market;
  }

  position() {
    if (!this._position) this._position = new ChromaticPosition(this);
    return this._position;
  }

  liquidity() {
    if (!this._liquidity) this._liquidity = new ChromaticLiquidity(this);
    return this._liquidity;
  }

  routerContract(): ChromaticRouterContract {
    if (!this._contracts["ChromaticRouter"])
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
