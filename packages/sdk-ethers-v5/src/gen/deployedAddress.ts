
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
    "ChromaticLens": "0xC4cB783C0A0cd31fb0c3E62aEaD0b1B1FAB02Fe9",
    "ChromaticLiquidator": "0xDC615eef914653990dD07140226188bc7AdD2BD1",
    "ChromaticMarketFactory": "0xa7fc9c4252F8C83857a5B217A1773B1Ce7B177b1",
    "ChromaticRouter": "0x1E7648263318082a67f045C47c2a53C4983022Ec",
    "ChromaticVault": "0x6E50d05D6202Cfe57429C28611701863f652b9B7"
  }
}
