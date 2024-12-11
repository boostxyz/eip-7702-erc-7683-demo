import type { Provider, TransactionRequest } from '@ethersproject/providers'
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  type Overrides,
  type Signer,
  utils,
} from 'ethers'
import type { MockERC20, MockERC20Interface } from '../MockERC20'

const _abi = [
  {
    type: 'function',
    name: 'DOMAIN_SEPARATOR',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'allowance',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'spender',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'approve',
    inputs: [
      {
        name: 'spender',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'balanceOf',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'decimals',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint8',
        internalType: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [
      {
        name: 'name_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'symbol_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'decimals_',
        type: 'uint8',
        internalType: 'uint8',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'name',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'nonces',
    inputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'permit',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'spender',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'deadline',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'v',
        type: 'uint8',
        internalType: 'uint8',
      },
      {
        name: 'r',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 's',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'symbol',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalSupply',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'transfer',
    inputs: [
      {
        name: 'to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'transferFrom',
    inputs: [
      {
        name: 'from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'spender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      {
        name: 'from',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
] as const

const _bytecode =
  '0x60808060405234601557610e29908161001a8239f35b5f80fdfe6080604090808252600480361015610015575f80fd5b5f3560e01c91826306fdde0314610a1a57508163095ea7b3146109ac5781631624f6c61461067057816318160ddd1461065257816323b872dd14610572578163313ce567146105515781633644e5151461052e57816370a08231146104f95781637ecebe00146104c257816395d89b41146103e4578163a9059cbb14610353578163d505accf146100fb575063dd62ed3e146100af575f80fd5b346100f757806003193601126100f7576020906100ca610ad3565b6100d2610ae9565b9060018060a01b038091165f5260058452825f2091165f528252805f20549051908152f35b5f80fd5b9050346100f75760e03660031901126100f757610116610ad3565b61011e610ae9565b9260443590606435936084359360ff85168095036100f75742861061031057610145610bc3565b9660018060a01b0380921696875f5260209660088852855f20998a549a5f198c146102fd5760018c019055865192858a8501957f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c987528c8a870152169b8c606086015289608086015260a085015260c084015260c0835260e0830167ffffffffffffffff94848210868311176102ea578189528451902061010085019261190160f01b845261010286015261012285015260428152610160840194818610908611176102d757848852519020835261018082015260a4356101a082015260c4356101c0909101525f808052869160809060015afa156102cd575f511690811515806102c4575b156102905750907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259392915f5260058352805f20865f52835281815f205551908152a3005b825162461bcd60e51b8152908101859052600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606490fd5b5085821461024b565b82513d5f823e3d90fd5b604187634e487b7160e01b5f525260245ffd5b604188634e487b7160e01b5f525260245ffd5b601187634e487b7160e01b5f525260245ffd5b506020606492519162461bcd60e51b8352820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152fd5b82346100f757806003193601126100f75760209161036f610ad3565b60243590335f5282855261038682855f2054610d0d565b335f52838652845f205560018060a01b031691825f526103a982855f2054610d7a565b90835f528552835f205582519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a35160018152f35b82346100f7575f3660031901126100f75780515f6001805461040581610b8b565b8085529160209160018116908115610498575060011461043f575b61043b858761043182880383610aff565b5191829182610aa9565b0390f35b60015f90815293507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b838510610485575050505081016020016104318261043b610420565b8054868601840152938201938101610469565b61043b9795508693506020925061043194915060ff191682840152151560051b8201019294610420565b82346100f75760203660031901126100f7576020906001600160a01b036104e7610ad3565b165f5260088252805f20549051908152f35b82346100f75760203660031901126100f7576020916001600160a01b0361051e610ad3565b165f528252805f20549051908152f35b82346100f7575f3660031901126100f75760209061054a610bc3565b9051908152f35b82346100f7575f3660031901126100f75760209060ff600254169051908152f35b82346100f75760603660031901126100f75761058c610ad3565b91610595610ae9565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6044359160018060a01b0380961692835f52602096879260058452875f20335f528452875f2054835f19820361062f575b5050855f528684526105fc83895f2054610d0d565b865f52878552885f20551694855f5261061882885f2054610d7a565b90865f528352865f20558551908152a35160018152f35b61063891610d0d565b865f5260058552885f20335f528552885f205589836105e7565b82346100f7575f3660031901126100f7576020906003549051908152f35b9050346100f75760603660031901126100f75767ffffffffffffffff9181358381116100f7576106a39036908401610b35565b926024358181116100f7576106bb9036908501610b35565b926044359260ff84168094036100f75760ff600954166109735750845182811161096057806106ea5f54610b8b565b96601f97888111610908575b5060209088831160011461089a575f9261088f575b50508160011b915f199060031b1c1916175f555b835191821161087c57506001936107368554610b8b565b93818511610819575b82939450602091831160011461079c575f92610791575b50505f19600383901b1c191690831b1782555b60ff199081600254161760025546600655610782610bdd565b60075560095416176009555f80f35b015190505f80610756565b90859350601f19831691845f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6925f5b818110610801575084116107e9575b505050811b018255610769565b01515f1960f88460031b161c191690555f80806107dc565b828401518555889690940193602093840193016107cd565b855f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf682840160051c81019560208510610872575b830160051c019486905b86811061086757505061073f565b5f8155018690610859565b909550859061084f565b604190634e487b7160e01b5f525260245ffd5b015190505f8061070b565b5f8080525f80516020610dd48339815191529350601f198516905b8181106108f057509084600195949392106108d8575b505050811b015f5561071f565b01515f1960f88460031b161c191690555f80806108cb565b929360206001819287860151815501950193016108b5565b9091505f80525f80516020610dd48339815191528880850160051c82019260208610610957575b9085949392910160051c01905b81811061094957506106f6565b5f815584935060010161093c565b9250819261092f565b604182634e487b7160e01b5f525260245ffd5b906020606492519162461bcd60e51b835282015260136024820152721053149150511657d253925512505312569151606a1b6044820152fd5b82346100f757806003193601126100f7576020906109c8610ad3565b602435335f5260058452825f209160018060a01b031691825f52845280835f205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b8390346100f7575f3660031901126100f7575f8054610a3881610b8b565b808452906020906001908181169081156104985750600114610a655761043b858761043182880383610aff565b5f80805293505f80516020610dd48339815191525b838510610a96575050505081016020016104318261043b610420565b8054868601840152938201938101610a7a565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036100f757565b602435906001600160a01b03821682036100f757565b90601f8019910116810190811067ffffffffffffffff821117610b2157604052565b634e487b7160e01b5f52604160045260245ffd5b81601f820112156100f75780359067ffffffffffffffff8211610b215760405192610b6a601f8401601f191660200185610aff565b828452602083830101116100f757815f926020809301838601378301015290565b90600182811c92168015610bb9575b6020831014610ba557565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610b9a565b6006544603610bd25760075490565b610bda610bdd565b90565b6040515f905f5490610bee82610b8b565b8082528160209485820194600190876001821691825f14610cef575050600114610ca9575b50610c2092500382610aff565b51902090604051908101917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f835260408201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610b215760405251902090565b5f808052879250905f80516020610dd48339815191525b858310610cd7575050610c2093508201015f610c13565b80548388018501528694508893909201918101610cc0565b60ff19168852610c2095151560051b85010192505f9150610c139050565b90808210610d35578103908111610d215790565b634e487b7160e01b5f52601160045260245ffd5b60405162461bcd60e51b815260206004820152601c60248201527f45524332303a207375627472616374696f6e20756e646572666c6f77000000006044820152606490fd5b90810190818111610d21578110610d8e5790565b60405162461bcd60e51b815260206004820152601860248201527f45524332303a206164646974696f6e206f766572666c6f7700000000000000006044820152606490fdfe290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563a2646970667358221220bbc1ec38fedb57653d7e4e31421b3918244d3d1ece64c9d9607575ca032a45ea64736f6c63430008190033'

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: MockERC20ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string },
  ): Promise<MockERC20> {
    return super.deploy(overrides || {}) as Promise<MockERC20>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20
  }
  override connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20
  }
}
