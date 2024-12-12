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
import type {
  StdStorageSafe,
  StdStorageSafeInterface,
} from '../../StdStorage.sol/StdStorageSafe'

const _abi = [
  {
    type: 'event',
    name: 'SlotFound',
    inputs: [
      {
        name: 'who',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'fsig',
        type: 'bytes4',
        indexed: false,
        internalType: 'bytes4',
      },
      {
        name: 'keysHash',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'slot',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'WARNING_UninitedSlot',
    inputs: [
      {
        name: 'who',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'slot',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
] as const

const _bytecode =
  '0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea26469706673582212209b20fb102a110baf40d7908b80abd1eef06d6e10b1e3810df0c16e23b62472a664736f6c63430008190033'

type StdStorageSafeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: StdStorageSafeConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class StdStorageSafe__factory extends ContractFactory {
  constructor(...args: StdStorageSafeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string },
  ): Promise<StdStorageSafe> {
    return super.deploy(overrides || {}) as Promise<StdStorageSafe>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): StdStorageSafe {
    return super.attach(address) as StdStorageSafe
  }
  override connect(signer: Signer): StdStorageSafe__factory {
    return super.connect(signer) as StdStorageSafe__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): StdStorageSafeInterface {
    return new utils.Interface(_abi) as StdStorageSafeInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): StdStorageSafe {
    return new Contract(address, _abi, signerOrProvider) as StdStorageSafe
  }
}
