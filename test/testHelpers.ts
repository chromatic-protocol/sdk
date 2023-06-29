import { BigNumber, ContractReceipt, Signer, ethers } from "ethers";
import {
  CLBToken__factory,
  ChromaticAccount__factory,
  ChromaticLiquidator__factory,
  ChromaticMarketFactory__factory,
  ChromaticMarket__factory,
  ChromaticRouter__factory,
  ChromaticVault__factory,
  IERC20__factory,
  IOracleProvider__factory,
} from "../src/gen";
import { LpReceiptStructOutput } from "../src/gen/contracts/core/ChromaticMarket";
import { Provider } from "@ethersproject/providers";

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

interface ErrorSignatures {
  [key: string]: string;
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
  // return new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545'); // "http://localhost:8545"; // default value
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

export async function swapToUSDC(param: SwapToUSDCParam) {
  const recipient = await param.signer.getAddress();
  const ARBITRUM_GOERLI_SWAP_ROUTER = "0xF1596041557707B1bC0b3ffB34346c1D9Ce94E86";

  const WETH9 = IERC20__factory.connect(param.weth9, param.signer);
  if ((await WETH9.balanceOf(recipient)).lt(param.amount)) {
    await wrapEth({ signer: param.signer, amount: param.amount, weth9: param.weth9 });
  }

  if ((await WETH9.allowance(recipient, ARBITRUM_GOERLI_SWAP_ROUTER)).lt(param.amount)) {
    const approveTx = await IERC20__factory.connect(param.weth9, param.signer).approve(
      ARBITRUM_GOERLI_SWAP_ROUTER,
      ethers.constants.MaxUint256
    );
    await approveTx.wait();
  }

  const routerContract = new ethers.Contract(
    ARBITRUM_GOERLI_SWAP_ROUTER,
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
    to: ARBITRUM_GOERLI_SWAP_ROUTER,
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

  return {
    outputAmount: BigNumber.from(usdcEvent.data),
    usdcBalance: await IERC20__factory.connect(param.usdc, param.signer).balanceOf(recipient),
  };
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

export function parseLpReceipt(
  marketAddress: string,
  txReceipt: ContractReceipt
): LpReceiptStructOutput {
  const addLiquidityEvent = txReceipt.events.filter((r) => r.address == marketAddress);
  if (addLiquidityEvent.length < 1) {
    throw Error("invaild receipt");
  }

  const parsedValue = ethers.utils.defaultAbiCoder.decode(
    ["uint256", "uint256", "uint256", "address", "uint8", "int16"],
    addLiquidityEvent[0].data
  );

  return {
    0: parsedValue[0] as BigNumber,
    1: parsedValue[1] as BigNumber,
    2: parsedValue[2] as BigNumber,
    3: parsedValue[3] as string,
    4: parsedValue[4] as number,
    5: parsedValue[5] as number,
    id: parsedValue[0] as BigNumber,
    oracleVersion: parsedValue[1] as BigNumber,
    amount: parsedValue[2] as BigNumber,
    recipient: parsedValue[3] as string,
    action: parsedValue[4] as number,
    tradingFeeRate: parsedValue[5] as number,
  } as LpReceiptStructOutput;
}

export async function tryTx(
  waitTxFn: Promise<ContractReceipt>,
  provider: Provider
): Promise<ContractReceipt | undefined> {
  try {
    return await waitTxFn;
  } catch (e) {
    const match = (e as Error).message.match(/transactionHash="([^"]+)"/);
    if (match) {
      const txHash = match[0].replaceAll('"', "").replaceAll("transactionHash=", "");
      const tx = await provider.getTransaction(txHash);
      const code = await provider.call(tx, tx.blockNumber);
      console.log("code", code);
      if (code.length === 0) {
        throw Error(`call reverted without reasons`);
      }
      if (code.length === 10) {
        const errorName = errorSignitures[code];
        if (errorName) {
          // 0xc9b05689
          // TooSmallTakerMargin()
          throw Error(`call reverted: ${errorName}`);
        }
      }

      const reason = ethers.utils.toUtf8String("0x" + code.substring(138));
      throw reason.length === 0
        ? Error(`call reverted: ${code}`)
        : Error(`call reverted: ${reason}`);
    }
  }
}

export const errorSignitures: ErrorSignatures = [
  ...ChromaticMarket__factory.abi,
  ...ChromaticMarketFactory__factory.abi,
  ...ChromaticVault__factory.abi,
  ...CLBToken__factory.abi,
  ...IOracleProvider__factory.abi,
  ...ChromaticAccount__factory.abi,
  ...ChromaticRouter__factory.abi,
  ...ChromaticLiquidator__factory.abi,
]
  .filter((abi) => abi.type === "error")
  .reduce((prevErrMap, currErrAbi) => {
    const signature = ethers.utils.id(`${currErrAbi["name"]}()`).substring(0, 10);
    prevErrMap[signature] = currErrAbi["name"];
    return prevErrMap;
  }, {} as ErrorSignatures);
