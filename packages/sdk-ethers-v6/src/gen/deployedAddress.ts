
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
    "ChromaticLens": "0x4C4a2f8c81640e47606d3fd77B353E87Ba015584",
    "ChromaticMarketFactory": "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650",
    "ChromaticRouter": "0x04C89607413713Ec9775E14b954286519d836FEf",
    "ChromaticVault": "0x162A433068F51e18b7d13932F27e66a3f99E6890"
  },
  "arbitrum_sepolia": {
    "ChromaticLens": "0xe199aaa7EF739C6f76899EAf5c06d254d34e92a1",
    "ChromaticMarketFactory": "0x7e8e54FD9A35B3Bf908dD56Bb18928226d70810a",
    "ChromaticRouter": "0xCEBBec615a0a3997A9Ee6a9b693524486D9180af",
    "ChromaticVault": "0xEdA9b65D119694a7bCf3df6282541A65b7B65c3e",
    "cBTC": "0x3d44205cD54CC64C02c0Ad4C86cE53b0E871d54D",
    "cETH": "0x93252009E644138b906aE1a28792229E577239B9"
  }
}
