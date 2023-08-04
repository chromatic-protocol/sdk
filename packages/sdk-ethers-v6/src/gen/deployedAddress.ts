
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
    "ChromaticLens": "0xCd9c32a22da118087975323a43c71d491CDDD3E1",
    "ChromaticLiquidator": "0x79c097070cbC67c55C01452cf08E94ae0110642b",
    "ChromaticMarketFactory": "0x734D00DD8E534667697FE733CcAa596eE442F038",
    "ChromaticRouter": "0xd17360Df16493ABBBb4cc446cEc09712f4473780",
    "ChromaticVault": "0x09E0953B2e659B1f177aDcE88f8664AA68F4c401"
  }
}
