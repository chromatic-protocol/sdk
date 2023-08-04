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
        internalType: "struct IMarketLiquidity.ClaimableLiquidity",
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
        internalType: "int16[]",
        name: "tradingFeeRates",
        type: "int16[]",
      },
      {
        internalType: "uint256",
        name: "_oracleVersion",
        type: "uint256",
      },
    ],
    name: "claimableLiquidityBatch",
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
        internalType: "struct IMarketLiquidity.ClaimableLiquidity[]",
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
        internalType: "struct IMarketLiquidity.LiquidityBinStatus[]",
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
            internalType: "int256",
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
    ],
    name: "pendingLiquidity",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "oracleVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintingTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmountRequested",
            type: "uint256",
          },
        ],
        internalType: "struct IMarketLiquidity.PendingLiquidity",
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
        internalType: "int16[]",
        name: "tradingFeeRates",
        type: "int16[]",
      },
    ],
    name: "pendingLiquidityBatch",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "oracleVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintingTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmountRequested",
            type: "uint256",
          },
        ],
        internalType: "struct IMarketLiquidity.PendingLiquidity[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161200838038061200883398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051611f7d61008b6000396000610d540152611f7d6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639b2fa3721161005b5780639b2fa3721461012b578063ad35f0261461014b578063bb4b52fe1461016b578063e1928af01461018b57600080fd5b80631e7317611461008d57806353fd2a92146100b6578063585bc529146100d6578063676c6ce9146100f6575b600080fd5b6100a061009b36600461132d565b6101ab565b6040516100ad9190611382565b60405180910390f35b6100c96100c43660046113e4565b61026d565b6040516100ad9190611440565b6100e96100e43660046114ad565b610332565b6040516100ad91906114e6565b61010961010436600461154a565b6109d8565b60408051825181526020808401519082015291810151908201526060016100ad565b61013e610139366004611585565b610aed565b6040516100ad91906115c6565b61015e6101593660046115ff565b610bb8565b6040516100ad919061161c565b61017e610179366004611679565b610c4b565b6040516100ad91906116a7565b61019e6101993660046114ad565b610d01565b6040516100ad91906116f7565b6040517f68adaeaa00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff8516906368adaeaa906102029086908690600401611805565b600060405180830381865afa15801561021f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526102659190810190611941565b949350505050565b6040517f70ebd41b00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff8616906370ebd41b906102c6908790879087906004016119e0565b600060405180830381865afa1580156102e3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103299190810190611a74565b95945050505050565b6060600061033e610f07565b90506000815167ffffffffffffffff81111561035c5761035c611819565b604051908082528060200260200182016040528015610385578160200160208202803683370190505b50905060005b81518110156103d457848282815181106103a7576103a7611b02565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015260010161038b565b5060008573ffffffffffffffffffffffffffffffffffffffff166264041d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610421573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104459190611b31565b73ffffffffffffffffffffffffffffffffffffffff16634e1273f483856040518363ffffffff1660e01b815260040161047f929190611b7e565b600060405180830381865afa15801561049c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104e29190810190611beb565b90506000805b82518110156105215782818151811061050357610503611b02565b6020026020010151600014610519576001909101905b6001016104e8565b5060008167ffffffffffffffff81111561053d5761053d611819565b604051908082528060200260200182016040528015610566578160200160208202803683370190505b50905060008267ffffffffffffffff81111561058457610584611819565b6040519080825280602002602001820160405280156105ad578160200160208202803683370190505b50905060008367ffffffffffffffff8111156105cb576105cb611819565b6040519080825280602002602001820160405280156105f4578160200160208202803683370190505b5090506000805b86518110156106e75786818151811061061657610616611b02565b60200260200101516000146106df5786818151811061063757610637611b02565b602002602001015185838151811061065157610651611b02565b60200260200101818152505088818151811061066f5761066f611b02565b602002602001015184838151811061068957610689611b02565b6020026020010181815250506106b78982815181106106aa576106aa611b02565b6020026020010151611009565b8383815181106106c9576106c9611b02565b600192830b602091820292909201015291909101905b6001016105fb565b5060008b73ffffffffffffffffffffffffffffffffffffffff166264041d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610734573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107589190611b31565b73ffffffffffffffffffffffffffffffffffffffff166377954ac2856040518263ffffffff1660e01b81526004016107909190611c7c565b600060405180830381865afa1580156107ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107f39190810190611beb565b905060008c73ffffffffffffffffffffffffffffffffffffffff1663faf07bf3856040518263ffffffff1660e01b81526004016108309190611c8f565b600060405180830381865afa15801561084d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108939190810190611beb565b905060008767ffffffffffffffff8111156108b0576108b0611819565b60405190808252806020026020018201604052801561090c57816020015b6108f96040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001906001900390816108ce5790505b50905060005b888110156109c457604051806080016040528088838151811061093757610937611b02565b6020026020010151815260200189838151811061095657610956611b02565b6020026020010151815260200185838151811061097557610975611b02565b6020026020010151815260200184838151811061099457610994611b02565b60200260200101518152508282815181106109b1576109b1611b02565b6020908102919091010152600101610912565b509a50505050505050505050505b92915050565b6109fc60405180606001604052806000815260200160008152602001600081525090565b8273ffffffffffffffffffffffffffffffffffffffff16630aa7d2f96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6b9190611b31565b73ffffffffffffffffffffffffffffffffffffffff16637ece075d836040518263ffffffff1660e01b8152600401610aa591815260200190565b606060405180830381865afa158015610ac2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae69190611cca565b9392505050565b610b1f6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040517f5cefa9fb000000000000000000000000000000000000000000000000000000008152600184900b60048201526024810183905273ffffffffffffffffffffffffffffffffffffffff851690635cefa9fb9060440160a060405180830381865afa158015610b94573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102659190611d06565b60608173ffffffffffffffffffffffffffffffffffffffff166338085c3d6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610c05573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109d29190810190611d22565b610c6f60405180606001604052806000815260200160008152602001600081525090565b6040517f837d4b58000000000000000000000000000000000000000000000000000000008152600183900b600482015273ffffffffffffffffffffffffffffffffffffffff84169063837d4b5890602401606060405180830381865afa158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae69190611deb565b6040517f067681e800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015282811660248301526060916000917f0000000000000000000000000000000000000000000000000000000000000000169063067681e890604401600060405180830381865afa158015610d9b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610de19190810190611beb565b9050805167ffffffffffffffff811115610dfd57610dfd611819565b604051908082528060200260200182016040528015610e3657816020015b610e23611240565b815260200190600190039081610e1b5790505b50915060005b8151811015610eff578473ffffffffffffffffffffffffffffffffffffffff1663b79711e1838381518110610e7357610e73611b02565b60200260200101516040518263ffffffff1660e01b8152600401610e9991815260200190565b60c060405180830381865afa158015610eb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eda9190611e07565b838281518110610eec57610eec611b02565b6020908102919091010152600101610e3c565b505092915050565b60606000610f13611040565b90506000610f2360246002611ecc565b67ffffffffffffffff811115610f3b57610f3b611819565b604051908082528060200260200182016040528015610f64578160200160208202803683370190505b50905060005b602481101561100257610f94838260248110610f8857610f88611b02565b6020020151600161117c565b828281518110610fa657610fa6611b02565b602002602001018181525050610fd3838260248110610fc757610fc7611b02565b6020020151600061117c565b82610fdf602484611ee3565b81518110610fef57610fef611b02565b6020908102919091010152600101610f6a565b5092915050565b60006402540be40082106110375761102e6110296402540be40084611ef6565b6111a4565b6109d290611f09565b6109d2826111a4565b61104861129d565b50604080516104808101825260018152600260208201526003918101919091526004606082015260056080820152600660a0820152600760c0820152600860e08201526009610100820152600a6101208201526014610140820152601e610160820152602861018082015260326101a0820152603c6101c082015260466101e08201526050610200820152605a610220820152606461024082015260c861026082015261012c6102808201526101906102a08201526101f46102c08201526102586102e08201526102bc610300820152610320808201526103846103408201526103e86103608201526105dc6103808201526107d06103a08201526109c46103c0820152610bb86103e0820152610dac610400820152610fa061042082015261119461044082015261138861046082015290565b60008161119b576111966402540be40061ffff8516611ee3565b610ae6565b505061ffff1690565b600061ffff82111561123c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f3620626974730000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b5090565b6040518060c00160405280600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160006001811115611290576112906116c8565b8152600060209091015290565b6040518061048001604052806024906020820280368337509192915050565b73ffffffffffffffffffffffffffffffffffffffff811681146112de57600080fd5b50565b60008083601f8401126112f357600080fd5b50813567ffffffffffffffff81111561130b57600080fd5b6020830191508360208260051b850101111561132657600080fd5b9250929050565b60008060006040848603121561134257600080fd5b833561134d816112bc565b9250602084013567ffffffffffffffff81111561136957600080fd5b611375868287016112e1565b9497909650939450505050565b6020808252825182820181905260009190848201906040850190845b818110156113d8576113c58385518051825260208082015190830152604090810151910152565b928401926060929092019160010161139e565b50909695505050505050565b600080600080606085870312156113fa57600080fd5b8435611405816112bc565b9350602085013567ffffffffffffffff81111561142157600080fd5b61142d878288016112e1565b9598909750949560400135949350505050565b6020808252825182820181905260009190848201906040850190845b818110156113d85761149a83855180518252602081015160208301526040810151604083015260608101516060830152608081015160808301525050565b9284019260a0929092019160010161145c565b600080604083850312156114c057600080fd5b82356114cb816112bc565b915060208301356114db816112bc565b809150509250929050565b602080825282518282018190526000919060409081850190868401855b8281101561153d57815180518552868101518786015285810151868601526060908101519085015260809093019290850190600101611503565b5091979650505050505050565b6000806040838503121561155d57600080fd5b8235611568816112bc565b946020939093013593505050565b8060010b81146112de57600080fd5b60008060006060848603121561159a57600080fd5b83356115a5816112bc565b925060208401356115b581611576565b929592945050506040919091013590565b60a081016109d2828480518252602081015160208301526040810151604083015260608101516060830152608081015160808301525050565b60006020828403121561161157600080fd5b8135610ae6816112bc565b602080825282518282018190526000919060409081850190868401855b8281101561153d5781518051855286810151878601528581015186860152606090810151600190810b918601919091526080909401939186019101611639565b6000806040838503121561168c57600080fd5b8235611697816112bc565b915060208301356114db81611576565b815181526020808301519082015260408083015190820152606081016109d2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60208082528251828201819052600091906040908185019086840185805b838110156117b4578251805186528781015188870152868101518787015260608082015173ffffffffffffffffffffffffffffffffffffffff16908701526080808201516002811061178e577f4e487b710000000000000000000000000000000000000000000000000000000085526021600452602485fd5b9087015260a090810151600190810b9187019190915260c0909501949287019201611715565b509298975050505050505050565b8183526000602080850194508260005b858110156117fa5781356117e581611576565b600190810b88529683019691830191016117d2565b509495945050505050565b6020815260006102656020830184866117c2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561186b5761186b611819565b60405290565b6040516080810167ffffffffffffffff8111828210171561186b5761186b611819565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156118db576118db611819565b604052919050565b600067ffffffffffffffff8211156118fd576118fd611819565b5060051b60200190565b60006060828403121561191957600080fd5b611921611848565b905081518152602082015160208201526040820151604082015292915050565b6000602080838503121561195457600080fd5b825167ffffffffffffffff81111561196b57600080fd5b8301601f8101851361197c57600080fd5b805161198f61198a826118e3565b611894565b818152606091820283018401918482019190888411156119ae57600080fd5b938501935b838510156119d4576119c58986611907565b835293840193918501916119b3565b50979650505050505050565b6040815260006119f46040830185876117c2565b9050826020830152949350505050565b600060a08284031215611a1657600080fd5b60405160a0810181811067ffffffffffffffff82111715611a3957611a39611819565b806040525080915082518152602083015160208201526040830151604082015260608301516060820152608083015160808201525092915050565b60006020808385031215611a8757600080fd5b825167ffffffffffffffff811115611a9e57600080fd5b8301601f81018513611aaf57600080fd5b8051611abd61198a826118e3565b81815260a09182028301840191848201919088841115611adc57600080fd5b938501935b838510156119d457611af38986611a04565b83529384019391850191611ae1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611b4357600080fd5b8151610ae6816112bc565b600081518084526020808501945080840160005b838110156117fa57815187529582019590820190600101611b62565b604080825283519082018190526000906020906060840190828701845b82811015611bcd57815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101611b9b565b50505083810382850152611be18186611b4e565b9695505050505050565b60006020808385031215611bfe57600080fd5b825167ffffffffffffffff811115611c1557600080fd5b8301601f81018513611c2657600080fd5b8051611c3461198a826118e3565b81815260059190911b82018301908381019087831115611c5357600080fd5b928401925b82841015611c7157835182529284019290840190611c58565b979650505050505050565b602081526000610ae66020830184611b4e565b6020808252825182820181905260009190848201906040850190845b818110156113d8578351600190810b8452938501939285019201611cab565b600060608284031215611cdc57600080fd5b611ce4611848565b8251815260208301516020820152604083015160408201528091505092915050565b600060a08284031215611d1857600080fd5b610ae68383611a04565b60006020808385031215611d3557600080fd5b825167ffffffffffffffff811115611d4c57600080fd5b8301601f81018513611d5d57600080fd5b8051611d6b61198a826118e3565b81815260079190911b82018301908381019087831115611d8a57600080fd5b928401925b82841015611c715760808489031215611da85760008081fd5b611db0611871565b84518152858501518682015260408086015190820152606080860151611dd581611576565b9082015282526080939093019290840190611d8f565b600060608284031215611dfd57600080fd5b610ae68383611907565b600060c08284031215611e1957600080fd5b60405160c0810181811067ffffffffffffffff82111715611e3c57611e3c611819565b80604052508251815260208301516020820152604083015160408201526060830151611e67816112bc565b6060820152608083015160028110611e7e57600080fd5b608082015260a0830151611e9181611576565b60a08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820281158282048414176109d2576109d2611e9d565b808201808211156109d2576109d2611e9d565b818103818111156109d2576109d2611e9d565b60008160010b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80008103611f3e57611f3e611e9d565b6000039291505056fea2646970667358221220150ef420cd48a72adcfa8829c2472272d0b50764d76250dce9271abf1a1e221964736f6c63430008130033";

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

  override getDeployTransaction(
    _router: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_router, overrides || {});
  }
  override deploy(
    _router: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_router, overrides || {}) as Promise<
      ChromaticLens & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ChromaticLens__factory {
    return super.connect(runner) as ChromaticLens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChromaticLensInterface {
    return new Interface(_abi) as ChromaticLensInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChromaticLens {
    return new Contract(address, _abi, runner) as unknown as ChromaticLens;
  }
}
