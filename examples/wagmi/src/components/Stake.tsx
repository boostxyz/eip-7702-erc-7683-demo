import { useState } from 'react'
import { type BaseError, useChainId } from 'wagmi'
import { useCallsStatus, useSendCalls } from 'wagmi/experimental'
import { getTransactionLink, shortenHash } from '../lib/utils'
import { Button, Input } from './ui'

export function Stake() {
  const chainId = useChainId()
  const [amount, setAmount] = useState<string>('')
  const { data: hash, error, isPending, sendCalls } = useSendCalls()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useCallsStatus({
    id: hash as string,
    query: {
      enabled: !!hash,
      refetchInterval({ state }) {
        if (state.data?.status === 'CONFIRMED') return false
        return 1_000
      },
    },
  })

  return (
    <div className="mt-10 flex flex-col items-start gap-6">
      <h2 className="text-3xl font-bold">Stake</h2>
      <Input
        className="text-2xl"
        placeholder="100 USDC"
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        className="w-fit px-6"
        // TODO: update calls
        onClick={() => sendCalls({ calls: [] })}
        disabled={isPending}
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Stake'}
      </Button>

      {hash && (
        <div>
          Transaction:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href={getTransactionLink(hash, chainId)}
          >
            {shortenHash(hash)}
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
