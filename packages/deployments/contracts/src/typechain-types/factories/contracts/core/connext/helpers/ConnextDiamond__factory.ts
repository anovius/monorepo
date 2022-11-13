/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, PayableOverrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConnextDiamond,
  ConnextDiamondInterface,
  IDiamondCut,
} from "../../../../../contracts/core/connext/helpers/ConnextDiamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "initContract",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "initData",
            type: "bytes",
          },
        ],
        internalType: "struct ConnextDiamond.Initialization[]",
        name: "_initializations",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162002ba238038062002ba2833981016040819052620000269162001422565b6001600160a01b038316156200004c576200004c83620000f760201b620000b61760201c565b62000074826000604051806020016040528060008152506200018560201b620001431760201c565b60005b8151811015620000ed57620000d88282815181106200009a576200009a620015f6565b602002602001015160000151838381518110620000bb57620000bb620015f6565b602002602001015160200151620004c260201b6200042f1760201c565b80620000e48162001622565b91505062000077565b5050505062001826565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205460405160008051602062002af6833981519152916001600160a01b03848116929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360040180546001600160a01b0319166001600160a01b0392909216919091179055565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e5460008051602062002af683398151915290156200026a576000816005016000868686604051602001620001dd9392919062001682565b60405160208183030381529060405280519060200120815260200190815260200160002054905080600014158015620002165750428111155b620002685760405162461bcd60e51b815260206004820152601d60248201527f4c69624469616d6f6e643a2064656c6179206e6f7420656c617073656400000060448201526064015b60405180910390fd5b505b60005b8451811015620004725760008582815181106200028e576200028e620015f6565b602002602001015160200151905060006002811115620002b257620002b26200163e565b816002811115620002c757620002c76200163e565b0362000325576200031f868381518110620002e657620002e6620015f6565b602002602001015160000151878481518110620003075762000307620015f6565b602002602001015160400151620006e160201b60201c565b6200045c565b60018160028111156200033c576200033c6200163e565b0362000394576200031f8683815181106200035b576200035b620015f6565b6020026020010151600001518784815181106200037c576200037c620015f6565b6020026020010151604001516200096e60201b60201c565b6002816002811115620003ab57620003ab6200163e565b0362000403576200031f868381518110620003ca57620003ca620015f6565b602002602001015160000151878481518110620003eb57620003eb620015f6565b60200260200101516040015162000c0660201b60201c565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b60648201526084016200025f565b5080620004698162001622565b9150506200026d565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673848484604051620004a89392919062001682565b60405180910390a1620004bc8383620004c2565b50505050565b6001600160a01b0382166200054c57805115620005485760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d7074790000000060648201526084016200025f565b5050565b8051600003620005c55760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f74206164647265737328302900000060648201526084016200025f565b6001600160a01b0382163014620005fb57620005fb8260405180606001604052806028815260200162002b166028913962000d66565b600080836001600160a01b03168360405162000618919062001789565b600060405180830381855af49150503d806000811462000655576040519150601f19603f3d011682016040523d82523d6000602084013e6200065a565b606091505b509150915081620004bc5780511562000689578060405162461bcd60e51b81526004016200025f9190620017a7565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b60648201526084016200025f565b8051600003620007375760405162461bcd60e51b815260206004820152602b602482015260008051602062002b8283398151915260448201526a1858d95d081d1bc818dd5d60aa1b60648201526084016200025f565b60008051602062002af68339815191526001600160a01b038316620007a35760405162461bcd60e51b815260206004820152602c602482015260008051602062002b3e83398151915260448201526b65206164647265737328302960a01b60648201526084016200025f565b6001600160a01b0383166000908152600182016020526040812054906001600160601b0382169003620007dc57620007dc828562000d8a565b60005b835181101562000967576000848281518110620008005762000800620015f6565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b03168015620008a85760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c726561647920657869737473000000000000000000000060648201526084016200025f565b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b031916179055836200094c81620017c3565b945050505080806200095e9062001622565b915050620007df565b5050505050565b8051600003620009c45760405162461bcd60e51b815260206004820152602b602482015260008051602062002b8283398151915260448201526a1858d95d081d1bc818dd5d60aa1b60648201526084016200025f565b60008051602062002af68339815191526001600160a01b03831662000a305760405162461bcd60e51b815260206004820152602c602482015260008051602062002b3e83398151915260448201526b65206164647265737328302960a01b60648201526084016200025f565b6001600160a01b0383166000908152600182016020526040812054906001600160601b038216900362000a695762000a69828562000d8a565b60005b83518110156200096757600084828151811062000a8d5762000a8d620015f6565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b03908116908716810362000b3a5760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e000000000000000060648201526084016200025f565b62000b4785828462000df7565b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b0319161790558362000beb81620017c3565b9450505050808062000bfd9062001622565b91505062000a6c565b805160000362000c5c5760405162461bcd60e51b815260206004820152602b602482015260008051602062002b8283398151915260448201526a1858d95d081d1bc818dd5d60aa1b60648201526084016200025f565b60008051602062002af68339815191526001600160a01b0383161562000ceb5760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d75737420626520616464726573732830290000000000000000000060648201526084016200025f565b60005b8251811015620004bc57600083828151811062000d0f5762000d0f620015f6565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b031662000d4e84828462000df7565b5050808062000d5d9062001622565b91505062000cee565b813b8181620004bc5760405162461bcd60e51b81526004016200025f9190620017a7565b62000daf8160405180606001604052806024815260200162002b5e6024913962000d66565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160a01b03821662000e755760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e277420657869737400000000000000000060648201526084016200025f565b306001600160a01b0383160362000ee65760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b60648201526084016200025f565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b0316929162000f3791620017f4565b905080821462001030576001600160a01b0384166000908152600186016020526040812080548390811062000f705762000f70620015f6565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b92508291908590811062000fc45762000fc4620015f6565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b038416600090815260018601602052604090208054806200105c576200105c62001810565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b0319851682528690526040812081905581900362000967576002850154600090620010c290600190620017f4565b6001600160a01b038616600090815260018089016020526040909120015490915080821462001178576000876002018381548110620011055762001105620015f6565b6000918252602090912001546002890180546001600160a01b039092169250829184908110620011395762001139620015f6565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b866002018054806200118e576200118e62001810565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b80516001600160a01b0381168114620011ef57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200122f576200122f620011f4565b60405290565b604051606081016001600160401b03811182821017156200122f576200122f620011f4565b604051601f8201601f191681016001600160401b0381118282101715620012855762001285620011f4565b604052919050565b60006001600160401b03821115620012a957620012a9620011f4565b5060051b60200190565b60005b83811015620012d0578181015183820152602001620012b6565b50506000910152565b6000601f8381840112620012ec57600080fd5b8251602062001305620012ff836200128d565b6200125a565b82815260059290921b850181019181810190878411156200132557600080fd5b8287015b84811015620014165780516001600160401b03808211156200134b5760008081fd5b908901906040601f19838d038101821315620013675760008081fd5b620013716200120a565b6200137e898601620011d7565b81528285015184811115620013935760008081fd5b8086019550508d603f860112620013aa5760008081fd5b8885015184811115620013c157620013c1620011f4565b620013d28a848e840116016200125a565b94508085528e84828801011115620013ec57600092508283fd5b620013fd818b8701868901620012b3565b5080890193909352505084525091830191830162001329565b50979650505050505050565b6000806000606084860312156200143857600080fd5b6200144384620011d7565b60208501519093506001600160401b03808211156200146157600080fd5b818601915086601f8301126200147657600080fd5b815162001487620012ff826200128d565b8082825260208201915060208360051b860101925089831115620014aa57600080fd5b602085015b83811015620015c257805185811115620014c857600080fd5b86016060818d03601f19011215620014df57600080fd5b620014e962001235565b620014f760208301620011d7565b81526040820151600381106200150c57600080fd5b60208201526060820151878111156200152457600080fd5b8083019250508c603f8301126200153a57600080fd5b60208201516200154e620012ff826200128d565b81815260059190911b83016040019060208101908f8311156200157057600080fd5b6040850194505b82851015620015ab5784516001600160e01b0319811681146200159957600080fd5b82526020948501949091019062001577565b6040840152505084525060209283019201620014af565b5060408901519096509350505080821115620015dd57600080fd5b50620015ec86828701620012d9565b9150509250925092565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016200163757620016376200160c565b5060010190565b634e487b7160e01b600052602160045260246000fd5b600081518084526200166e816020860160208601620012b3565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b848110156200175757898403607f19018652815180516001600160a01b03168552838101518986019060038110620016f357634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015620017415783516001600160e01b031916825292860192600192909201919086019062001715565b50978501979550505090820190600101620016ab565b50506001600160a01b038a169088015286810360408801526200177b818962001654565b9a9950505050505050505050565b600082516200179d818460208701620012b3565b9190910192915050565b602081526000620017bc602083018462001654565b9392505050565b60006001600160601b038281166002600160601b03198101620017ea57620017ea6200160c565b6001019392505050565b818103818111156200180a576200180a6200160c565b92915050565b634e487b7160e01b600052603160045260246000fd5b6112c080620018366000396000f3fe60806040523661000b57005b600080356001600160e01b031916815260008051602061121f833981519152602081905260409091205481906001600160a01b0316806100925760405162461bcd60e51b815260206004820181905260248201527f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f7420657869737460448201526064015b60405180910390fd5b3660008037600080366000845af43d6000803e8080156100b1573d6000f35b3d6000fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205460405160008051602061121f833981519152916001600160a01b03848116929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360040180546001600160a01b0319166001600160a01b0392909216919091179055565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e5460008051602061121f833981519152901561021d57600081600501600086868660405160200161019793929190610fb7565b604051602081830303815290604052805190602001208152602001908152602001600020549050806000141580156101cf5750428111155b61021b5760405162461bcd60e51b815260206004820152601d60248201527f4c69624469616d6f6e643a2064656c6179206e6f7420656c61707365640000006044820152606401610089565b505b60005b84518110156103e357600085828151811061023d5761023d6110b7565b60200260200101516020015190506000600281111561025e5761025e610f51565b81600281111561027057610270610f51565b036102be576102b986838151811061028a5761028a6110b7565b6020026020010151600001518784815181106102a8576102a86110b7565b60200260200101516040015161063c565b6103d0565b60018160028111156102d2576102d2610f51565b0361031b576102b98683815181106102ec576102ec6110b7565b60200260200101516000015187848151811061030a5761030a6110b7565b6020026020010151604001516107bb565b600281600281111561032f5761032f610f51565b03610378576102b9868381518110610349576103496110b7565b602002602001015160000151878481518110610367576103676110b7565b60200260200101516040015161094b565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b6064820152608401610089565b50806103db816110e3565b915050610220565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67384848460405161041793929190610fb7565b60405180910390a1610429838361042f565b50505050565b6001600160a01b0382166104b6578051156104b25760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d707479000000006064820152608401610089565b5050565b805160000361052d5760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f7420616464726573732830290000006064820152608401610089565b6001600160a01b038216301461055f5761055f8260405180606001604052806028815260200161123f60289139610a63565b600080836001600160a01b03168360405161057a91906110fc565b600060405180830381855af49150503d80600081146105b5576040519150601f19603f3d011682016040523d82523d6000602084013e6105ba565b606091505b509150915081610429578051156105e5578060405162461bcd60e51b81526004016100899190611118565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b6064820152608401610089565b805160000361065d5760405162461bcd60e51b815260040161008990611132565b60008051602061121f8339815191526001600160a01b0383166106925760405162461bcd60e51b81526004016100899061117d565b6001600160a01b0383166000908152600182016020526040812054906001600160601b03821690036106c8576106c88285610a84565b60005b83518110156107b45760008482815181106106e8576106e86110b7565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b031680156107865760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6044820152746e207468617420616c72656164792065786973747360581b6064820152608401610089565b6107928583868a610aee565b8361079c816111c9565b945050505080806107ac906110e3565b9150506106cb565b5050505050565b80516000036107dc5760405162461bcd60e51b815260040161008990611132565b60008051602061121f8339815191526001600160a01b0383166108115760405162461bcd60e51b81526004016100899061117d565b6001600160a01b0383166000908152600182016020526040812054906001600160601b0382169003610847576108478285610a84565b60005b83518110156107b4576000848281518110610867576108676110b7565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b0390811690871681036109125760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e00000000000000006064820152608401610089565b61091d858284610b8e565b6109298583868a610aee565b83610933816111c9565b94505050508080610943906110e3565b91505061084a565b805160000361096c5760405162461bcd60e51b815260040161008990611132565b60008051602061121f8339815191526001600160a01b038316156109f15760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604482015275657373206d757374206265206164647265737328302960501b6064820152608401610089565b60005b8251811015610429576000838281518110610a1157610a116110b7565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b0316610a4e848284610b8e565b50508080610a5b906110e3565b9150506109f4565b813b81816104295760405162461bcd60e51b81526004016100899190611118565b610aa68160405180606001604052806024815260200161126760249139610a63565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160e01b0319831660008181526020868152604080832080546001600160601b03909716600160a01b026001600160a01b0397881617815594909516808352600180890183529583208054968701815583528183206008870401805460e09890981c60046007909816979097026101000a96870263ffffffff9097021990971695909517909555529290915281546001600160a01b031916179055565b6001600160a01b038216610c0a5760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e27742065786973740000000000000000006064820152608401610089565b306001600160a01b03831603610c795760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b6064820152608401610089565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b03169291610cc8916111ef565b9050808214610dba576001600160a01b03841660009081526001860160205260408120805483908110610cfd57610cfd6110b7565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610d4e57610d4e6110b7565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b03841660009081526001860160205260409020805480610de357610de3611208565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b031985168252869052604081208190558190036107b4576002850154600090610e46906001906111ef565b6001600160a01b0386166000908152600180890160205260409091200154909150808214610ef5576000876002018381548110610e8557610e856110b7565b6000918252602090912001546002890180546001600160a01b039092169250829184908110610eb657610eb66110b7565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b86600201805480610f0857610f08611208565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b634e487b7160e01b600052602160045260246000fd5b60005b83811015610f82578181015183820152602001610f6a565b50506000910152565b60008151808452610fa3816020860160208601610f67565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b8481101561108757898403607f19018652815180516001600160a01b0316855283810151898601906003811061102657634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b808310156110725783516001600160e01b0319168252928601926001929092019190860190611048565b50978501979550505090820190600101610fe0565b50506001600160a01b038a169088015286810360408801526110a98189610f8b565b9a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016110f5576110f56110cd565b5060010190565b6000825161110e818460208701610f67565b9190910192915050565b60208152600061112b6020830184610f8b565b9392505050565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b60006001600160601b038083168181036111e5576111e56110cd565b6001019392505050565b81810381811115611202576112026110cd565b92915050565b634e487b7160e01b600052603160045260246000fdfec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a2646970667358221220810a2d406a4fea859a3024181f8752e00d4ac395e8877fec2f8ee1eb7f1859f564736f6c63430008110033c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204164642066616365742063616e277420624c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f64654c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e2066";

type ConnextDiamondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ConnextDiamondConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class ConnextDiamond__factory extends ContractFactory {
  constructor(...args: ConnextDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _contractOwner: PromiseOrValue<string>,
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _initializations: ConnextDiamond.InitializationStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ConnextDiamond> {
    return super.deploy(_contractOwner, _diamondCut, _initializations, overrides || {}) as Promise<ConnextDiamond>;
  }
  override getDeployTransaction(
    _contractOwner: PromiseOrValue<string>,
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _initializations: ConnextDiamond.InitializationStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_contractOwner, _diamondCut, _initializations, overrides || {});
  }
  override attach(address: string): ConnextDiamond {
    return super.attach(address) as ConnextDiamond;
  }
  override connect(signer: Signer): ConnextDiamond__factory {
    return super.connect(signer) as ConnextDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnextDiamondInterface {
    return new utils.Interface(_abi) as ConnextDiamondInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ConnextDiamond {
    return new Contract(address, _abi, signerOrProvider) as ConnextDiamond;
  }
}
