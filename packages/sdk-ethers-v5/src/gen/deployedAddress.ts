
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
  "mantle_testnet": {
    "ChromaticLens": "0x1efa714DB1e3527cEf2e0403e28582b8a1e27733",
    "ChromaticMarketFactory": "0xA575b950651007851d3cfE8e0E63BcCEf0a9632b",
    "ChromaticRouter": "0xa3950696adc8A3eE61066942ca252028BbebDdB6",
    "ChromaticVault": "0x1Bd6F9E45BdBb9D57EcE8260A77E28F4839DdA41"
  },
  "anvil": {
    "ChromaticLens": "0x3576293Ba6Adacba1A81397db889558Dd91A8519",
    "ChromaticMarketFactory": "0xd8E4Af8145A8288537B85878bb2371fa070Aa5eF",
    "ChromaticRouter": "0x63ecE4C05B8fB272D16844E96702Ea2f26370982",
    "ChromaticVault": "0xA901DA770A472Caf6E6698261BB02ea58C5d3235"
  },
  "arbitrum_goerli": {
    "ChromaticLens": "0x1D17C90BB37aF56d0EB825cE6b0a5A4DC4e18b84",
    "ChromaticMarketFactory": "0x23871008245540cb7a363A8532829B52376A6F8A",
    "ChromaticRouter": "0x6C310BD663FAFb76d7a9C4C1f6E642C560bD8f50",
    "ChromaticVault": "0xbe4BDd5ED60ea4c66AC39A4F9B1E3bD0F5261b0c",
    "cBTC": "0xD4fA17cB3762063b9B9FE4A43a62952970880127",
    "cETH": "0x71808ebF9a3bE188729817BA64E71203F4DB6CC6"
  }
}
