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
    name: "OnlyAccessableByDao",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAccessableByMarket",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    name: "UpdateClaimInterval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    name: "UpdateLiquidationInterval",
    type: "event",
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
    inputs: [],
    name: "claimInterval",
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
    inputs: [],
    name: "liquidationInterval",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    name: "updateClaimInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    name: "updateLiquidationInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620015ce380380620015ce83398101604081905262000034916200019a565b600080546001600160a01b0319166001600160a01b0385811691909117909155603c60015562015180600255821660808190526040805163573ea57560e01b8152905184923092859263573ea575916004808201926020929091908290030181865afa158015620000a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cf9190620001ee565b6001600160a01b0390811660c0528116620000fb575073c815db16d4be6ddf2685c201937905abf338f5d75b6040516337b6269f60e21b81526001600160a01b03838116600483015282169063ded89a7c906024016040805180830381865afa15801562000141573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000167919062000215565b506001600160a01b031660a0525062000258945050505050565b6001600160a01b03811681146200019757600080fd5b50565b600080600060608486031215620001b057600080fd5b8351620001bd8162000181565b6020850151909350620001d08162000181565b6040850151909250620001e38162000181565b809150509250925092565b6000602082840312156200020157600080fd5b81516200020e8162000181565b9392505050565b600080604083850312156200022957600080fd5b8251620002368162000181565b602084015190925080151581146200024d57600080fd5b809150509250929050565b60805160a05160c051611327620002a760003960005050600061018401526000818160f4015281816108e801528181610c1001528181610d4701528181610dfc0152610f3b01526113276000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063373fa7601161008c57806396f823b41161006657806396f823b414610209578063bcbaf4871461021c578063cec418ef1461022f578063e9fcf1f61461024257600080fd5b8063373fa760146101d05780637bd5d063146101e35780638e2cdf68146101f657600080fd5b8063206e8f32116100c8578063206e8f321461016c57806328f150eb1461017f5780633011e5d4146101a6578063369e9717146101c757600080fd5b8063049aacfe146100ef5780630b433a1214610140578063139f34cf14610157575b600080fd5b6101167f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61014960025481565b604051908152602001610137565b61016a610165366004610f5f565b610255565b005b61016a61017a366004610f5f565b61032b565b6101167f000000000000000000000000000000000000000000000000000000000000000081565b6101b96101b4366004610f9a565b61035e565b60405161013792919061102a565b61014960015481565b61016a6101de366004610f5f565b610493565b6101b96101f1366004610f9a565b610585565b61016a610204366004610f5f565b610658565b61016a610217366004610f5f565b61074a565b61016a61022a366004610f9a565b61081d565b61016a61023d366004610f5f565b61083a565b61016a610250366004610f9a565b61086d565b6000546040517f4a58e49e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690634a58e49e90602401602060405180830381865afa1580156102c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e7919061104d565b61031d576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610328600482610885565b50565b600281905560405181907f147643a3380a07b720e58d29bed784fd77f5778aaf06610663435736d29a776d90600090a250565b6040517fc4f865b20000000000000000000000000000000000000000000000000000000081526004810182905260009060609073ffffffffffffffffffffffffffffffffffffffff85169063c4f865b290602401602060405180830381865afa1580156103cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f3919061104d565b156104785760405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101849052600190309063e9fcf1f6906064015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509150915061048c565b505060408051602081019091526000808252905b9250929050565b6000546040517f4a58e49e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690634a58e49e90602401602060405180830381865afa158015610501573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610525919061104d565b61055b576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103286004823073ffffffffffffffffffffffffffffffffffffffff16633011e5d460025461097a565b6040517fb86f6aef0000000000000000000000000000000000000000000000000000000081526004810182905260009060609073ffffffffffffffffffffffffffffffffffffffff85169063b86f6aef90602401602060405180830381865afa1580156105f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061a919061104d565b156104785760405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101849052600190309063bcbaf4879060640161042d565b6000546040517f4a58e49e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690634a58e49e90602401602060405180830381865afa1580156106c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ea919061104d565b610720576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103286003823073ffffffffffffffffffffffffffffffffffffffff16637bd5d06360015461097a565b6000546040517f4a58e49e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690634a58e49e90602401602060405180830381865afa1580156107b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dc919061104d565b610812576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610328600382610885565b6000610827610d42565b509050610835838383610ddc565b505050565b600181905560405181907fa60f93af5f46f4a9093acf49a5642d02b04c7d56297737df82bf0cf63f0fb6d990600090a250565b6000610877610d42565b509050610835838383610f1b565b336000818152602084815260408083208584529091529020548015610974576040517fee8ca3b50000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063ee8ca3b590602401600060405180830381600087803b15801561092c57600080fd5b505af1158015610940573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff8316600090815260208681526040808320878452909152812055505b50505050565b336000818152602087815260408083208884529091529020541561099e5750610d3b565b60408051600381830181815260c083019093526000928291606080840190803683370190505081526040805160038082526080820190925260209092019190816020015b60608152602001906001900390816109e25750509052805180519192506000918290610a1057610a10611076565b60200260200101906003811115610a2957610a296110a5565b90816003811115610a3c57610a3c6110a5565b8152505060018160000151600181518110610a5957610a59611076565b60200260200101906003811115610a7257610a726110a5565b90816003811115610a8557610a856110a5565b8152505060028160000151600281518110610aa257610aa2611076565b60200260200101906003811115610abb57610abb6110a5565b90816003811115610ace57610ace6110a5565b9052506040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018990528251808303909101815260649091018252602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e089901b1790529151610b4692309291016110d4565b6040516020818303038152906040528160200151600081518110610b6c57610b6c611076565b6020908102919091010152610b818342611103565b604080516fffffffffffffffffffffffffffffffff9283166020820152918516908201526060016040516020818303038152906040528160200151600181518110610bce57610bce611076565b6020026020010181905250604051806020016040528060008152508160200151600281518110610c0057610c00611076565b6020026020010181905250610c327f000000000000000000000000000000000000000000000000000000000000000090565b604080517fbcbaf48700000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff9290921691633323b467913091016040516020818303038152906040528473eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6040518563ffffffff1660e01b8152600401610cc39493929190611198565b6020604051808303816000875af1158015610ce2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d06919061128b565b73ffffffffffffffffffffffffffffffffffffffff909216600090815260208881526040808320898452909152902091909155505b5050505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b810c6366040518163ffffffff1660e01b81526004016040805180830381865afa158015610daf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd391906112a4565b90939092509050565b8273ffffffffffffffffffffffffffffffffffffffff81166379bd1eac847f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff1663573ea5756040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8a91906112d4565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff16602482015260448101859052606401600060405180830381600087803b158015610efd57600080fd5b505af1158015610f11573d6000803e3d6000fd5b5050505050505050565b8273ffffffffffffffffffffffffffffffffffffffff811663de7c8cc2847f0000000000000000000000000000000000000000000000000000000000000000610e1c565b600060208284031215610f7157600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461032857600080fd5b60008060408385031215610fad57600080fd5b8235610fb881610f78565b946020939093013593505050565b6000815180845260005b81811015610fec57602081850181015186830182015201610fd0565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b82151581526040602082015260006110456040830184610fc6565b949350505050565b60006020828403121561105f57600080fd5b8151801515811461106f57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006110456040830184610fc6565b8082018082111561113d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600081518084526020808501808196508360051b8101915082860160005b8581101561118b578284038952611179848351610fc6565b98850198935090840190600101611161565b5091979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff85168152600060206080818401526111c86080840187610fc6565b838103604080860191909152865181835280519183018290528301906000906060840190825b81811015611240578451600480821061122d577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b50835293860193918601916001016111ee565b5050848901519250838103858501526112598184611143565b95505050505050611282606083018473ffffffffffffffffffffffffffffffffffffffff169052565b95945050505050565b60006020828403121561129d57600080fd5b5051919050565b600080604083850312156112b757600080fd5b8251915060208301516112c981610f78565b809150509250929050565b6000602082840312156112e657600080fd5b815161106f81610f7856fea264697066735822122032feae402b51699040f7deea20fb1968fe248b998f6f902f16f61185594195a764736f6c63430008130033";

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
