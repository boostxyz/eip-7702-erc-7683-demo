export const originSettlerAbi = [
  {
    inputs: [],
    type: 'error',
    name: 'ReentrancyGuardReentrantCall',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    type: 'error',
    name: 'SafeERC20FailedOperation',
  },
  {
    inputs: [],
    type: 'error',
    name: 'WrongChainId',
  },
  {
    inputs: [],
    type: 'error',
    name: 'WrongExclusiveRelayer',
  },
  {
    inputs: [],
    type: 'error',
    name: 'WrongOrderDataType',
  },
  {
    inputs: [],
    type: 'error',
    name: 'WrongSettlementContract',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
        indexed: true,
      },
      {
        internalType: 'struct ResolvedCrossChainOrder',
        name: 'resolvedOrder',
        type: 'tuple',
        components: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'originChainId',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'openDeadline',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'fillDeadline',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'orderId',
            type: 'bytes32',
          },
          {
            internalType: 'struct Output[]',
            name: 'maxSpent',
            type: 'tuple[]',
            components: [
              {
                internalType: 'bytes32',
                name: 'token',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'recipient',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
              },
            ],
          },
          {
            internalType: 'struct Output[]',
            name: 'minReceived',
            type: 'tuple[]',
            components: [
              {
                internalType: 'bytes32',
                name: 'token',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'recipient',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
              },
            ],
          },
          {
            internalType: 'struct FillInstruction[]',
            name: 'fillInstructions',
            type: 'tuple[]',
            components: [
              {
                internalType: 'uint64',
                name: 'destinationChainId',
                type: 'uint64',
              },
              {
                internalType: 'bytes32',
                name: 'destinationSettler',
                type: 'bytes32',
              },
              {
                internalType: 'bytes',
                name: 'originData',
                type: 'bytes',
              },
            ],
          },
        ],
        indexed: false,
      },
    ],
    type: 'event',
    name: 'Open',
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: 'struct EIP7702AuthData',
        name: 'authData',
        type: 'tuple',
        components: [
          {
            internalType: 'struct Authorization[]',
            name: 'authlist',
            type: 'tuple[]',
            components: [
              {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'codeAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
            ],
          },
        ],
        indexed: false,
      },
    ],
    type: 'event',
    name: 'Requested7702Delegation',
    anonymous: false,
  },
  {
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    name: 'PERMIT2',
    outputs: [
      {
        internalType: 'contract IPermit2',
        name: '',
        type: 'address',
      },
    ],
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'orderData',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
    name: 'decode7683OrderData',
    outputs: [
      {
        internalType: 'struct CallByUser',
        name: 'calls',
        type: 'tuple',
        components: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'struct Asset',
            name: 'asset',
            type: 'tuple',
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
          },
          {
            internalType: 'uint64',
            name: 'chainId',
            type: 'uint64',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
          {
            internalType: 'struct Call[]',
            name: 'calls',
            type: 'tuple[]',
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
            ],
          },
        ],
      },
      {
        internalType: 'struct EIP7702AuthData',
        name: 'authData',
        type: 'tuple',
        components: [
          {
            internalType: 'struct Authorization[]',
            name: 'authlist',
            type: 'tuple[]',
            components: [
              {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'codeAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
            ],
          },
        ],
      },
      {
        internalType: 'struct Asset',
        name: 'asset',
        type: 'tuple',
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
      },
    ],
  },
  {
    inputs: [
      {
        internalType: 'struct OnchainCrossChainOrder',
        name: 'order',
        type: 'tuple',
        components: [
          {
            internalType: 'uint32',
            name: 'fillDeadline',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'orderDataType',
            type: 'bytes32',
          },
          {
            internalType: 'bytes',
            name: 'orderData',
            type: 'bytes',
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'open',
  },
  {
    inputs: [
      {
        internalType: 'struct GaslessCrossChainOrder',
        name: 'order',
        type: 'tuple',
        components: [
          {
            internalType: 'address',
            name: 'originSettler',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'originChainId',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'openDeadline',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'fillDeadline',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'orderDataType',
            type: 'bytes32',
          },
          {
            internalType: 'bytes',
            name: 'orderData',
            type: 'bytes',
          },
        ],
      },
      {
        internalType: 'bytes',
        name: 'permit2Signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'openFor',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    name: 'pendingOrders',
    outputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'filler',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'repayFiller',
  },
]
