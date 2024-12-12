import { defineChain } from 'viem'

export const odyssey2 = defineChain({
  id: 9118672,
  name: 'Odyssey2',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-odyssey-2.t.conduit.xyz'],
      webSocket: ['wss://rpc-odyssey-2.t.conduit.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Explorer',
      url: 'https://explorer-odyssey-2.t.conduit.xyz',
    },
  },
})
