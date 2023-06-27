import { BigNumber, ContractReceipt, Signer, ethers } from "ethers";
import { ChromaticMarket__factory, IERC20__factory } from "../gen";

export const MNEMONIC_JUNK = "test test test test test test test test test test test junk";

export interface GetSignerParam {
  mnemonic?: string;
  selectedAccount?: number;
  privateKey?: string;
}

export interface WrapEthParam {
  signer: Signer;
  weth9: string;
  amount: BigNumber;
}

export interface SwapToUSDCParam {
  signer: Signer;
  weth9: string;
  usdc: string;
  swapRouter: string;
  fee: number;
  amount: BigNumber;
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
  return new ethers.providers.JsonRpcProvider(); // "http://localhost:8545"; // default value
}

export async function wrapEth(param: WrapEthParam) {
  const warpTx = await param.signer.sendTransaction({
    to: param.weth9,
    data: ethers.utils.id("deposit()").substring(0, 10),
    value: param.amount,
    gasPrice: await param.signer.getGasPrice(),
  });
  await warpTx.wait();
}

export async function swapToUSDC(param: SwapToUSDCParam): Promise<BigNumber> {
  const recipient = await param.signer.getAddress();

  const WETH9 = IERC20__factory.connect(param.weth9, param.signer);
  if ((await WETH9.balanceOf(recipient)).lt(param.amount)) {
    await wrapEth({ signer: param.signer, amount: param.amount, weth9: param.weth9 });
  }

  if ((await WETH9.allowance(recipient, param.swapRouter)).lt(param.amount)) {
    const approveTx = await IERC20__factory.connect(param.weth9, param.signer).approve(
      param.swapRouter,
      ethers.constants.MaxUint256
    );
    await approveTx.wait();
  }

  const routerContract = new ethers.Contract(
    param.swapRouter,
    [
      {
        inputs: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint24",
                name: "fee",
                type: "uint24",
              },
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOutMinimum",
                type: "uint256",
              },
              {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
              },
            ],
            internalType: "struct ISwapRouter.ExactInputSingleParams",
            name: "params",
            type: "tuple",
          },
        ],
        name: "exactInputSingle",
        outputs: [
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
    ],
    param.signer
  );

  const swapTx = await param.signer.sendTransaction({
    to: param.swapRouter,
    data: routerContract.interface.encodeFunctionData("exactInputSingle", [
      {
        tokenIn: param.weth9,
        tokenOut: param.usdc,
        fee: param.fee,
        recipient: recipient,
        deadline: ethers.constants.MaxUint256,
        amountIn: param.amount,
        amountOutMinimum: 0,
        sqrtPriceLimitX96: 0,
      },
    ]),
  });

  const receipt = await swapTx.wait();
  const usdcEvent = receipt.logs.find((log) => log.address == param.usdc);
  return BigNumber.from(usdcEvent.data);
}

export async function updatePrice(param: UpdatePriceParam) {
  const market = ChromaticMarket__factory.connect(param.market, param.signer);
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

  const tx = await param.signer.sendTransaction({
    to: oracleProviderAddress,
    data: oracleProvider.interface.encodeFunctionData("increaseVersion", [
      BigNumber.from(param.price.toString()).mul(10 ** 8),
    ]),
  });

  await tx.wait();
}

export async function waitTxMining(
  waitTxFn: () => Promise<ContractReceipt>,
  options?: WaitMiningTxOptions
) {
  const startTime = Date.now();
  while ((await waitTxFn()) === undefined) {
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
