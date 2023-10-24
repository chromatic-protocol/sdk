
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
  "anvil_mantle": {
    "ChromaticLens": "0xdFdE6B33f13de2CA1A75A6F7169f50541B14f75b",
    "ChromaticMarketFactory": "0x2b5A4e5493d4a54E717057B127cf0C000C876f9B",
    "ChromaticRouter": "0x63fea6E447F120B8Faf85B53cdaD8348e645D80E",
    "ChromaticVault": "0x5133BBdfCCa3Eb4F739D599ee4eC45cBCD0E16c5"
  },
  "arbitrum_goerli": {
    "ChromaticLens": "0xeF425Cce449e7D41D245ed8ac046bE6bD20D5056",
    "ChromaticMarketFactory": "0x6d207Df6ab10AF3119D67f2d889573850cDB50b4",
    "ChromaticRouter": "0xab9b48Df8BD520D3A6Cb0BF1949022cBaC6E0D9c",
    "ChromaticVault": "0xA1b60efD5D5D5AF0636EC075c74a3Ed4C8155972"
  }
}
