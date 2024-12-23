import {
  boostCoreAbi,
  destinationSettlerAbi,
  mockErc20Abi,
  originSettlerAbi,
} from '@boostxyz/evm'
import {
  env,
  odyssey2,
} from './lib'

import {
  type Address,
  createPublicClient,
  createWalletClient,
  encodeAbiParameters,
  type Hex,
  http,
  maxUint256,
} from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
const boostCoreAddress = process.env.BOOST_CORE as Address

const account = privateKeyToAccount(env.relayerKey)

async function main() {
  await setupFillerAllowance();
  // Get providers.
  const originClient = createPublicClient({
    chain: odyssey2,
    transport: http(env.originProviderUrl),
  })

  /*
  const logs = await originClient.getContractEvents({
    address: env.originSettler,
    abi: originSettlerAbi,
    eventName: 'Open',
    //fromBlock: 1662584n,
    fromBlock: 2343324n,
    toBlock: 2343324n + 100000n,
  })
  if (logs.length > 0) {
    console.info('found prior open events')
  }
  */

  console.log('Listening for deposit events.')

  originClient.watchContractEvent({
    address: env.originSettler,
    abi: originSettlerAbi,
    eventName: 'Open',
    onLogs: (logs) =>
      fillOrder(
        logs[0].args.orderId,
        // note, only the FIRST call is parsed for this demo
        logs[0].args.resolvedOrder.fillInstructions[0].originData,
      ),
  })
}

run()

async function run() {
  main().catch((error) => {
    console.error(error)
    //run()
  })
}

async function fillOrder(orderId: Hex, userCalls: Hex) {
  const publicClient = createPublicClient({
    chain: odyssey2,
    transport: http(env.destinationProviderUrl),
  })
  const walletClient = createWalletClient({
    account,
    chain: odyssey2,
    transport: http(env.destinationProviderUrl),
  })

  const boostCount = await publicClient.readContract({
    address: boostCoreAddress,
    abi: boostCoreAbi,
    functionName: 'getBoostCount',
  })

  console.log('latest Boost: ', boostCount)

  const fillerData = encodeAbiParameters(
    [
      { name: 'boostId', type: 'uint' },
      { name: 'incentiveId', type: 'uint' },
    ],
    [boostCount - 1n, 0n],
  )

  const result = await publicClient.simulateContract({
    account,
    address: env.destinationSettler,
    abi: destinationSettlerAbi,
    functionName: 'fill',
    args: [orderId, userCalls, fillerData],
  })

  await walletClient.writeContract(result.request)
  console.log('Success!')
}

async function setupFillerAllowance() {

  const publicClient = createPublicClient({
    chain: odyssey2,
    transport: http(env.destinationProviderUrl),
  })
  const walletClient = createWalletClient({
    account,
    chain: odyssey2,
    transport: http(env.destinationProviderUrl),
  })

  const result = await publicClient.simulateContract({
    account,
    address: '0x28077B47Cd03326De7838926A63699849DD4fa87',
    abi: mockErc20Abi,
    functionName: 'approve',
    args: [env.destinationSettler, maxUint256],
  })

  await walletClient.writeContract(result.request)
  console.log('Success!')


}
