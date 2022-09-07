/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ArbitrumL2AMB,
  ArbitrumL2AMBInterface,
} from "../../../../../contracts/messaging/connectors/ArbitrumConnector.sol/ArbitrumL2AMB";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "destAddr",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataForL1",
        type: "bytes",
      },
    ],
    name: "sendTxToL1",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class ArbitrumL2AMB__factory {
  static readonly abi = _abi;
  static createInterface(): ArbitrumL2AMBInterface {
    return new utils.Interface(_abi) as ArbitrumL2AMBInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbitrumL2AMB {
    return new Contract(address, _abi, signerOrProvider) as ArbitrumL2AMB;
  }
}
