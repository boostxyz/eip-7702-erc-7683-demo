import { Porto } from 'porto'
import { defineChain } from 'viem'
import { http, createConfig, createStorage } from 'wagmi'
import { odysseyTestnet } from 'wagmi/chains'

export const odysseyTestnet2 = defineChain({
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
})

export const porto = Porto.create({})

export const wagmiConfig = createConfig({
  chains: [odysseyTestnet, odysseyTestnet2],
  storage: createStorage({ storage: localStorage }),
  transports: {
    [odysseyTestnet.id]: http(),
    [odysseyTestnet2.id]: http(),
  },
})
