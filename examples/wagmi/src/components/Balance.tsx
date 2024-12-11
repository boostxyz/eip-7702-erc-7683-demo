import { odysseyTestnet2 } from '@/config'
import { formatEther } from 'viem'
import { useAccount, useReadContract } from 'wagmi'
import { ExperimentERC20, Staking } from '.././contracts'

export function Balance() {
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
      <div className="text-xl">
        Balance:{' '}
        <span className="text-primary/80">
          {formatEther(balance ?? 0n)} USDC
        </span>
      </div>
      <div className="text-xl">
        Stake:{' '}
        <span className="text-primary/80">
          {formatEther(staked ?? 0n)} USDC
        </span>
      </div>
    </div>
  )
}
