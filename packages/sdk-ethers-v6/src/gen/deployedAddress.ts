
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
    "ChromaticLens": "0x1fA02b2d6A771842690194Cf62D91bdd92BfE28d",
    "ChromaticMarketFactory": "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650",
    "ChromaticRouter": "0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f",
    "ChromaticVault": "0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f"
  },
  "arbitrum_sepolia": {
    "ChromaticLens": "0xa2BBB60dfF7295f794CC04C3d143e595b703bb8F",
    "ChromaticMarketFactory": "0x486df3B97eF4439CdB274B7C9d075B4d5fA70b1A",
    "ChromaticRouter": "0xF37B361BdE0c44280136B4d82AB6593AC9AE7353",
    "ChromaticVault": "0x6ABdB6338805Af26465F7e363A8D180d79FE899A",
    "cBTC": "0x3d44205cD54CC64C02c0Ad4C86cE53b0E871d54D",
    "cETH": "0x93252009E644138b906aE1a28792229E577239B9"
  }
}
