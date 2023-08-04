
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
    "ChromaticLens": "0xD4797bCA7cC55Fe89Db8561014a926FbBAE4BB08",
    "ChromaticLiquidator": "0xCc25d82dd205bF21eCd6CE63559415AFce93a00F",
    "ChromaticMarketFactory": "0xD333A3DF8894344d3A3944661513A5617c795e35",
    "ChromaticRouter": "0xcc6DE28F76Df1fC905130251A1042400BeA8D726",
    "ChromaticVault": "0x0fF36558130285bdBcC91CD315bEB7Ca87CA0ba7"
  }
}
