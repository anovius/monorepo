/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SponsorVault,
  SponsorVaultInterface,
} from "../../../../../contracts/core/connext/helpers/SponsorVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "SponsorVault__onlyConnext",
    type: "error",
  },
  {
    inputs: [],
    name: "SponsorVault__setConnext_invalidConnext",
    type: "error",
  },
  {
    inputs: [],
    name: "SponsorVault__setGasTokenOracle_invalidOriginDomain",
    type: "error",
  },
  {
    inputs: [],
    name: "SponsorVault__setMaxPriceDiffPercent_tooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "SponsorVault__setRate_invalidOriginDomain",
    type: "error",
  },
  {
    inputs: [],
    name: "SponsorVault__setTokenExchange_invalidAdopted",
    type: "error",
  },
  {
    inputs: [],
    name: "SponsorVault__withdraw_invalidAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldConnext",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newConnext",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "ConnextUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "GasTokenOracleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldLiquidityFeeCap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newLiquidityFeeCap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "LiquidityFeeCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMaxPriceDiffPercent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxPriceDiffPercent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MaxPriceDiffPercentUpdated",
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
        indexed: false,
        internalType: "address",
        name: "oldOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "PriceOracleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "originDomain",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "num",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "den",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct SponsorVault.Rate",
        name: "oldRate",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "num",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "den",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct SponsorVault.Rate",
        name: "newRate",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ReimburseLiquidityFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ReimburseRelayerFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRelayerFeeCap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRelayerFeeCap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RelayerFeeCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldTokenExchange",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newTokenExchange",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TokenExchangeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "connext",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "gasTokenOracle",
    outputs: [
      {
        internalType: "contract IGasTokenOracle",
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
        name: "",
        type: "address",
      },
    ],
    name: "liquidityFeeCaps",
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
    name: "maxPriceDiffPercent",
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
    name: "priceOracle",
    outputs: [
      {
        internalType: "contract IPriceOracle",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "rates",
    outputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "den",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_liquidityFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "reimburseLiquidityFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_originDomain",
        type: "uint32",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_originRelayerFee",
        type: "uint256",
      },
    ],
    name: "reimburseRelayerFees",
    outputs: [],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "reimbursedLiquidityFees",
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
    name: "relayerFeeCap",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    name: "setConnext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gasTokenOracle",
        type: "address",
      },
    ],
    name: "setGasTokenOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_liquidityFeeCap",
        type: "uint256",
      },
    ],
    name: "setLiquidityFeeCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxPriceDiffPercent",
        type: "uint256",
      },
    ],
    name: "setMaxPriceDiffPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_originDomain",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "num",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "den",
            type: "uint256",
          },
        ],
        internalType: "struct SponsorVault.Rate",
        name: "_rate",
        type: "tuple",
      },
    ],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_relayerFeeCap",
        type: "uint256",
      },
    ],
    name: "setRelayerFeeCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_tokenExchange",
        type: "address",
      },
    ],
    name: "setTokenExchange",
    outputs: [],
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
    name: "tokenExchanges",
    outputs: [
      {
        internalType: "contract ITokenExchange",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f8338038062001f83833981016040819052620000349162000143565b600160005562000044336200005b565b6200004f81620000ad565b506005600a5562000175565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038116620000d5576040516364ecfe8d60e01b815260040160405180910390fd5b600254604080516001600160a01b03928316815291831660208301523382820152517f8226ef7ac1ebdcde019c455e24e9af5546c66c8a4be197d185ca5c078d974d999181900360600190a1600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156200015657600080fd5b81516001600160a01b03811681146200016e57600080fd5b9392505050565b611dfe80620001856000396000f3fe60806040526004361061014b5760003560e01c80637b85326c116100b6578063d7cf794e1161006f578063d7cf794e146103ca578063d9caed1214610413578063db3faac814610433578063de4b054814610453578063f2fde38b14610473578063f751a0341461049357600080fd5b80637b85326c146102ff57806383df70791461031f5780638da5cb5b1461034c578063bf1f93e91461036a578063c87ba5a61461038a578063cee450a6146103aa57600080fd5b806347e7ef241161010857806347e7ef241461023f5780634d6f2013146102525780635306160f14610272578063530e784f146102aa5780636a6cc964146102ca578063715018a6146102ea57600080fd5b806304df19dd146101505780632630c12f146101725780632cf41b82146101af578063379252cf146101cf57806344eb94b1146101f357806347495b7514610209575b600080fd5b34801561015c57600080fd5b5061017061016b36600461192e565b6104b3565b005b34801561017e57600080fd5b50600854610192906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101bb57600080fd5b506101706101ca36600461196d565b610698565b3480156101db57600080fd5b506101e5600a5481565b6040519081526020016101a6565b3480156101ff57600080fd5b506101e560055481565b34801561021557600080fd5b50610192610224366004611986565b6009602052600090815260409020546001600160a01b031681565b61017061024d3660046119a3565b610711565b34801561025e57600080fd5b5061017061026d366004611986565b6107e4565b34801561027e57600080fd5b506101e561028d3660046119cf565b600460209081526000928352604080842090915290825290205481565b3480156102b657600080fd5b506101706102c5366004611986565b61081a565b3480156102d657600080fd5b506101706102e5366004611a08565b6108b2565b3480156102f657600080fd5b5061017061099d565b34801561030b57600080fd5b50600754610192906001600160a01b031681565b34801561032b57600080fd5b506101e561033a366004611986565b60066020526000908152604090205481565b34801561035857600080fd5b506001546001600160a01b0316610192565b34801561037657600080fd5b506101706103853660046119a3565b6109d3565b34801561039657600080fd5b506101e56103a5366004611a47565b610a72565b3480156103b657600080fd5b506101706103c5366004611986565b610de8565b3480156103d657600080fd5b506103fe6103e5366004611a89565b6003602052600090815260409020805460019091015482565b604080519283526020830191909152016101a6565b34801561041f57600080fd5b5061017061042e366004611aa4565b610e80565b34801561043f57600080fd5b5061017061044e3660046119cf565b611007565b34801561045f57600080fd5b50600254610192906001600160a01b031681565b34801561047f57600080fd5b5061017061048e366004611986565b6110e8565b34801561049f57600080fd5b506101706104ae36600461196d565b611180565b6002546001600160a01b031633146104de57604051634ff4387d60e01b815260040160405180910390fd5b600080600080856001600160a01b031631905060055481118061050a57506001600160a01b0386163b15155b156105185750505050505050565b6007546001600160a01b0316156105c95760075460405163e20e5a9b60e01b815263ffffffff891660048201526001600160a01b039091169063e20e5a9b906024016040805180830381865afa158015610576573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059a9190611ac4565b909350915081156105bf57816105b08487611afe565b6105ba9190611b1d565b6105c2565b60005b93506105ec565b63ffffffff87166000908152600360205260409020805460019091015490935091505b811561064d57816105fd8487611afe565b6106079190611b1d565b93506000816005546106199190611b3f565b905080851015610629578461062b565b805b9450478086101561063c578561063e565b805b955061064a8887611211565b50505b604080518581526001600160a01b03881660208201527f0eaab038cb2e09380bda7ae34903d4860f1cb4702bee4ed014caa58ee9015a2b910160405180910390a1505050505b505050565b6001546001600160a01b031633146106cb5760405162461bcd60e51b81526004016106c290611b56565b60405180910390fd5b60055460408051918252602082018390523382820152517fa00817d164f7253b290820caf32a2966685f5714e504301014b8de94eb615b8d9181900360600190a1600555565b6002600054036107335760405162461bcd60e51b81526004016106c290611b8b565b60026000556001600160a01b038216156107985761075c6001600160a01b03831633308461132a565b7fe31c7b8d08ee7db0afa68782e1028ef92305caeea8626633ad44d413e30f6b2f82823360405161078f93929190611bc2565b60405180910390a15b34156107db577fe31c7b8d08ee7db0afa68782e1028ef92305caeea8626633ad44d413e30f6b2f600034336040516107d293929190611bc2565b60405180910390a15b50506001600055565b6001546001600160a01b0316331461080e5760405162461bcd60e51b81526004016106c290611b56565b61081781611395565b50565b6001546001600160a01b031633146108445760405162461bcd60e51b81526004016106c290611b56565b600854604080516001600160a01b03928316815291831660208301523382820152517ff51f0fffc8121ee3747e0536c487d894894cdba960ccfb4ab385a88d51b16fed9181900360600190a1600880546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146108dc5760405162461bcd60e51b81526004016106c290611b56565b8163ffffffff16600003610903576040516318578aab60e11b815260040160405180910390fd5b63ffffffff8216600081815260036020908152604091829020825193845280548483015260010154838301528335606084015283013560808301523360a0830152517f9f5e5ea5f50f6ca47af3629d868b767a40aebafe54ce228e00185bd3a1c41c909181900360c00190a163ffffffff821660009081526003602090815260409091208235815590820135600182015581905b50505050565b6001546001600160a01b031633146109c75760405162461bcd60e51b81526004016106c290611b56565b6109d1600061142a565b565b6001546001600160a01b031633146109fd5760405162461bcd60e51b81526004016106c290611b56565b6001600160a01b038216600081815260066020908152604091829020548251908152908101849052338183015290517f3e3112b26e137c5b305e7795dd562db943574c9d07e2a41fde8a6fc4f489cfb29181900360600190a26001600160a01b03909116600090815260066020526040902055565b6002546000906001600160a01b03163314610aa057604051634ff4387d60e01b815260040160405180910390fd5b600260005403610ac25760405162461bcd60e51b81526004016106c290611b8b565b600260009081556001600160a01b0380861680835260066020908152604080852054938716855260048252808520928552919052822054818110610b48577fa820af888066f1fba397afa1bd46cb256567d073e9031b2f4070b15ff08ec27a87600087604051610b3493929190611bc2565b60405180910390a160009350505050610ddc565b6000610b548284611b3f565b90506000878211610b655781610b67565b875b6001600160a01b03808b16600090815260096020526040902054919250168015610cc05760405163de1e258f60e01b81526001600160a01b038b8116600483015260248201849052479160009184169063de1e258f906044016020604051808303816000875af1158015610bdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c039190611be5565b9050801580610c1a5750610c188c828661147c565b155b15610c3057600098505050505050505050610ddc565b80821015610c3e5781610c40565b805b6040516282422b60e81b81526001600160a01b038e81166004830152336024830152919250908416906382422b0090839060440160206040518083038185885af1158015610c92573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610cb79190611be5565b97505050610d5b565b6040516370a0823160e01b81523060048201526000906001600160a01b038c16906370a0823190602401602060405180830381865afa158015610d07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2b9190611be5565b905082811115610d3b5782610d3d565b805b96508615610d5957610d596001600160a01b038c16338961167d565b505b6001600160a01b038089166000908152600460209081526040808320938e1683529290529081208054889290610d92908490611bfe565b90915550506040517fa820af888066f1fba397afa1bd46cb256567d073e9031b2f4070b15ff08ec27a90610dcb908c9089908c90611bc2565b60405180910390a150939450505050505b60016000559392505050565b6001546001600160a01b03163314610e125760405162461bcd60e51b81526004016106c290611b56565b600754604080516001600160a01b03928316815291831660208301523382820152517fd851aa666d19d38ce7a23981c5f981eaa3aa6f919c5cbd8844f5c7670d5f91bb9181900360600190a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b03163314610eaa5760405162461bcd60e51b81526004016106c290611b56565b600260005403610ecc5760405162461bcd60e51b81526004016106c290611b8b565b60026000556001600160a01b038316610f0f5780471015610f0057604051636d49125360e01b815260040160405180910390fd5b610f0a8282611211565b610fac565b6040516370a0823160e01b815230600482015281906001600160a01b038516906370a0823190602401602060405180830381865afa158015610f55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f799190611be5565b1015610f9857604051636d49125360e01b815260040160405180910390fd5b610fac6001600160a01b038416838361167d565b604080516001600160a01b038086168252841660208201529081018290523360608201527f3ed4ee04a905a278b050a856bbe7ddaaf327a30514373e65aa6103beeae488c39060800160405180910390a15050600160005550565b6001546001600160a01b031633146110315760405162461bcd60e51b81526004016106c290611b56565b6001600160a01b038216611058576040516381cec9f360e01b815260040160405180910390fd5b6001600160a01b038281166000818152600960209081526040918290205482519384528416908301529183168183015233606082015290517f1c143beb4b4ccf8d341dc934483cac9ba2236278a305fa89d8289a0283ff77339181900360800190a16001600160a01b03918216600090815260096020526040902080546001600160a01b03191691909216179055565b6001546001600160a01b031633146111125760405162461bcd60e51b81526004016106c290611b56565b6001600160a01b0381166111775760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106c2565b6108178161142a565b6001546001600160a01b031633146111aa5760405162461bcd60e51b81526004016106c290611b56565b601e81106111cb57604051631c0e9bb360e01b815260040160405180910390fd5b600a5460408051918252602082018390523382820152517f5d09373871a974f1221425ef4a63c5fa25a9395efbe07aa877ea803f33d6383a9181900360600190a1600a55565b804710156112615760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016106c2565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146112ae576040519150601f19603f3d011682016040523d82523d6000602084013e6112b3565b606091505b50509050806106935760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016106c2565b6040516001600160a01b03808516602483015283166044820152606481018290526109979085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526116ad565b6001600160a01b0381166113bc576040516364ecfe8d60e01b815260040160405180910390fd5b600254604080516001600160a01b03928316815291831660208301523382820152517f8226ef7ac1ebdcde019c455e24e9af5546c66c8a4be197d185ca5c078d974d999181900360600190a1600280546001600160a01b0319166001600160a01b0392909216919091179055565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60085460405163856d562d60e01b81526000600482018190529182916001600160a01b039091169063856d562d90602401602060405180830381865afa1580156114ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ee9190611be5565b905080600003611502576000915050611676565b60085460405163856d562d60e01b81526001600160a01b038781166004830152600092169063856d562d90602401602060405180830381865afa15801561154d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115719190611be5565b90508060000361158657600092505050611676565b6000866001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ea9190611c16565b60ff169050856115fb826024611b3f565b61160690600a611d1f565b6116109087611afe565b61161a9190611b1d565b6064600a54606461162b9190611bfe565b8461163e87670de0b6b3a7640000611afe565b6116489190611b1d565b6116529190611afe565b61165c9190611b1d565b101561166e5760009350505050611676565b600193505050505b9392505050565b6040516001600160a01b03831660248201526044810182905261069390849063a9059cbb60e01b9060640161135e565b6000611702826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661177f9092919063ffffffff16565b80519091501561069357808060200190518101906117209190611d2b565b6106935760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016106c2565b606061178e8484600085611796565b949350505050565b6060824710156117f75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016106c2565b6001600160a01b0385163b61184e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106c2565b600080866001600160a01b0316858760405161186a9190611d79565b60006040518083038185875af1925050503d80600081146118a7576040519150601f19603f3d011682016040523d82523d6000602084013e6118ac565b606091505b50915091506118bc8282866118c7565b979650505050505050565b606083156118d6575081611676565b8251156118e65782518084602001fd5b8160405162461bcd60e51b81526004016106c29190611d95565b803563ffffffff8116811461191457600080fd5b919050565b6001600160a01b038116811461081757600080fd5b60008060006060848603121561194357600080fd5b61194c84611900565b9250602084013561195c81611919565b929592945050506040919091013590565b60006020828403121561197f57600080fd5b5035919050565b60006020828403121561199857600080fd5b813561167681611919565b600080604083850312156119b657600080fd5b82356119c181611919565b946020939093013593505050565b600080604083850312156119e257600080fd5b82356119ed81611919565b915060208301356119fd81611919565b809150509250929050565b6000808284036060811215611a1c57600080fd5b611a2584611900565b92506040601f1982011215611a3957600080fd5b506020830190509250929050565b600080600060608486031215611a5c57600080fd5b8335611a6781611919565b9250602084013591506040840135611a7e81611919565b809150509250925092565b600060208284031215611a9b57600080fd5b61167682611900565b600080600060608486031215611ab957600080fd5b833561194c81611919565b60008060408385031215611ad757600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611b1857611b18611ae8565b500290565b600082611b3a57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611b5157611b51611ae8565b500390565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b600060208284031215611bf757600080fd5b5051919050565b60008219821115611c1157611c11611ae8565b500190565b600060208284031215611c2857600080fd5b815160ff8116811461167657600080fd5b600181815b80851115611c74578160001904821115611c5a57611c5a611ae8565b80851615611c6757918102915b93841c9390800290611c3e565b509250929050565b600082611c8b57506001611d19565b81611c9857506000611d19565b8160018114611cae5760028114611cb857611cd4565b6001915050611d19565b60ff841115611cc957611cc9611ae8565b50506001821b611d19565b5060208310610133831016604e8410600b8410161715611cf7575081810a611d19565b611d018383611c39565b8060001904821115611d1557611d15611ae8565b0290505b92915050565b60006116768383611c7c565b600060208284031215611d3d57600080fd5b8151801515811461167657600080fd5b60005b83811015611d68578181015183820152602001611d50565b838111156109975750506000910152565b60008251611d8b818460208701611d4d565b9190910192915050565b6020815260008251806020840152611db4816040850160208701611d4d565b601f01601f1916919091016040019291505056fea26469706673582212203457a91d4d696d5d6029f80b30c18430767fd5cbf611a40056793334aa39695b64736f6c634300080f0033";

type SponsorVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SponsorVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SponsorVault__factory extends ContractFactory {
  constructor(...args: SponsorVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _connext: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SponsorVault> {
    return super.deploy(_connext, overrides || {}) as Promise<SponsorVault>;
  }
  override getDeployTransaction(
    _connext: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_connext, overrides || {});
  }
  override attach(address: string): SponsorVault {
    return super.attach(address) as SponsorVault;
  }
  override connect(signer: Signer): SponsorVault__factory {
    return super.connect(signer) as SponsorVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SponsorVaultInterface {
    return new utils.Interface(_abi) as SponsorVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SponsorVault {
    return new Contract(address, _abi, signerOrProvider) as SponsorVault;
  }
}
