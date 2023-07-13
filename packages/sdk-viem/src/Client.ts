import type { PublicClient as PublicClientType, WalletClient as WalletClientType } from "viem";
import {
  ChromaticAccount,
  ChromaticLens,
  ChromaticMarket,
  ChromaticMarketFactory,
  ChromaticPosition,
  ChromaticRouter,
} from "./entities";

/** @ignore */
export interface WalletClient extends WalletClientType {}

/** @ignore */
export interface PublicClient extends PublicClientType {}

export class Client {
  public walletClient: WalletClient | undefined;
  public publicClient: PublicClient | undefined;
  constructor({
    publicClient,
    walletClient,
  }: {
    publicClient?: PublicClient | null;
    walletClient?: WalletClient | null;
  } = {}) {
    if (publicClient) this.publicClient = publicClient;
    if (walletClient) this.walletClient = walletClient;
  }

  get chainName() {
    return this.publicClient?.chain?.name;
  }

  lens(): ChromaticLens {
    return new ChromaticLens(this);
  }

  marketFactory(): ChromaticMarketFactory {
    return new ChromaticMarketFactory(this);
  }

  market(): ChromaticMarket {
    return new ChromaticMarket(this);
  }

  position(): ChromaticPosition {
    return new ChromaticPosition(this);
  }

  router(): ChromaticRouter {
    return new ChromaticRouter(this);
  }

  account(): ChromaticAccount {
    return new ChromaticAccount(this);
  }
}
