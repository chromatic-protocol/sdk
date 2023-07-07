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
  // https://viem.sh/docs/ethers-migration.html#writing-to-contracts
  constructor(
    public publicClient: PublicClient | null | undefined,
    public walletClient?: WalletClient | null
  ) {}

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
