
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
    "ChromaticLens": "0x99e46e306f1511B4C59F676f0a167AD48C27269a",
    "ChromaticMarketFactory": "0x9370741aB608C87668C4372Af84f662Be9792C32",
    "ChromaticRouter": "0xbdccf23ee16Ea5BCa5462b26760Fc0fB8436d47D",
    "ChromaticVault": "0x7F54039E7d2E11386d2c329004a8aCC47380AcA7"
  },
  "anvil": {
    "ChromaticLens": "0x3576293Ba6Adacba1A81397db889558Dd91A8519",
    "ChromaticMarketFactory": "0xd8E4Af8145A8288537B85878bb2371fa070Aa5eF",
    "ChromaticRouter": "0x63ecE4C05B8fB272D16844E96702Ea2f26370982",
    "ChromaticVault": "0xA901DA770A472Caf6E6698261BB02ea58C5d3235"
  },
  "anvil_mantle": {
    "ChromaticLens": "0x8F4ec854Dd12F1fe79500a1f53D0cbB30f9b6134",
    "ChromaticMarketFactory": "0xA56F946D6398Dd7d9D4D9B337Cf9E0F68982ca5B",
    "ChromaticRouter": "0x71089Ba41e478702e1904692385Be3972B2cBf9e",
    "ChromaticVault": "0xAD523115cd35a8d4E60B3C0953E0E0ac10418309"
  },
  "arbitrum_goerli": {
    "ChromaticLens": "0xeF425Cce449e7D41D245ed8ac046bE6bD20D5056",
    "ChromaticMarketFactory": "0x6d207Df6ab10AF3119D67f2d889573850cDB50b4",
    "ChromaticRouter": "0xab9b48Df8BD520D3A6Cb0BF1949022cBaC6E0D9c",
    "ChromaticVault": "0xA1b60efD5D5D5AF0636EC075c74a3Ed4C8155972"
  }
}
