
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
    "ChromaticLens": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
    "ChromaticMarketFactory": "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650",
    "ChromaticRouter": "0x1fA02b2d6A771842690194Cf62D91bdd92BfE28d",
    "ChromaticVault": "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07"
  },
  "arbitrum_sepolia": {
    "ChromaticLens": "0x337a6316452c49E48340B166aF33052e1fc29dd2",
    "ChromaticMarketFactory": "0x9B6b3BfEe342e097E6eBd9dA990655626fe5B49E",
    "ChromaticRouter": "0xfa4f5d3dcaE965361085622a7dA1907D8C732ee9",
    "ChromaticVault": "0x93e6455d131D2E38b3DC842E760a89b5A8f7Fb21",
    "cBTC": "0x3d44205cD54CC64C02c0Ad4C86cE53b0E871d54D",
    "cETH": "0x93252009E644138b906aE1a28792229E577239B9"
  }
}
