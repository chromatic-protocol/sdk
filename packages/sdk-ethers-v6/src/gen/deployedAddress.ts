
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
    "ChromaticLens": "0xdBCe0f374fF5e0671DcE804B31816658256e7F75",
    "ChromaticLiquidator": "0xe446C7035BF80BB5B85ACE5B17D50a6dcc379eF2",
    "ChromaticMarketFactory": "0xC2eA976344A6dcAe7329f54d844388121D20baD0",
    "ChromaticRouter": "0xe21abdBCecbdb995c54d576f0651195a57d58738",
    "ChromaticVault": "0x4F64CdF28bb439EC210ebdE5e88e07C3Ee321C3d"
  }
}
