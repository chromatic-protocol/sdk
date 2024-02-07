
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
    "ChromaticLens": "0xDC11f7E700A4c898AE5CAddB1082cFfa76512aDD",
    "ChromaticMarketFactory": "0xc351628EB244ec633d5f21fBD6621e1a683B1181",
    "ChromaticRouter": "0xD8a5a9b31c3C0232E196d518E89Fd8bF83AcAd43",
    "ChromaticVault": "0x922D6956C99E12DFeB3224DEA977D0939758A1Fe"
  },
  "arbitrum_sepolia": {
    "ChromaticLens": "0xe199aaa7EF739C6f76899EAf5c06d254d34e92a1",
    "ChromaticMarketFactory": "0x7e8e54FD9A35B3Bf908dD56Bb18928226d70810a",
    "ChromaticRouter": "0xCEBBec615a0a3997A9Ee6a9b693524486D9180af",
    "ChromaticVault": "0xEdA9b65D119694a7bCf3df6282541A65b7B65c3e",
    "cBTC": "0x3d44205cD54CC64C02c0Ad4C86cE53b0E871d54D",
    "cETH": "0x93252009E644138b906aE1a28792229E577239B9",
    "cUSDT": "0x6C0b40bdd3B0f4b2F2d58c325981d5f3eeBA4719"
  }
}
