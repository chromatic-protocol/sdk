
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
    "ChromaticLens": "0x324fd43D305Aa11711c015015155c56EbEf59446",
    "ChromaticLiquidator": "0xc2cfD3F4A5A083A467aE096654Bd0F7E911AcfAe",
    "ChromaticMarketFactory": "0xC5496E0059D57825207966A5a029eA86bAf3Cad2",
    "ChromaticRouter": "0xF204053F81C6374d9502557e3612AE06614bcec0",
    "ChromaticVault": "0xD81f2eDCac93d8BE6a1b8EC01bD2474e3De18291"
  }
}
