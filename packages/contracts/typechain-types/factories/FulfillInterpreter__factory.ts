/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FulfillInterpreter,
  FulfillInterpreterInterface,
} from "../FulfillInterpreter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "transactionManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "callTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "fallbackAddress",
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
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isContract",
        type: "bool",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "callTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "fallbackAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionManager",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610bea380380610bea83398101604081905261002f91610045565b60016000556001600160a01b0316608052610075565b60006020828403121561005757600080fd5b81516001600160a01b038116811461006e57600080fd5b9392505050565b608051610b55610095600039600081816048015260a90152610b556000f3fe6080604052600436106100295760003560e01c806396f32fb81461002e578063cf9a360414610077575b600080fd5b34801561003a57600080fd5b506040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020015b60405180910390f35b61008a6100853660046108b0565b610099565b60405161006e939291906109c6565b6000806060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101065760405162461bcd60e51b8152602060048201526008602482015267234f544d3a30323760c01b60448201526064015b60405180910390fd5b6001600160a01b038816158061012157610121898b89610224565b600060606001600160a01b038c163b158015906101a9578c6001600160a01b03168461014e576000610150565b8a5b8a8a6040516101609291906109f2565b60006040518083038185875af1925050503d806000811461019d576040519150601f19603f3d011682016040523d82523d6000602084013e6101a2565b606091505b5090935091505b826101c9576101b98c8c8c610274565b836101c9576101c98c8e8c610298565b8d7f03196b76502b81bbf14393f8b5ed67dff323f1f86667b064820f1fdf293686a18e8e8e8e8e8e898b8a60405161020999989796959493929190610a02565b60405180910390a2919d919c509a5098505050505050505050565b6001600160a01b0383166102645760405162461bcd60e51b815260206004820152600760248201526608d2504e8c0ccd60ca1b60448201526064016100fd565b61026f8383836102e3565b505050565b6001600160a01b0383161561028e5761026f8383836103ce565b61026f82826103d9565b6001600160a01b0383166102d85760405162461bcd60e51b815260206004820152600760248201526608d1104e8c0ccd60ca1b60448201526064016100fd565b61026f8383836103e7565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610334573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103589190610a8f565b6103629190610aa8565b6040516001600160a01b0385166024820152604481018290529091506103c890859063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526104fa565b50505050565b61026f8383836105cc565b6103e382826105fc565b5050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610437573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045b9190610a8f565b9050818110156104bf5760405162461bcd60e51b815260206004820152602960248201527f5361666545524332303a2064656372656173656420616c6c6f77616e63652062604482015268656c6f77207a65726f60b81b60648201526084016100fd565b6040516001600160a01b038416602482015282820360448201819052906104f390869063095ea7b360e01b90606401610391565b5050505050565b600061054f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107159092919063ffffffff16565b80519091501561026f578080602001905181019061056d9190610ace565b61026f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016100fd565b6040516001600160a01b03831660248201526044810182905261026f90849063a9059cbb60e01b90606401610391565b8047101561064c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016100fd565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610699576040519150601f19603f3d011682016040523d82523d6000602084013e61069e565b606091505b505090508061026f5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016100fd565b6060610724848460008561072e565b90505b9392505050565b60608247101561078f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016100fd565b6001600160a01b0385163b6107e65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100fd565b600080866001600160a01b031685876040516108029190610af0565b60006040518083038185875af1925050503d806000811461083f576040519150601f19603f3d011682016040523d82523d6000602084013e610844565b606091505b509150915061085482828661085f565b979650505050505050565b6060831561086e575081610727565b82511561087e5782518084602001fd5b8160405162461bcd60e51b81526004016100fd9190610b0c565b6001600160a01b03811681146108ad57600080fd5b50565b600080600080600080600060c0888a0312156108cb57600080fd5b8735965060208801356108dd81610898565b955060408801356108ed81610898565b945060608801356108fd81610898565b93506080880135925060a088013567ffffffffffffffff8082111561092157600080fd5b818a0191508a601f83011261093557600080fd5b81358181111561094457600080fd5b8b602082850101111561095657600080fd5b60208301945080935050505092959891949750929550565b60005b83811015610989578181015183820152602001610971565b838111156103c85750506000910152565b600081518084526109b281602086016020860161096e565b601f01601f19169290920160200192915050565b831515815282151560208201526060604082015260006109e9606083018461099a565b95945050505050565b8183823760009101908152919050565b6001600160a01b038a811682528981166020830152881660408201526060810187905261010060808201819052810185905260006101208688828501376000838801820152601f8701601f19168301838103820160a0850152610a678183018861099a565b9250505083151560c0830152610a8160e083018415159052565b9a9950505050505050505050565b600060208284031215610aa157600080fd5b5051919050565b60008219821115610ac957634e487b7160e01b600052601160045260246000fd5b500190565b600060208284031215610ae057600080fd5b8151801515811461072757600080fd5b60008251610b0281846020870161096e565b9190910192915050565b602081526000610727602083018461099a56fea26469706673582212206087726de535f15099064c970944a6771c51b4c6d2f20b03b648fb7d25d7324f64736f6c634300080b0033";

type FulfillInterpreterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FulfillInterpreterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FulfillInterpreter__factory extends ContractFactory {
  constructor(...args: FulfillInterpreterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FulfillInterpreter";
  }

  deploy(
    transactionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FulfillInterpreter> {
    return super.deploy(
      transactionManager,
      overrides || {}
    ) as Promise<FulfillInterpreter>;
  }
  getDeployTransaction(
    transactionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(transactionManager, overrides || {});
  }
  attach(address: string): FulfillInterpreter {
    return super.attach(address) as FulfillInterpreter;
  }
  connect(signer: Signer): FulfillInterpreter__factory {
    return super.connect(signer) as FulfillInterpreter__factory;
  }
  static readonly contractName: "FulfillInterpreter";
  public readonly contractName: "FulfillInterpreter";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FulfillInterpreterInterface {
    return new utils.Interface(_abi) as FulfillInterpreterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FulfillInterpreter {
    return new Contract(address, _abi, signerOrProvider) as FulfillInterpreter;
  }
}
