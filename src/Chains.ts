import type * as Address from 'ox/Address'
import type { Chain as Chain_viem } from 'viem'
import * as chains from 'viem/chains'
// import { experimentalDelegationAddress } from './generated.js'

export type Chain = Chain_viem & {
  contracts: Chain_viem['contracts'] & {
    accountDelegation: {
      address: Address.Address
    }
  }
}

export function define<const chain extends Chain>(chain: chain): chain {
  return chain
}

export const odysseyTestnet = /*#__PURE__*/ define({
  ...chains.odysseyTestnet,
  contracts: {
    ...chains.odysseyTestnet.contracts,
    accountDelegation: {
      // address: experimentalDelegationAddress[chains.odysseyTestnet.id],
      address: '0x3Db06DA8F0a24A525f314eeC954fC5c6a973d40E',
    },
  },
})

export const odysseyTestnet2 = /*#__PURE__*/ define({
  id: 9118672,
  name: 'Odyssey Testnet 2',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-odyssey-2.t.conduit.xyz'] },
  },
  blockExplorers: {
    default: {
      name: 'Blockexplorer',
      url: 'https://explorer-odyssey-2.t.conduit.xyz',
    },
  },
  contracts: {
    ...chains.odysseyTestnet.contracts,
    accountDelegation: {
      address: '0xd2ecb3afe598b746F8123CaE365a598DA831A449',
    },
  },
})
