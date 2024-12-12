export const ExperimentERC20 = {
  abi: [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    {
      type: 'function',
      name: 'DOMAIN_SEPARATOR',
      inputs: [],
      outputs: [{ name: 'result', type: 'bytes32' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'allowance',
      inputs: [
        { name: 'owner', type: 'address' },
        { name: 'spender', type: 'address' },
      ],
      outputs: [{ name: 'result', type: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'approve',
      inputs: [
        { name: 'spender', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'balanceOf',
      inputs: [{ name: 'owner', type: 'address' }],
      outputs: [{ name: 'result', type: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'burnForEther',
      inputs: [{ name: 'amount', type: 'uint256' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'decimals',
      inputs: [],
      outputs: [{ name: '', type: 'uint8' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'mint',
      inputs: [
        { name: 'to', type: 'address' },
        { name: 'value', type: 'uint256' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'mintForEther',
      inputs: [],
      outputs: [],
      stateMutability: 'payable',
    },
    {
      type: 'function',
      name: 'name',
      inputs: [],
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'nonces',
      inputs: [{ name: 'owner', type: 'address' }],
      outputs: [{ name: 'result', type: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'permit',
      inputs: [
        { name: 'owner', type: 'address' },
        { name: 'spender', type: 'address' },
        { name: 'value', type: 'uint256' },
        { name: 'deadline', type: 'uint256' },
        { name: 'v', type: 'uint8' },
        { name: 'r', type: 'bytes32' },
        { name: 's', type: 'bytes32' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'symbol',
      inputs: [],
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'totalSupply',
      inputs: [],
      outputs: [{ name: 'result', type: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'transfer',
      inputs: [
        { name: 'to', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'transferFrom',
      inputs: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'Approval',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          indexed: true,
        },
        {
          name: 'spender',
          type: 'address',
          indexed: true,
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Transfer',
      inputs: [
        {
          name: 'from',
          type: 'address',
          indexed: true,
        },
        { name: 'to', type: 'address', indexed: true },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
        },
      ],
      anonymous: false,
    },
    { type: 'error', name: 'AllowanceOverflow', inputs: [] },
    { type: 'error', name: 'AllowanceUnderflow', inputs: [] },
    { type: 'error', name: 'InsufficientAllowance', inputs: [] },
    { type: 'error', name: 'InsufficientBalance', inputs: [] },
    { type: 'error', name: 'InvalidPermit', inputs: [] },
    { type: 'error', name: 'Permit2AllowanceIsFixedAtInfinity', inputs: [] },
    { type: 'error', name: 'PermitExpired', inputs: [] },
    { type: 'error', name: 'TotalSupplyOverflow', inputs: [] },
  ],
  address: '0x238c8CD93ee9F8c7Edf395548eF60c0d2e46665E',
} as const

export const OriginSettler = {
  abi: [
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
  ],
  address: '0x2d4710F04Da90184255782d3715224A6C776955D',
} as const

export const Staking = {
  abi: [
    {
      inputs: [
        {
          internalType: 'contract IERC20',
          name: '_token',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'SafeERC20FailedOperation',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'caller',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Staked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Withdrawn',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'stake',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'stakeFor',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token',
      outputs: [
        {
          internalType: 'contract IERC20',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'userStakes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'withdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'withdrawTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  address: '0x38fAc33bD20D4c4Cce085C0f347153C06CbA2968',
} as const

export const ExperimentalDelegation = {
  abi: [
    { type: 'fallback', stateMutability: 'payable' },
    { type: 'receive', stateMutability: 'payable' },
    {
      type: 'function',
      name: 'OWNER_METADATA',
      inputs: [],
      outputs: [{ name: '', type: 'bytes', internalType: 'bytes' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'authorize',
      inputs: [
        {
          name: 'keys_',
          type: 'tuple[]',
          internalType: 'struct ExperimentalDelegation.Key[]',
          components: [
            { name: 'expiry', type: 'uint256', internalType: 'uint256' },
            {
              name: 'keyType',
              type: 'uint8',
              internalType: 'enum ExperimentalDelegation.KeyType',
            },
            {
              name: 'publicKey',
              type: 'tuple',
              internalType: 'struct ECDSA.PublicKey',
              components: [
                { name: 'x', type: 'uint256', internalType: 'uint256' },
                { name: 'y', type: 'uint256', internalType: 'uint256' },
              ],
            },
          ],
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'authorize',
      inputs: [
        {
          name: 'keys_',
          type: 'tuple[]',
          internalType: 'struct ExperimentalDelegation.Key[]',
          components: [
            { name: 'expiry', type: 'uint256', internalType: 'uint256' },
            {
              name: 'keyType',
              type: 'uint8',
              internalType: 'enum ExperimentalDelegation.KeyType',
            },
            {
              name: 'publicKey',
              type: 'tuple',
              internalType: 'struct ECDSA.PublicKey',
              components: [
                { name: 'x', type: 'uint256', internalType: 'uint256' },
                { name: 'y', type: 'uint256', internalType: 'uint256' },
              ],
            },
          ],
        },
        { name: 'signature', type: 'bytes', internalType: 'bytes' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'execute',
      inputs: [{ name: 'calls', type: 'bytes', internalType: 'bytes' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'execute',
      inputs: [
        { name: 'calls', type: 'bytes', internalType: 'bytes' },
        { name: 'signature', type: 'bytes', internalType: 'bytes' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'getKeys',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'tuple[]',
          internalType: 'struct ExperimentalDelegation.Key[]',
          components: [
            { name: 'expiry', type: 'uint256', internalType: 'uint256' },
            {
              name: 'keyType',
              type: 'uint8',
              internalType: 'enum ExperimentalDelegation.KeyType',
            },
            {
              name: 'publicKey',
              type: 'tuple',
              internalType: 'struct ECDSA.PublicKey',
              components: [
                { name: 'x', type: 'uint256', internalType: 'uint256' },
                { name: 'y', type: 'uint256', internalType: 'uint256' },
              ],
            },
          ],
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'initialize',
      inputs: [
        { name: 'label_', type: 'string', internalType: 'string' },
        {
          name: 'keys_',
          type: 'tuple[]',
          internalType: 'struct ExperimentalDelegation.Key[]',
          components: [
            { name: 'expiry', type: 'uint256', internalType: 'uint256' },
            {
              name: 'keyType',
              type: 'uint8',
              internalType: 'enum ExperimentalDelegation.KeyType',
            },
            {
              name: 'publicKey',
              type: 'tuple',
              internalType: 'struct ECDSA.PublicKey',
              components: [
                { name: 'x', type: 'uint256', internalType: 'uint256' },
                { name: 'y', type: 'uint256', internalType: 'uint256' },
              ],
            },
          ],
        },
        {
          name: 'signature',
          type: 'tuple',
          internalType: 'struct ECDSA.Signature',
          components: [
            { name: 'r', type: 'uint256', internalType: 'uint256' },
            { name: 's', type: 'uint256', internalType: 'uint256' },
            { name: 'yParity', type: 'uint8', internalType: 'uint8' },
          ],
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'initialize',
      inputs: [
        { name: 'label_', type: 'string', internalType: 'string' },
        {
          name: 'keys_',
          type: 'tuple[]',
          internalType: 'struct ExperimentalDelegation.Key[]',
          components: [
            { name: 'expiry', type: 'uint256', internalType: 'uint256' },
            {
              name: 'keyType',
              type: 'uint8',
              internalType: 'enum ExperimentalDelegation.KeyType',
            },
            {
              name: 'publicKey',
              type: 'tuple',
              internalType: 'struct ECDSA.PublicKey',
              components: [
                { name: 'x', type: 'uint256', internalType: 'uint256' },
                { name: 'y', type: 'uint256', internalType: 'uint256' },
              ],
            },
          ],
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'isValidSignature',
      inputs: [
        { name: 'digest', type: 'bytes32', internalType: 'bytes32' },
        { name: 'signature', type: 'bytes', internalType: 'bytes' },
      ],
      outputs: [{ name: 'magicValue', type: 'bytes4', internalType: 'bytes4' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'keys',
      inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      outputs: [
        { name: 'expiry', type: 'uint256', internalType: 'uint256' },
        {
          name: 'keyType',
          type: 'uint8',
          internalType: 'enum ExperimentalDelegation.KeyType',
        },
        {
          name: 'publicKey',
          type: 'tuple',
          internalType: 'struct ECDSA.PublicKey',
          components: [
            { name: 'x', type: 'uint256', internalType: 'uint256' },
            { name: 'y', type: 'uint256', internalType: 'uint256' },
          ],
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'label',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'nonce',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'revoke',
      inputs: [{ name: 'keyIndex', type: 'uint32', internalType: 'uint32' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'revoke',
      inputs: [
        { name: 'keyIndex', type: 'uint32', internalType: 'uint32' },
        { name: 'signature', type: 'bytes', internalType: 'bytes' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    { type: 'error', name: 'AlreadyInitialized', inputs: [] },
    { type: 'error', name: 'InvalidAuthority', inputs: [] },
    { type: 'error', name: 'InvalidSignature', inputs: [] },
    { type: 'error', name: 'KeyExpiredOrUnauthorized', inputs: [] },
  ],
  address: '0xd2ecb3afe598b746F8123CaE365a598DA831A449',
} as const
