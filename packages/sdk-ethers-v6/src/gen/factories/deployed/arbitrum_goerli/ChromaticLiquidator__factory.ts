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
  "0x6101006040523480156200001257600080fd5b506040516200164938038062001649833981016040819052620000359162000189565b6001600160a01b03808416608052603c60005562015180600155821660a08190526040805163573ea57560e01b8152905184923092859263573ea575916004808201926020929091908290030181865afa15801562000098573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000be9190620001dd565b6001600160a01b0390811660e0528116620000ea575073c815db16d4be6ddf2685c201937905abf338f5d75b6040516337b6269f60e21b81526001600160a01b03838116600483015282169063ded89a7c906024016040805180830381865afa15801562000130573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000156919062000204565b506001600160a01b031660c0525062000247945050505050565b6001600160a01b03811681146200018657600080fd5b50565b6000806000606084860312156200019f57600080fd5b8351620001ac8162000170565b6020850151909350620001bf8162000170565b6040850151909250620001d28162000170565b809150509250925092565b600060208284031215620001f057600080fd5b8151620001fd8162000170565b9392505050565b600080604083850312156200021857600080fd5b8251620002258162000170565b602084015190925080151581146200023c57600080fd5b809150509250929050565b60805160a05160c05160e051611394620002b560003960005050600061018401526000818160f40152818161095501528181610c7d01528181610db401528181610e690152610fa8015260008181610283015281816104dd015281816106be01526107cc01526113946000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063373fa7601161008c57806396f823b41161006657806396f823b414610209578063bcbaf4871461021c578063cec418ef1461022f578063e9fcf1f61461024257600080fd5b8063373fa760146101d05780637bd5d063146101e35780638e2cdf68146101f657600080fd5b8063206e8f32116100c8578063206e8f321461016c57806328f150eb1461017f5780633011e5d4146101a6578063369e9717146101c757600080fd5b8063049aacfe146100ef5780630b433a1214610140578063139f34cf14610157575b600080fd5b6101167f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61014960015481565b604051908152602001610137565b61016a610165366004610fcc565b610255565b005b61016a61017a366004610fcc565b610347565b6101167f000000000000000000000000000000000000000000000000000000000000000081565b6101b96101b4366004611007565b61037a565b604051610137929190611097565b61014960005481565b61016a6101de366004610fcc565b6104af565b6101b96101f1366004611007565b6105bd565b61016a610204366004610fcc565b610690565b61016a610217366004610fcc565b61079e565b61016a61022a366004611007565b61088d565b61016a61023d366004610fcc565b6108aa565b61016a610250366004611007565b6108da565b6040517f4a58e49e0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634a58e49e90602401602060405180830381865afa1580156102df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030391906110ba565b610339576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103446003826108f2565b50565b600181905560405181907f147643a3380a07b720e58d29bed784fd77f5778aaf06610663435736d29a776d90600090a250565b6040517fc4f865b20000000000000000000000000000000000000000000000000000000081526004810182905260009060609073ffffffffffffffffffffffffffffffffffffffff85169063c4f865b290602401602060405180830381865afa1580156103eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040f91906110ba565b156104945760405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101849052600190309063e9fcf1f6906064015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050915091506104a8565b505060408051602081019091526000808252905b9250929050565b6040517f4a58e49e0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634a58e49e90602401602060405180830381865afa158015610539573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055d91906110ba565b610593576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103446003823073ffffffffffffffffffffffffffffffffffffffff16633011e5d46001546109e7565b6040517fb86f6aef0000000000000000000000000000000000000000000000000000000081526004810182905260009060609073ffffffffffffffffffffffffffffffffffffffff85169063b86f6aef90602401602060405180830381865afa15801561062e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065291906110ba565b156104945760405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101849052600190309063bcbaf48790606401610449565b6040517f4a58e49e0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634a58e49e90602401602060405180830381865afa15801561071a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073e91906110ba565b610774576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103446002823073ffffffffffffffffffffffffffffffffffffffff16637bd5d0636000546109e7565b6040517f4a58e49e0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634a58e49e90602401602060405180830381865afa158015610828573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084c91906110ba565b610882576040517f1353f3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103446002826108f2565b6000610897610daf565b5090506108a5838383610e49565b505050565b600081815560405182917fa60f93af5f46f4a9093acf49a5642d02b04c7d56297737df82bf0cf63f0fb6d991a250565b60006108e4610daf565b5090506108a5838383610f88565b3360008181526020848152604080832085845290915290205480156109e1576040517fee8ca3b50000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063ee8ca3b590602401600060405180830381600087803b15801561099957600080fd5b505af11580156109ad573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff8316600090815260208681526040808320878452909152812055505b50505050565b3360008181526020878152604080832088845290915290205415610a0b5750610da8565b60408051600381830181815260c083019093526000928291606080840190803683370190505081526040805160038082526080820190925260209092019190816020015b6060815260200190600190039081610a4f5750509052805180519192506000918290610a7d57610a7d6110e3565b60200260200101906003811115610a9657610a96611112565b90816003811115610aa957610aa9611112565b8152505060018160000151600181518110610ac657610ac66110e3565b60200260200101906003811115610adf57610adf611112565b90816003811115610af257610af2611112565b8152505060028160000151600281518110610b0f57610b0f6110e3565b60200260200101906003811115610b2857610b28611112565b90816003811115610b3b57610b3b611112565b9052506040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018990528251808303909101815260649091018252602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e089901b1790529151610bb39230929101611141565b6040516020818303038152906040528160200151600081518110610bd957610bd96110e3565b6020908102919091010152610bee8342611170565b604080516fffffffffffffffffffffffffffffffff9283166020820152918516908201526060016040516020818303038152906040528160200151600181518110610c3b57610c3b6110e3565b6020026020010181905250604051806020016040528060008152508160200151600281518110610c6d57610c6d6110e3565b6020026020010181905250610c9f7f000000000000000000000000000000000000000000000000000000000000000090565b604080517fbcbaf48700000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff9290921691633323b467913091016040516020818303038152906040528473eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6040518563ffffffff1660e01b8152600401610d309493929190611205565b6020604051808303816000875af1158015610d4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7391906112f8565b73ffffffffffffffffffffffffffffffffffffffff909216600090815260208881526040808320898452909152902091909155505b5050505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b810c6366040518163ffffffff1660e01b81526004016040805180830381865afa158015610e1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e409190611311565b90939092509050565b8273ffffffffffffffffffffffffffffffffffffffff81166379bd1eac847f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff1663573ea5756040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ed3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef79190611341565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff16602482015260448101859052606401600060405180830381600087803b158015610f6a57600080fd5b505af1158015610f7e573d6000803e3d6000fd5b5050505050505050565b8273ffffffffffffffffffffffffffffffffffffffff811663de7c8cc2847f0000000000000000000000000000000000000000000000000000000000000000610e89565b600060208284031215610fde57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461034457600080fd5b6000806040838503121561101a57600080fd5b823561102581610fe5565b946020939093013593505050565b6000815180845260005b818110156110595760208185018101518683018201520161103d565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b82151581526040602082015260006110b26040830184611033565b949350505050565b6000602082840312156110cc57600080fd5b815180151581146110dc57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006110b26040830184611033565b808201808211156111aa577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600081518084526020808501808196508360051b8101915082860160005b858110156111f85782840389526111e6848351611033565b988501989350908401906001016111ce565b5091979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff85168152600060206080818401526112356080840187611033565b838103604080860191909152865181835280519183018290528301906000906060840190825b818110156112ad578451600480821061129a577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b508352938601939186019160010161125b565b5050848901519250838103858501526112c681846111b0565b955050505050506112ef606083018473ffffffffffffffffffffffffffffffffffffffff169052565b95945050505050565b60006020828403121561130a57600080fd5b5051919050565b6000806040838503121561132457600080fd5b82519150602083015161133681610fe5565b809150509250929050565b60006020828403121561135357600080fd5b81516110dc81610fe556fea26469706673582212203ab316cbc9b5ef43afa273cc35058d98e03812b7460fc0c243683d968681ef2264736f6c63430008130033";

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
      ChromaticLiquidator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ChromaticLiquidator__factory {
    return super.connect(runner) as ChromaticLiquidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChromaticLiquidatorInterface {
    return new Interface(_abi) as ChromaticLiquidatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChromaticLiquidator {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ChromaticLiquidator;
  }
}
