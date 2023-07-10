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
  "0x60e06040523480156200001157600080fd5b506040516200129d3803806200129d83398101604081905262000034916200019a565b600080546001600160a01b0319166001600160a01b0385811691909117909155603c60015562015180600255821660808190526040805163573ea57560e01b8152905184923092859263573ea575916004808201926020929091908290030181865afa158015620000a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cf9190620001ee565b6001600160a01b0390811660c0528116620000fb575073c815db16d4be6ddf2685c201937905abf338f5d75b6040516337b6269f60e21b81526001600160a01b03838116600483015282169063ded89a7c906024016040805180830381865afa15801562000141573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000167919062000215565b506001600160a01b031660a0525062000258945050505050565b6001600160a01b03811681146200019757600080fd5b50565b600080600060608486031215620001b057600080fd5b8351620001bd8162000181565b6020850151909350620001d08162000181565b6040850151909250620001e38162000181565b809150509250925092565b6000602082840312156200020157600080fd5b81516200020e8162000181565b9392505050565b600080604083850312156200022957600080fd5b8251620002368162000181565b602084015190925080151581146200024d57600080fd5b809150509250929050565b60805160a05160c051610ff6620002a760003960005050600061017701526000818160f40152818161072401528181610a1d01528181610b2101528181610bbc0152610cbc0152610ff66000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063373fa7601161008c57806396f823b41161006657806396f823b4146101fc578063bcbaf4871461020f578063cec418ef14610222578063e9fcf1f61461023557600080fd5b8063373fa760146101c35780637bd5d063146101d65780638e2cdf68146101e957600080fd5b8063206e8f32116100c8578063206e8f321461015f57806328f150eb146101725780633011e5d414610199578063369e9717146101ba57600080fd5b8063049aacfe146100ef5780630b433a1214610133578063139f34cf1461014a575b600080fd5b6101167f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61013c60025481565b60405190815260200161012a565b61015d610158366004610ce0565b610248565b005b61015d61016d366004610ce0565b6102df565b6101167f000000000000000000000000000000000000000000000000000000000000000081565b6101ac6101a7366004610d0e565b610312565b60405161012a929190610d80565b61013c60015481565b61015d6101d1366004610ce0565b6103ff565b6101ac6101e4366004610d0e565b6104a5565b61015d6101f7366004610ce0565b610545565b61015d61020a366004610ce0565b6105eb565b61015d61021d366004610d0e565b61067f565b61015d610230366004610ce0565b61069c565b61015d610243366004610d0e565b6106cf565b60005460405163252c724f60e11b81523360048201526001600160a01b0390911690634a58e49e90602401602060405180830381865afa158015610290573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b49190610da3565b6102d157604051631353f3f160e01b815260040160405180910390fd5b6102dc6004826106e7565b50565b600281905560405181907f147643a3380a07b720e58d29bed784fd77f5778aaf06610663435736d29a776d90600090a250565b60405163627c32d960e11b8152600481018290526000906060906001600160a01b0385169063c4f865b290602401602060405180830381865afa15801561035d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103819190610da3565b156103e4576040516001600160a01b038516602482015260448101849052600190309063e9fcf1f6906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050915091506103f8565b505060408051602081019091526000808252905b9250929050565b60005460405163252c724f60e11b81523360048201526001600160a01b0390911690634a58e49e90602401602060405180830381865afa158015610447573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046b9190610da3565b61048857604051631353f3f160e01b815260040160405180910390fd5b6102dc600482306001600160a01b0316633011e5d46002546107a9565b60405163b86f6aef60e01b8152600481018290526000906060906001600160a01b0385169063b86f6aef90602401602060405180830381865afa1580156104f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105149190610da3565b156103e4576040516001600160a01b038516602482015260448101849052600190309063bcbaf487906064016103ae565b60005460405163252c724f60e11b81523360048201526001600160a01b0390911690634a58e49e90602401602060405180830381865afa15801561058d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b19190610da3565b6105ce57604051631353f3f160e01b815260040160405180910390fd5b6102dc600382306001600160a01b0316637bd5d0636001546107a9565b60005460405163252c724f60e11b81523360048201526001600160a01b0390911690634a58e49e90602401602060405180830381865afa158015610633573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106579190610da3565b61067457604051631353f3f160e01b815260040160405180910390fd5b6102dc6003826106e7565b6000610689610b1c565b509050610697838383610ba9565b505050565b600181905560405181907fa60f93af5f46f4a9093acf49a5642d02b04c7d56297737df82bf0cf63f0fb6d990600090a250565b60006106d9610b1c565b509050610697838383610ca9565b3360008181526020848152604080832085845290915290205480156107a35760405163ee8ca3b560e01b8152600481018290526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ee8ca3b590602401600060405180830381600087803b15801561076857600080fd5b505af115801561077c573d6000803e3d6000fd5b5050506001600160a01b038316600090815260208681526040808320878452909152812055505b50505050565b33600081815260208781526040808320888452909152902054156107cd5750610b15565b60408051600381830181815260c083019093526000928291606080840190803683370190505081526040805160038082526080820190925260209092019190816020015b6060815260200190600190039081610811575050905280518051919250600091829061083f5761083f610dcc565b6020026020010190600381111561085857610858610de2565b9081600381111561086b5761086b610de2565b815250506001816000015160018151811061088857610888610dcc565b602002602001019060038111156108a1576108a1610de2565b908160038111156108b4576108b4610de2565b81525050600281600001516002815181106108d1576108d1610dcc565b602002602001019060038111156108ea576108ea610de2565b908160038111156108fd576108fd610de2565b905250604080516001600160a01b038416602482015260448082018990528251808303909101815260649091018252602080820180516001600160e01b031660e089901b17905291516109539230929101610df8565b604051602081830303815290604052816020015160008151811061097957610979610dcc565b602090810291909101015261098e8342610e1c565b604080516fffffffffffffffffffffffffffffffff92831660208201529185169082015260600160405160208183030381529060405281602001516001815181106109db576109db610dcc565b6020026020010181905250604051806020016040528060008152508160200151600281518110610a0d57610a0d610dcc565b6020026020010181905250610a3f7f000000000000000000000000000000000000000000000000000000000000000090565b6040805163bcbaf48760e01b60208201526001600160a01b039290921691633323b467913091016040516020818303038152906040528473eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6040518563ffffffff1660e01b8152600401610aaa9493929190610e98565b6020604051808303816000875af1158015610ac9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aed9190610f5a565b6001600160a01b03909216600090815260208881526040808320898452909152902091909155505b5050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b810c6366040518163ffffffff1660e01b81526004016040805180830381865afa158015610b7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba09190610f73565b90939092509050565b826001600160a01b0381166379bd1eac847f00000000000000000000000000000000000000000000000000000000000000005b6001600160a01b031663573ea5756040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3d9190610fa3565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b0316602482015260448101859052606401600060405180830381600087803b158015610c8b57600080fd5b505af1158015610c9f573d6000803e3d6000fd5b5050505050505050565b826001600160a01b03811663de7c8cc2847f0000000000000000000000000000000000000000000000000000000000000000610bdc565b600060208284031215610cf257600080fd5b5035919050565b6001600160a01b03811681146102dc57600080fd5b60008060408385031215610d2157600080fd5b8235610d2c81610cf9565b946020939093013593505050565b6000815180845260005b81811015610d6057602081850181015186830182015201610d44565b506000602082860101526020601f19601f83011685010191505092915050565b8215158152604060208201526000610d9b6040830184610d3a565b949350505050565b600060208284031215610db557600080fd5b81518015158114610dc557600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6001600160a01b0383168152604060208201819052600090610d9b90830184610d3a565b80820180821115610e3d57634e487b7160e01b600052601160045260246000fd5b92915050565b600081518084526020808501808196508360051b8101915082860160005b85811015610e8b578284038952610e79848351610d3a565b98850198935090840190600101610e61565b5091979650505050505050565b6001600160a01b038516815260806020808301829052600091610ebd90840187610d3a565b838103604080860191909152865181835280519183018290528301906000906060840190825b81811015610f1c5784516004808210610f0957634e487b7160e01b865260218152602486fd5b5083529386019391860191600101610ee3565b505084890151925083810385850152610f358184610e43565b95505050505050610f5160608301846001600160a01b03169052565b95945050505050565b600060208284031215610f6c57600080fd5b5051919050565b60008060408385031215610f8657600080fd5b825191506020830151610f9881610cf9565b809150509250929050565b600060208284031215610fb557600080fd5b8151610dc581610cf956fea26469706673582212209b0e8dd9e4076605b9af8914ae25c129d918708da7d7bef33275bdb079d248c364736f6c63430008130033";

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