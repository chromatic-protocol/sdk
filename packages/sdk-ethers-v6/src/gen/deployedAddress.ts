
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
    "ChromaticLens": "0xDB8b1FC60b45D8ae25b78531717DE71B6BECe728",
    "ChromaticMarketFactory": "0xd012cA4Ac7E08819D2fD0a9cc3C569e48ffa8482",
    "ChromaticRouter": "0xA52A0277295363C73A252052abFF2A171cD0a006",
    "ChromaticVault": "0xad146179F3c58053eAcE57C9fae334128cBA347F",
    "cBTC": "0x3d44205cD54CC64C02c0Ad4C86cE53b0E871d54D",
    "cETH": "0x93252009E644138b906aE1a28792229E577239B9"
  }
}
