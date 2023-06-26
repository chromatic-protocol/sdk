import { Provider } from "@ethersproject/providers";
import { Contract, Signer } from "ethers";
import { ChromaticMarketFactory } from "./contracts/ChromaticMarketFactory";
import {
  ChromaticRouter as ChromaticRouterContract,
  ChromaticRouter__factory,
  getDeployedAddress,
} from "./gen";
import { ChromaticPosition } from "./contracts/ChromaticPosition";
import { ChromaticMarket } from "./contracts/ChromaticMarket";
import { ChromaticLiquidity } from "./contracts/ChromaticLiquidity";
export class Client {
  private _marketFactory: ChromaticMarketFactory;
  private _market: ChromaticMarket;
  private _position: ChromaticPosition;
  private _contracts: Record<string, Contract> = {};
  private _liquidity: ChromaticLiquidity;
  set signer(signer: Signer) {
    console.log("signer changed");
  }
  set provider(provider: Provider) {
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
