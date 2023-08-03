
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
    "ChromaticLens": "0x1492b66490B66eF443386E240a21895cd5BFd9Be",
    "ChromaticLiquidator": "0x7aD84659B4F798F913BE84f53192bBfa21b0d0a4",
    "ChromaticMarketFactory": "0x8333fd7347c1afBA6D832B52834BF59Fd70Ce657",
    "ChromaticRouter": "0x3bB6383923d0f8Dc397D28Fe07Ff9E9E26bbF663",
    "ChromaticVault": "0x74Ec9c2EE1e96E0Ac2F4BB5641d0C3e3b37B991f"
  }
}
