/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ChromaticLiquidator,
  ChromaticLiquidatorInterface,
} from "../../../deployed/arbitrum_goerli/ChromaticLiquidator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IChromaticMarketFactory",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_automate",
        type: "address",
      },
      {
        internalType: "address",
        name: "opsProxyFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "OnlyAccessableByMarket",
    type: "error",
  },
  {
    inputs: [],
    name: "automate",
    outputs: [
      {
        internalType: "contract IAutomate",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "cancelClaimPositionTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "cancelLiquidationTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "claimPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "createClaimPositionTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "createLiquidationTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dedicatedMsgSender",
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
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "resolveClaimPosition",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "resolveLiquidation",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200115f3803806200115f83398101604081905262000034916200018e565b600080546001600160a01b0319166001600160a01b0385811691909117909155821660808190526040805163573ea57560e01b8152905184923092859263573ea575916004808201926020929091908290030181865afa1580156200009d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c39190620001e2565b6001600160a01b0390811660c0528116620000ef575073c815db16d4be6ddf2685c201937905abf338f5d75b6040516337b6269f60e21b81526001600160a01b03838116600483015282169063ded89a7c906024016040805180830381865afa15801562000135573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015b919062000209565b506001600160a01b031660a052506200024c945050505050565b6001600160a01b03811681146200018b57600080fd5b50565b600080600060608486031215620001a457600080fd5b8351620001b18162000175565b6020850151909350620001c48162000175565b6040850151909250620001d78162000175565b809150509250925092565b600060208284031215620001f557600080fd5b8151620002028162000175565b9392505050565b600080604083850312156200021d57600080fd5b82516200022a8162000175565b602084015190925080151581146200024157600080fd5b809150509250929050565b60805160a05160c051610ec46200029b60003960005050600061010101526000818160a8015281816106190152818161091201528181610a1601528181610ab10152610bb10152610ec46000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80637bd5d063116100665780637bd5d063146101575780638e2cdf681461016a57806396f823b41461017d578063bcbaf48714610190578063e9fcf1f6146101a357600080fd5b8063049aacfe146100a3578063139f34cf146100e757806328f150eb146100fc5780633011e5d414610123578063373fa76014610144575b600080fd5b6100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100fa6100f5366004610bd5565b6101b6565b005b6100ca7f000000000000000000000000000000000000000000000000000000000000000081565b610136610131366004610c03565b61024d565b6040516100de929190610c75565b6100fa610152366004610bd5565b61033a565b610136610165366004610c03565b6103d7565b6100fa610178366004610bd5565b610477565b6100fa61018b366004610bd5565b610513565b6100fa61019e366004610c03565b6105a7565b6100fa6101b1366004610c03565b6105c4565b60005460405163252c724f60e11b81523360048201526001600160a01b0390911690634a58e49e90602401602060405180830381865afa1580156101fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102229190610c98565b61023f57604051631353f3f160e01b815260040160405180910390fd5b61024a6002826105dc565b50565b60405163627c32d960e11b8152600481018290526000906060906001600160a01b0385169063c4f865b290602401602060405180830381865afa158015610298573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102bc9190610c98565b1561031f576040516001600160a01b038516602482015260448101849052600190309063e9fcf1f6906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505091509150610333565b505060408051602081019091526000808252905b9250929050565b60005460405163252c724f60e11b81523360048201526001600160a01b0390911690634a58e49e90602401602060405180830381865afa158015610382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a69190610c98565b6103c357604051631353f3f160e01b815260040160405180910390fd5b61024a60028230633011e5d461025861069e565b60405163b86f6aef60e01b8152600481018290526000906060906001600160a01b0385169063b86f6aef90602401602060405180830381865afa158015610422573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104469190610c98565b1561031f576040516001600160a01b038516602482015260448101849052600190309063bcbaf487906064016102e9565b60005460405163252c724f60e11b81523360048201526001600160a01b0390911690634a58e49e90602401602060405180830381865afa1580156104bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e39190610c98565b61050057604051631353f3f160e01b815260040160405180910390fd5b61024a60018230637bd5d063601e61069e565b60005460405163252c724f60e11b81523360048201526001600160a01b0390911690634a58e49e90602401602060405180830381865afa15801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f9190610c98565b61059c57604051631353f3f160e01b815260040160405180910390fd5b61024a6001826105dc565b60006105b1610a11565b5090506105bf838383610a9e565b505050565b60006105ce610a11565b5090506105bf838383610b9e565b3360008181526020848152604080832085845290915290205480156106985760405163ee8ca3b560e01b8152600481018290526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ee8ca3b590602401600060405180830381600087803b15801561065d57600080fd5b505af1158015610671573d6000803e3d6000fd5b5050506001600160a01b038316600090815260208681526040808320878452909152812055505b50505050565b33600081815260208781526040808320888452909152902054156106c25750610a0a565b60408051600381830181815260c083019093526000928291606080840190803683370190505081526040805160038082526080820190925260209092019190816020015b6060815260200190600190039081610706575050905280518051919250600091829061073457610734610cc1565b6020026020010190600381111561074d5761074d610cd7565b9081600381111561076057610760610cd7565b815250506001816000015160018151811061077d5761077d610cc1565b6020026020010190600381111561079657610796610cd7565b908160038111156107a9576107a9610cd7565b81525050600281600001516002815181106107c6576107c6610cc1565b602002602001019060038111156107df576107df610cd7565b908160038111156107f2576107f2610cd7565b905250604080516001600160a01b038416602482015260448082018990528251808303909101815260649091018252602080820180516001600160e01b031660e089901b17905291516108489230929101610ced565b604051602081830303815290604052816020015160008151811061086e5761086e610cc1565b602002602001018190525042836040516020016108aa9291906fffffffffffffffffffffffffffffffff92831681529116602082015260400190565b60405160208183030381529060405281602001516001815181106108d0576108d0610cc1565b602002602001018190525060405180602001604052806000815250816020015160028151811061090257610902610cc1565b60200260200101819052506109347f000000000000000000000000000000000000000000000000000000000000000090565b6040805163bcbaf48760e01b60208201526001600160a01b039290921691633323b467913091016040516020818303038152906040528473eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6040518563ffffffff1660e01b815260040161099f9493929190610d66565b6020604051808303816000875af11580156109be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e29190610e28565b6001600160a01b03909216600090815260208881526040808320898452909152902091909155505b5050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b810c6366040518163ffffffff1660e01b81526004016040805180830381865afa158015610a71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a959190610e41565b90939092509050565b826001600160a01b0381166379bd1eac847f00000000000000000000000000000000000000000000000000000000000000005b6001600160a01b031663573ea5756040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b329190610e71565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b0316602482015260448101859052606401600060405180830381600087803b158015610b8057600080fd5b505af1158015610b94573d6000803e3d6000fd5b5050505050505050565b826001600160a01b03811663de7c8cc2847f0000000000000000000000000000000000000000000000000000000000000000610ad1565b600060208284031215610be757600080fd5b5035919050565b6001600160a01b038116811461024a57600080fd5b60008060408385031215610c1657600080fd5b8235610c2181610bee565b946020939093013593505050565b6000815180845260005b81811015610c5557602081850181015186830182015201610c39565b506000602082860101526020601f19601f83011685010191505092915050565b8215158152604060208201526000610c906040830184610c2f565b949350505050565b600060208284031215610caa57600080fd5b81518015158114610cba57600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6001600160a01b0383168152604060208201819052600090610c9090830184610c2f565b600081518084526020808501808196508360051b8101915082860160005b85811015610d59578284038952610d47848351610c2f565b98850198935090840190600101610d2f565b5091979650505050505050565b6001600160a01b038516815260806020808301829052600091610d8b90840187610c2f565b838103604080860191909152865181835280519183018290528301906000906060840190825b81811015610dea5784516004808210610dd757634e487b7160e01b865260218152602486fd5b5083529386019391860191600101610db1565b505084890151925083810385850152610e038184610d11565b95505050505050610e1f60608301846001600160a01b03169052565b95945050505050565b600060208284031215610e3a57600080fd5b5051919050565b60008060408385031215610e5457600080fd5b825191506020830151610e6681610bee565b809150509250929050565b600060208284031215610e8357600080fd5b8151610cba81610bee56fea2646970667358221220ebee4d6964c2b26f4d00809cd8acf3ac602d948a839e484b883beb462b4483fe64736f6c63430008130033";

type ChromaticLiquidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChromaticLiquidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChromaticLiquidator__factory extends ContractFactory {
  constructor(...args: ChromaticLiquidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _automate: PromiseOrValue<string>,
    opsProxyFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChromaticLiquidator> {
    return super.deploy(
      _factory,
      _automate,
      opsProxyFactory,
      overrides || {}
    ) as Promise<ChromaticLiquidator>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _automate: PromiseOrValue<string>,
    opsProxyFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _automate,
      opsProxyFactory,
      overrides || {}
    );
  }
  override attach(address: string): ChromaticLiquidator {
    return super.attach(address) as ChromaticLiquidator;
  }
  override connect(signer: Signer): ChromaticLiquidator__factory {
    return super.connect(signer) as ChromaticLiquidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChromaticLiquidatorInterface {
    return new utils.Interface(_abi) as ChromaticLiquidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChromaticLiquidator {
    return new Contract(address, _abi, signerOrProvider) as ChromaticLiquidator;
  }
}
