import { W } from 'porto/wagmi'

export function GrantSession() {
  const sessions = W.useSessions()
  const grantSession = W.useGrantSession()

  if (sessions.data?.length !== 0) return null
  return (
    <div>
      <h2>Grant Session</h2>
      <button onClick={() => grantSession.mutate({})} type="button">
        Grant Session
      </button>
      {grantSession.data && <div>Session granted.</div>}
      {grantSession.error && (
        <div>
          Error: {grantSession.error.shortMessage || grantSession.error.message}
        </div>
      )}
    </div>
  )
}
