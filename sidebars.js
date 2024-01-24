/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'overview',
    {
      type: 'category',
      label: 'Use Cases',
      link: {type: 'doc', id: 'use-cases'},
      collapsed: true,
      items: [
        'use-cases/gaming-profiles',
        'use-cases/social-graphs',
        'use-cases/multi-chain-mints',
        'use-cases/identity-protocol-state-replication',
        'use-cases/cross-chain-proofs',
        'use-cases/self-sovereign-identities',
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
      collapsed: true,
      items: [
        'products/identity-protocol/overview',
        'products/identity-protocol/guide-how-to-set-up-credentials-issuer',
        'products/identity-protocol/guide-how-to-verify-zero-knowledge-proof-in-a-smart-contract',
        'products/identity-protocol/api-reference',
        'products/identity-protocol/smart-contracts-reference',
        'products/identity-protocol/js-sdk-reference',
      ],
    },
    {
      type: 'category',
      label: 'RariMe',
      collapsed: true,
      items: [
        'products/rarime/overview',
        'products/rarime/js-library-reference',
        'products/rarime/guide-for-issuers',
      ],
    },
    {
      type: 'category',
      label: 'Proof of Humanity',
      collapsed: true,
      items: [
        'products/proof-of-humanity/overview',
        {
          type: 'category',
          label: 'Guides',
          collapsed: true,
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
      collapsed: true,
      items: [
        'products/polygon-id-state-replication/overview',
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
      label: 'Bridging Protocol',
      collapsed: true,
      items: [
        'products/bridging-protocol/overview',
        'products/bridging-protocol/circle-cctp-integration',
        'products/bridging-protocol/guide-how-to-bundle-transactions',
        'products/bridging-protocol/connecting-to-wallets',
        'products/bridging-protocol/creating-nft-checkout-transactions',
        'products/bridging-protocol/swapping-tokens',
        'products/bridging-protocol/packages-base',
        'products/bridging-protocol/bridge-protocol-contracts',
        {
          type: 'category',
          label: 'Smart Contracts Reference',
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
      label: 'Token Agnostic Payments',
      collapsed: true,
      items: [
        'products/token-agnostic-payments/overview',
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
      link: {type: 'doc', id: 'whitepaper'},
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
