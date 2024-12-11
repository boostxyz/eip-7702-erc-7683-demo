/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeployOriginSettler,
  DeployOriginSettlerInterface,
} from "../../DeployOriginSettler.s.sol/DeployOriginSettler";

const _abi = [
  {
    type: "function",
    name: "IS_SCRIPT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "IS_TEST",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeArtifacts",
    inputs: [],
    outputs: [
      {
        name: "excludedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeContracts",
    inputs: [],
    outputs: [
      {
        name: "excludedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeSelectors",
    inputs: [],
    outputs: [
      {
        name: "excludedSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeSenders",
    inputs: [],
    outputs: [
      {
        name: "excludedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "failed",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "run",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "targetArtifactSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifactSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzArtifactSelector[]",
        components: [
          {
            name: "artifact",
            type: "string",
            internalType: "string",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetArtifacts",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetContracts",
    inputs: [],
    outputs: [
      {
        name: "targetedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetInterfaces",
    inputs: [],
    outputs: [
      {
        name: "targetedInterfaces_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzInterface[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "artifacts",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSenders",
    inputs: [],
    outputs: [
      {
        name: "targetedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "log",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_address",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes32",
    inputs: [
      {
        name: "",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_int",
    inputs: [
      {
        name: "",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_address",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes32",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_string",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_string",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_uint",
    inputs: [
      {
        name: "",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "logs",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60808060405234603157600160ff19600c541617600c5561010161ffff19601f541617601f55612f1a90816100368239f35b5f80fdfe6080604081815260049182361015610015575f80fd5b5f925f3560e01c9182631ed7831c14610aaa575081632ade3880146108e35781633e5e3c23146108625781633f7286f4146107e157816366d9a9a0146106c357816385226c8114610639578163916a17c614610592578163b0464fdc146104eb578163b5508aa914610461578163ba414fa61461043c578163c04062261461019c57508063e20c9f7114610108578063f8ccbf47146100e55763fa7626d4146100bc575f80fd5b346100e157816003193601126100e15760209060ff601f5460081c1690519015158152f35b5080fd5b50346100e157816003193601126100e15760209060ff601f541690519015158152f35b5090346101995780600319360112610199578151918291601554808552602080950194601583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec47592905b82821061017957610175868661016b828b0383610cdf565b5191829182610b2a565b0390f35b83546001600160a01b031687529586019560019384019390910190610153565b80fd5b838334610327575f3660031901126103275780519263f877cb1960e01b84526024936020908183820152600886820152674d4e454d4f4e494360c01b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d915f82606481865afa91821561039e575f926103a8575b508061022e92865180948192636229498b60e01b835289898401526044830190610b6e565b5f8b8301520381865afa91821561039e575f9261036f575b5084516001625e79b760e01b031981528481018390529080828981875afa80156103655761032b575b5050813b15610327575f918683928651948593849263ce817d4760e01b8452888401525af1801561031d576102ef575b50815190611e898083019183831067ffffffffffffffff8411176102dd575090829161105c8339039083f0156102d3575080f35b51903d90823e3d90fd5b634e487b7160e01b8652604190528585fd5b90925067ffffffffffffffff811161030b5781525f918461029f565b83604184634e487b7160e01b5f52525ffd5b83513d5f823e3d90fd5b5f80fd5b81813d831161035e575b61033f8183610cdf565b8101031261032757516001600160a01b0381160361032757868061026f565b503d610335565b86513d5f823e3d90fd5b9080925081813d8311610397575b6103878183610cdf565b8101031261032757519087610246565b503d61037d565b85513d5f823e3d90fd5b91503d805f843e6103b98184610cdf565b8201818382031261032757825167ffffffffffffffff9384821161032757019080601f8301121561032757815193841161042a57865190610403601f8601601f1916850183610cdf565b848252838584010111610327575f838561022e96828096018386015e830101529250610209565b88604187634e487b7160e01b5f52525ffd5b8234610327575f36600319011261032757602090610458610fbb565b90519015158152f35b8234610327575f3660031901126103275760195461047e81610d01565b9061048b83519283610cdf565b80825260195f90815260207f944998273e477b495144fb8794c914197f3ccb46be2900f4698fd0ef743c96958185015b8484106104cf578651806101758882610bcf565b60018381926104dd85610d19565b8152019201930192906104bb565b8234610327575f36600319011261032757601c5461050881610d01565b9061051583519283610cdf565b808252601c5f90815260207f0e4562a10381dec21b205ed72637e6b1b523bdd0e4d4d50af5cd23dd4500a2118185015b848410610559578651806101758882610c32565b600283600192895161056a81610caf565b848060a01b038654168152610580858701610de6565b83820152815201920193019290610545565b8234610327575f36600319011261032757601d546105af81610d01565b906105bc83519283610cdf565b808252601d5f90815260207f6d4407e7be21f808e6509aa9fa9143369579dd7d760fe20a2c09680fc146134f8185015b848410610600578651806101758882610c32565b600283600192895161061181610caf565b848060a01b038654168152610627858701610de6565b838201528152019201930192906105ec565b8234610327575f36600319011261032757601a5461065681610d01565b9061066383519283610cdf565b808252601a5f90815260207f057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff63e8185015b8484106106a7578651806101758882610bcf565b60018381926106b585610d19565b815201920193019290610693565b8234610327575f36600319011261032757601b546106e081610d01565b906106ed83519283610cdf565b80825260208083019182601b5f527f3ad8aa4f87544323a9d1e5dd902f40c356527a7955687113db5f9a85ad579dc15f915b8383106107a25750505050835192818401908285525180915284840191858260051b86010193925f965b8388106107565786860387f35b90919293948380610791600193603f198b820301875289519083610781835189845289840190610b6e565b9201519084818403910152610b92565b970193019701969093929193610749565b6002856001928a999799516107b681610caf565b6107bf86610d19565b81526107cc858701610de6565b8382015281520192019201919095939561071f565b8234610327575f366003190112610327578051601780548083525f918252602080840194927fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c1592915b82821061084257610175868661016b828b0383610cdf565b83546001600160a01b03168752958601956001938401939091019061082a565b8234610327575f366003190112610327578051601880548083525f918252602080840194927fb13d2d76d1f4b7be834882e410b3e3a8afaf69f83600ae24db354391d2378d2e92915b8282106108c357610175868661016b828b0383610cdf565b83546001600160a01b0316875295860195600193840193909101906108ab565b8234610327575f36600319011261032757601e5461090081610d01565b9061090d83519283610cdf565b8082526020918281018092601e5f527f50bb669a95c7b50b7e8a6f09454034b2b14cf2b85c730dca9a539ca82cb6e3505f925b828410610a0e57505050508351928084019181855251809252848401600590868460051b87010194965f925b8584106109795787870388f35b90919293809596603f19898203018552895190828582019260018060a01b03815116835201519185848301528251809152606090848284019282881b8501019401925f5b8281106109e057505050505090806001929a01940194019297959493919061096c565b919395806109fc6001939597605f198782030189528951610b6e565b970195019101918a95949391926109bd565b86889795969851610a1e81610caf565b83546001600160a01b0316815260018481018054909190610a3e81610d01565b92610a4b8d519485610cdf565b8184525f908152858120908685015b838210610a855750505050509281600194846002959401528152019201930192909694939596610940565b9380959697839495610a98839495610d19565b815201930191018b9695949392610a5a565b839034610327575f366003190112610327576016549182825260208083019360165f527fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b5124289915f905b828210610b0a57610175868661016b828b0383610cdf565b83546001600160a01b031687529586019560019384019390910190610af2565b60209060206040818301928281528551809452019301915f5b828110610b51575050505090565b83516001600160a01b031685529381019392810192600101610b43565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9081518082526020808093019301915f5b828110610bb1575050505090565b83516001600160e01b03191685529381019392810192600101610ba3565b6020808201906020835283518092526040830192602060408460051b8301019501935f915b848310610c045750505050505090565b9091929394958480610c22600193603f198682030187528a51610b6e565b9801930193019194939290610bf4565b6020808201908083528351809252604092604081018260408560051b8401019601945f925b858410610c68575050505050505090565b909192939495968580610c9e600193603f1986820301885286838d51878060a01b03815116845201519181858201520190610b92565b990194019401929594939190610c57565b6040810190811067ffffffffffffffff821117610ccb57604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff821117610ccb57604052565b67ffffffffffffffff8111610ccb5760051b60200190565b90604051915f9080549160018360011c9060018516938415610ddc575b6020958684108614610dc8578389528895908115610da65750600114610d68575b505050610d6692500383610cdf565b565b5f90815285812095935091905b818310610d8e575050610d6693508201015f8080610d57565b85548884018501529485019487945091830191610d75565b92505050610d6694925060ff191682840152151560051b8201015f8080610d57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610d36565b906040916040518093825492838352602091828401915f52825f20945f915b816007840110610f445750610d6695549184828210610f26575b828210610f08575b828210610eea575b828210610ecc575b828210610eae575b828210610e90575b828210610e74575b5010610e60575b5090500383610cdf565b6001600160e01b031916815201805f610e56565b83811b6001600160e01b03191685529093019260010184610e4f565b604084901b6001600160e01b03191685529093019260010184610e47565b606084901b6001600160e01b03191685529093019260010184610e3f565b608084901b6001600160e01b03191685529093019260010184610e37565b60a084901b6001600160e01b03191685529093019260010184610e2f565b60c084901b6001600160e01b03191685529093019260010184610e27565b60e084901b6001600160e01b03191685529093019260010184610e1f565b86546001600160e01b031960e082811b8216875260c083811b83168989015260a084811b8416868a0152608085811b85166060808c019190915286901b8516908a015284861b84169089015283891b8316908801529116908501526001909601958895506101009093019260089290920191610e05565b60085460ff168015610fca5790565b50604051630667f9d760e41b8152602081604481737109709ecfa91a80626ff3989d68f67f5b1dd12d8060048301526519985a5b195960d21b60248301525afa908115611050575f9161101e575b50151590565b90506020813d602011611048575b8161103960209383610cdf565b8101031261032757515f611018565b3d915061102c565b6040513d5f823e3d90fdfe60c0806040523460695760015f5561f00d6080527fff5c818c3a09617e24e0ba5e97a8b336e42589e94d6f586a74a28d768ee2c8cb60a052611e1b908161006e8239608051818181610b9c01528181610c6d0152610e8e015260a05181818160d101526104f90152f35b5f80fdfe60806040526004361015610011575f80fd5b5f803560e01c80635788015a14610ebd5780636afdd85014610e795780637b55766f14610e36578063844fac8e1461041a578063ae9a3099146102d55763e917a9621461005c575f80fd5b346102d257602060031981813601126102ce57600435916001600160401b03908184116102ca576060846004019385360301126102ca5761009b611862565b6100a3611883565b506100ac611252565b5060606040516100bb81610f3c565b525f816040516100ca81610f73565b82815201527f00000000000000000000000000000000000000000000000000000000000000006024850135036102b857600161014061012161011c610115604461013a9901886118d3565b369161101b565b611336565b9291979096610130848a611c1d565b9491939092611905565b99611d68565b906040519961014e8b610f57565b338b5246888c015263ffffffff908160408d01521660608b015260808a019282845260a08b015260c08a015260e0890192835289528385526101978460408b2001541515611684565b5188528284526040882084848060a01b0384511693846bffffffffffffffffffffffff60a01b84541617835501519384910155604051926323b872dd60e01b8585015233602485015230604485015260648401526064835260a0830194838610908611176102a4577fa576d0af275d0c6207ef43ceee8c498a5d7a26b8157a32d3fdf361e64371628c956102366040946102459461025b988752611d8b565b805151610265575b50516116d9565b510151908151910120926040519182918261174d565b0390a26001815580f35b61029b7fa77ba063263c0dd36279bab7b6a6454b2611d90fe317f9a08b7ee715daeb87629185519182918883528883019061117b565b0390a15f61023e565b634e487b7160e01b5f52604160045260245ffd5b604051633b6b895360e11b8152600490fd5b8480fd5b8280fd5b80fd5b50346102d25760603660031901126102d2576004356024356001600160a01b038082168203610416576044356001600160401b0381116102ca5761031d903690600401611211565b5050610327611862565b8284526001602052604084209260016040519461034386610f73565b8381541686520154916020850192808452156103c7576103c0946103bb928752600160205286600160408220828155015551169151926103ad60405194859263a9059cbb60e01b60208501526024840160209093929193604081019460018060a01b031681520152565b03601f198101845283610fdf565b611d8b565b6001815580f35b60405162461bcd60e51b815260206004820152602160248201527f4f72646572206e6f7420666f756e64206f7220616c72656164792072657061696044820152601960fa1b6064820152608490fd5b5f80fd5b5034610416576060366003190112610416576001600160401b03600435116104165761010060043536036003190112610416576024356001600160401b0381116104165761046c903690600401611211565b906044356001600160401b0381116104165761048c903690600401611211565b5050610496611862565b61049e611883565b506104a7611252565b5060606040516104b681610f3c565b525f60206040516104c681610f73565b82815201526104d96004356004016118bf565b306001600160a01b0390911603610e2457466064600435013503610e13577f000000000000000000000000000000000000000000000000000000000000000060c46004350135036102b85761053e61011c61011560e4600435016004356004016118d3565b91909261054b8383611c1d565b61055d602460049994939935016118bf565b9761056c608460043501611905565b9263ffffffff61058060a460043501611905565b8161058a8a611d68565b96604051809e61059982610f57565b60018060a01b031690528d6020606460043501359101521660408d01521660608b01528360808b015260a08a015260c089015260e08801525f5260016020526105ea600160405f2001541515611684565b60808601515f52600160205260405f2060018060a01b038551166bffffffffffffffffffffffff60a01b825416178155600160208601519101556040519161063183610f57565b61063f60043560040161123e565b835261064f60246004350161123e565b60208401526004356044810135604085015260648101356060850152610677906084016116c8565b608084015261068a60a4600435016116c8565b60a084015260c4600435013560c08401526001600160401b0360e4600435013511610416576106d3916106c7366004803560e48101350101611051565b60e0850152369161101b565b8351602080860151604051939691926001600160a01b03166106f485610f73565b845282840152604084015163ffffffff608086015116906040519461071886610f8e565b85528385015260408401520151936040519461073386610f73565b3086526020808701919091528301516001600160a01b0316936107546119ef565b602081519101209060018060a01b03815116916107db60208301519260408101516107c36001600160401b036060840151169160a060808501519401519660405198899760208901526040880152606087015260808601906020809160018060a01b0381511684520151910152565b60c084015261010060e084015261012083019061106f565b91601f1982840301610100830152805180845260208401936020808360051b8301019301945f915b838310610dbe5750505050610821925003601f198101835282610fdf565b602081519101206108566108336119a0565b88519061083e611916565b9160405193849260606020850152608084019061106f565b601f19838203016040840152815180825260208201916020808360051b8301019401925f915b838310610d5f5750505050506108a1906108af93601f1984830301606085015261106f565b03601f198101835282610fdf565b60208151910120906108bf611a9b565b60206109ed816108cd6119ef565b8160405181810164086c2d8d8560db1b81526e1859191c995cdcc81d185c99d95d0b608a1b60258301526e189e5d195cc818d85b1b11185d184b608a1b60348301526d75696e743235362076616c75652960901b60438301526031825261093382610f8e565b6040518381019165082e6e6cae8560d31b83526d1859191c995cdcc81d1bdad95b8b60921b60268301526e75696e7432353620616d6f756e742960881b60348301526023825261098282610f8e565b61098a6119a0565b93604051998a9781808a019d8e815192839201905e8901908282015f8152815193849201905e0190868201905f8252519283915e0190848201905f8252519283915e01908282015f8152815193849201905e015f83820152038084520182610fdf565b5190209460018060a01b038151169060018060a01b03602082015116604082015160608301519063ffffffff6080850151169260c063ffffffff60a087015116950151956040519b60208d015260408c015260608b015260808a015260a089015260c088015260e08701526101008601526101208501526101408401526101408352826101608101106001600160401b03610160850111176102a4576101608301604052825160209384012090610b9a610aa5611916565b610aad6119a0565b610ab56119ef565b610abd611a9b565b8860405191610acb83610f8e565b602e835281808401947f546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c7586526d696e7432353620616d6f756e742960901b60408601526040519c8d977f4761736c65737343726f7373436861696e4f72646572207769746e6573732900828a015281603f9a8051918291018c8c015e8901908a82015f8152815193849201905e01908882015f8152815193849201905e01908682015f8152815193849201905e0190848201905f8252519283915e015f8382015203601f810187520185610fdf565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163b1561041657604080516309be14ff60e11b8152845180516001600160a01b03166004830152602001516024820152965f9688968796610c6896610c55959294909392610c379260208181015160448d015291015160648b015281516001600160a01b031660848b0152015160a4890152565b60c487015260e486015261014061010486015261014485019061106f565b838103600319016101248501529061106f565b0381837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af18015610d5457610d38575b50805151610cf6575b507fa576d0af275d0c6207ef43ceee8c498a5d7a26b8157a32d3fdf361e64371628c61025b6040610cdf60e08501516116d9565b51015160208151910120926040519182918261174d565b610d2f7fa77ba063263c0dd36279bab7b6a6454b2611d90fe317f9a08b7ee715daeb87629160405191829160208352602083019061117b565b0390a15f610cab565b9092506001600160401b0381116102a4576040525f915f610ca2565b6040513d5f823e3d90fd5b91939695509193602080610dab600193601f19868203018752608060608c5180518452878060a01b0386820151168685015260408101516040850152015191816060820152019061106f565b980193019301909287959694929361087c565b919360019193955060208091601f19858203018652885190848060a01b038251168152604080610dfb85850151606087860152606085019061106f565b93015191015297019301930190928694929593610803565b6040516217e1ef60ea1b8152600490fd5b6040516370e02d1360e01b8152600490fd5b34610416576020366003190112610416576004355f90815260016020818152604092839020805492015483516001600160a01b03909316835290820152f35b0390f35b34610416575f366003190112610416576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610416576020366003190112610416576004356001600160401b03811161041657610f1f610e75610ef961011c610f11943690600401611051565b92919390604051958695608087526080870190611093565b90858203602087015261117b565b82516001600160a01b031660408501526020909201516060840152565b602081019081106001600160401b038211176102a457604052565b61010081019081106001600160401b038211176102a457604052565b604081019081106001600160401b038211176102a457604052565b606081019081106001600160401b038211176102a457604052565b60c081019081106001600160401b038211176102a457604052565b608081019081106001600160401b038211176102a457604052565b90601f801991011681019081106001600160401b038211176102a457604052565b6001600160401b0381116102a457601f01601f191660200190565b92919261102782611000565b916110356040519384610fdf565b829481845281830111610416578281602093845f960137010152565b9080601f830112156104165781602061106c9335910161101b565b90565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b80516001600160a01b0390811683526020808301518185015260408084015180518416828701528201516060860152926060936001600160401b03606083015116608087015260a06110f3608084015160e0838a015260e089019061106f565b9201519560c08184039101528551938483528383019184808760051b8601019801965f945b87861061112b5750505050505050505090565b9091929394959697988780600192601f198582030189528c51908882511681528780611162858501518a878601528a85019061106f565b9301519101529b01960196019497969593929190611118565b906020918282019051928083528351809252604092604081018260408560051b8401019601945f925b8584106111b5575050505050505090565b909192939495968580611200600193603f198682030188528b519060809082518152868060a01b0385840151168582015288830151898201528160608094015193820152019061106f565b9901940194019295949391906111a4565b9181601f84011215610416578235916001600160401b038311610416576020838186019501011161041657565b35906001600160a01b038216820361041657565b6040519061125f82610fa9565b606060a0835f81525f602082015260405161127981610f73565b5f81525f602082015260408201525f838201528260808201520152565b51906001600160a01b038216820361041657565b9190826040910312610416576040516112c281610f73565b60208082946112d081611296565b84520151910152565b81601f82011215610416578051906112f082611000565b926112fe6040519485610fdf565b8284526020838301011161041657815f9260208093018386015e8301015290565b6001600160401b0381116102a45760051b60200190565b61133e611252565b50606060405161134d81610f3c565b525f602060405161135d81610f73565b828152015280518101916080828403126104165760208201516001600160401b0381116104165782019160e083850312610416576040519261139e84610fa9565b6113aa60208201611296565b8452604081015160208501526113c660208601606083016112aa565b604085015260a08101516001600160401b038116810361041657606085015260c08101516001600160401b0381116104165761140a906020808801918401016112d9565b608085015260e0810151906001600160401b0382116104165760208601603f83830101121561041657602082820101516114438161131f565b926114516040519485610fdf565b81845260208401906020890160408460051b83870101011161041657604081850101915b60408460051b838701010183106115f057505050505060a084015260408101516001600160401b0381116104165781019360208582031261041657604051946114bd86610f3c565b60208101516001600160401b0381116104165760208301603f8284010112156104165760208183010151906114f18261131f565b926114ff6040519485610fdf565b82845260208401906020860160408560051b85840101011161041657604083820101915b60408560051b85840101018310611553575050505050602061154d939260609288520191016112aa565b91929190565b8251906001600160401b03821161041657608083860183018903601f190112610416576040519161158383610fc4565b83860181016040810151845261159b90606001611296565b602084015283860181016080810151604085015260a00151916001600160401b038311610416576040936115de60209493868695868f01928c8b010101016112d9565b60608201528152019301929050611523565b8251906001600160401b03821161041657606086840183018c03601f190112610416576040519161162083610f8e565b611630604082868a010101611296565b8352606081858901010151916001600160401b038311610416576040936080838f8b8860209889988c8a611669960194010101016112d9565b85840152878b01010151858201528152019301929050611475565b1561168b57565b60405162461bcd60e51b81526020600482015260156024820152744f7264657220616c72656164792070656e64696e6760581b6044820152606490fd5b359063ffffffff8216820361041657565b8051156116e65760200190565b634e487b7160e01b5f52603260045260245ffd5b9081518082526020808093019301915f5b828110611719575050505090565b835180518652808301518684015260408082015190870152606090810151908601526080909401939281019260010161170b565b602080825260018060a01b038351168183015280830151604090604084015260408401519160609263ffffffff80911660608601526060860151166080850152608085015160a085015260a0850151946117b5610100968760c08801526101208701906116fa565b9460e06117d360c084015197601f19988985830301848601526116fa565b9201519686828403019101528551928382528282019083808660051b8501019801955f935b86851061180b5750505050505050505090565b90919293949596979998868061184d83868f8e8a918960019903018c52516001600160401b0381511684528581015186850152015191818a820152019061106f565b9b9c9a019897969190910194019291906117f8565b60025f54146118715760025f55565b604051633ee5aeb560e01b8152600490fd5b6040519061189082610f57565b606060e0835f81525f60208201525f60408201525f838201525f60808201528260a08201528260c08201520152565b356001600160a01b03811681036104165790565b903590601e198136030182121561041657018035906001600160401b0382116104165760200191813603831361041657565b3563ffffffff811681036104165790565b6040516d082eae8d0dee4d2f4c2e8d2dedc560931b60208201526e1d5a5b9d0c8d4d8818da185a5b9259608a1b602e820152726164647265737320636f64654164647265737360681b603d8201526c75696e74323536206e6f6e636560981b60508201526f6279746573207369676e61747572652960801b605d820152604d815261106c81610fc4565b6040516f08a92a06e6e606482eae8d088c2e8c2560831b60208201527f417574686f72697a6174696f6e5b5d20617574686c697374290000000000000060308201526029815261106c81610f8e565b6040516a086c2d8d884f2aae6cae4560ab1b60208201526c1859191c995cdcc81d5cd95c8b609a1b602b8201526c75696e74323536206e6f6e636560981b60388201526b105cdcd95d08185cdcd95d0b60a21b60458201526e1d5a5b9d0d8d0818da185a5b92590b608a1b60518201526f189e5d195cc81cda59db985d1d5c994b60821b60608201526c43616c6c5b5d2063616c6c732960981b6070820152605d815261106c81610fc4565b6040517f4761736c65737343726f7373436861696e4f72646572280000000000000000006020820152751859191c995cdcc81bdc9a59da5b94d95d1d1b195c8b60521b60378201526c1859191c995cdcc81d5cd95c8b609a1b604d8201526d1d5a5b9d0c8d4d881b9bdb98d94b60921b605a820152751d5a5b9d0c8d4d881bdc9a59da5b90da185a5b92590b60521b6068820152731d5a5b9d0ccc881bdc195b911958591b1a5b994b60621b607e820152731d5a5b9d0ccc88199a5b1b111958591b1a5b994b60621b609282015275189e5d195ccccc881bdc99195c91185d18551e5c194b60521b60a68201527443616c6c427955736572206f72646572446174612960581b60bc82015260b1815260e081018181106001600160401b038211176102a45760405290565b60409060405191611bd683610f73565b6001835282915f5b602080821015611c1557835160209291611bf782610fc4565b5f82525f818301525f868301525f6060830152828801015201611bde565b505091925050565b611c25611bc6565b926040928383015160018060a01b03948582511692602080930151878751169160609560608901926001600160401b03948585511691875193611c6785610fc4565b845288840152868301526060820152611c7f8b6116d9565b52611c898a6116d9565b5084611c93611bc6565b99825116910151845191611ca683610fc4565b8252858201525f84820152466060820152611cc0896116d9565b52611cca886116d9565b50825194611cd786610f73565b600186525f5b858110611d4257505091607b611d0b92869594611d19611d3f989a8551968791898084015287830190611093565b03601f198101875286610fdf565b511693825194611d2886610f8e565b8552840152820152611d39826116d9565b526116d9565b50565b85908551611d4f81610f8e565b5f81525f83820152838782015282828a01015201611cdd565b604051611d85816108a16020820194602086526040830190611093565b51902090565b905f602091828151910182855af115610d54575f513d611ddc57506001600160a01b0381163b155b611dba5750565b604051635274afe760e01b81526001600160a01b039091166004820152602490fd5b60011415611db356fea264697066735822122090ab6310d804d05edc0883f40ad6bb5ab15393eb91339db8bfc0aa17e6f3503664736f6c63430008190033a264697066735822122024fbea1a86cf34479b5e4e35055c56a9053ec48fe2c7e6cc9c52396c76881ac364736f6c63430008190033";

type DeployOriginSettlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployOriginSettlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployOriginSettler__factory extends ContractFactory {
  constructor(...args: DeployOriginSettlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<DeployOriginSettler> {
    return super.deploy(overrides || {}) as Promise<DeployOriginSettler>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployOriginSettler {
    return super.attach(address) as DeployOriginSettler;
  }
  override connect(signer: Signer): DeployOriginSettler__factory {
    return super.connect(signer) as DeployOriginSettler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployOriginSettlerInterface {
    return new utils.Interface(_abi) as DeployOriginSettlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployOriginSettler {
    return new Contract(address, _abi, signerOrProvider) as DeployOriginSettler;
  }
}
