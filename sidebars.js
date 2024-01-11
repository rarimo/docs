/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: true,
      link: {},
      items: ['overview', 'overview/identity', 'overview/bridge'],
    },
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: true,
      link: {},
      items: [
        'use-cases',
        'use-cases/ssi',
        'use-cases/proof-of-humanity',
        'use-cases/token-agnostic',
        'use-cases/polygon-id',
        'use-cases/social-graphs',
        'use-cases/multi-chain-mint',
        'use-cases/gaming-profiles',
        'use-cases/cctp',
        'use-cases/proofs',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: true,
      link: {},
      items: [
        'tutorials',
        'tutorials/bundling',
        'tutorials/connecting-to-wallets',
        'tutorials/creating-transactions',
        'tutorials/swapping-tokens',
      ],
    },
    {
      type: 'category',
      label: 'How-To Guides',
      collapsed: true,
      link: {},
      items: [
        'how-to-guides',
        'how-to-guides/zkp-verification',
        'how-to-guides/setup-issuer',
        'how-to-guides/validator-setup',
        'how-to-guides/staking',
        'how-to-guides/poh-offchain-verification',
        'how-to-guides/poh-questn',
        'how-to-guides/poh-zealy',
        'how-to-guides/poh-galxe',
        'how-to-guides/proof-of-humanity-collabland-discord',
        'how-to-guides/polygon-id-state-replication',
        'how-to-guides/worldcoin-state-replication',
        'how-to-guides/add-rarimo-credentials-to-rarime',
      ],
    },
    {
      type: 'category',
      label: 'Technical Reference',
      collapsed: true,
      link: {},
      items: [
        'reference',
        {
          type: 'category',
          label: 'Contracts',
          link: {},
          collapsed: true,
          items: [
            'reference/contracts',
            'reference/contracts/identity',
            {
              type: 'category',
              label: 'Bridge Protocol Contracts',
              link: {},
              collapsed: true,
              items: [
                'reference/contracts/bridge',
                'reference/contracts/bridge/evm',
                'reference/contracts/bridge/near',
                'reference/contracts/bridge/solana',
              ],
            },
          ],
        },
        'reference/proof-of-humanity',
        'reference/polygonid-state-replication',
        'reference/world-id-state-replication',
        'reference/api',
        {
          type: 'category',
          label: 'JavaScript SDK',
          link: {},
          collapsed: true,
          items: [
            'reference/sdk',
            'reference/sdk/packages-base',
            'reference/sdk/packages-provider',
            'reference/sdk/packages-bridge',
            'reference/sdk/packages-identity',
          ],
        },
        {
          type: 'category',
          label: 'Core',
          link: {},
          collapsed: true,
          items: [
            'reference/core',
            'reference/core/rarimocore',
            'reference/core/tokenmanager',
            'reference/core/oraclemanager',
            'reference/core/tss',
            'reference/core/oracles',
          ],
        },
        'reference/audits',
        'reference/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Whitepaper',
      collapsed: true,
      link: {},
      items: [
        'whitepaper',
        'whitepaper/problem_statement',
        'whitepaper/protocol-vision',
        'whitepaper/architecture-and-operating-principles',
        'whitepaper/main-flow-of-messages-transferring',
        'whitepaper/rarimo-identity-sub-protocol',
        'whitepaper/light-wallet-supporting',
        'whitepaper/security-and-efficiency',
        'whitepaper/utilities-of-the-token',
        'whitepaper/governance',
        'whitepaper/summary',
        'whitepaper/sources',
      ],
    },
  ],
}

module.exports = sidebars
