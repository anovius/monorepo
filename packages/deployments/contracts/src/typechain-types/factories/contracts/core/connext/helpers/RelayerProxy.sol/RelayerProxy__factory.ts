/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  RelayerProxy,
  RelayerProxyInterface,
} from "../../../../../../contracts/core/connext/helpers/RelayerProxy.sol/RelayerProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spokeConnector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gelatoRelayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_keep3r",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
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
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "RelayerProxy__addRelayer_relayerAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "RelayerProxy__definedAddress_empty",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__isWorkableBySender_notWorkable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__onlyRelayer_notRelayer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "RelayerProxy__removeRelayer_relayerNotAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__validateAndPayWithCredits_notKeep3r",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "ConnextChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "FeeCollectorChanged",
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
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "FundsDeducted",
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
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "FundsReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "GelatoRelayerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "Keep3rChanged",
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
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "SpokeConnectorChanged",
    type: "event",
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
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "addRelayer",
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
    name: "allowedRelayer",
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
    name: "connext",
    outputs: [
      {
        internalType: "contract IConnext",
        name: "",
        type: "address",
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
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint32",
                name: "originDomain",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "destinationDomain",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "canonicalDomain",
                type: "uint32",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "address",
                name: "delegate",
                type: "address",
              },
              {
                internalType: "bool",
                name: "receiveLocal",
                type: "bool",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "slippage",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "originSender",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "bridgedAmt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "normalizedIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
              },
            ],
            internalType: "struct TransferInfo",
            name: "params",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "routers",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "routerSignatures",
            type: "bytes[]",
          },
          {
            internalType: "address",
            name: "sequencer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "sequencerSignature",
            type: "bytes",
          },
        ],
        internalType: "struct ExecuteArgs",
        name: "_args",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeCollector",
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
    name: "gelatoRelayer",
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
    name: "keep3r",
    outputs: [
      {
        internalType: "contract IKeep3rV2",
        name: "",
        type: "address",
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
        components: [
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bytes32[32]",
            name: "path",
            type: "bytes32[32]",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        internalType: "struct ISpokeConnector.Proof[]",
        name: "_proofs",
        type: "tuple[]",
      },
      {
        internalType: "bytes32",
        name: "_aggregateRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_aggregatePath",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_aggregateIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "removeRelayer",
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
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_messageFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerFee",
        type: "uint256",
      },
    ],
    name: "send",
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
        name: "_feeCollector",
        type: "address",
      },
    ],
    name: "setFeeCollector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gelatoRelayer",
        type: "address",
      },
    ],
    name: "setGelatoRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_keep3r",
        type: "address",
      },
    ],
    name: "setKeep3r",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spokeConnector",
        type: "address",
      },
    ],
    name: "setSpokeConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spokeConnector",
    outputs: [
      {
        internalType: "contract ISpokeConnector",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001dac38038062001dac8339810160408190526200003491620003c4565b6001600355620000443362000091565b6200004f85620000f6565b6200005a846200015f565b6200006583620001c8565b620000708262000231565b6200007b816200029a565b620000868362000303565b505050505062000434565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600754604080516001600160a01b03808516825290921660208301527f87539ad41983c0ecff8f321db8edf4dd9e830593562770bdacdda085b83e3bb2910160405180910390a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b600854604080516001600160a01b03808516825290921660208301527f66948d99d8431a8416af2202bc301823b7cdd87beb9bddaa274aedac0611a5fd910160405180910390a1600880546001600160a01b0319166001600160a01b0392909216919091179055565b600454604080516001600160a01b03808516825290921660208301527f5db4a067a1f787c3269642464a2a1560868b50b0873e7dec83939ae2359f6128910160405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b600554604080516001600160a01b03808516825290921660208301527f649c5e3d0ed183894196148e193af316452b0037e77d2ff0fef23b7dc722bed0910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b600654604080516001600160a01b03808516825290921660208301527f711d2a81db157c0acede64f080708460163dfaddcd4266c2c609efb458d3e4c0910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811660009081526009602052604090205460ff16156200034d57604051633d85ded560e11b81526001600160a01b038216600482015260240160405180910390fd5b6001600160a01b038116600081815260096020908152604091829020805460ff1916600117905590519182527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c5910160405180910390a150565b80516001600160a01b0381168114620003bf57600080fd5b919050565b600080600080600060a08688031215620003dd57600080fd5b620003e886620003a7565b9450620003f860208701620003a7565b93506200040860408701620003a7565b92506200041860608701620003a7565b91506200042860808701620003a7565b90509295509295909350565b61196880620004446000396000f3fe60806040526004361061016a5760003560e01c80638efed127116100d1578063c5b350df1161008a578063d9ef0bee11610064578063d9ef0bee1461045c578063dd39f00d1461047c578063de4b05481461049c578063e79457f1146104bc57600080fd5b8063c5b350df1461040a578063d1851c921461041f578063d232c2201461043d57600080fd5b80638efed1271461034a5780639cadce001461036a5780639f645a031461038a578063a42dce80146103aa578063b1f8100d146103ca578063c415b95c146103ea57600080fd5b806360f0a5ac1161012357806360f0a5ac14610289578063634c7bb5146102a95780636a42b8f8146102e15780636eba787f146102f7578063715018a6146103175780638da5cb5b1461032c57600080fd5b80632f55b98d146101ae5780633ccfd60b146101f35780633cf52ffb1461020a5780634cc18e57146102295780634d6f2013146102495780635e21966a1461026957600080fd5b366101a957604080513481524760208201527f063d07ee72a7483b8e07ca09054bb686775c5c030f945dde3823a5257a0a93eb910160405180910390a1005b600080fd5b3480156101ba57600080fd5b506101de6101c9366004611267565b60096020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156101ff57600080fd5b506102086104dc565b005b34801561021657600080fd5b506002545b6040519081526020016101ea565b34801561023557600080fd5b50610208610244366004611267565b61055f565b34801561025557600080fd5b50610208610264366004611267565b6105cf565b34801561027557600080fd5b50610208610284366004611267565b610636565b34801561029557600080fd5b506102086102a4366004611267565b61069d565b3480156102b557600080fd5b506006546102c9906001600160a01b031681565b6040516001600160a01b0390911681526020016101ea565b3480156102ed57600080fd5b5062093a8061021b565b34801561030357600080fd5b506004546102c9906001600160a01b031681565b34801561032357600080fd5b50610208610704565b34801561033857600080fd5b506000546001600160a01b03166102c9565b34801561035657600080fd5b5061021b610365366004611289565b6107b6565b34801561037657600080fd5b506008546102c9906001600160a01b031681565b34801561039657600080fd5b506102086103a5366004611267565b61087e565b3480156103b657600080fd5b506102086103c5366004611267565b6108e5565b3480156103d657600080fd5b506102086103e5366004611267565b61094c565b3480156103f657600080fd5b506005546102c9906001600160a01b031681565b34801561041657600080fd5b506102086109ed565b34801561042b57600080fd5b506001546001600160a01b03166102c9565b34801561044957600080fd5b506000546001600160a01b0316156101de565b34801561046857600080fd5b506102086104773660046112e9565b610a5d565b34801561048857600080fd5b50610208610497366004611267565b610b52565b3480156104a857600080fd5b506007546102c9906001600160a01b031681565b3480156104c857600080fd5b506102086104d73660046113bf565b610bb9565b6000546001600160a01b03163314610507576040516311a8a1bb60e31b815260040160405180910390fd5b61050f610c78565b4761051a3382610cd1565b604080518281524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b18910160405180910390a15061055d6001600355565b565b6000546001600160a01b0316331461058a576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166105c257604051633a930fdf60e01b81526001600160a01b03821660048201526024015b60405180910390fd5b6105cb82610dea565b5050565b6000546001600160a01b031633146105fa576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661062d57604051633a930fdf60e01b81526001600160a01b03821660048201526024016105b9565b6105cb82610e53565b6000546001600160a01b03163314610661576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661069457604051633a930fdf60e01b81526001600160a01b03821660048201526024016105b9565b6105cb82610ebc565b6000546001600160a01b031633146106c8576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166106fb57604051633a930fdf60e01b81526001600160a01b03821660048201526024016105b9565b6105cb82610f25565b6000546001600160a01b0316331461072f576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426107419190611461565b1161075f576040516324e0285f60e21b815260040160405180910390fd5b60025460000361078257604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b0316156107ac576040516323295ef960e01b815260040160405180910390fd5b61055d6000610fc1565b3360009081526009602052604081205460ff166107e857604051630981f7d560e21b81523360048201526024016105b9565b6107f0610c78565b6007546040516331f1f3e960e11b81526001600160a01b03909116906363e3e7d29061082090869060040161160c565b6020604051808303816000875af115801561083f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086391906117ff565b905061086e82611026565b6108786001600355565b92915050565b6000546001600160a01b031633146108a9576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166108dc57604051633a930fdf60e01b81526001600160a01b03821660048201526024016105b9565b6105cb82611092565b6000546001600160a01b03163314610910576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661094357604051633a930fdf60e01b81526001600160a01b03821660048201526024016105b9565b6105cb826110fb565b6000546001600160a01b03163314610977576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610995575060025415155b156109b3576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036109e157604051634a2fb73f60e11b815260040160405180910390fd5b6109ea81611164565b50565b6001546001600160a01b03163314610a18576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610a2a9190611461565b11610a48576040516324e0285f60e21b815260040160405180910390fd5b60015461055d906001600160a01b0316610fc1565b3360009081526009602052604090205460ff16610a8f57604051630981f7d560e21b81523360048201526024016105b9565b610a97610c78565b600854604051630aec6b9f60e21b81526001600160a01b0390911690632bb1ae7c908490610ac9908790600401611818565b6000604051808303818588803b158015610ae257600080fd5b505af1158015610af6573d6000803e3d6000fd5b5050604080518681524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b189450019150610b329050565b60405180910390a1610b4381611026565b610b4d6001600355565b505050565b6000546001600160a01b03163314610b7d576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b038116610bb057604051633a930fdf60e01b81526001600160a01b03821660048201526024016105b9565b6105cb826111b2565b3360009081526009602052604090205460ff16610beb57604051630981f7d560e21b81523360048201526024016105b9565b610bf3610c78565b60085460405163508a109b60e01b81526001600160a01b039091169063508a109b90610c2b9089908990899089908990600401611870565b600060405180830381600087803b158015610c4557600080fd5b505af1158015610c59573d6000803e3d6000fd5b50505050610c6681611026565b610c706001600355565b505050505050565b600260035403610cca5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105b9565b6002600355565b80471015610d215760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016105b9565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610d6e576040519150601f19603f3d011682016040523d82523d6000602084013e610d73565b606091505b5050905080610b4d5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016105b9565b600654604080516001600160a01b03808516825290921660208301527f711d2a81db157c0acede64f080708460163dfaddcd4266c2c609efb458d3e4c0910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b600754604080516001600160a01b03808516825290921660208301527f87539ad41983c0ecff8f321db8edf4dd9e830593562770bdacdda085b83e3bb2910160405180910390a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b600454604080516001600160a01b03808516825290921660208301527f5db4a067a1f787c3269642464a2a1560868b50b0873e7dec83939ae2359f6128910160405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811660009081526009602052604090205460ff16610f69576040516309fbf0f560e31b81526001600160a01b03821660048201526024016105b9565b6001600160a01b038116600081815260096020908152604091829020805460ff1916905590519182527f10e1f7ce9fd7d1b90a66d13a2ab3cb8dd7f29f3f8d520b143b063ccfbab6906b91015b60405180910390a150565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b6004546001600160a01b031633036110535760055461104e906001600160a01b031682610cd1565b61105d565b61105d3382610cd1565b604080518281524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b189101610fb6565b600854604080516001600160a01b03808516825290921660208301527f66948d99d8431a8416af2202bc301823b7cdd87beb9bddaa274aedac0611a5fd910160405180910390a1600880546001600160a01b0319166001600160a01b0392909216919091179055565b600554604080516001600160a01b03808516825290921660208301527f649c5e3d0ed183894196148e193af316452b0037e77d2ff0fef23b7dc722bed0910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6001600160a01b03811660009081526009602052604090205460ff16156111f757604051633d85ded560e11b81526001600160a01b03821660048201526024016105b9565b6001600160a01b038116600081815260096020908152604091829020805460ff1916600117905590519182527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c59101610fb6565b80356001600160a01b038116811461126257600080fd5b919050565b60006020828403121561127957600080fd5b6112828261124b565b9392505050565b6000806040838503121561129c57600080fd5b823567ffffffffffffffff8111156112b357600080fd5b830160a081860312156112c557600080fd5b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156112fe57600080fd5b833567ffffffffffffffff8082111561131657600080fd5b818601915086601f83011261132a57600080fd5b81358181111561133c5761133c6112d3565b604051601f8201601f19908116603f01168101908382118183101715611364576113646112d3565b8160405282815289602084870101111561137d57600080fd5b82602086016020830137600060208483010152809750505050505060208401359150604084013590509250925092565b80610400810183101561087857600080fd5b60008060008060008061048087890312156113d957600080fd5b863567ffffffffffffffff808211156113f157600080fd5b818901915089601f83011261140557600080fd5b81358181111561141457600080fd5b8a60208260051b850101111561142957600080fd5b60209283019850965050870135935061144588604089016113ad565b9250610440870135915061046087013590509295509295509295565b8181038181111561087857634e487b7160e01b600052601160045260246000fd5b803563ffffffff8116811461126257600080fd5b8035801515811461126257600080fd5b6000808335601e198436030181126114bd57600080fd5b830160208101925035905067ffffffffffffffff8111156114dd57600080fd5b8036038213156114ec57600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000808335601e1984360301811261153357600080fd5b830160208101925035905067ffffffffffffffff81111561155357600080fd5b8060051b36038213156114ec57600080fd5b8183526000602080850194508260005b858110156115a1576001600160a01b0361158e8361124b565b1687529582019590820190600101611575565b509495945050505050565b60008383855260208086019550808560051b8301018460005b878110156115ff57848303601f190189526115e082886114a6565b6115eb8582846114f3565b9a86019a94505050908301906001016115c5565b5090979650505050505050565b602081526000823561019e1984360301811261162757600080fd5b60a06020840152830161164a60c0840161164083611482565b63ffffffff169052565b61165660208201611482565b63ffffffff1660e084015261166d60408201611482565b6101006116818186018363ffffffff169052565b61168d6060840161124b565b91506101206116a6818701846001600160a01b03169052565b6116b26080850161124b565b92506101406116cb818801856001600160a01b03169052565b6116d760a08601611496565b93506101606116e98189018615159052565b6116f660c08701876114a6565b95506101a061018081818c01526117126102608c0189856114f3565b975060e0890135828c0152611728878a0161124b565b6001600160a01b03166101c08c0152948801356101e08b01525050908501356102008801528401356102208701528301356102408601525061176d602086018661151c565b9250601f1980868403016040870152611787838584611565565b9350611796604088018861151c565b93509150808685030160608701526117af8484846115ac565b93506117bd6060880161124b565b6001600160a01b038116608088015292506117db60808801886114a6565b93509150808685030160a0870152506117f58383836114f3565b9695505050505050565b60006020828403121561181157600080fd5b5051919050565b600060208083528351808285015260005b8181101561184557858101830151858201604001528201611829565b506000604082860101526040601f19601f8301168501019250505092915050565b6104008183375050565b6104608082528101859052600061048080830190600588901b8401018883805b8a8110156119065786840361047f190185528235368d900361043e190181126118b7578283fd5b8c016104406118c682806114a6565b8288526118d683890182846114f3565b92505050602061040081840182890137610420928301359690920195909552948501949290920191600101611890565b50505080925050508460208301526119216040830185611866565b82610440830152969550505050505056fea264697066735822122037a24120e0ade44f5a4b75023f92a9bd950b4a2992989f279431dee74ac2089d64736f6c63430008110033";

type RelayerProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerProxy__factory extends ContractFactory {
  constructor(...args: RelayerProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _connext: PromiseOrValue<string>,
    _spokeConnector: PromiseOrValue<string>,
    _gelatoRelayer: PromiseOrValue<string>,
    _feeCollector: PromiseOrValue<string>,
    _keep3r: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerProxy> {
    return super.deploy(
      _connext,
      _spokeConnector,
      _gelatoRelayer,
      _feeCollector,
      _keep3r,
      overrides || {}
    ) as Promise<RelayerProxy>;
  }
  override getDeployTransaction(
    _connext: PromiseOrValue<string>,
    _spokeConnector: PromiseOrValue<string>,
    _gelatoRelayer: PromiseOrValue<string>,
    _feeCollector: PromiseOrValue<string>,
    _keep3r: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _connext,
      _spokeConnector,
      _gelatoRelayer,
      _feeCollector,
      _keep3r,
      overrides || {}
    );
  }
  override attach(address: string): RelayerProxy {
    return super.attach(address) as RelayerProxy;
  }
  override connect(signer: Signer): RelayerProxy__factory {
    return super.connect(signer) as RelayerProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerProxyInterface {
    return new utils.Interface(_abi) as RelayerProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayerProxy {
    return new Contract(address, _abi, signerOrProvider) as RelayerProxy;
  }
}
