import { PublicClient, WalletClient } from "viem";
import {
  ChromaticAccount,
  ChromaticLens,
  ChromaticMarket,
  ChromaticMarketFactory,
  ChromaticPosition,
  ChromaticRouter,
} from "./entities";

export class Client {
  public walletClient: WalletClient;
  public publicClient: PublicClient;
  constructor({
    publicClient,
    walletClient,
  }: {
    publicClient?: PublicClient | null;
    walletClient?: WalletClient | null;
  } = {}) {
    this.publicClient = publicClient;
    this.walletClient = walletClient;
  }

  get chainName(): string | undefined {
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
