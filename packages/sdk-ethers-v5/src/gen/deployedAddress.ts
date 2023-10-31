
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
    "ChromaticLens": "0x684d2ae59f3c863a55E89E39838Cb0E4d43eF78c",
    "ChromaticMarketFactory": "0x9dC7D734A59febe5c3DEe8615dbF9d2081BD9F5c",
    "ChromaticRouter": "0x3049A7a2A004E1C77Bc15fF802c86B458d830499",
    "ChromaticVault": "0x9357Cbd2A5069f5C40b3a8E8B821C69b8045BC52",
    "TestSettlementToken": "0x73e7aee5a708029fa6DC208437DA1429a944E6FA"
  }
}
