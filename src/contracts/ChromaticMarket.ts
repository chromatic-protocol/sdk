import { Provider } from "@ethersproject/providers";
import { BigNumber, Contract, Signer } from "ethers";
import {
  ChromaticMarket__factory,
  ChromaticMarket as IChromaticMarket,
  OracleProvider,
  OracleProvider__factory,
} from "../gen";

interface ChromaticMarketEx {
  getOracleProviderContract(): Promise<OracleProvider>;
  getCurrentPrice(): Promise<BigNumber>;
}

export class ChromaticMarketImpl extends Contract implements ChromaticMarketEx {
  private contract: IChromaticMarket;
  private oracleProvider: OracleProvider;

  constructor(addressOrName: string, private signerOrProvider: Signer | Provider) {
    super(addressOrName, ChromaticMarket__factory.abi, signerOrProvider);
    this.contract = this as unknown as IChromaticMarket;
  }

  async getOracleProviderContract(): Promise<OracleProvider> {
    if (!this.oracleProvider) {
      this.oracleProvider = OracleProvider__factory.connect(
        await this.contract.oracleProvider(),
        this.signerOrProvider,
      );
    }
    return this.oracleProvider;
  }

  async getCurrentPrice(): Promise<BigNumber> {
    return (await (await this.getOracleProviderContract()).currentVersion()).price;
  }
}

export interface ChromaticMarket extends IChromaticMarket, ChromaticMarketEx {}
