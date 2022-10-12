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
import type { PromiseOrValue } from "../../../common";
import type {
  RootManager,
  RootManagerInterface,
} from "../../../contracts/messaging/RootManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_delayBlocks",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_merkle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_watcherManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "connector",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "domains",
        type: "uint32[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "connectors",
        type: "address[]",
      },
    ],
    name: "ConnectorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "connector",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "domains",
        type: "uint32[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "connectors",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "ConnectorRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updated",
        type: "uint256",
      },
    ],
    name: "DelayBlocksUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
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
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "receivedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "RootAggregated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "aggregate",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "domains",
        type: "uint32[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "RootPropagated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcherManager",
        type: "address",
      },
    ],
    name: "WatcherManagerChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "MERKLE",
    outputs: [
      {
        internalType: "contract MerkleTreeManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_connector",
        type: "address",
      },
    ],
    name: "addConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_inbound",
        type: "bytes32",
      },
    ],
    name: "aggregate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "connectors",
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
    name: "connectorsHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
    name: "delayBlocks",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "domains",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "domainsHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "getConnectorForDomain",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "getDomainIndex",
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
    name: "getPendingInboundRootsCount",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "isDomainSupported",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingInboundRoots",
    outputs: [
      {
        internalType: "uint128",
        name: "first",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "last",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "_domains",
        type: "uint32[]",
      },
      {
        internalType: "address[]",
        name: "_connectors",
        type: "address[]",
      },
    ],
    name: "propagate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    name: "proposedTimestamp",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "removeConnector",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_delayBlocks",
        type: "uint256",
      },
    ],
    name: "setDelayBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcherManager",
        type: "address",
      },
    ],
    name: "setWatcherManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "_domains",
        type: "uint32[]",
      },
      {
        internalType: "address[]",
        name: "_connectors",
        type: "address[]",
      },
    ],
    name: "validateDomains",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620020ef380380620020ef83398101604081905262000034916200015d565b600380546001600160a81b0319166101006001600160a01b038416021790556200005e33620000db565b6001600160a01b038216620000a85760405162461bcd60e51b815260206004820152600c60248201526b217a65726f206d65726b6c6560a01b604482015260640160405180910390fd5b6001600160a01b0382166080526009839055620000d2600a6200013a602090811b62000eb817901c565b5050506200019e565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60019055565b80516001600160a01b03811681146200015857600080fd5b919050565b6000806000606084860312156200017357600080fd5b83519250620001856020850162000140565b9150620001956040850162000140565b90509250925092565b608051611f2e620001c16000396000818161037501526106610152611f2e6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80637d53430811610104578063b1f8100d116100a2578063d232c22011610071578063d232c220146103df578063d2a3cc71146103f1578063db0f016914610404578063e6f1208d1461041757600080fd5b8063b1f8100d146103a0578063b904670f146103b3578063c5b350df146103c6578063d1851c92146103ce57600080fd5b80638e7d93fa116100de5780638e7d93fa14610355578063909907cb14610368578063a01892a514610370578063ad9c0c2e1461039757600080fd5b80637d534308146102fe5780638456cb591461033c5780638da5cb5b1461034457600080fd5b8063498c2c2e116101715780636a42b8f81161014b5780636a42b8f8146102d1578063715018a6146102da5780637bc24d99146102e25780637d434e91146102eb57600080fd5b8063498c2c2e146102955780635c975abb1461029e57806366cf8fab146102a957600080fd5b80633c4baaf8116101ad5780633c4baaf8146102515780633cf52ffb146102725780633f4ba83a1461027a57806344833ca31461028257600080fd5b806313ede1a1146101d45780631eeaabea1461020457806324ec5d0514610219575b600080fd5b6101e76101e23660046117e6565b61042a565b6040516001600160a01b0390911681526020015b60405180910390f35b6102176102123660046117e6565b610454565b005b610241610227366004611818565b63ffffffff16600090815260086020526040902054151590565b60405190151581526020016101fb565b61026461025f366004611818565b610506565b6040519081526020016101fb565b600254610264565b61021761056a565b61021761029036600461187f565b6105a7565b61026460075481565b60035460ff16610241565b6102bc6102b73660046117e6565b610800565b60405163ffffffff90911681526020016101fb565b62093a80610264565b61021761083a565b61026460055481565b6101e76102f9366004611818565b6108f7565b600a5461031c906001600160801b0380821691600160801b90041682565b604080516001600160801b039384168152929091166020830152016101fb565b61021761092f565b6000546001600160a01b03166101e7565b6102176103633660046118eb565b6109e6565b610264610aa1565b6101e77f000000000000000000000000000000000000000000000000000000000000000081565b61026460095481565b6102176103ae36600461192c565b610ab2565b6102176103c1366004611947565b610b5a565b610217610bd2565b6001546001600160a01b03166101e7565b6000546001600160a01b031615610241565b6102176103ff36600461192c565b610c2d565b61021761041236600461187f565b610cfa565b610217610425366004611818565b610dcb565b6006818154811061043a57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b0316331461047f576040516311a8a1bb60e31b815260040160405180910390fd5b60095481036104c45760405162461bcd60e51b815260206004820152600c60248201526b2164656c6179426c6f636b7360a01b60448201526064015b60405180910390fd5b6009546040805183815260208101929092527fef322fd61cb3d8514326f0b28140a92a29cd10996ad80d0671e43d2483464c1d910160405180910390a1600955565b63ffffffff81166000908152600860205260408120548082036105585760405162461bcd60e51b815260206004820152600a602482015269085cdd5c1c1bdc9d195960b21b60448201526064016104bb565b610563600182611990565b9392505050565b6000546001600160a01b03163314610595576040516311a8a1bb60e31b815260040160405180910390fd5b61059d610ebe565b6105a5610f07565b565b6105af610f59565b828181146105f15760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206c656e6774687360881b60448201526064016104bb565b6105fd85858585610cfa565b6000610615600954600a610f9f90919063ffffffff16565b9050805160000361065c5760405162461bcd60e51b81526020600482015260116024820152706e6f20766572696669656420726f6f747360781b60448201526064016104bb565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166334a55ee6846040518263ffffffff1660e01b81526004016106ab91906119a7565b60408051808303816000875af11580156106c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ed91906119eb565b9150915060005b848163ffffffff1610156107b85786868263ffffffff1681811061071a5761071a611a0f565b905060200201602081019061072f919061192c565b6001600160a01b03166382646a588460405160200161075091815260200190565b6040516020818303038152906040526040518263ffffffff1660e01b815260040161077b9190611a25565b600060405180830381600087803b15801561079557600080fd5b505af11580156107a9573d6000803e3d6000fd5b505050508060010190506106f4565b507f7c96724e9606dbd948afccd2ff6bd0072004e54b8066c07088dca03d84ba5281828989846040516107ee9493929190611abe565b60405180910390a15050505050505050565b6004818154811061081057600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b6000546001600160a01b03163314610865576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361088857604051630e4b303f60e21b815260040160405180910390fd5b62093a806002544261089a9190611990565b116108b8576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b0316156108e2576040516323295ef960e01b815260040160405180910390fd5b6001546105a5906001600160a01b0316611199565b6000600661090483610506565b8154811061091457610914611a0f565b6000918252602090912001546001600160a01b031692915050565b6003546040516384785ecd60e01b81523360048201526101009091046001600160a01b0316906384785ecd90602401602060405180830381865afa15801561097b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099f9190611ae9565b6109d65760405162461bcd60e51b815260206004820152600860248201526710bbb0ba31b432b960c11b60448201526064016104bb565b6109de610f59565b6105a56111f8565b6109ee610f59565b81336109f9826108f7565b6001600160a01b031614610a3c5760405162461bcd60e51b815260206004820152600a60248201526910b1b7b73732b1ba37b960b11b60448201526064016104bb565b6000610a49600a84611235565b6040805163ffffffff87168152602081018690526001600160801b0383168183015290519192507ff5832b5d15f2d906d01b871e48b0d1f27d8f282a7e0771c428b55bfeb409fa05919081900360600190a150505050565b6000610aad600a6112a7565b905090565b6000546001600160a01b03163314610add576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610b0257506001600160a01b03811615155b15610b20576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b03808316911603610b4e57604051634a2fb73f60e11b815260040160405180910390fd5b610b57816112d1565b50565b6000546001600160a01b03163314610b85576040516311a8a1bb60e31b815260040160405180910390fd5b610b8f828261131f565b7f95ef69787290b89c35a092c89db1b283b43724d01263e683cfb560c758cdbe70828260046006604051610bc69493929190611cd1565b60405180910390a15050565b6001546001600160a01b03163314610bfd576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610c0f9190611990565b116108e25760405163d39c12bb60e01b815260040160405180910390fd5b6000546001600160a01b03163314610c58576040516311a8a1bb60e31b815260040160405180910390fd5b6003546001600160a01b03610100909104811690821603610cbb5760405162461bcd60e51b815260206004820152601760248201527f616c72656164792077617463686572206d616e6167657200000000000000000060448201526064016104bb565b6040516001600160a01b03821681527fc16d059e43d7f8e29ccb4e001a2f249d3c59e274925d6a6bc3912943441d9f6c9060200160405180910390a150565b6005548484604051602001610d10929190611d1e565b6040516020818303038152906040528051906020012014610d5e5760405162461bcd60e51b815260206004820152600860248201526721646f6d61696e7360c01b60448201526064016104bb565b6007548282604051602001610d74929190611d32565b6040516020818303038152906040528051906020012014610dc55760405162461bcd60e51b815260206004820152600b60248201526a21636f6e6e6563746f727360a81b60448201526064016104bb565b50505050565b6003546040516384785ecd60e01b81523360048201526101009091046001600160a01b0316906384785ecd90602401602060405180830381865afa158015610e17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3b9190611ae9565b610e725760405162461bcd60e51b815260206004820152600860248201526710bbb0ba31b432b960c11b60448201526064016104bb565b6000610e7d8261146a565b90507f6a1097f391a37dc63e0860e64ec34442971eeed2fda4d1a90141fa9ce25eb7eb82826004600633604051610bc6959493929190611d7e565b60019055565b60035460ff166105a55760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016104bb565b610f0f610ebe565b6003805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60035460ff16156105a55760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104bb565b81546060906001600160801b0380821691600160801b90041681811015610ff65760405162461bcd60e51b815260206004820152600b60248201526a717565756520656d70747960a81b60448201526064016104bb565b60005b826001600160801b0316826001600160801b031610611054576001600160801b0382166000908152600287016020526040902054856110388243611990565b10611047576001915050611054565b5060001990910190610ff9565b8061107357505060408051600081526020810190915291506111939050565b600083611081846001611dea565b61108b9190611e15565b6001600160801b031667ffffffffffffffff8111156110ac576110ac611dd4565b6040519080825280602002602001820160405280156110d5578160200160208202803683370190505b50905060005b836001600160801b0316856001600160801b031611611165576001600160801b0385166000908152600189016020526040902054825183908390811061112357611123611a0f565b6020908102919091018101919091526001600160801b03861660009081526001808b018352604080832083905560028c019093529181205594850194016110db565b5086546fffffffffffffffffffffffffffffffff19166001600160801b039490941693909317865550909150505b92915050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611200610f59565b6003805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f3c3390565b81546000904390849060109061125a90600160801b90046001600160801b0316611e3d565b82546001600160801b038083166101009490940a84810291021990911617909255600090815260018601602090815260408083209690965560029096019095529290932092909255919050565b80546000906001600160801b03600160801b8204811691166112c98282611686565b949350505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b63ffffffff82166000908152600860205260409020541561136b5760405162461bcd60e51b815260206004820152600660248201526565786973747360d01b60448201526064016104bb565b6001600160a01b0381166113ae5760405162461bcd60e51b815260206004820152600a60248201526910b1b7b73732b1ba37b960b11b60448201526064016104bb565b600480546001818101835560088083047f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01805463ffffffff808916600790961687026101000a8681029102199091161790556006805492830190557ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f90910180546001600160a01b0386166001600160a01b031990911617905591546000918252602092909252604090208190556114656116ae565b505050565b60008061147683610506565b905060006006828154811061148d5761148d611a0f565b6000918252602090912001546001600160a01b03169050806114e55760405162461bcd60e51b8152602060048201526011602482015270636f6e6e6563746f72202165786973747360781b60448201526064016104bb565b6004546000906114f790600190611990565b9050808310156115ee576004818154811061151457611514611a0f565b90600052602060002090600891828204019190066004029054906101000a900463ffffffff166004848154811061154d5761154d611a0f565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055506006818154811061159357611593611a0f565b600091825260209091200154600680546001600160a01b0390921691859081106115bf576115bf611a0f565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b60048054806115ff576115ff611e63565b600082815260209020600860001990920191820401805463ffffffff600460078516026101000a02191690559055600680548061163e5761163e611e63565b60008281526020808220830160001990810180546001600160a01b031916905590920190925563ffffffff8716825260089052604081205561167e6116ae565b509392505050565b600081611694846001611dea565b61169e9190611e15565b6001600160801b03169392505050565b6000600480548060200260200160405190810160405280929190818152602001828054801561172857602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116116eb5790505b505050505090506000600680548060200260200160405190810160405280929190818152602001828054801561178757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611769575b505050505090508160405160200161179f9190611e79565b60408051601f198184030181529082905280516020918201206005556117c791839101611eb7565b60408051601f1981840301815291905280516020909101206007555050565b6000602082840312156117f857600080fd5b5035919050565b803563ffffffff8116811461181357600080fd5b919050565b60006020828403121561182a57600080fd5b610563826117ff565b60008083601f84011261184557600080fd5b50813567ffffffffffffffff81111561185d57600080fd5b6020830191508360208260051b850101111561187857600080fd5b9250929050565b6000806000806040858703121561189557600080fd5b843567ffffffffffffffff808211156118ad57600080fd5b6118b988838901611833565b909650945060208701359150808211156118d257600080fd5b506118df87828801611833565b95989497509550505050565b600080604083850312156118fe57600080fd5b611907836117ff565b946020939093013593505050565b80356001600160a01b038116811461181357600080fd5b60006020828403121561193e57600080fd5b61056382611915565b6000806040838503121561195a57600080fd5b611963836117ff565b915061197160208401611915565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b6000828210156119a2576119a261197a565b500390565b6020808252825182820181905260009190848201906040850190845b818110156119df578351835292840192918401916001016119c3565b50909695505050505050565b600080604083850312156119fe57600080fd5b505080516020909101519092909150565b634e487b7160e01b600052603260045260246000fd5b600060208083528351808285015260005b81811015611a5257858101830151858201604001528201611a36565b81811115611a64576000604083870101525b50601f01601f1916929092016040019392505050565b8183526000602080850194508260005b85811015611ab35763ffffffff611aa0836117ff565b1687529582019590820190600101611a8a565b509495945050505050565b848152606060208201526000611ad8606083018587611a7a565b905082604083015295945050505050565b600060208284031215611afb57600080fd5b8151801515811461056357600080fd5b805480835260008281526020808220940193909190825b82600782011015611b9a57815463ffffffff8082168852602082811c821690890152604082811c821690890152606082811c821690890152608082811c82169089015260a082811c82169089015260c082811c9091169088015260e090811c9087015261010090950194600190910190600801611b22565b90549082811015611bb85763ffffffff821686526020909501946001015b82811015611bd857602082901c63ffffffff168652602095909501946001015b82811015611bf75763ffffffff604083901c1686526020909501946001015b82811015611c165763ffffffff606083901c1686526020909501946001015b82811015611c355763ffffffff608083901c1686526020909501946001015b82811015611c545763ffffffff60a083901c1686526020909501946001015b82811015611c735763ffffffff60c083901c1686526020909501946001015b82811015611c895760e082901c86526020860195505b5093949350505050565b6000815480845260208085019450836000528060002060005b83811015611ab35781546001600160a01b031687529582019560019182019101611cac565b63ffffffff851681526001600160a01b0384166020820152608060408201819052600090611d0190830185611b0b565b8281036060840152611d138185611c93565b979650505050505050565b6020815260006112c9602083018486611a7a565b60208082528181018390526000908460408401835b86811015611d73576001600160a01b03611d6084611915565b1682529183019190830190600101611d47565b509695505050505050565b63ffffffff86168152600060018060a01b03808716602084015260a06040840152611dac60a0840187611b0b565b8381036060850152611dbe8187611c93565b9250508084166080840152509695505050505050565b634e487b7160e01b600052604160045260246000fd5b60006001600160801b03808316818516808303821115611e0c57611e0c61197a565b01949350505050565b60006001600160801b0383811690831681811015611e3557611e3561197a565b039392505050565b60006001600160801b03808316818103611e5957611e5961197a565b6001019392505050565b634e487b7160e01b600052603160045260246000fd5b6020808252825182820181905260009190848201906040850190845b818110156119df57835163ffffffff1683529284019291840191600101611e95565b6020808252825182820181905260009190848201906040850190845b818110156119df5783516001600160a01b031683529284019291840191600101611ed356fea264697066735822122031401b603cc87d0a42a047163112981b26f1e682466221113b2b9b90cc3f6f7764736f6c634300080f0033";

type RootManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RootManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RootManager__factory extends ContractFactory {
  constructor(...args: RootManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _delayBlocks: PromiseOrValue<BigNumberish>,
    _merkle: PromiseOrValue<string>,
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RootManager> {
    return super.deploy(
      _delayBlocks,
      _merkle,
      _watcherManager,
      overrides || {}
    ) as Promise<RootManager>;
  }
  override getDeployTransaction(
    _delayBlocks: PromiseOrValue<BigNumberish>,
    _merkle: PromiseOrValue<string>,
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _delayBlocks,
      _merkle,
      _watcherManager,
      overrides || {}
    );
  }
  override attach(address: string): RootManager {
    return super.attach(address) as RootManager;
  }
  override connect(signer: Signer): RootManager__factory {
    return super.connect(signer) as RootManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RootManagerInterface {
    return new utils.Interface(_abi) as RootManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RootManager {
    return new Contract(address, _abi, signerOrProvider) as RootManager;
  }
}
