/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

const config = require('./docusaurus.config')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: 'What is Rarimo?',
      id: 'overview',
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
        <span class="menu__link menu__link--no-hover">Infrastructure</span>
      `
    },
    {
      type: 'category',
      label: 'ZK Registry Rollup',
      link: { type: 'doc', id: 'zk-registry/overview' },
      collapsed: false,
      items: [
        // 'zk-registry/using-rollup',
        // 'zk-registry/contracts',
        // 'zk-registry/network-info',
      ],
    },
    {
      type: 'category',
      label: 'ZK Passport',
      // TODO:
      // - redirect from 'accounts/zk-passport'
      // = redirect from 'accounts/smart-contracts-reference',
      link: { type: 'doc', id: 'zk-passport/overview' },
      collapsed: false,
      items: [
        // 'zk-passport/use-cases',
        'zk-passport/biometric-passports-101',
        // 'zk-passport/map',
        'zk-passport/guide-proof-of-citizenship',
        // 'zk-passport/api-reference',
        'zk-passport/contracts',
      ],
    },
    {
      type: 'category',
      label: 'ZK Reputation',
      link: { type: 'doc', id: 'zk-reputation/overview' },
      collapsed: false,
      items: [
        // 'zk-reputation/guide-verifying-reputation',
        // 'zk-reputation/contracts',
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
      label: 'Freedom Tool',
      link: { type: 'doc', id: 'freedom-tool/overview' },
      collapsed: true,
      items: [
        //'freedom-tool/success-stories',
        'freedom-tool/smart-contracts-reference',
        //'freedom-tool/resources',

      ],
    },
    {
      'type': 'category',
      'label': 'RariMe App',
      'link': { type: 'doc', id: 'rarime-app/overview' },
      'collapsed': false,
      'items': [
        //'rarime-app/guide-for-ambassadors',
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
    'resources/audits',
    'resources/glossary',
  ]
}

module.exports = sidebars
