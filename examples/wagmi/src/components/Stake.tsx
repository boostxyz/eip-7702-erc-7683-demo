import { W } from 'porto/wagmi'
import {
  type Address,
  type Hex,
  concat,
  concatHex,
  createPublicClient,
  formatEther,
  http,
  keccak256,
  maxUint32,
  padBytes,
  padHex,
  parseEther,
  toHex,
} from 'viem'
import {
  type BaseError,
  useAccount,
  useChainId,
  useReadContract,
  useSignMessage,
  useWalletClient,
} from 'wagmi'
import { useCallsStatus, useSendCalls } from 'wagmi/experimental'

import { getTransactionLink, shortenHash } from '@/lib/utils'
import { useState } from 'react'
import { odysseyTestnet2 } from '../config'
import {
  ExperimentERC20,
  ExperimentalDelegation,
  OriginSettler,
  Staking,
} from '../contracts'
import {
  encodeAsset,
  encodeCallByUser,
  encodeCallByUserCalls,
  encodeEIP7702AuthData,
  encodeStakingCalls,
  encodeOrderData,
} from '../settler'
import { Button, Input } from './ui'
import { readContract } from 'wagmi/actions'

export function Stake() {
  return (
    <>
      <StakeForm />
    </>
  )
}

function StakeForm() {
  const chainId = useChainId()
  const [amount, setAmount] = useState('')
  const { address } = useAccount()
  const { data: id, error, isPending, sendCalls } = useSendCalls()
  const { signMessageAsync } = useSignMessage()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useCallsStatus({
    id: id as string,
    query: {
      enabled: !!id,
      refetchInterval({ state }) {
        if (state.data?.status === 'CONFIRMED') return false
        return 1_000
      },
    },
  })

  const { data: nonce } = useReadContract({
    ...ExperimentalDelegation,
    functionName: 'nonce',
    chainId: odysseyTestnet2.id,
    address: address!,
  })

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="flex flex-row gap-2">
        <Input
          placeholder="100 USDC"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            const amount = 100000000000000000000n
            const publicClient = createPublicClient({
              chain: odysseyTestnet2,
              transport: http(),
            })
            const nonce = await publicClient.readContract({
              ...ExperimentalDelegation,
              functionName: 'nonce',
              address: address!,
            })
            console.log('@@@', { nonce })

            const encodedStakingCalls = encodeStakingCalls({
              amount,
              user: address!,
            })
            const encodedCallByUserCalls = encodeCallByUserCalls(
              encodedStakingCalls,
              nonce ?? 0n,
            )
            // const signature = await signMessageAsync({
            //   message: encodedCallByUserCalls,
            // })
            const callByUser = {
              user: address!,
              nonce: nonce ?? 0n,
              asset: {
                token: '0x28077B47Cd03326De7838926A63699849DD4fa87' as Address,
                amount,
              },
              chainId: BigInt(odysseyTestnet2.id),
              signature: '0x' as Hex,
              calls: encodedStakingCalls,
            }
            // const eip7702AuthDataFromInit = JSON.parse(
            //   localStorage.getItem('eip7702AuthData') ?? '{}',
            // )
            // console.log('@@@', eip7702AuthDataFromInit)

            const eip7702AuthData = {
              authlist: [
                {
                  chainId: BigInt(odysseyTestnet2.id),
                  // WARNING this probably needs to be changed, since we don't have our own public deploy
                  codeAddress: '0x700b6a60ce7eaaea56f065753d8dcb9653dbad35', //ExperimentalDelegation.address,
                  nonce: nonce ?? 0n,
                  signature: '0x0' as Hex, // TODO: type 4 signature
                },
              ],
            }
            const encodedCallByUser = encodeCallByUser(callByUser)
            const encodedEIP7702AuthData =
              encodeEIP7702AuthData(eip7702AuthData)
            const encodedAsset = encodeAsset(callByUser.asset)
            const encodedOrderData = encodeOrderData({
              callByUser,
              authData: eip7702AuthData,
              asset: callByUser.asset,
            })

            sendCalls({
              chainId: odysseyTestnet2.id,
              calls: [
                {
                  abi: ExperimentERC20.abi,
                  to: '0x28077B47Cd03326De7838926A63699849DD4fa87',
                  functionName: 'approve',
                  args: [OriginSettler.address, amount],
                },
                {
                  abi: OriginSettler.abi,
                  to: OriginSettler.address,
                  functionName: 'open',
                  args: [
                    {
                      fillDeadline: maxUint32,
                      orderDataType: keccak256(toHex('TODO')),
                      orderData: encodedOrderData,
                    },
                  ],
                },
              ],
            })
          }}
        >
          <Button disabled={isPending} type="submit">
            {isPending ? 'Staking...' : 'Stake on destination'}
          </Button>
        </form>
      </div>
      {id && (
        <div>
          Transaction:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href={getTransactionLink(id, chainId)}
          >
            {shortenHash(id)}
          </a>
          {}
        </div>
      )}
      {isConfirming && 'Waiting for confirmation...'}
      {isConfirmed && 'Transaction confirmed.'}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </div>
  )
}
