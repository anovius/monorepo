/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITokenExchange,
  ITokenExchangeInterface,
} from "../../../../../contracts/core/connext/interfaces/ITokenExchange";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expectedOut",
        type: "uint256",
      },
    ],
    name: "getInGivenExpectedOut",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "swapExactIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class ITokenExchange__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenExchangeInterface {
    return new utils.Interface(_abi) as ITokenExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenExchange {
    return new Contract(address, _abi, signerOrProvider) as ITokenExchange;
  }
}
