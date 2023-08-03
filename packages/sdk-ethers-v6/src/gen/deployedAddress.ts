
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
    "ChromaticLens": "0xB4b63e4dca49b4F86494a250f3538a1EDB1f3162",
    "ChromaticLiquidator": "0xf4a5084b0EEc984b9b8D896F0AfBBF7b819a52b7",
    "ChromaticMarketFactory": "0x96D5cE68eb67271E3018b3FCF128c09D7642eF82",
    "ChromaticRouter": "0x664aB7aFFBD42a31Ef9078273018906f64Cf2d68",
    "ChromaticVault": "0x4FfDF978B39466B64bdF778fA755E180dcCcedEC"
  }
}
