import { Contract, providers } from 'ethers'
import { env } from '.'
import {
  destinationSettlerAbi,
  originSettlerAbi,
  testableERC20Abi,
} from '../abi'
import type { DestinationSettler, OriginSettler } from '../contract-types'

export function getProvider(providerUrl: string) {
  return new providers.JsonRpcProvider(providerUrl)
}
export function getOriginSettlerContract(provider: providers.Provider) {
  return new Contract(
    env.originSettler,
    originSettlerAbi,
    provider,
  ) as OriginSettler
}

export function getDestinationSettlerContract(provider: providers.Provider) {
  return new Contract(
    env.destinationSettler,
    destinationSettlerAbi,
    provider,
  ) as DestinationSettler
}
export function getDestinationProvider() {
  return new providers.JsonRpcProvider(env.destinationProviderUrl)
}

export function getTestableERC20Contract() {
  const provider = getProvider(env.destinationProviderUrl)
  return new Contract(
    '0x28077B47Cd03326De7838926A63699849DD4fa87',
    testableERC20Abi,
    provider,
  )
}
