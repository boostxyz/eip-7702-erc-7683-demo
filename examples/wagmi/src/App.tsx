import { Account, Balance, GrantSession, Onboarding, Stake } from '@/components'
import { useAccount } from 'wagmi'

export function App() {
  const { isConnected } = useAccount()
  return (
    <main className="min-h-[100vh] w-full flex flex-col items-center gap-4 py-4 px-8 bg-background">
      <nav className="h-10 px-4 w-full flex items-center justify-between mb-[100px]">
        <img className="h-8" src="/logo.svg" alt="across-logo" />
        <h1>Chain Abstraction demo</h1>
      </nav>
      {isConnected ? (
        <div className="container">
          <Account />
          <Balance />
          <GrantSession />
          <Stake />
        </div>
      ) : (
        <Onboarding />
      )}
    </main>
  )
}
