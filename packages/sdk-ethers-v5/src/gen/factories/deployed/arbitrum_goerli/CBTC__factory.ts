/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CBTC,
  CBTCInterface,
} from "../../../deployed/arbitrum_goerli/CBTC";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "faucetAmount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "faucetMinInterval_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyFaucetedInInterval",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "faucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "faucetAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "faucetMinInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastFaucetTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "faucetAmount_",
        type: "uint256",
      },
    ],
    name: "setFaucetAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "faucetMinInterval_",
        type: "uint256",
      },
    ],
    name: "setFaucetMinInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "setSymbol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016b0380380620016b08339810160408190526200003491620001d5565b6040805160208082018352600080835283519182019093529182529060036200005e8382620002de565b5060046200006d8282620002de565b5050506200008a62000084620000ba60201b60201c565b620000be565b6006620000988582620002de565b506007620000a78482620002de565b5060089190915560095550620003aa9050565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013857600080fd5b81516001600160401b038082111562000155576200015562000110565b604051601f8301601f19908116603f0116810190828211818310171562000180576200018062000110565b816040528381526020925086838588010111156200019d57600080fd5b600091505b83821015620001c15785820183015181830184015290820190620001a2565b600093810190920192909252949350505050565b60008060008060808587031215620001ec57600080fd5b84516001600160401b03808211156200020457600080fd5b620002128883890162000126565b955060208701519150808211156200022957600080fd5b50620002388782880162000126565b604087015160609097015195989097509350505050565b600181811c908216806200026457607f821691505b6020821081036200028557634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002d957600081815260208120601f850160051c81016020861015620002b45750805b601f850160051c820191505b81811015620002d557828155600101620002c0565b5050505b505050565b81516001600160401b03811115620002fa57620002fa62000110565b62000312816200030b84546200024f565b846200028b565b602080601f8311600181146200034a5760008415620003315750858301515b600019600386901b1c1916600185901b178555620002d5565b600085815260208120601f198616915b828110156200037b578886015182559484019460019091019084016200035a565b50858210156200039a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6112f680620003ba6000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806381d2fd9c116100e3578063a9059cbb1161008c578063dd62ed3e11610066578063dd62ed3e1461033f578063de5f72fd14610385578063f2fde38b1461038d57600080fd5b8063a9059cbb14610306578063b84c824614610319578063c47f00271461032c57600080fd5b806395d89b41116100bd57806395d89b41146102e35780639c281430146102eb578063a457c2d7146102f357600080fd5b806381d2fd9c146102a05780638b85eb03146102b35780638da5cb5b146102bb57600080fd5b806324a8216d1161014557806340c10f191161011f57806340c10f191461024f57806370a0823114610262578063715018a61461029857600080fd5b806324a8216d1461020d578063313ce5671461022d578063395093511461023c57600080fd5b806318160ddd1161017657806318160ddd146101d35780632183d566146101e557806323b872dd146101fa57600080fd5b806306fdde0314610192578063095ea7b3146101b0575b600080fd5b61019a6103a0565b6040516101a79190610e49565b60405180910390f35b6101c36101be366004610ede565b610432565b60405190151581526020016101a7565b6002545b6040519081526020016101a7565b6101f86101f3366004610f08565b61044c565b005b6101c3610208366004610f21565b610459565b6101d761021b366004610f5d565b600a6020526000908152604090205481565b604051601281526020016101a7565b6101c361024a366004610ede565b61047d565b6101f861025d366004610ede565b6104c9565b6101d7610270366004610f5d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6101f86104df565b6101f86102ae366004610f08565b6104f3565b6009546101d7565b60055460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a7565b61019a610500565b6008546101d7565b6101c3610301366004610ede565b61050f565b6101c3610314366004610ede565b6105e5565b6101f8610327366004610fae565b6105f3565b6101f861033a366004610fae565b610607565b6101d761034d36600461107d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6101f861061b565b6101f861039b366004610f5d565b6106a9565b6060600680546103af906110b0565b80601f01602080910402602001604051908101604052809291908181526020018280546103db906110b0565b80156104285780601f106103fd57610100808354040283529160200191610428565b820191906000526020600020905b81548152906001019060200180831161040b57829003601f168201915b5050505050905090565b600033610440818585610760565b60019150505b92915050565b610454610913565b600955565b600033610467858285610994565b610472858585610a6b565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061044090829086906104c4908790611132565b610760565b6104d1610913565b6104db8282610cda565b5050565b6104e7610913565b6104f16000610dcd565b565b6104fb610913565b600855565b6060600780546103af906110b0565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156105d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6104728286868403610760565b600033610440818585610a6b565b6105fb610913565b60076104db8282611193565b61060f610913565b60066104db8282611193565b336000908152600a6020526040902054158015906106535750600954336000908152600a602052604090205461065190426112ad565b105b1561068a576040517fe232c97a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000818152600a602052604090204290556008546104f19190610cda565b6106b1610913565b73ffffffffffffffffffffffffffffffffffffffff8116610754576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105cf565b61075d81610dcd565b50565b73ffffffffffffffffffffffffffffffffffffffff8316610802576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105cf565b73ffffffffffffffffffffffffffffffffffffffff82166108a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016105cf565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60055473ffffffffffffffffffffffffffffffffffffffff1633146104f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105cf565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a655781811015610a58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105cf565b610a658484848403610760565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105cf565b73ffffffffffffffffffffffffffffffffffffffff8216610bb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016105cf565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610c67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105cf565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610a65565b73ffffffffffffffffffffffffffffffffffffffff8216610d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105cf565b8060026000828254610d699190611132565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b505050565b600060208083528351808285015260005b81811015610e7657858101830151858201604001528201610e5a565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610ed957600080fd5b919050565b60008060408385031215610ef157600080fd5b610efa83610eb5565b946020939093013593505050565b600060208284031215610f1a57600080fd5b5035919050565b600080600060608486031215610f3657600080fd5b610f3f84610eb5565b9250610f4d60208501610eb5565b9150604084013590509250925092565b600060208284031215610f6f57600080fd5b610f7882610eb5565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215610fc057600080fd5b813567ffffffffffffffff80821115610fd857600080fd5b818401915084601f830112610fec57600080fd5b813581811115610ffe57610ffe610f7f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561104457611044610f7f565b8160405282815287602084870101111561105d57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000806040838503121561109057600080fd5b61109983610eb5565b91506110a760208401610eb5565b90509250929050565b600181811c908216806110c457607f821691505b6020821081036110fd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561044657610446611103565b601f821115610e4457600081815260208120601f850160051c8101602086101561116c5750805b601f850160051c820191505b8181101561118b57828155600101611178565b505050505050565b815167ffffffffffffffff8111156111ad576111ad610f7f565b6111c1816111bb84546110b0565b84611145565b602080601f83116001811461121457600084156111de5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855561118b565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561126157888601518255948401946001909101908401611242565b508582101561129d57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b818103818111156104465761044661110356fea2646970667358221220fe35cc4a013242ca1151aa915bb047b3def0d5adff7625ee47662a6fd4aebb0a64736f6c63430008130033";

type CBTCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CBTCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CBTC__factory extends ContractFactory {
  constructor(...args: CBTCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    faucetAmount_: BigNumberish,
    faucetMinInterval_: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<CBTC> {
    return super.deploy(
      name_,
      symbol_,
      faucetAmount_,
      faucetMinInterval_,
      overrides || {}
    ) as Promise<CBTC>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    faucetAmount_: BigNumberish,
    faucetMinInterval_: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      faucetAmount_,
      faucetMinInterval_,
      overrides || {}
    );
  }
  override attach(address: string): CBTC {
    return super.attach(address) as CBTC;
  }
  override connect(signer: Signer): CBTC__factory {
    return super.connect(signer) as CBTC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CBTCInterface {
    return new utils.Interface(_abi) as CBTCInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CBTC {
    return new Contract(address, _abi, signerOrProvider) as CBTC;
  }
}
