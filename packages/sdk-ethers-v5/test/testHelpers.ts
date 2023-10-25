import { BigNumber, ContractReceipt, Signer, ethers } from "ethers";
import {
  IChromaticMarket__factory,
  IERC20__factory,
  TestSettlementToken__factory,
} from "../src/gen";

export const MNEMONIC_JUNK = "test test test test test test test test test test test junk";
export const ARBITRUM_GOERLI_WETH9 = "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3";
export const ARBITRUM_GOERLI_SWAP_ROUTER = "0xF1596041557707B1bC0b3ffB34346c1D9Ce94E86";
export const WETH9 = new ethers.Contract(
  ARBITRUM_GOERLI_WETH9,
  [
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    ...IERC20__factory.abi,
  ],
  getDefaultProvider()
);

export interface GetSignerParam {
  mnemonic?: string;
  selectedAccount?: number;
  privateKey?: string;
}

export interface WrapEthParam {
  signer: Signer;
  amount: BigNumber;
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

  const account = ethers.utils.HDNode.fromMnemonic(
    param?.mnemonic === undefined ? MNEMONIC_JUNK : param!.mnemonic!
  ).derivePath(
    `m/44'/60'/0'/0/${param?.selectedAccount === undefined ? 0 : param!.selectedAccount!}`
  );
  return new ethers.Wallet(account, provider);
}

export function getDefaultProvider(): ethers.providers.JsonRpcProvider {
  return new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"); // "http://localhost:8545"; // default value
}

export async function wrapEth(param: WrapEthParam) {
  const tx = await WETH9.connect(param.signer).deposit({
    value: param.amount,
    gasPrice: await param.signer.getGasPrice(),
  });
  await tx.wait();
}

export async function faucetTestToken(param: FaucetParam) {
  const recipient = await param.signer.getAddress();
  const testToken = TestSettlementToken__factory.connect(param.testToken, param.signer);
  await (await testToken.faucet({ gasLimit: 1e10 })).wait();

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
            internalType: "Fixed18",
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

  const tx = await oracleProvider.increaseVersion(BigInt(param.price.toString()) * BigInt(10 ** 8));

  await tx.wait();
}

// send tx until mining
export async function waitTxMining(
  waitTxFn: () => Promise<ContractReceipt>,
  options?: WaitMiningTxOptions
): Promise<ContractReceipt | undefined> {
  const startTime = Date.now();
  while (true) {
    const receipt = await waitTxFn();
    if (receipt !== undefined) {
      return receipt;
    }
    await wait(options?.intervalMillSeconds === undefined ? 2000 : options!.intervalMillSeconds!);
    const timeoutMs =
      options?.timeoutMillSeconds === undefined ? 10000 : options!.timeoutMillSeconds!;
    if (Date.now() - startTime >= timeoutMs) {
      throw Error("Transaction was not mined");
    }
  }
}

export async function wait(millseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, millseconds));
}
