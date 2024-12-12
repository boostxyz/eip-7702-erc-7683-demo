import { W } from 'porto/wagmi'
import {
  type Address,
  type Hex,
  concat,
  concatHex,
  formatEther,
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
  useReadContract,
  useSignMessage,
  useWalletClient,
} from 'wagmi'
import { useCallsStatus, useSendCalls } from 'wagmi/experimental'

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
} from '../settler'

export function Stake() {
  return (
    <>
      <BalanceAndStake />
      <StakeForm />
      <Mint />
    </>
  )
}

function BalanceAndStake() {
  const { address } = useAccount()
  const { data: balance } = useReadContract({
    ...ExperimentERC20,
    address: '0x28077B47Cd03326De7838926A63699849DD4fa87',
    query: {
      enabled: !!address,
      refetchInterval: 2_000,
    },
    functionName: 'balanceOf',
    args: [address!],
    chainId: odysseyTestnet2.id,
  })
  const { data: staked } = useReadContract({
    ...Staking,
    functionName: 'userStakes',
    args: [address!],
    chainId: odysseyTestnet2.id,
  })

  return (
    <div>
      <div>Balance (origin): {formatEther(balance ?? 0n)} USDC</div>
      <div>Stake (destination): {formatEther(staked ?? 0n)} USDC</div>
    </div>
  )
}

function StakeForm() {
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
    <div>
      <h2>Stake</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const amount = parseEther('1')

          const encodedStakingCalls = encodeStakingCalls({
            amount,
            user: address!,
          })
          const encodedCallByUserCalls = encodeCallByUserCalls(
            encodedStakingCalls,
            nonce ?? 0n,
          )
          const signature = await signMessageAsync({
            message: encodedCallByUserCalls,
          })
          const callByUser = {
            user: address!,
            nonce: nonce ?? 0n,
            asset: {
              token: '0x238c8CD93ee9F8c7Edf395548eF60c0d2e46665E' as Address,
              amount,
            },
            chainId: BigInt(odysseyTestnet2.id),
            signature,
            calls: encodedStakingCalls,
          }
          const eip7702AuthDataFromInit = JSON.parse(
            localStorage.getItem('eip7702AuthData') ?? '{}',
          )

          const eip7702AuthData = {
            authlist: [
              {
                chainId: BigInt(odysseyTestnet2.id),
                codeAddress: ExperimentalDelegation.address,
                nonce: nonce ?? 0n,
                signature: '0x0' as Hex,
              },
            ],
          }
          const encodedCallByUser = encodeCallByUser(callByUser)
          const encodedEIP7702AuthData = encodeEIP7702AuthData(eip7702AuthData)
          const encodedAsset = encodeAsset(callByUser.asset)
          const encodedOrderData = concatHex([
            encodedCallByUser,
            encodedEIP7702AuthData,
            encodedAsset,
          ])

          sendCalls({
            chainId: odysseyTestnet2.id,
            calls: [
              {
                abi: ExperimentERC20.abi,
                to: '0x238c8CD93ee9F8c7Edf395548eF60c0d2e46665E',
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
        <button disabled={isPending} type="submit">
          {isPending ? 'Confirming...' : 'Stake'}
        </button>
      </form>
      {id && <div>Transaction Hash: {id}</div>}
      {isConfirming && 'Waiting for confirmation...'}
      {isConfirmed && 'Transaction confirmed.'}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </div>
  )
}

function Mint() {
  const { address } = useAccount()
  const { data: id, error, isPending, sendCalls } = useSendCalls()

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

  return (
    <div>
      <h2>Mint USDC</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          sendCalls({
            calls: [
              {
                abi: ExperimentERC20.abi,
                to: '0x28077B47Cd03326De7838926A63699849DD4fa87',
                functionName: 'mint',
                args: [address!, parseEther('100')],
              },
            ],
          })
        }}
      >
        <button disabled={isPending} type="submit">
          {isPending ? 'Confirming...' : 'Mint 100 USDC'}
        </button>
      </form>
      {id && <div>Transaction Hash: {id}</div>}
      {isConfirming && 'Waiting for confirmation...'}
      {isConfirmed && 'Transaction confirmed.'}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </div>
  )
}
