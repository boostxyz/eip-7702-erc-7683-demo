import { W } from 'porto/wagmi'
import { useAccount } from 'wagmi'

export function Account() {
  const account = useAccount()
  const { data: sessions } = W.useSessions()
  const disconnect = W.useDisconnect()

  return (
    <div>
      <h2>Account</h2>

      <div>
        account: {account.address}
        <br />
        chainId: {account.chainId}
        <br />
        status: {account.status}
        <br />
        sessions: {JSON.stringify(sessions)}
      </div>

      {account.status !== 'disconnected' && (
        <button type="button" onClick={() => disconnect.mutate({})}>
          Log Out
        </button>
      )}
    </div>
  )
}
