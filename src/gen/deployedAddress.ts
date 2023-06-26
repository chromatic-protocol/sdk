
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
    "ChromaticLens": "0x9e6ce55E0C203Ba175bA7b2B9267427d06F2d1B5",
    "ChromaticLiquidator": "0xA17f3F2a78b55731F2C56a410580724B85EF25dE",
    "ChromaticMarketFactory": "0xF818D424693D12bBF4dbB97f6B43E2BAD6Ef2dCE",
    "ChromaticRouter": "0x42baB312F31DAeC8214460DBa97Fc2aD61f2Ec87",
    "ChromaticVault": "0x4e5b956646f77b9fAC121E29C0b7E2837785098c"
  }
}
