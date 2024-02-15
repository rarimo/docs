/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'overview',
    {
      type: 'category',
      label: 'Use Cases',
      link: {
        type: 'generated-index',
        title: 'Use Cases',
        description: 'Learn about the different use cases for Rarimo Protocol',
        slug: '/use-cases',
      },
      collapsed: true,
      items: [
        'use-cases/self-sovereign-identity',
        'use-cases/identity-protocol-state-replication',
        'use-cases/gaming-profiles',
        'use-cases/social-graphs',
        'use-cases/cross-chain-proofs',
        'use-cases/multi-chain-mints',
      ],
    },
    {
      type: 'html',
      value: `
        <div class="menu__splitter"></div>
      `
    },
    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">Products</span>
      `
    },
    {
      type: 'category',
      label: 'Base Layer',
      link: {type: 'doc', id: 'products/base-layer/overview'},
      collapsed: true,
      items: [
        'products/base-layer/rarimo-core',
        'products/base-layer/oracles',
        'products/base-layer/threshold-signature',
        'products/base-layer/validator-node-operator-guide',
        'products/base-layer/staking-guide',
        'products/base-layer/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Identity Protocol',
      link: {type: 'doc', id: 'products/identity-protocol/overview'},
      collapsed: true,
      items: [
        'products/identity-protocol/guide-how-to-set-up-credentials-issuer',
        'products/identity-protocol/guide-how-to-verify-zero-knowledge-proof-in-a-smart-contract',
        'products/identity-protocol/smart-contracts-reference',
        'products/identity-protocol/js-sdk-reference',
      ],
    },
    {
      type: 'category',
      label: 'Bridging Protocol',
      link: { type: 'doc', id: 'products/bridging-protocol/overview' },
      collapsed: true,
      items: [
        'products/bridging-protocol/circle-cctp-integration',
        'products/bridging-protocol/guide-how-to-bundle-transactions',
        'products/bridging-protocol/connecting-to-wallets',
        {
          type: 'category',
          label: 'Smart Contracts Reference',
          link: { type: 'doc', id: 'products/bridging-protocol/smart-contracts-reference/overview' },
          collapsed: true,
          items: [
            'products/bridging-protocol/smart-contracts-reference/evm',
            'products/bridging-protocol/smart-contracts-reference/solana',
            'products/bridging-protocol/smart-contracts-reference/near',
          ],
        },
        'products/bridging-protocol/js-sdk-reference',
      ],
    },
    {
      type: 'category',
      label: 'RariMe',
      link: {type: 'doc', id: 'products/rarime/overview'},
      collapsed: true,
      items: [
        'products/rarime/guide-for-issuers',
        'products/rarime/js-connector-reference',
      ],
    },

    {
      type: 'html',
      value: `
        <div class="menu__splitter"></div>
      `
    },
    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">Ecosystem</span>
      `
    },
    {
      type: 'category',
      label: 'Proof of Humanity',
      link: {type: 'doc', id: 'ecosystem/proof-of-humanity/overview'},
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Guides',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Proof of Humanity integration guides',
            description: 'Follow these step-by-step guides to integrate Proof of Humanity into your application.',
            slug: '/ecosystem/proof-of-humanity/guides',
          },
          items: [
            'ecosystem/proof-of-humanity/guides/using-proof-of-humanity-off-chain',
            'ecosystem/proof-of-humanity/guides/using-rarimos-proof-of-humanity-plugin-for-questn',
            'ecosystem/proof-of-humanity/guides/using-rarimos-proof-of-humanity-plugin-for-zealy',
            'ecosystem/proof-of-humanity/guides/using-rarimos-proof-of-humanity-plugin-for-galxe',
            'ecosystem/proof-of-humanity/guides/collab-land-setup',
          ],
        },
        'ecosystem/proof-of-humanity/smart-contracts-reference',
        'ecosystem/proof-of-humanity/subgraph-reference',
        'ecosystem/proof-of-humanity/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Polygon ID State Replication',
      link: {type: 'doc', id: 'ecosystem/polygon-id-state-replication/overview'},
      collapsed: true,
      items: [
        'ecosystem/polygon-id-state-replication/guide-how-to-set-up-polygon-id-state-replication',
        'ecosystem/polygon-id-state-replication/tutorial-verifying-polygon-id-credentials-in-ethereum-dapp',
        'ecosystem/polygon-id-state-replication/smart-contracts-reference',
        'ecosystem/polygon-id-state-replication/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'WorldCoin State Replication',
      link: {type: 'doc', id: 'ecosystem/worldcoin-state-replication/overview'},
      collapsed: true,
      items: [
        'ecosystem/worldcoin-state-replication/guide-state-replication-for-world-id',
        'ecosystem/worldcoin-state-replication/tutorial-using-world-id-zero-knowledge-proofs-in-avalanche-dapp',
        'ecosystem/worldcoin-state-replication/smart-contracts-reference',
        'ecosystem/worldcoin-state-replication/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Token Agnostic Payments',
      link: {type: 'doc', id: 'ecosystem/token-agnostic-payments/overview'},
      collapsed: true,
      items: [
        'ecosystem/token-agnostic-payments/creating-nft-checkout-transactions',
        'ecosystem/token-agnostic-payments/swapping-tokens',
        'ecosystem/token-agnostic-payments/js-sdk-reference',
      ],
    },
    {
      type: 'html',
      value: `
        <div class="menu__splitter"></div>
      `
    },
    {
      type: 'category',
      label: 'Resources',
      link: {
        type: 'generated-index',
        slug: '/resources',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Whitepaper',
          link: {
            type: 'generated-index',
            title: 'Rarimo Whitepaper',
            slug: '/resources/whitepaper',
          },
          collapsed: true,
          items: [
            'resources/whitepaper/abstract',
            'resources/whitepaper/problem_statement',
            'resources/whitepaper/protocol-vision',
            'resources/whitepaper/architecture-and-operating-principles',
            'resources/whitepaper/main-flow-of-messages-transferring',
            'resources/whitepaper/rarimo-identity-sub-protocol',
            'resources/whitepaper/light-wallet-supporting',
            'resources/whitepaper/security-and-efficiency',
            'resources/whitepaper/utilities-of-the-token',
            'resources/whitepaper/governance',
            'resources/whitepaper/summary',
            'resources/whitepaper/sources',
          ],
        },
        'resources/audits',
        'resources/glossary',
      ],
    },
  ]
}

module.exports = sidebars
