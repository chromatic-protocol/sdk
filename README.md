# Chromatic Protocol SDK
The Chromatic Protocol SDK is a JavaScript library that provides a convenient way to interact with the Chromatic Protocol on the Arbitrum Ethereum chain. This readme file will guide you through the setup procedure for using the SDK.

If you want to learn more about the overview of the Chromatic Protocol, please refer to our [GitBook](https://chromatic-protocol.gitbook.io/docs). It provides detailed information about the protocol and its features.

For the [full documentation of the Chromatic Protocol SDK](https://chromatic.finance/docs/sdk/intro), you can refer to the SDK development documentation. It will provide comprehensive information about the SDK, its functionalities, and usage examples.


## Prerequisites
Before you can start using the Chromatic Protocol SDK, make sure you have the following:

- Node.js (v12 or higher)
- npm (Node Package Manager)
- An Arbitrum Ethereum provider or a local Arbitrum Ethereum node
- An Ethereum wallet or signer (such as MetaMask) with a funded account on the Arbitrum chain

## Installation
To install the Chromatic Protocol SDK, run the following command in your project directory:

```shell
npm install @chromatic-protocol/sdk
```

or

```shell
yarn add @chromatic-protocol/sdk
```

## Setting up the Client
To interact with the Chromatic Protocol, you need to create a Client instance. The Client class acts as the entry point for accessing various functionalities provided by the SDK. It requires a signer or provider object.

Here's an example of setting up the Client:

```javascript
import { Signer } from 'ethers';
import { Client } from "@chromatic-protocol/sdk"

const chain = "arbitrum"; // Specify "arbitrum" as the chain name for the Arbitrum chain
const signer = ...; // Replace with your Ethereum signer or wallet instance
const client = new Client(chain, signer);
```

Replace "arbitrum" with the name of the Arbitrum chain you want to connect to.

Make sure to replace ... with your actual Ethereum signer or wallet instance.
