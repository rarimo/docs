/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'overview',
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: true,
      items: [
        'use-cases/overview-of-use-cases',
        'use-cases/gaming-profiles',
        'use-cases/social-graphs',
        'use-cases/multi-chain-mints',
        'use-cases/identity-protocol-state-replication',
        'use-cases/cross-chain-proofs',
        'use-cases/self-sovereign-identities',
        'use-cases/organizational-access-control',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Rarimo Protocol',
          collapsed: true,
          items: [
            'products/rarimo-protocol/overview',
            'products/rarimo-protocol/validator-node-operator-guide',
            'products/rarimo-protocol/staking-guide',
            'products/rarimo-protocol/tutorial-extending-rarimo-protocol',
            'products/rarimo-protocol/oracles',
            'products/rarimo-protocol/oraclemanager',
            'products/rarimo-protocol/threshold-signature',
            'products/rarimo-protocol/tokenmanager-module',
            'products/rarimo-protocol/api-reference',
            'products/rarimo-protocol/resources',
          ],
        },
        {
          type: 'category',
          label: 'Identity Protocol',
          collapsed: true,
          items: [
            'products/identity-protocol/overview',
            'products/identity-protocol/guide-how-to-set-up-credentials-issuer',
            'products/identity-protocol/guide-issuing-timed-sbt',
            'products/identity-protocol/guide-how-to-verify-zero-knowledge-proof-in-a-smart-contract',
            'products/identity-protocol/tutorial-verify-users-age-on-chain-using-zero-knowledge-proofs',
            'products/identity-protocol/api-reference',
            'products/identity-protocol/smart-contracts-reference',
            'products/identity-protocol/js-sdk-reference',
            'products/identity-protocol/resources',
          ],
        },
        {
          type: 'category',
          label: 'RariMe',
          collapsed: true,
          items: [
            'products/rarime/overview',
            'products/rarime/js-library-reference',
            'products/rarime/guide-adding-using-external-credentials',
            'products/rarime/guide-for-issuers',
            'products/rarime/resources',
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
            'products/proof-of-humanity/tutorial-using-proof-of-humanity-to-protect-an-airdrop-dapp-from-bots',
            'products/proof-of-humanity/smart-contracts-reference',
            'products/proof-of-humanity/subgraph-reference',
            'products/proof-of-humanity/resources',
          ],
        },
        {
          type: 'category',
          // TODO: come up with a better name
          label: 'Polygon ID State Replication',
          collapsed: true,
          items: [
            'products/polygon-id-state-replication/overview',
            'products/polygon-id-state-replication/smart-contracts-reference',
            'products/polygon-id-state-replication/guide-how-to-set-up-polygon-id-state-replication',
            // TODO: come up with a good example DApp
            'products/polygon-id-state-replication/tutorial-verifying-polygon-id-credentials-in-ethereum-dapp',
            'products/polygon-id-state-replication/api-reference',
            'products/polygon-id-state-replication/resources',
          ],
        },
        {
          type: 'category',
          // TODO: come up with a better name
          label: 'WorldCoin State Replication',
          collapsed: true,
          items: [
            'products/worldcoin-state-replication/overview',
            'products/worldcoin-state-replication/smart-contracts-reference',
            // TODO example DApp
            'products/worldcoin-state-replication/tutorial-verifying-polygon-id-credentials-in-avalanche-dapp',
            'products/worldcoin-state-replication/guide-state-replication-for-world-id',
            'products/worldcoin-state-replication/api-reference',
            'products/worldcoin-state-replication/resources',
          ],
        },
        {
          type: 'category',
          label: 'Bridging Protocol',
          collapsed: true,
          items: [
            'products/bridging-protocol/overview',
            'products/bridging-protocol/circle-cctp-integration',
            'products/bridging-protocol/tutorial-cross-chain-proof-of-sbt-ownership',
            'products/bridging-protocol/tutorial-using-polygon-id-state-replication-in-a-dapp',
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
            'products/bridging-protocol/resources',
          ],
        },
        {
          type: 'category',
          label: 'Token Agnostic Payments',
          collapsed: true,
          items: [
            'products/token-agnostic-payments/overview',
            'products/token-agnostic-payments/tutorial-creating-nft-marketplace-token-agnostic-payments',
            'products/token-agnostic-payments/js-sdk-reference',
            'products/token-agnostic-payments/api-reference',
            'products/token-agnostic-payments/resources',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: [
        'resources/audits',
        'resources/glossary',
        'resources/release-notes',
        'resources/mediakit',
      ],
    },
    {
      type: 'category',
      label: 'Whitepaper',
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
