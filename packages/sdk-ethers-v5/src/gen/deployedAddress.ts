
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
    "ChromaticLens": "0xEdc1271cDB9721AC80698850212c68E9ef8358E2",
    "ChromaticLiquidator": "0x7A346804c627707A4A20017F99d638a89C4d4A32",
    "ChromaticMarketFactory": "0xDc5F0Be35F9008F6521067971c5bEa75B2E9466d",
    "ChromaticRouter": "0xF52d8471478b42ADe3bCD9B99E0177D03b59430b",
    "ChromaticVault": "0x40e4A7fAD35937A3de8D03991C9Bc8B2bd3fFfaD"
  }
}
