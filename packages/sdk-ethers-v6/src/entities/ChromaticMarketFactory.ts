import type { Client } from "../Client";
import {
  ChromaticMarketFactory__factory,
  IERC20Metadata__factory,
  getDeployedAddress,
} from "../gen";
import { PromiseOnlySuccess, handleBytesError } from "../utils/helpers";

/** @ignore */
export interface SettlementToken {
  name: string;
  address: string;
  decimals: bigint;
}

/**
 * Represents the Chromatic Market Factory and provides methods to interact with it.
 */
export class ChromaticMarketFactory {
  /**
   * Creates a new instance of ChromaticMarketFactory.
   * @param _client The Chromatic Client instance.
   */
  constructor(private readonly _client: Client) {}

  /**
   * Retrieves the contract instance of the Chromatic Market Factory.
   * @param addressOrName The address or name of the Chromatic Market Factory contract.
   * @returns The Chromatic Market Factory contract instance.
   */
  private factoryContract(addressOrName?: string) {
    return ChromaticMarketFactory__factory.connect(
      addressOrName || getDeployedAddress("ChromaticMarketFactory", this._client.chainName),
      this._client.provider
    );
  }

  /**
   * Retrieves the contract instances associated with the Chromatic Market Factory.
   * @returns An object containing the contract instance of the Market Factory.
   */
  contracts() {
    return {
      marketFactory: this.factoryContract(),
    };
  }

  /**
   * Retrieves the registered settlement tokens.
   * @returns A promise that resolves to an array of settlement tokens.
   */
  async registeredSettlementTokens() {
    return await handleBytesError(async () => {
      const totalRegisteredTokenAddrs =
        await this.contracts().marketFactory.registeredSettlementTokens();
      const promise = totalRegisteredTokenAddrs.map(async (address) => {
        const { symbol, decimals } = IERC20Metadata__factory.connect(
          address,
          this._client.provider
        );

        return {
          name: await symbol(),
          address,
          decimals: await decimals(),
        } satisfies SettlementToken;
      });
      return PromiseOnlySuccess(promise);
    }, this._client.provider);
  }

  /**
   * Retrieves the current interest rate for a specific settlement token.
   * @param settlementToken The address of the settlement token.
   * @returns A promise that resolves to the current interest rate.
   */
  async currentInterestRate(settlementToken: string) {
    return await handleBytesError(async () => {
      return this.contracts().marketFactory.currentInterestRate(settlementToken);
    }, this._client.provider);
  }

  /**
   * Retrieves the markets associated with a specific settlement token.
   * @param settlementToken The address of the settlement token.
   * @returns A promise that resolves to an array of market information.
   */
  async getMarkets(settlementToken: string) {
    return await handleBytesError(async () => {
      const marketAddresses = await this.contracts().marketFactory.getMarketsBySettlmentToken(
        settlementToken
      );
      const market = this._client.market();
      const orcales = await market.getCurrentPrices(marketAddresses);

      return Promise.all(
        orcales.map(async (orcale) => {
          const { market: address, value } = orcale;
          return {
            address,
            oracleValue: value,
            description: await market.getMarketName(address),
          };
        })
      );
    }, this._client.provider);
  }

  /**
   * Retrieves the oracle provider properties for a specific oracle provider
   * @param oracleProvider The address of the oracle provider
   * @returns A Promise that resolves to an object containing the oracle properties
   */
  async getOracleProviderProperties(oracleProvider: string) {
    return await handleBytesError(async () => {
      return await this.contracts().marketFactory.getOracleProviderProperties(oracleProvider);
    }, this._client.provider);
  }
}
