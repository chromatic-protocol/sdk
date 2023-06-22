/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ChromaticLens,
  ChromaticLensInterface,
} from "../../../deployed/arbitrum_goerli/ChromaticLens";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IChromaticRouter",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "int16",
        name: "tradingFeeRate",
        type: "int16",
      },
      {
        internalType: "uint256",
        name: "_oracleVersion",
        type: "uint256",
      },
    ],
    name: "claimableLiquidity",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "mintingTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintingCLBTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningTokenAmount",
            type: "uint256",
          },
        ],
        internalType: "struct ILiquidity.ClaimableLiquidity",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "clbBalanceOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "binValue",
            type: "uint256",
          },
        ],
        internalType: "struct ChromaticLens.CLBBalance[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
    ],
    name: "liquidityBinStatuses",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "freeLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "binValue",
            type: "uint256",
          },
          {
            internalType: "int16",
            name: "tradingFeeRate",
            type: "int16",
          },
        ],
        internalType: "struct ILiquidity.LiquidityBinStatus[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "lpReceipts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "enum LpAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "int16",
            name: "tradingFeeRate",
            type: "int16",
          },
        ],
        internalType: "struct LpReceipt[]",
        name: "result",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "oracleVersion",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "Fixed18",
            name: "price",
            type: "int256",
          },
        ],
        internalType: "struct IOracleProvider.OracleVersion",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611af8380380611af883398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611a65806100936000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063585bc52914610067578063676c6ce9146100905780639b2fa372146100c5578063ac9650d81461011a578063ad35f0261461013a578063e1928af01461015a575b600080fd5b61007a610075366004611122565b61017a565b604051610087919061115b565b60405180910390f35b6100a361009e3660046111bf565b6107b2565b6040805182518152602080840151908201529181015190820152606001610087565b6100d86100d33660046111fa565b6108ad565b6040516100879190600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b61012d61012836600461123b565b61095a565b60405161008791906112ff565b61014d610148366004611361565b610a4e565b604051610087919061137e565b61016d610168366004611122565b610ab6565b60405161008791906113f1565b60606000610186610c55565b9050600081516001600160401b038111156101a3576101a3611496565b6040519080825280602002602001820160405280156101cc578160200160208202803683370190505b50905060005b815181101561021857848282815181106101ee576101ee6114ac565b6001600160a01b039092166020928302919091019091015280610210816114d8565b9150506101d2565b506000856001600160a01b03166264041d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610258573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027c91906114f1565b6001600160a01b0316634e1273f483856040518363ffffffff1660e01b81526004016102a9929190611549565b600060405180830381865afa1580156102c6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102ee919081019061161a565b90506000805b825181101561033f576000838281518110610311576103116114ac565b6020026020010151111561032d5781610329816114d8565b9250505b80610337816114d8565b9150506102f4565b506000816001600160401b0381111561035a5761035a611496565b604051908082528060200260200182016040528015610383578160200160208202803683370190505b5090506000826001600160401b038111156103a0576103a0611496565b6040519080825280602002602001820160405280156103c9578160200160208202803683370190505b5090506000836001600160401b038111156103e6576103e6611496565b60405190808252806020026020018201604052801561040f578160200160208202803683370190505b5090506000805b865182101561051a576000878381518110610433576104336114ac565b6020026020010151111561050857868281518110610453576104536114ac565b602002602001015185828151811061046d5761046d6114ac565b60200260200101818152505088828151811061048b5761048b6114ac565b60200260200101518482815181106104a5576104a56114ac565b6020026020010181815250506104d38983815181106104c6576104c66114ac565b6020026020010151610d59565b8382815181106104e5576104e56114ac565b602002602001019060010b908160010b815250508080610504906114d8565b9150505b81610512816114d8565b925050610416565b505060008a6001600160a01b03166264041d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f91906114f1565b6001600160a01b03166377954ac2846040518263ffffffff1660e01b81526004016105aa91906116af565b600060405180830381865afa1580156105c7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105ef919081019061161a565b905060008b6001600160a01b031663faf07bf3846040518263ffffffff1660e01b815260040161061f91906116c2565b600060405180830381865afa15801561063c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610664919081019061161a565b90506000866001600160401b0381111561068057610680611496565b6040519080825280602002602001820160405280156106dc57816020015b6106c96040518060800160405280600081526020016000815260200160008152602001600081525090565b81526020019060019003908161069e5790505b50905060005b8781101561079f576040518060800160405280878381518110610707576107076114ac565b60200260200101518152602001888381518110610726576107266114ac565b60200260200101518152602001858381518110610745576107456114ac565b60200260200101518152602001848381518110610764576107646114ac565b6020026020010151815250828281518110610781576107816114ac565b60200260200101819052508080610797906114d8565b9150506106e2565b5099505050505050505050505b92915050565b6107d660405180606001604052806000815260200160008152602001600081525090565b826001600160a01b0316630aa7d2f96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610814573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083891906114f1565b6001600160a01b0316637ece075d836040518263ffffffff1660e01b815260040161086591815260200190565b606060405180830381865afa158015610882573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a69190611709565b9392505050565b6108df6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051635cefa9fb60e01b8152600184900b6004820152602481018390526001600160a01b03851690635cefa9fb9060440160a060405180830381865afa15801561092e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109529190611764565b949350505050565b6060816001600160401b0381111561097457610974611496565b6040519080825280602002602001820160405280156109a757816020015b60608152602001906001900390816109925790505b50905060005b82811015610a4757610a17308585848181106109cb576109cb6114ac565b90506020028101906109dd91906117d3565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d9092505050565b828281518110610a2957610a296114ac565b60200260200101819052508080610a3f906114d8565b9150506109ad565b5092915050565b6060816001600160a01b03166338085c3d6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a8e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107ac9190810190611820565b6000805460405162ced03d60e31b81526001600160a01b038581166004830152848116602483015260609392169063067681e890604401600060405180830381865afa158015610b0a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b32919081019061161a565b905080516001600160401b03811115610b4d57610b4d611496565b604051908082528060200260200182016040528015610b8657816020015b610b7361109b565b815260200190600190039081610b6b5790505b50915060005b8151811015610c4d57846001600160a01b031663b79711e1838381518110610bb657610bb66114ac565b60200260200101516040518263ffffffff1660e01b8152600401610bdc91815260200190565b60c060405180830381865afa158015610bf9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1d91906118e8565b838281518110610c2f57610c2f6114ac565b60200260200101819052508080610c45906114d8565b915050610b8c565b505092915050565b60606000610c61610db5565b90506000610c716024600261197d565b6001600160401b03811115610c8857610c88611496565b604051908082528060200260200182016040528015610cb1578160200160208202803683370190505b50905060005b6024811015610a4757610ce1838260248110610cd557610cd56114ac565b60200201516001610ef1565b828281518110610cf357610cf36114ac565b602002602001018181525050610d20838260248110610d1457610d146114ac565b60200201516000610ef1565b82610d2c602484611994565b81518110610d3c57610d3c6114ac565b602090810291909101015280610d51816114d8565b915050610cb7565b60006402540be4008210610d8757610d7e610d796402540be400846119a7565b610f19565b6107ac906119ba565b6107ac82610f19565b60606108a68383604051806060016040528060258152602001611a0b60259139610f85565b610dbd6110eb565b50604080516104808101825260018152600260208201526003918101919091526004606082015260056080820152600660a0820152600760c0820152600860e08201526009610100820152600a6101208201526014610140820152601e610160820152602861018082015260326101a0820152603c6101c082015260466101e08201526050610200820152605a610220820152606461024082015260c861026082015261012c6102808201526101906102a08201526101f46102c08201526102586102e08201526102bc610300820152610320808201526103846103408201526103e86103608201526105dc6103808201526107d06103a08201526109c46103c0820152610bb86103e0820152610dac610400820152610fa061042082015261119461044082015261138861046082015290565b600081610f1057610f0b6402540be40061ffff8516611994565b6108a6565b505061ffff1690565b600061ffff821115610f815760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201526536206269747360d01b60648201526084015b60405180910390fd5b5090565b6060600080856001600160a01b031685604051610fa291906119db565b600060405180830381855afa9150503d8060008114610fdd576040519150601f19603f3d011682016040523d82523d6000602084013e610fe2565b606091505b5091509150610ff386838387610ffd565b9695505050505050565b6060831561106c578251600003611065576001600160a01b0385163b6110655760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f78565b5081610952565b61095283838151156110815781518083602001fd5b8060405162461bcd60e51b8152600401610f7891906119f7565b6040518060c0016040528060008152602001600081526020016000815260200160006001600160a01b03168152602001600060018111156110de576110de6113db565b8152600060209091015290565b6040518061048001604052806024906020820280368337509192915050565b6001600160a01b038116811461111f57600080fd5b50565b6000806040838503121561113557600080fd5b82356111408161110a565b915060208301356111508161110a565b809150509250929050565b602080825282518282018190526000919060409081850190868401855b828110156111b257815180518552868101518786015285810151868601526060908101519085015260809093019290850190600101611178565b5091979650505050505050565b600080604083850312156111d257600080fd5b82356111dd8161110a565b946020939093013593505050565b8060010b811461111f57600080fd5b60008060006060848603121561120f57600080fd5b833561121a8161110a565b9250602084013561122a816111eb565b929592945050506040919091013590565b6000806020838503121561124e57600080fd5b82356001600160401b038082111561126557600080fd5b818501915085601f83011261127957600080fd5b81358181111561128857600080fd5b8660208260051b850101111561129d57600080fd5b60209290920196919550909350505050565b60005b838110156112ca5781810151838201526020016112b2565b50506000910152565b600081518084526112eb8160208601602086016112af565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561135457603f198886030184526113428583516112d3565b94509285019290850190600101611326565b5092979650505050505050565b60006020828403121561137357600080fd5b81356108a68161110a565b602080825282518282018190526000919060409081850190868401855b828110156111b25781518051855286810151878601528581015186860152606090810151600190810b91860191909152608090940193918601910161139b565b634e487b7160e01b600052602160045260246000fd5b60208082528251828201819052600091906040908185019086840185805b8381101561148857825180518652878101518887015286810151878701526060808201516001600160a01b0316908701526080808201516002811061146257634e487b7160e01b85526021600452602485fd5b9087015260a090810151600190810b9187019190915260c090950194928701920161140f565b509298975050505050505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016114ea576114ea6114c2565b5060010190565b60006020828403121561150357600080fd5b81516108a68161110a565b600081518084526020808501945080840160005b8381101561153e57815187529582019590820190600101611522565b509495945050505050565b604080825283519082018190526000906020906060840190828701845b8281101561158b5781516001600160a01b031684529284019290840190600101611566565b50505083810382850152610ff3818661150e565b604051608081016001600160401b03811182821017156115c1576115c1611496565b60405290565b604051601f8201601f191681016001600160401b03811182821017156115ef576115ef611496565b604052919050565b60006001600160401b0382111561161057611610611496565b5060051b60200190565b6000602080838503121561162d57600080fd5b82516001600160401b0381111561164357600080fd5b8301601f8101851361165457600080fd5b8051611667611662826115f7565b6115c7565b81815260059190911b8201830190838101908783111561168657600080fd5b928401925b828410156116a45783518252928401929084019061168b565b979650505050505050565b6020815260006108a6602083018461150e565b6020808252825182820181905260009190848201906040850190845b818110156116fd578351600190810b84529385019392850192016116de565b50909695505050505050565b60006060828403121561171b57600080fd5b604051606081018181106001600160401b038211171561173d5761173d611496565b80604052508251815260208301516020820152604083015160408201528091505092915050565b600060a0828403121561177657600080fd5b60405160a081018181106001600160401b038211171561179857611798611496565b806040525082518152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6000808335601e198436030181126117ea57600080fd5b8301803591506001600160401b0382111561180457600080fd5b60200191503681900382131561181957600080fd5b9250929050565b6000602080838503121561183357600080fd5b82516001600160401b0381111561184957600080fd5b8301601f8101851361185a57600080fd5b8051611868611662826115f7565b81815260079190911b8201830190838101908783111561188757600080fd5b928401925b828410156116a457608084890312156118a55760008081fd5b6118ad61159f565b845181528585015186820152604080860151908201526060808601516118d2816111eb565b908201528252608093909301929084019061188c565b600060c082840312156118fa57600080fd5b60405160c081018181106001600160401b038211171561191c5761191c611496565b806040525082518152602083015160208201526040830151604082015260608301516119478161110a565b606082015260808301516002811061195e57600080fd5b608082015260a0830151611971816111eb565b60a08201529392505050565b80820281158282048414176107ac576107ac6114c2565b808201808211156107ac576107ac6114c2565b818103818111156107ac576107ac6114c2565b60008160010b617fff1981036119d2576119d26114c2565b60000392915050565b600082516119ed8184602087016112af565b9190910192915050565b6020815260006108a660208301846112d356fe416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564a26469706673582212200c60cf18363e120fe66b439e7ffc760fa92f90154953a2f4966447cda533f37e64736f6c63430008130033";

type ChromaticLensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChromaticLensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChromaticLens__factory extends ContractFactory {
  constructor(...args: ChromaticLensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChromaticLens> {
    return super.deploy(_router, overrides || {}) as Promise<ChromaticLens>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_router, overrides || {});
  }
  override attach(address: string): ChromaticLens {
    return super.attach(address) as ChromaticLens;
  }
  override connect(signer: Signer): ChromaticLens__factory {
    return super.connect(signer) as ChromaticLens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChromaticLensInterface {
    return new utils.Interface(_abi) as ChromaticLensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChromaticLens {
    return new Contract(address, _abi, signerOrProvider) as ChromaticLens;
  }
}
