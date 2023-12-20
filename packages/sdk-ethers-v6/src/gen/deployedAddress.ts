
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
    "ChromaticMarketFactory": "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650"
  },
  "arbitrum_sepolia": {
    "ChromaticLens": "0xBA758C74BB48789F531342aB7d4AeED20F921B2b",
    "ChromaticMarketFactory": "0xa74B572cA410b79B581C24cc37743d65b2D936c8",
    "ChromaticRouter": "0x4e1F1Ae08217A7f7e3D935E1063C6d87ADA5c9Eb",
    "ChromaticVault": "0xa18E637B138d7e25cCe6878Cfec80aE5ed44eFf9",
    "cBTC": "0x3d44205cD54CC64C02c0Ad4C86cE53b0E871d54D",
    "cETH": "0x93252009E644138b906aE1a28792229E577239B9"
  }
}
