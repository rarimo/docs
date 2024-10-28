/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

const config = require('./docusaurus.config')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">ZK Social Protocol</span>
      `
    },
    {
      type: 'doc',
      label: 'Overview',
      id: 'overview',
    },
    {
      // formely: products/passport-derived-profiles
      type: 'category',
      label: 'Accounts',
      link: { type: 'doc', id: 'accounts/overview' },
      collapsed: true,
      items: [
        'accounts/zk-passport',
        'accounts/smart-contracts-reference'
      ],
    },
    {
      type: 'category',
      label: 'Commitment trees',
      link: { type: 'doc', id: 'commitment-trees/overview' },
      collapsed: true,
      items: [
        'commitment-trees/commitments',
        'commitment-trees/statement-trees',
        'commitment-trees/time-trees',
      ],
    },
    {
      // formely products/identity-protocol
      type: 'category',
      label: 'Credential trees',
      link: {type: 'doc', id: 'credential-trees/overview'},
      collapsed: true,
      items: [
        'credential-trees/guide-how-to-set-up-credentials-issuer',
        'credential-trees/guide-how-to-verify-zero-knowledge-proof-in-a-smart-contract',
        'credential-trees/smart-contracts-reference',
        'credential-trees/js-sdk-reference',
      ],
    },
    {
      type: 'category',
      label: 'RariMe App',
      link: { type: 'doc', id: 'rarime-app/overview' },
      collapsed: true,
      items: [
      ],
    },
    {
      type: 'category',
      label: 'RariMe Snap',
      link: { type: 'doc', id: 'rarime-snap/overview' },
      collapsed: true,
      items: [
        'rarime-snap/guide-for-issuers',
        'rarime-snap/interoperability-with-external-credentials',
        'rarime-snap/js-connector-reference',
      ],
    },

    // {
    //   // formely: products/base-layer
    //   type: 'category',
    //   label: 'Rarimo Core',
    //   link: { type: 'doc', id: 'rarimo-core/overview' },
    //   collapsed: true,
    //   items: [
    //     'rarimo-core/oracles',
    //     'rarimo-core/threshold-signature',
    //     'rarimo-core/validator-node-operator-guide',
    //     'rarimo-core/staking-guide',
    //     'rarimo-core/api-reference',
    //   ],
    // },
    {
      type: 'html',
      value: `
        <div class="menu__splitter"></div>
      `
    },
    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">Use cases</span>
      `
    },
    'use-cases/airdrop',
    'use-cases/age-restricted-content',
    'use-cases/identity-protocol-state-replication',
    'use-cases/organizational-access-control',
    // 'use-cases/self-sovereign-identity',
    //'use-cases/gaming-profiles',
    //'use-cases/social-graphs',

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
      label: 'Freedom Tool',
      link: { type: 'doc', id: 'ecosystem/freedom-tool/overview' },
      collapsed: true,
      items: [
        'ecosystem/freedom-tool/smart-contracts-reference',
      ],
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
      type: 'html',
      value: `
        <div class="menu__splitter"></div>
      `
    },
    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">Resources</span>
      `
    },
    {
      type: 'link',
      label: 'Whitepaper',
      href: config.customFields.whitepaperUrl,
    },
    'resources/audits',
    'resources/glossary',
  ]
}

module.exports = sidebars
