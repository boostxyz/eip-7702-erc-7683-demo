import {
  DestinationSettlerClient,
  env,
  getOriginSettlerContract,
  getProvider,
  odyssey2,
} from './lib'

async function main() {
  // Get providers.
  const originProvider = getProvider(env.originProviderUrl)
  const originChainId = (await originProvider.getNetwork()).chainId
  const destinationProvider = getProvider(env.destinationProviderUrl)
  const destinationChainId = (await destinationProvider.getNetwork()).chainId

  const originSettler = getOriginSettlerContract(originProvider)
  const destinationSettlerClient = new DestinationSettlerClient(
    `0x${process.env.RELAYER_PRIVATE_KEY}`,
  )
  originSettler.on(
    originSettler.filters.Open(),
    async (orderId, resolvedOrder, openEvent) => {
      const txnHash = await destinationSettlerClient.fill(resolvedOrder)
    },
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
