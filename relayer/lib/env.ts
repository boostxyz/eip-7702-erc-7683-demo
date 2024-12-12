import * as dotenv from 'dotenv'
import { ethers } from 'ethers'
dotenv.config({ path: '.env' })

function getEnvVar(varName: string, defaultValue?: string): string {
  const envValue = process.env[varName]
  if (envValue !== undefined) return envValue
  if (defaultValue !== undefined) return defaultValue
  throw new Error(`Environment error: ${varName} not set.`)
}

// Validate private key and prepend 0x prefix if missing.
function getPrivateKey(input: string): string {
  // Prepend 0x if missing.
  const privateKey = input.startsWith('0x') ? input : '0x' + input
  if (!ethers.utils.isHexString(privateKey, 32))
    throw new Error(`Value ${input} not a valid private key`)
  return privateKey
}

// A wrapper around parseInt that throws if the output is NaN.
function getInt(input: string): number {
  const output = Number.parseInt(input)
  if (Number.isNaN(output))
    throw new Error(`Value ${input} cannot be converted to an int`)
  return output
}

export const env = {
  originProviderUrl: getEnvVar('ORIGIN_PROVIDER_URL'),
  destinationProviderUrl: getEnvVar('DESTINATION_PROVIDER_URL'),
  relayerKey: getPrivateKey(getEnvVar('RELAYER_PRIVATE_KEY')),
  destinationSettler: ethers.utils.getAddress(getEnvVar('DESTINATION_SETTLER')),
  originSettler: ethers.utils.getAddress(getEnvVar('ORIGIN_SETTLER')),
}
