import { formatEther } from 'viem'
import { useAccount, useReadContract } from 'wagmi'
import { ExperimentERC20 } from '.././contracts'

export function Balance() {
  const { address } = useAccount()
  // TODO: add token contract

  const { data: balance } = useReadContract({
    ...ExperimentERC20,
    query: {
      enabled: !!address,
      refetchInterval: 2_000,
    },
    functionName: 'balanceOf',
    args: [address!],
  })

  return (
    <>
      <div>Balance: {formatEther(balance ?? 0n)} USDC</div>
    </>
  )
}
