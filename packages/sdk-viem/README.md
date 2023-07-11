# Chromatic Protocol SDK for Viem
The Chromatic Protocol SDK is a JavaScript library that provides a convenient way to interact with the Chromatic Protocol on the Arbitrum Ethereum chain. This readme file will guide you through the setup procedure for using the SDK.

If you want to learn more about the overview of the Chromatic Protocol, please refer to our [GitBook](https://chromatic-protocol.gitbook.io/docs). It provides detailed information about the protocol and its features.

For the [full documentation of the Chromatic Protocol SDK](https://chromatic.finance/docs/sdk/intro), you can refer to the SDK development documentation. It will provide comprehensive information about the SDK, its functionalities, and usage examples.

## Installation
To install the Chromatic Protocol SDK, run the following command in your project directory:

```shell
npm install @chromatic-protocol/sdk-viem
```

or

```shell
yarn add @chromatic-protocol/sdk-viem
```

## Setting up the Client
To interact with the Chromatic Protocol, you need to create a Client instance. The Client class acts as the entry point for accessing various functionalities provided by the SDK. It requires a `WalletClient` and `PublicClient`.

Here's an example of setting up the Client:

```ts
import { createWalletClient, custom, getAccount, createPublicClient, http } from 'viem'
import { arbitrumGoerli, arbitrum } from 'viem/chains'
import { Client } from "@chromatic-protocol/sdk-viem"

const publicClient = createPublicClient({ 
  chain: arbitrumGoerli,  // or arbitrum
  transport: http()
})

const walletClient = createWalletClient({
  chain: arbitrumGoerli,  // or arbitrum
  transport: custom(window.ethereum)
})

const client = new Client({walletClient, publicClient})
```

Replace "chain" and chain with the name of the Arbitrum chain you want to connect to.

Make sure to replace ... with your actual `walletClient` or `publicClient`
