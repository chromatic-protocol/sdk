
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
    "ChromaticLens": "0x63ecE4C05B8fB272D16844E96702Ea2f26370982",
    "ChromaticMarketFactory": "0xd8E4Af8145A8288537B85878bb2371fa070Aa5eF",
    "ChromaticRouter": "0x582957C7a35CDfeAAD1Ca4b87AE03913eAAd0Be0",
    "ChromaticVault": "0xfaA7b3a4b5c3f54a934a2e33D34C7bC099f96CCE"
  },
  "arbitrum_goerli": {
    "ChromaticLens": "0xB7051513bd699E53eE103eFC2D934ebfAE645686",
    "ChromaticLiquidator": "0x30c96F3f9Fe2Ee75C60e211135cBE684f9BEF75f",
    "ChromaticMarketFactory": "0x40C9a174b4e3A48A43411a6b33a073457ddFc850",
    "ChromaticRouter": "0xd72BB58714DB892872eD26C85D950E8a0b69d3ed",
    "ChromaticVault": "0x74F8B41817De77a9D69Da803c98b26BEE9711457"
  }
}
