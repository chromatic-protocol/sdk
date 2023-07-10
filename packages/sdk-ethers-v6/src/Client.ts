import type { Provider, Signer } from "ethers";
import {
  ChromaticAccount,
  ChromaticLens,
  ChromaticMarket,
  ChromaticMarketFactory,
  ChromaticPosition,
  ChromaticRouter,
} from "./entities";

/**
 * A client for interacting with the Chromatic protocol on a specific chain.
 */
export class Client {
  private _signer: Signer;
  private _provider: Provider;

  /**
   * Creates a new instance of the Client class.
   * @param chainName The name of the chain.
   * @param signerOrProvider The signer or provider object.
   */
  constructor(public chainName: string, signerOrProvider: Signer | Provider) {
    this.setSignerOrProvider(signerOrProvider);
  }

  /**
   * The signer associated with the client.
   */
  get signer(): Signer {
    return this._signer;
  }

  /**
   * The provider associated with the client.
   */
  get provider(): Provider {
    return this._provider;
  }

  /**
   * Sets the signer or provider for the client.
   * @param signerOrProvider The signer or provider object.
   */
  setSignerOrProvider(signerOrProvider: Signer | Provider) {
    if (isSigner(signerOrProvider)) {
      this._signer = signerOrProvider;
      this._provider = signerOrProvider.provider;
    }
    if (isProvider(signerOrProvider)) {
      this._signer = undefined;
      this._provider = signerOrProvider;
    }
  }

  /**
   * Creates a new instance of the ChromaticLens class.
   * @returns An instance of the ChromaticLens class.
   */
  lens(): ChromaticLens {
    return new ChromaticLens(this);
  }

  /**
   * Creates a new instance of the ChromaticMarketFactory class.
   * @returns An instance of the ChromaticMarketFactory class.
   */
  marketFactory(): ChromaticMarketFactory {
    return new ChromaticMarketFactory(this);
  }

  /**
   * Creates a new instance of the ChromaticMarket class.
   * @returns An instance of the ChromaticMarket class.
   */
  market(): ChromaticMarket {
    return new ChromaticMarket(this);
  }

  /**
   * Creates a new instance of the ChromaticPosition class.
   * @returns An instance of the ChromaticPosition class.
   */
  position() {
    return new ChromaticPosition(this);
  }

  /**
   * Creates a new instance of the ChromaticRouter class.
   * @returns An instance of the ChromaticRouter class.
   */
  router(): ChromaticRouter {
    return new ChromaticRouter(this);
  }

  /**
   * Creates a new instance of the ChromaticAccount class.
   * @returns An instance of the ChromaticAccount class.
   */
  account(): ChromaticAccount {
    return new ChromaticAccount(this);
  }
}

/**
 * Checks if the provided object is a Signer.
 * @param signerOrProvider The object to check.
 * @returns True if the object is a Signer, false otherwise.
 */
function isSigner(signerOrProvider: Signer | Provider): signerOrProvider is Signer {
  return signerOrProvider["_isSigner"];
}

/**
 * Checks if the provided object is a Provider.
 * @param signerOrProvider The object to check.
 * @returns True if the object is a Provider, false otherwise.
 */
function isProvider(signerOrProvider: Signer | Provider): signerOrProvider is Provider {
  return signerOrProvider["_isProvider"];
}
