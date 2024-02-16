
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
    "ChromaticLens": "0x2E2Ed0Cfd3AD2f1d34481277b3204d807Ca2F8c2",
    "ChromaticMarketFactory": "0xFD471836031dc5108809D173A067e8486B9047A3",
    "ChromaticRouter": "0x21dF544947ba3E8b3c32561399E88B52Dc8b2823",
    "ChromaticVault": "0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f"
  },
  "arbitrum_one": {
    "ChromaticLens": "0x3B7F614389d0b6a5e20dBd3FC3CAE297Ea791590",
    "ChromaticMarketFactory": "0x0b216AB26E20d6caA770B18596A3D53B683638B4",
    "ChromaticRouter": "0xbCc97243f965EcbE31071887B5DDBA1Add8E220a",
    "ChromaticVault": "0x19631A51aeDcd831E29cbCbCfe77010dAfd3343a"
  },
  "arbitrum_sepolia": {
    "ChromaticLens": "0xE8793D457cbADC7e9a9D17b410b71661F47180dB",
    "ChromaticMarketFactory": "0x1471332e8e91505a6B20F9bD1C70b52173dECB7d",
    "ChromaticRouter": "0x236dAEcCe74D1E13b4440573a538013f26B0e2D2",
    "ChromaticVault": "0x5e8859472e0cBa30a4f4cEa1Ae4fD76FFea77Cf0",
    "cBTC": "0x3d44205cD54CC64C02c0Ad4C86cE53b0E871d54D",
    "cETH": "0x93252009E644138b906aE1a28792229E577239B9",
    "cUSDT": "0x6C0b40bdd3B0f4b2F2d58c325981d5f3eeBA4719"
  }
}
