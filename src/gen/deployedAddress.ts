
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
    "ChromaticLens": "0xfaA7b3a4b5c3f54a934a2e33D34C7bC099f96CCE",
    "ChromaticMarketFactory": "0x4Bd915C3e39cfF4eac842255965E79061c38cACD",
    "ChromaticRouter": "0x86c64cB21f88fA9E2c46b61c35889E75f08FDce1",
    "ChromaticVault": "0xCd9BC6cE45194398d12e27e1333D5e1d783104dD"
  },
  "arbitrum_goerli": {
    "ChromaticLens": "0xA032b12782211E45870E664d691e156e1E2B703e",
    "ChromaticLiquidator": "0xF0B564673767524a99017ACe909102Fb944497ec",
    "ChromaticMarketFactory": "0xB4D851cC4632b3B6f73b2686037e4433767e5D41",
    "ChromaticRouter": "0xecC25899A89B33e82b7A0F25CC6BaF26c5e35069",
    "ChromaticVault": "0x471fEe01b261fd8C504CA3Bc3b964dFD1AAeE004"
  }
}
