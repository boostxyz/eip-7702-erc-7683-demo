import { formatEther } from 'viem'
import { useAccount, useReadContract } from 'wagmi'
import { ExperimentERC20 } from '.././contracts'

export function Balance() {
  const { address } = useAccount()
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
    <div>
      <h2>Balance</h2>
      <div>Balance: {formatEther(balance ?? 0n)} EXP</div>
    </div>
  )
}
