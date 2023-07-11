
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
    "ChromaticLens": "0xA42f04D98174542A5dC0246bBDAa76dD1486Af76",
    "ChromaticLiquidator": "0x72f7A78e056Dba7b2D3B207379f4b14711C7cc6E",
    "ChromaticMarketFactory": "0xBe980fEb26Afc10825158a1803313AC26B600517",
    "ChromaticRouter": "0x3EE6BC0B279899cdEC8E3969a0E22c1462dC0fB8",
    "ChromaticVault": "0x51943f3c0b3514b49D803b858A1a258db52bc20C"
  }
}
