import { Address, getContract } from "viem";
import type { Client } from "../Client";
import { chromaticMarketABI, clbTokenABI, iOracleProviderABI, ierc20MetadataABI } from "../gen";
import { Contract, handleBytesError } from "../utils/helpers";

/**
 * Represents a Chromatic Market and provides methods to interact with it.
 */
export class ChromaticMarket {
  /**
   * Creates a new instance of ChromaticMarket.
   * @param _client The Chromatic Client instance.
   */
  constructor(private readonly _client: Client) {}

  /**
   * Retrieves the contract instances associated with the Chromatic Market.
   * @returns An object containing the contract instances.
   */
  contracts() {
    return {
      market: (marketAddress: Address): Contract<typeof chromaticMarketABI> =>
        getContract({
          address: marketAddress,
          abi: chromaticMarketABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      settlementToken: async (
        marketAddress: Address
      ): Promise<Contract<typeof ierc20MetadataABI>> =>
        getContract({
          address: await this.settlementToken(marketAddress),
          abi: ierc20MetadataABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      clbToken: async (marketAddress: Address): Promise<Contract<typeof clbTokenABI>> =>
        getContract({
          address: await this.clbToken(marketAddress),
          abi: clbTokenABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
      oracleProvider: async (
        marketAddress: Address
      ): Promise<Contract<typeof iOracleProviderABI>> =>
        getContract({
          address: await this.oracleProvider(marketAddress),
          abi: iOracleProviderABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
    };
  }

  /**
   * Retrieves the settlement token address associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the settlement token contract address.
   */
  async settlementToken(marketAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().market(marketAddress).read.settlementToken();
    });
  }

  /**
   * Retrieves the CLB token address associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the CLB token contract address.
   */
  async clbToken(marketAddress: Address) {
    return await handleBytesError(async () => {
      return await this.contracts().market(marketAddress).read.clbToken();
    });
  }

  /**
   * Retrieves the metadata of a CLB token associated with a specific market and token ID.
   * @param marketAddress The address of the market.
   * @param tokenId The ID of the CLB token.
   * @returns A promise that resolves to the CLB token metadata.
   */
  async clbTokenMeta(marketAddress: Address, tokenId: bigint) {
    return await handleBytesError(async () => {
      const clbTokenContract = await this.contracts().clbToken(marketAddress);
      const [name, image, description, decimals] = await Promise.all([
        clbTokenContract.read.name([tokenId]),
        clbTokenContract.read.image([tokenId]),
        clbTokenContract.read.description([tokenId]),
        clbTokenContract.read.decimals(),
      ]);
      return {
        name,
        image,
        description,
        decimals,
      };
    });
  }

  /**
   * Retrieves the OracleProvider contract associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the OracleProvider contract instance.
   */
  async oracleProvider(marketAddress: Address) {
    return await handleBytesError(async () => {
      const marketContract = this.contracts().market(marketAddress);
      return await marketContract.read.oracleProvider();
    });
  }

  /**
   * Retrieves the current price from the OracleProvider contract associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the current price.
   */
  async getCurrentPrice(marketAddress: Address) {
    return await handleBytesError(async () => {
      const oracleProvider = await this.contracts().oracleProvider(marketAddress);
      return await oracleProvider.read.currentVersion();
    });
  }

  /**
   * Retrieves the name of the market from the OracleProvider contract associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the market name.
   */
  async getMarketName(marketAddress: Address) {
    return await handleBytesError(async () => {
      const oracleProvider = await this.contracts().oracleProvider(marketAddress);
      return await oracleProvider.read.description();
    });
  }

  /**
   * Retrieves the current prices from the OracleProvider contracts associated with multiple markets.
   * @param marketAddresses An array of market addresses.
   * @returns A promise that resolves to an array of market addresses and their corresponding current prices.
   */
  async getCurrentPrices(marketAddresses: Address[]) {
    // ): Promise<{ market: string; value: IOracleProvider.OracleVersionStructOutput }[]> {
    return await handleBytesError(async () => {
      return await Promise.all(
        marketAddresses.map(async (address) => {
          return {
            market: address,
            value: await this.getCurrentPrice(address),
          };
        })
      );
    });
  }
}
