/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ChromaticLiquidatorMock,
  ChromaticLiquidatorMockInterface,
} from "../../../deployed/anvil/ChromaticLiquidatorMock";

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
      {
        internalType: "uint256",
        name: "fee",
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
  "0x60e06040523480156200001157600080fd5b5060405162001635380380620016358339810160408190526200003491620001a3565b600080546001600160a01b0319166001600160a01b0385811691909117909155603c60015562015180600255821660808190526040805163573ea57560e01b8152905185928592859284923092859263573ea575916004808201926020929091908290030181865afa158015620000af573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d59190620001f7565b6001600160a01b0390811660c052811662000101575073c815db16d4be6ddf2685c201937905abf338f5d75b6040516337b6269f60e21b81526001600160a01b03838116600483015282169063ded89a7c906024016040805180830381865afa15801562000147573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016d91906200021e565b506001600160a01b031660a0525062000261975050505050505050565b6001600160a01b0381168114620001a057600080fd5b50565b600080600060608486031215620001b957600080fd5b8351620001c6816200018a565b6020850151909350620001d9816200018a565b6040850151909250620001ec816200018a565b809150509250925092565b6000602082840312156200020a57600080fd5b815162000217816200018a565b9392505050565b600080604083850312156200023257600080fd5b82516200023f816200018a565b602084015190925080151581146200025657600080fd5b809150509250929050565b60805160a05160c051611385620002b06000396000505060006101a201526000818160ff015281816108ce01528181610a5001528181610d7801528181610eaf0152610f6401526113856000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063369e97171161009757806396f823b41161006657806396f823b414610227578063bcbaf4871461023a578063cec418ef1461024d578063e9fcf1f61461026057600080fd5b8063369e9717146101e5578063373fa760146101ee5780637bd5d063146102015780638e2cdf681461021457600080fd5b8063139f34cf116100d3578063139f34cf14610177578063206e8f321461018a57806328f150eb1461019d5780633011e5d4146101c457600080fd5b8063049aacfe146100fa5780630710285c1461014b5780630b433a1214610160575b600080fd5b6101217f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61015e610159366004610faa565b610273565b005b61016960025481565b604051908152602001610142565b61015e610185366004610fdf565b610283565b61015e610198366004610fdf565b610359565b6101217f000000000000000000000000000000000000000000000000000000000000000081565b6101d76101d2366004610ff8565b61038c565b604051610142929190611088565b61016960015481565b61015e6101fc366004610fdf565b6104c1565b6101d761020f366004610ff8565b6105b3565b61015e610222366004610fdf565b610686565b61015e610235366004610fdf565b610778565b61015e610248366004610ff8565b61084b565b61015e61025b366004610fdf565b610863565b61015e61026e366004610ff8565b610896565b61027e8383836108ae565b505050565b6000546040517f4a58e49e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690634a58e49e90602401602060405180830381865afa1580156102f1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031591906110ab565b61034b576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103566004826109ed565b50565b600281905560405181907f147643a3380a07b720e58d29bed784fd77f5778aaf06610663435736d29a776d90600090a250565b6040517fc4f865b20000000000000000000000000000000000000000000000000000000081526004810182905260009060609073ffffffffffffffffffffffffffffffffffffffff85169063c4f865b290602401602060405180830381865afa1580156103fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042191906110ab565b156104a65760405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101849052600190309063e9fcf1f6906064015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050915091506104ba565b505060408051602081019091526000808252905b9250929050565b6000546040517f4a58e49e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690634a58e49e90602401602060405180830381865afa15801561052f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055391906110ab565b610589576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103566004823073ffffffffffffffffffffffffffffffffffffffff16633011e5d4600254610ae2565b6040517fb86f6aef0000000000000000000000000000000000000000000000000000000081526004810182905260009060609073ffffffffffffffffffffffffffffffffffffffff85169063b86f6aef90602401602060405180830381865afa158015610624573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064891906110ab565b156104a65760405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101849052600190309063bcbaf4879060640161045b565b6000546040517f4a58e49e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690634a58e49e90602401602060405180830381865afa1580156106f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071891906110ab565b61074e576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103566003823073ffffffffffffffffffffffffffffffffffffffff16637bd5d063600154610ae2565b6000546040517f4a58e49e00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690634a58e49e90602401602060405180830381865afa1580156107e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080a91906110ab565b610840576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103566003826109ed565b6000610855610eaa565b50905061027e8383836108ae565b600181905560405181907fa60f93af5f46f4a9093acf49a5642d02b04c7d56297737df82bf0cf63f0fb6d990600090a250565b60006108a0610eaa565b50905061027e838383610f44565b8273ffffffffffffffffffffffffffffffffffffffff81166379bd1eac847f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff1663573ea5756040518163ffffffff1660e01b8152600401602060405180830381865afa158015610938573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095c91906110d4565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff16602482015260448101859052606401600060405180830381600087803b1580156109cf57600080fd5b505af11580156109e3573d6000803e3d6000fd5b5050505050505050565b336000818152602084815260408083208584529091529020548015610adc576040517fee8ca3b50000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063ee8ca3b590602401600060405180830381600087803b158015610a9457600080fd5b505af1158015610aa8573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff8316600090815260208681526040808320878452909152812055505b50505050565b3360008181526020878152604080832088845290915290205415610b065750610ea3565b60408051600381830181815260c083019093526000928291606080840190803683370190505081526040805160038082526080820190925260209092019190816020015b6060815260200190600190039081610b4a5750509052805180519192506000918290610b7857610b786110f1565b60200260200101906003811115610b9157610b91611120565b90816003811115610ba457610ba4611120565b8152505060018160000151600181518110610bc157610bc16110f1565b60200260200101906003811115610bda57610bda611120565b90816003811115610bed57610bed611120565b8152505060028160000151600281518110610c0a57610c0a6110f1565b60200260200101906003811115610c2357610c23611120565b90816003811115610c3657610c36611120565b9052506040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018990528251808303909101815260649091018252602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e089901b1790529151610cae923092910161114f565b6040516020818303038152906040528160200151600081518110610cd457610cd46110f1565b6020908102919091010152610ce9834261117e565b604080516fffffffffffffffffffffffffffffffff9283166020820152918516908201526060016040516020818303038152906040528160200151600181518110610d3657610d366110f1565b6020026020010181905250604051806020016040528060008152508160200151600281518110610d6857610d686110f1565b6020026020010181905250610d9a7f000000000000000000000000000000000000000000000000000000000000000090565b604080517fbcbaf48700000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff9290921691633323b467913091016040516020818303038152906040528473eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6040518563ffffffff1660e01b8152600401610e2b9493929190611213565b6020604051808303816000875af1158015610e4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6e9190611306565b73ffffffffffffffffffffffffffffffffffffffff909216600090815260208881526040808320898452909152902091909155505b5050505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b810c6366040518163ffffffff1660e01b81526004016040805180830381865afa158015610f17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3b919061131f565b90939092509050565b8273ffffffffffffffffffffffffffffffffffffffff811663de7c8cc2847f00000000000000000000000000000000000000000000000000000000000000006108ee565b73ffffffffffffffffffffffffffffffffffffffff8116811461035657600080fd5b600080600060608486031215610fbf57600080fd5b8335610fca81610f88565b95602085013595506040909401359392505050565b600060208284031215610ff157600080fd5b5035919050565b6000806040838503121561100b57600080fd5b823561101681610f88565b946020939093013593505050565b6000815180845260005b8181101561104a5760208185018101518683018201520161102e565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b82151581526040602082015260006110a36040830184611024565b949350505050565b6000602082840312156110bd57600080fd5b815180151581146110cd57600080fd5b9392505050565b6000602082840312156110e657600080fd5b81516110cd81610f88565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006110a36040830184611024565b808201808211156111b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600081518084526020808501808196508360051b8101915082860160005b858110156112065782840389526111f4848351611024565b988501989350908401906001016111dc565b5091979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff85168152600060206080818401526112436080840187611024565b838103604080860191909152865181835280519183018290528301906000906060840190825b818110156112bb57845160048082106112a8577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b5083529386019391860191600101611269565b5050848901519250838103858501526112d481846111be565b955050505050506112fd606083018473ffffffffffffffffffffffffffffffffffffffff169052565b95945050505050565b60006020828403121561131857600080fd5b5051919050565b6000806040838503121561133257600080fd5b82519150602083015161134481610f88565b80915050925092905056fea2646970667358221220d51ccb4925ffcd827730b63860b0d86aa740fdbdb6e4ff1195a1542dc189100064736f6c63430008130033";

type ChromaticLiquidatorMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChromaticLiquidatorMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChromaticLiquidatorMock__factory extends ContractFactory {
  constructor(...args: ChromaticLiquidatorMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _factory: AddressLike,
    _automate: AddressLike,
    opsProxyFactory: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _factory,
      _automate,
      opsProxyFactory,
      overrides || {}
    );
  }
  override deploy(
    _factory: AddressLike,
    _automate: AddressLike,
    opsProxyFactory: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _factory,
      _automate,
      opsProxyFactory,
      overrides || {}
    ) as Promise<
      ChromaticLiquidatorMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ChromaticLiquidatorMock__factory {
    return super.connect(runner) as ChromaticLiquidatorMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChromaticLiquidatorMockInterface {
    return new Interface(_abi) as ChromaticLiquidatorMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChromaticLiquidatorMock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ChromaticLiquidatorMock;
  }
}
