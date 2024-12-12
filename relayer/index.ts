import { env, getOriginSettlerContract, getProvider } from './lib'

async function main() {
  // Get providers.
  const originProvider = getProvider(env.originProviderUrl)
  const originChainId = (await originProvider.getNetwork()).chainId
  const destinationProvider = getProvider(env.destinationProviderUrl)
  const destinationChainId = (await destinationProvider.getNetwork()).chainId

  const originSettler = getOriginSettlerContract(originProvider)

  originSettler.on(
    originSettler.filters.Open(),
    (orderId, resolvedOrder, openEvent) => {},
  )
}

main()
