
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
    "ChromaticLens": "0x491B59B32E6Ad64c8eeC7324535f38B939720209",
    "ChromaticLiquidator": "0x20a2dcd077DfCBDB05D7aBDd6d663464Eb0ae608",
    "ChromaticMarketFactory": "0xcec5d0e1c5a2e9e1ecA498027b6C1a1f2Eb232b8",
    "ChromaticRouter": "0xF4564c2310680c4F19f2625842E3875A98c110A3",
    "ChromaticVault": "0x1C7d1B506A6649625cBeA0b2b99661A8338110d5"
  }
}
