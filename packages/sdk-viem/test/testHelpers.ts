import { Address, createPublicClient, createWalletClient, getContract, http } from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { hardhat } from "viem/chains";
import { Client } from "../src/Client";
import { ierc20ABI } from "../src/gen";
import { MAX_UINT256 } from "../src/utils/helpers";

export interface WrapEthParam {
  client: Client;
  weth9: Address;
  amount: bigint;
}

export interface SwapToUSDCParam {
  client: Client;
  weth9: Address;
  usdc: Address;
  fee: number;
  amount: bigint;
}

export interface UpdatePriceParam {
  client: Client;
  market: Address;
  price: number;
}

export function testClient(): Client {
  const account = mnemonicToAccount("test test test test test test test test test test test junk");

  const publicClient = createPublicClient({
    chain: hardhat,
    transport: http("http://127.0.0.1:8545"),
  });

  const walletClient = createWalletClient({
    chain: hardhat,
    transport: http("http://127.0.0.1:8545"),
    account: account,
  });

  return new Client({ publicClient, walletClient });
}

export async function wrapEth(param: WrapEthParam) {
  const WETH9 = getContract({
    abi: [
      {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    address: param.weth9,
    publicClient: param.client.publicClient,
    walletClient: param.client.walletClient,
  });

  const { request } = await WETH9.simulate.deposit([], {
    value: param.amount,
    account: param.client.walletClient!.account,
  });
  const hash = await param.client.walletClient!.writeContract({ ...request, value: param.amount });
  await param.client.publicClient!.waitForTransactionReceipt({ hash });
}

export async function swapToUSDC(param: SwapToUSDCParam) {
  const recipient = param.client.walletClient!.account!.address;
  const ARBITRUM_GOERLI_SWAP_ROUTER = "0xF1596041557707B1bC0b3ffB34346c1D9Ce94E86";

  const WETH9 = getContract({
    abi: ierc20ABI,
    address: param.weth9,
    publicClient: param.client.publicClient,
    walletClient: param.client.walletClient,
  });

  if ((await WETH9.read.balanceOf([recipient])) < param.amount) {
    await wrapEth({ client: param.client, amount: param.amount, weth9: param.weth9 });
  }

  if ((await WETH9.read.allowance([recipient, ARBITRUM_GOERLI_SWAP_ROUTER])) < param.amount) {
    const { request } = await WETH9.simulate.approve([ARBITRUM_GOERLI_SWAP_ROUTER, MAX_UINT256], {
      account: param.client.walletClient!.account,
    });
    const hash = await param.client.walletClient!.writeContract(request);
    await param.client.publicClient!.waitForTransactionReceipt({ hash });
  }

  const uniswapRouter = getContract({
    abi: [
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
    address: ARBITRUM_GOERLI_SWAP_ROUTER,
    publicClient: param.client.publicClient,
    walletClient: param.client.walletClient,
  });

  const { request } = await uniswapRouter.simulate.exactInputSingle(
    [
      {
        tokenIn: param.weth9,
        tokenOut: param.usdc,
        fee: param.fee,
        recipient: recipient,
        deadline: MAX_UINT256,
        amountIn: param.amount,
        amountOutMinimum: 0,
        sqrtPriceLimitX96: 0,
      },
    ],
    { account: param.client.walletClient!.account, value: BigInt(0) }
  );


  const hash = await param.client.walletClient!.writeContract({ ...request, value: BigInt(0) });
  await param.client.publicClient!.waitForTransactionReceipt({ hash });

  return {
    usdcBalance: await getContract({
      abi: ierc20ABI,
      address: param.usdc,
      publicClient: param.client.publicClient,
      walletClient: param.client.walletClient,
    }).read.balanceOf([recipient]),
  };
}

export async function updatePrice(param: UpdatePriceParam) {
  const oracleProviderAddress = await param.client.market().oracleProvider(param.market);

  const oracleProvider = getContract({
    abi: [
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
    address: oracleProviderAddress,
    publicClient: param.client.publicClient,
    walletClient: param.client.walletClient,
  });

  const { request } = await oracleProvider.simulate.increaseVersion([
    BigInt(param.price) * BigInt(10 ** 8),
  ]);
  const hash = await param.client.walletClient!.writeContract(request);
  await param.client.publicClient!.waitForTransactionReceipt({ hash });
}
