import { NonceManager, Signer, ethers } from "ethers";
import { IChromaticMarket__factory, TestSettlementToken__factory } from "../src/gen";

export const MNEMONIC_JUNK = "test test test test test test test test test test test junk";
export interface GetSignerParam {
  mnemonic?: string;
  selectedAccount?: number;
  privateKey?: string;
}

export interface FaucetParam {
  signer: Signer;
  testToken: string;
}

export interface UpdatePriceParam {
  signer: Signer;
  market: string;
  price: number;
}

export interface WaitMiningTxOptions {
  intervalMillSeconds?: number;
  timeoutMillSeconds?: number;
}

export function getSigner(param?: GetSignerParam): ethers.Signer {
  const provider = getDefaultProvider();

  if (param?.privateKey !== undefined) {
    return new ethers.Wallet(param.privateKey, provider);
  }

  const mnemonic = ethers.Mnemonic.fromPhrase(
    param?.mnemonic === undefined ? MNEMONIC_JUNK : param!.mnemonic!
  );
  const wallet = ethers.HDNodeWallet.fromMnemonic(
    mnemonic,
    `m/44'/60'/0'/0/${param?.selectedAccount === undefined ? 0 : param!.selectedAccount!}`
  );

  return new NonceManager(new ethers.Wallet(wallet.privateKey, provider)); // prevent NONCE_EXPIRED on ethers v6
}

export function getDefaultProvider(): ethers.JsonRpcProvider {
  // return new ethers.JsonRpcProvider(); // "http://localhost:8545"; // default value
  return new ethers.JsonRpcProvider("http://127.0.0.1:8545"); // "http://localhost:8545"; // default value
}

export async function faucetTestToken(param: FaucetParam) {
  const recipient = await param.signer.getAddress();
  const testToken = TestSettlementToken__factory.connect(param.testToken, param.signer);
  const interval = Number(await testToken.faucetMinInterval());
  const lastTs = Number(await testToken.lastFaucetTimestamp(recipient));
  const ts = (await param.signer.provider.getBlock("latest")).timestamp;
  if (ts >= lastTs + interval) {
    // e232c97a AlreadyFaucetedInInterval
    await (await testToken.faucet()).wait();
  }

  return testToken.balanceOf(recipient);
}

export async function updatePrice(param: UpdatePriceParam) {
  const market = IChromaticMarket__factory.connect(param.market, param.signer);
  const oracleProviderAddress = await market.oracleProvider();
  const oracleProvider = new ethers.Contract(
    oracleProviderAddress,
    [
      {
        inputs: [
          {
            internalType: "int256",
            name: "price",
            type: "int256",
          },
        ],
        name: "increaseVersion",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    param.signer
  );

  
  const tx = await oracleProvider.increaseVersion(
    BigInt(param.price.toString()) * BigInt(10 ** 8),
    { gasLimit: BigInt(1e10) } // intrinsic gas too high
  );
  await tx.wait();
}

export async function wait(millseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, millseconds));
}
