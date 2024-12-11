import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { wagmiConfig } from '../config'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTransactionLink(
  hash: string | undefined,
  chainId: number | undefined,
) {
  const chain = wagmiConfig.chains.find((c) => c.id === chainId)
  if (!chain) return
  return `${chain.blockExplorers.default.url}/tx/${hash}`
}

export function getAddressLink(
  address: string | undefined,
  chainId: number | undefined,
) {
  const chain = wagmiConfig.chains.find((c) => c.id === chainId)
  if (!chain) return
  return `${chain.blockExplorers.default.url}/address/${address}`
}

export function shortenHash(hash: string | undefined) {
  if (!hash) return
  return `${hash.slice(0, 5)}...${hash.slice(-5)}`
}
