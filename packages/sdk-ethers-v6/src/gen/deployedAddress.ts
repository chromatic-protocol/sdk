
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
    "ChromaticLens": "0x63ecE4C05B8fB272D16844E96702Ea2f26370982",
    "ChromaticMarketFactory": "0xd8E4Af8145A8288537B85878bb2371fa070Aa5eF",
    "ChromaticRouter": "0x582957C7a35CDfeAAD1Ca4b87AE03913eAAd0Be0",
    "ChromaticVault": "0xfaA7b3a4b5c3f54a934a2e33D34C7bC099f96CCE"
  },
  "arbitrum_goerli": {
    "ChromaticLens": "0xeF425Cce449e7D41D245ed8ac046bE6bD20D5056",
    "ChromaticLiquidator": "0xeEf75A4a10a958236A09B054D7993fDAad66AA61",
    "ChromaticMarketFactory": "0x6d207Df6ab10AF3119D67f2d889573850cDB50b4",
    "ChromaticRouter": "0xab9b48Df8BD520D3A6Cb0BF1949022cBaC6E0D9c",
    "ChromaticVault": "0xA1b60efD5D5D5AF0636EC075c74a3Ed4C8155972"
  }
}
