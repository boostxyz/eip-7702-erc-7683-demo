import {
  concatHex,
  encodeFunctionData,
  encodePacked,
  keccak256,
  type Address,
  type Hex,
  encodeAbiParameters,
  getAbiItem,
} from 'viem'
import { ExperimentERC20, Staking, OriginSettler } from './contracts'

type Asset = {
  token: Address
  amount: bigint
}

type Call = {
  target: Address
  callData: Hex
  value: bigint
}

export type CallByUser = {
  user: Address
  nonce: bigint
  asset: Asset
  chainId: bigint
  signature: Hex
  calls: Call[]
}

export function encodeStakingCalls(params: {
  amount: bigint
  user: Address
}) {
  const stakingCalls = [
    {
      // https://explorer-odyssey-2.t.conduit.xyz/address/0x38fAc33bD20D4c4Cce085C0f347153C06CbA2968
      target: '0x38fAc33bD20D4c4Cce085C0f347153C06CbA2968' as Address,
      callData: encodeFunctionData({
        abi: ExperimentERC20.abi,
        functionName: 'approve',
        args: [Staking.address, params.amount],
      }),
      value: 0n,
    },
    {
      target: Staking.address as Address,
      callData: encodeFunctionData({
        abi: Staking.abi,
        functionName: 'stake',
        args: [params.amount],
      }),
      value: 0n,
    },
  ]

  return stakingCalls
}

export function encodeCallByUserCalls(
  calls: CallByUser['calls'],
  nonce: bigint,
) {
  // Encode the calls.
  const encodedCalls = concatHex(
    calls.map((call) =>
      encodePacked(
        ['address', 'bytes', 'uint256'],
        [call.target, call.callData, call.value],
      ),
    ),
  )

  // Construct the signing payload.
  const payload = keccak256(
    encodePacked(['uint256', 'bytes'], [nonce, encodedCalls]),
  )

  return payload
}

export function encodeCallByUser(callByUser: CallByUser) {
  const encoded = encodeAbiParameters(
    [
      {
        type: 'tuple',
        name: 'CallByUser',
        components: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'struct Asset',
            name: 'asset',
            type: 'tuple',
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
          },
          {
            internalType: 'uint64',
            name: 'chainId',
            type: 'uint64',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
          {
            internalType: 'struct Call[]',
            name: 'calls',
            type: 'tuple[]',
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    [callByUser],
  )
  return encoded
}

export function encodeEIP7702AuthData(authData: {
  authlist: {
    chainId: bigint
    codeAddress: Address
    nonce: bigint
    signature: Hex
  }[]
}) {
  const encoded = encodeAbiParameters(
    [
      {
        type: 'tuple',
        name: 'EIP7702AuthData',
        components: [
          {
            internalType: 'struct Authorization[]',
            name: 'authlist',
            type: 'tuple[]',
            components: [
              {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'codeAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
            ],
          },
        ],
      },
    ],
    [authData],
  )

  return encoded
}

export function encodeAsset(asset: Asset) {
  const encoded = encodeAbiParameters(
    [
      {
        name: 'Asset',
        type: 'tuple',
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
      },
    ],
    [asset],
  )
  return encoded
}
