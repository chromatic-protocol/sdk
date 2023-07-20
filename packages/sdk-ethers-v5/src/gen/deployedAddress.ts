
interface DeployedAddress {
  [chainName: string]: {
    [contractName: string]: string
    }    
}

/**
 * Deployed Address of contracts
 * mapping of "chainName" to collection of contract name to deployed address
 *
 * @remarks
 *
 * use with helper functions using this constant object
 *
 * {@link getDeployedAddress}
 * {@link getDeployedContract}
 * {@link getAllDeployedContracts}
 * {@link getDeployedContractNames}
 * {@link getChainNames}
 *
 */
export const deployedAddress: DeployedAddress = {
  "anvil": {
    "ChromaticLens": "0x582957C7a35CDfeAAD1Ca4b87AE03913eAAd0Be0",
    "ChromaticMarketFactory": "0xBc153693BFAe1Ca202872a382aED20a1306C9200",
    "ChromaticRouter": "0x5f58879Fe3a4330B6D85c1015971Ea6e5175AeDD",
    "ChromaticVault": "0x86c64cB21f88fA9E2c46b61c35889E75f08FDce1"
  },
  "arbitrum_goerli": {
    "ChromaticLens": "0xDD743Ff8c5E64964118F8ED03d195d5D18d0B8E6",
    "ChromaticLiquidator": "0x42711ea8a1bDfa5F35bE5c2dA9E1831647A283e7",
    "ChromaticMarketFactory": "0xE51aBa7d3B09Ae73D36863B9fA5F20B5348DF542",
    "ChromaticRouter": "0xC7f7a8e569E89c71cF5315d02Db57eEF447E4676",
    "ChromaticVault": "0x119D15E63561C7897BBEB06489668CEE855EE2eB"
  }
}
