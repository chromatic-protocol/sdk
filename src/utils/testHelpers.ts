import { ethers } from "ethers";

export const MNEMONIC_JUNK = "test test test test test test test test test test test junk";

export interface GetSignerParam {
  mnemonic?: string;
  selectedAccount?: number;
  privateKey?: string;
}

export function getSigner(param?: GetSignerParam): ethers.Signer {
  const provider = getDefaultProvider();

  if (param?.privateKey !== undefined) {
    return new ethers.Wallet(param.privateKey, provider);
  }

  const account = ethers.utils.HDNode.fromMnemonic(
    param?.mnemonic === undefined ? MNEMONIC_JUNK : param!.mnemonic!
  ).derivePath(`m/44'/60'/0'/0/${param?.selectedAccount === undefined ? 0 : param!.selectedAccount!}`);
  return new ethers.Wallet(account, provider);
}

export function getDefaultProvider(): ethers.providers.JsonRpcProvider {
  return new ethers.providers.JsonRpcProvider(); // "http://localhost:8545"; // default value
}
