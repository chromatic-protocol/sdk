import { Address, getContract } from "viem";
import type { Client } from "../Client";
import {
  chromaticMarketFactoryABI,
  chromaticMarketFactoryAddress
} from "../gen";

export interface SettlementToken {
  name: string;
  address: string;
  decimals: number;
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
  private factoryContract(address?: Address) {
    const deployedMarketFactoryAddress = (chromaticMarketFactoryAddress as Record<number, Address>)[
      this._client.publicClient?.chain?.id || 0
    ];
    return getContract({
      address: address || deployedMarketFactoryAddress,
      abi: chromaticMarketFactoryABI,
      publicClient: this._client.publicClient,
      walletClient: this._client.walletClient,
    });
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
    // return await handleBytesError(async () => {
    //   const totalRegisteredTokenAddrs =
    //     await this.contracts().marketFactory.registeredSettlementTokens();
    //   const promise = totalRegisteredTokenAddrs.map(async (address) => {
    //     const { symbol, decimals } = IERC20Metadata__factory.connect(
    //       address,
    //       this._client.provider
    //     );

    //     return {
    //       name: await symbol(),
    //       address,
    //       decimals: await decimals(),
    //     } satisfies SettlementToken;
    //   });

    //   const response = await Promise.allSettled(promise);
    //   const fulfilled = response
    //     .filter(
    //       (result): result is PromiseFulfilledResult<SettlementToken> =>
    //         result.status === "fulfilled"
    //     )
    //     .map(({ value }) => value);

    //   return fulfilled;
    // }, this._client.provider);
  }

  /**
   * Retrieves the current interest rate for a specific settlement token.
   * @param settlementToken The address of the settlement token.
   * @returns A promise that resolves to the current interest rate.
   */
  async currentInterestRate(settlementToken: string) {
    // return await handleBytesError(async () => {
    //   return this.contracts().marketFactory.currentInterestRate(settlementToken);
    // }, this._client.provider);
  }

  /**
   * Retrieves the markets associated with a specific settlement token.
   * @param settlementToken The address of the settlement token.
   * @returns A promise that resolves to an array of market information.
   */
  async getMarkets(settlementToken: string) {
    // return await handleBytesError(async () => {
    //   const marketAddresses = await this.contracts().marketFactory.getMarketsBySettlmentToken(
    //     settlementToken
    //   );
    //   const market = this._client.market();
    //   const orcales = await market.getCurrentPrices(marketAddresses);

    //   return Promise.all(
    //     orcales.map(async (orcale) => {
    //       const { market: address, value } = orcale;
    //       return {
    //         address,
    //         oracleValue: value,
    //         description: await market.getMarketName(address),
    //       };
    //     })
    //   );
    // }, this._client.provider);
  }
}
