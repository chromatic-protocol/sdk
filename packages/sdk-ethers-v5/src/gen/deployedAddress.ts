
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
    "ChromaticLens": "0x46f6d0c767550e9f98b9A58cF0Eb0d45712Cb205",
    "ChromaticMarketFactory": "0xC13ca51d2a3e42B596070422E7844dB8C68905D6",
    "ChromaticRouter": "0x117d7f25C928Ba63f73D355123D5585CfC820250",
    "ChromaticVault": "0xb19e91bb896BB18b552383CA5912fdC82186e0Be",
    "cBTC": "0xD968052A0444597371Aa702b7166BC137E42Ac0B",
    "cETH": "0x73e7aee5a708029fa6DC208437DA1429a944E6FA"
  }
}
