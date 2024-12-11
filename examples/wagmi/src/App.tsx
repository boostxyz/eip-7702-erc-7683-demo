import { W } from 'porto/wagmi'
import type { Hex } from 'viem'
import { useAccount, useConnectors } from 'wagmi'

import { useState } from 'react'
import {
  generatePrivateKey,
  privateKeyToAccount,
  privateKeyToAddress,
} from 'viem/accounts'
import { Stake } from './components/Stake'

export function App() {
  const { isConnected } = useAccount()
  return (
    <>
      <Account />
      {isConnected ? (
        <Stake />
      ) : (
        <>
          <Connect />
          <ImportAccount />
        </>
      )}
    </>
  )
}

function Account() {
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

function Connect() {
  const [grantSession, setGrantSession] = useState<boolean>(true)

  const connectors = useConnectors()
  const connect = W.useConnect()

  return (
    <div>
      <h2>Connect</h2>
      <label>
        <input
          type="checkbox"
          checked={grantSession}
          onChange={() => setGrantSession((x) => !x)}
        />
        Grant Session
      </label>
      {connectors
        .filter((x) => x.id === 'xyz.ithaca.porto')
        ?.map((connector) => (
          <div key={connector.uid}>
            <button
              key={connector.uid}
              onClick={() => connect.mutate({ connector, grantSession })}
              type="button"
            >
              Login
            </button>
            <button
              onClick={() =>
                connect.mutate({ connector, createAccount: true, grantSession })
              }
              type="button"
            >
              Register
            </button>
          </div>
        ))}
      <div>{connect.status}</div>
      <div>{connect.error?.message}</div>
    </div>
  )
}

function ImportAccount() {
  const [accountData, setAccountData] = useState<{
    address: string
    privateKey: string
  } | null>(null)
  const [grantSession, setGrantSession] = useState<boolean>(true)
  const [privateKey, setPrivateKey] = useState<string>('')

  const connectors = useConnectors()
  const importAccount = W.useImportAccount()

  return (
    <div>
      <h2>Import Account</h2>
      <p>
        <button
          onClick={() => {
            const privateKey = generatePrivateKey()
            setPrivateKey(privateKey)
            setAccountData({
              privateKey,
              address: privateKeyToAddress(privateKey),
            })
          }}
          type="button"
        >
          Create Account
        </button>
        {accountData && <pre>{JSON.stringify(accountData, null, 2)}</pre>}
      </p>
      <div>
        <input
          type="text"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
          placeholder="Private Key"
          style={{ width: '300px' }}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={grantSession}
            onChange={() => setGrantSession((x) => !x)}
          />
          Grant Session
        </label>
      </div>
      {connectors
        .filter((x) => x.id === 'xyz.ithaca.porto')
        ?.map((connector) => (
          <button
            key={connector.uid}
            onClick={() =>
              importAccount.mutate({
                account: privateKeyToAccount(privateKey as Hex),
                connector,
                grantSession,
              })
            }
            type="button"
          >
            Import Account
          </button>
        ))}
      <div>{importAccount.status}</div>
      <div>{importAccount.error?.message}</div>
    </div>
  )
}
