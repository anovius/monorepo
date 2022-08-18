/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRootManager,
  IRootManagerInterface,
} from "../../../../../contracts/core/messaging/interfaces/IRootManager";

const _abi = [
  {
    inputs: [],
    name: "propagate",
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
        name: "_outbound",
        type: "bytes32",
      },
    ],
    name: "setOutboundRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRootManager__factory {
  static readonly abi = _abi;
  static createInterface(): IRootManagerInterface {
    return new utils.Interface(_abi) as IRootManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRootManager {
    return new Contract(address, _abi, signerOrProvider) as IRootManager;
  }
}
