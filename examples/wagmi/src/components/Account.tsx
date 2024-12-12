import { getAddressLink, shortenHash } from '@/lib/utils'
import { W } from 'porto/wagmi'
import { useAccount } from 'wagmi'
import { Button } from './ui'

export function Account() {
  const account = useAccount()
  const disconnect = W.useDisconnect()

  return (
    <div className="w-full text-xl flex flex-col gap-2 items-start mb-8">
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold ">Account:</span>
        <a
          target="_blank"
          rel="noreferrer"
          href={getAddressLink(account.address, account.chainId)}
        >
          {shortenHash(account.address)}
        </a>

        {account.status !== 'disconnected' && (
          <Button
            className="ml-auto"
            type="button"
            onClick={() => disconnect.mutate({})}
          >
            Log Out
          </Button>
        )}
      </div>

      {/* <div className="w-full flex gap-2 items-center">
        <span className="font-bold ">Chain ID:</span>
        <span>{account.chainId}</span>
      </div> */}
    </div>
  )
}
