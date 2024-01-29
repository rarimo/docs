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
        'use-cases/self-sovereign-identities',
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
      label: 'Rarimo Protocol',
      link: {type: 'doc', id: 'products/rarimo-protocol/overview'},
      collapsed: true,
      items: [
        'products/rarimo-protocol/overview',
        'products/rarimo-protocol/oracles',
        'products/rarimo-protocol/oraclemanager',
        'products/rarimo-protocol/threshold-signature',
        'products/rarimo-protocol/tokenmanager-module',
        'products/rarimo-protocol/validator-node-operator-guide',
        'products/rarimo-protocol/staking-guide',
        'products/rarimo-protocol/api-reference',
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
        'products/identity-protocol/api-reference',
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
        'products/bridging-protocol/creating-nft-checkout-transactions',
        'products/bridging-protocol/swapping-tokens',
        'products/bridging-protocol/packages-base',
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
        'products/bridging-protocol/api-reference',
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
      link: {type: 'doc', id: 'products/proof-of-humanity/overview'},
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
            slug: '/products/proof-of-humanity/guides',
          },
          items: [
            'products/proof-of-humanity/guides/using-proof-of-humanity-off-chain',
            'products/proof-of-humanity/guides/using-rarimos-proof-of-humanity-plugin-for-questn',
            'products/proof-of-humanity/guides/using-rarimos-proof-of-humanity-plugin-for-zealy',
            'products/proof-of-humanity/guides/using-rarimos-proof-of-humanity-plugin-for-galxe',
            'products/proof-of-humanity/guides/collab-land-setup',
          ],
        },
        'products/proof-of-humanity/smart-contracts-reference',
        'products/proof-of-humanity/subgraph-reference',
      ],
    },
    {
      type: 'category',
      label: 'Polygon ID State Replication',
      link: {type: 'doc', id: 'products/polygon-id-state-replication/overview'},
      collapsed: true,
      items: [
        'products/polygon-id-state-replication/guide-how-to-set-up-polygon-id-state-replication',
        // TODO: come up with a good example DApp
        'products/polygon-id-state-replication/tutorial-verifying-polygon-id-credentials-in-ethereum-dapp',
        'products/polygon-id-state-replication/smart-contracts-reference',
        'products/polygon-id-state-replication/api-reference',
      ],
    },
    {
      type: 'category',
      // TODO: come up with a better name
      label: 'WorldCoin State Replication',
      link: {type: 'doc', id: 'products/worldcoin-state-replication/overview'},
      collapsed: true,
      items: [
        'products/worldcoin-state-replication/overview',
        'products/worldcoin-state-replication/guide-state-replication-for-world-id',
        'products/worldcoin-state-replication/tutorial-using-world-id-zero-knowledge-proofs-in-avalanche-dapp',
        'products/worldcoin-state-replication/smart-contracts-reference',
        'products/worldcoin-state-replication/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Token Agnostic Payments',
      link: {type: 'doc', id: 'products/token-agnostic-payments/overview'},
      collapsed: true,
      items: [
        'products/token-agnostic-payments/js-sdk-reference',
        'products/token-agnostic-payments/api-reference',
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
      collapsed: true,
      items: [
        'resources/audits',
        'resources/glossary',
      ],
    },

    {
      type: 'category',
      label: 'Whitepaper',
      link: {
        type: 'generated-index',
        title: 'Rarimo Whitepaper',
        slug: '/whitepaper',
      },
      collapsed: true,
      items: [
        'whitepaper/abstract',
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
