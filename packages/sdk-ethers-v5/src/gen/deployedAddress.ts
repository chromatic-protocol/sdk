
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
    "ChromaticLens": "0x4481Ea5d904A44d1d6a01C65839363889ba16775",
    "ChromaticMarketFactory": "0x513D01198a6808A0A7C456440dbF1E49539284Bc",
    "ChromaticRouter": "0x7aD84659B4F798F913BE84f53192bBfa21b0d0a4",
    "ChromaticVault": "0xB4c386Fc066765a23aBf82355A3FA15c94dDF281"
  },
  "anvil": {
    "ChromaticLens": "0x3576293Ba6Adacba1A81397db889558Dd91A8519",
    "ChromaticMarketFactory": "0xd8E4Af8145A8288537B85878bb2371fa070Aa5eF",
    "ChromaticRouter": "0x63ecE4C05B8fB272D16844E96702Ea2f26370982",
    "ChromaticVault": "0xA901DA770A472Caf6E6698261BB02ea58C5d3235"
  },
  "arbitrum_goerli": {
    "ChromaticLens": "0xeF425Cce449e7D41D245ed8ac046bE6bD20D5056",
    "ChromaticMarketFactory": "0x6d207Df6ab10AF3119D67f2d889573850cDB50b4",
    "ChromaticRouter": "0xab9b48Df8BD520D3A6Cb0BF1949022cBaC6E0D9c",
    "ChromaticVault": "0xA1b60efD5D5D5AF0636EC075c74a3Ed4C8155972"
  }
}
