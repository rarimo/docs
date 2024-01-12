/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: true,
      items: ['overview/about-rarimo'],
    },
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
      ],
    },
    {
      type: 'category',
      label: 'Products',
      collapsed: true,
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
      ],
    },
    {
      type: 'category',
      label: 'Organization Identity',
      collapsed: true,
      items: [
        {
          type: 'category',
          // TODO: come up with a better name
          label: 'Polygon ID State Replication',
          collapsed: true,
          items: [
            'organization-identity/polygon-id-state-replication/overview',
            'organization-identity/polygon-id-state-replication/smart-contracts-reference',
            'organization-identity/polygon-id-state-replication/guide-how-to-set-up-polygon-id-state-replication',
            // TODO: come up with a good example DApp
            'organization-identity/polygon-id-state-replication/tutorial-verifying-polygon-id-credentials-in-ethereum-dapp',
            'organization-identity/polygon-id-state-replication/api-reference',
            'organization-identity/polygon-id-state-replication/resources',
          ],
        },
        {
          type: 'category',
          // TODO: come up with a better name
          label: 'WorldCoin State Replication',
          collapsed: true,
          items: [
            'organization-identity/worldcoin-state-replication/overview',
            'organization-identity/worldcoin-state-replication/smart-contracts-reference',
            // TODO example DApp
            'organization-identity/worldcoin-state-replication/tutorial-verifying-polygon-id-credentials-in-avalanche-dapp',
            'organization-identity/worldcoin-state-replication/api-reference',
            'organization-identity/worldcoin-state-replication/resources',
          ],
        },
        {
          type: 'category',
          label: 'Bridging Protocol',
          collapsed: true,
          items: [
            'organization-identity/bridging-protocol/overview',
            'organization-identity/bridging-protocol/circle-cctp-integration',
            'organization-identity/bridging-protocol/tutorial-cross-chain-proof-of-sbt-ownership',
            'organization-identity/bridging-protocol/guide-how-to-bundle-transactions',
            {
              type: 'category',
              label: 'Smart Contracts Reference',
              collapsed: true,
              items: [
                'organization-identity/bridging-protocol/smart-contracts-reference/evm',
                'organization-identity/bridging-protocol/smart-contracts-reference/solana',
                'organization-identity/bridging-protocol/smart-contracts-reference/near',
              ],
            },
            'organization-identity/bridging-protocol/api-reference',
            'organization-identity/bridging-protocol/resources',
          ],
        },
        {
          type: 'category',
          label: 'Token Agnostic Payments',
          collapsed: true,
          items: [
            'organization-identity/token-agnostic-payments/overview',
            'organization-identity/token-agnostic-payments/tutorial-creating-nft-marketplace-token-agnostic-payments',
            'organization-identity/token-agnostic-payments/js-sdk-reference',
            'organization-identity/token-agnostic-payments/api-reference',
            'organization-identity/token-agnostic-payments/resources',
          ],
        },
        {
          type: 'category',
          label: 'Resources',
          collapsed: true,
          items: [
            'organization-identity/resources/audits',
            'organization-identity/resources/whitepaper',
            'organization-identity/resources/glossary',
            'organization-identity/resources/release-notes',
            'organization-identity/resources/mediakit',
          ],
        },
      ],
    },
  ],
}

module.exports = sidebars
