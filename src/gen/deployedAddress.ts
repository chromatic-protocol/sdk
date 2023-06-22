
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
    "ChainlinkFeedOracle": "0xB1d1D373EEe31377d2e97ac2420CD0671E43874C",
    "ChromaticLens": "0x486df3B97eF4439CdB274B7C9d075B4d5fA70b1A",
    "ChromaticLiquidator": "0x84789AD8a8992AA3d65e5f609658BbED4abAac17",
    "ChromaticMarketFactory": "0x20F98C4dDf4c04928eb2302F341dc7eE08d358be",
    "ChromaticRouter": "0xE6eDaA9a5299411B9b3238C7Da8dbbd046a2DC1b",
    "ChromaticVault": "0xbfEeA1F38a7DE8787201B90653Ef4A818d955521"
  }
}
