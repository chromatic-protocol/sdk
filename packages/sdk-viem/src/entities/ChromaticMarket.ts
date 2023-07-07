import { BigNumberish } from "ethers";
import { Address, getContract } from "viem";
import type { Client } from "../Client";
import {
  chromaticMarketABI,
  ierc20MetadataABI
} from "../gen";

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
      market: (marketAddress: Address) =>
        getContract({
          address: marketAddress,
          abi: chromaticMarketABI,
          publicClient: this._client.publicClient,
          walletClient: this._client.walletClient,
        }),
    };
  }

  /**
   * Retrieves the settlement token associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the settlement token instance.
   */
  async settlementToken(marketAddress: Address) {
    const settlementTokenAddress = await this.contracts()
      .market(marketAddress)
      .read.settlementToken();
    return getContract({
      abi: ierc20MetadataABI,
      address: settlementTokenAddress,
      publicClient: this._client.publicClient,
      walletClient: this._client.walletClient,
    });
    // return await handleBytesError(async () => {
    //   return IERC20__factory.connect(
    //     await this.contracts().market(marketAddress).settlementToken(),
    //     this._client.signer || this._client.provider
    //   );
    // }, this._client.provider);
  }

  /**
   * Retrieves the CLB token associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the CLB token instance.
   */
  async clbToken(marketAddress: string) {
    // return await handleBytesError(async () => {
    //   return CLBToken__factory.connect(
    //     await this.contracts().market(marketAddress).clbToken(),
    //     this._client.signer || this._client.provider
    //   );
    // }, this._client.provider);
  }

  /**
   * Retrieves the metadata of a CLB token associated with a specific market and token ID.
   * @param marketAddress The address of the market.
   * @param tokenId The ID of the CLB token.
   * @returns A promise that resolves to the CLB token metadata.
   */
  async clbTokenMeta(marketAddress: string, tokenId: BigNumberish) {
    // return await handleBytesError(async () => {
    //   const clbTokenContract = await this.clbToken(marketAddress);
    //   const [name, image, description, decimals] = await Promise.all([
    //     clbTokenContract.name(tokenId),
    //     clbTokenContract.image(tokenId),
    //     clbTokenContract.description(tokenId),
    //     clbTokenContract.decimals(),
    //   ]);
    //   return {
    //     name,
    //     image,
    //     description,
    //     decimals,
    //   };
    // }, this._client.provider);
  }

  /**
   * Retrieves the OracleProvider contract associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the OracleProvider contract instance.
   */
  async getOracleProviderContract(marketAddress: string){
    // return await handleBytesError(async () => {
    //   const marketContract = this.contracts().market(marketAddress);
    //   return IOracleProvider__factory.connect(
    //     await marketContract.oracleProvider(),
    //     this._client.signer || this._client.provider
    //   );
    // }, this._client.provider);
  }

  /**
   * Retrieves the current price from the OracleProvider contract associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the current price.
   */
  async getCurrentPrice(marketAddress: string) {
    // return await handleBytesError(async () => {
    //   const contract = await this.getOracleProviderContract(marketAddress);
    //   return contract.currentVersion();
    // }, this._client.provider);
  }

  /**
   * Retrieves the name of the market from the OracleProvider contract associated with a specific market.
   * @param marketAddress The address of the market.
   * @returns A promise that resolves to the market name.
   */
  async getMarketName(marketAddress: string) {
    // return await handleBytesError(async () => {
    //   return (await this.getOracleProviderContract(marketAddress)).description();
    // }, this._client.provider);
  }

  /**
   * Retrieves the current prices from the OracleProvider contracts associated with multiple markets.
   * @param marketAddresses An array of market addresses.
   * @returns A promise that resolves to an array of market addresses and their corresponding current prices.
   */
  async getCurrentPrices(
    marketAddresses: string[]
  ){
  // ): Promise<{ market: string; value: IOracleProvider.OracleVersionStructOutput }[]> {
    // return await handleBytesError(async () => {
    //   return await Promise.all(
    //     marketAddresses.map(async (address) => {
    //       return {
    //         market: address,
    //         value: await this.getCurrentPrice(address),
    //       };
    //     })
    //   );
    // }, this._client.provider);
  }
}
