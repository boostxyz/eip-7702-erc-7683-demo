import { odysseyTestnet2 } from '@/config'
import { type BaseError, formatEther, parseEther } from 'viem'
import { useAccount, useBalance, useReadContract } from 'wagmi'
import { ExperimentERC20, Staking } from '.././contracts'
import { useCallsStatus } from 'wagmi/experimental'
import { useSendCalls } from 'wagmi/experimental'

export function Balance() {
  const { address } = useAccount()
  const { data: balance } = useBalance({
    address: address!,
    chainId: odysseyTestnet2.id,
  })
  const { data: balanceUSDC } = useReadContract({
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
    <div className="w-full flex flex-col gap-4">
      <div className="text-xl">
        ETH Balance (origin):{' '}
        <span className="text-primary/80">
          {formatEther(balance?.value ?? 0n)} ETH
        </span>
      </div>
      <div className="flex-row flex-between text-xl">
        USDC Balance (origin):{' '}
        <span className="text-primary/80">
          {formatEther(balanceUSDC ?? 0n)} USDC{' '}
        </span>
        <button
          type="button"
          onClick={(e) => {
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
          Mint
        </button>
      </div>
      <div className="text-xl">
        Stake (destination):{' '}
        <span className="text-primary/80">
          {/* {formatEther(100000000000000000000n ?? 0n)} USDC */}
          {formatEther(staked ?? 0n)} USDC
        </span>
      </div>
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
