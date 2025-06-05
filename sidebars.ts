import { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
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
      `,
    },
    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">Infrastructure</span>
      `,
    },
    {
      type: 'category',
      label: 'ZK Registry Rollup',
      link: { type: 'doc', id: 'zk-registry/overview' },
      collapsed: false,
      items: [
        // TODO:
        // - bridging guide?
        // - ZK Registry <> Rollup split
        'zk-registry/network-info',
      ],
    },
    {
      type: 'category',
      label: 'ZK Passport',
      link: { type: 'doc', id: 'zk-passport/overview' },
      collapsed: false,
      items: [
        // TODO:
        // - airdrop tutorial
        // - proof knobs
        'zk-passport/biometric-passports-101',
        'zk-passport/guide-off-chain-verification',
        'zk-passport/guide-on-chain-verification',
        'zk-passport/guide-setting-up-verificator-svc',
        'zk-passport/guide-setting-up-cross-chain-replication',
        'zk-passport/contracts',
      ],
    },
    {
      type: 'category',
      label: 'ZKML Bionetta',
      link: { type: 'doc', id: 'zkml-bionetta/overview' },
      collapsed: false,
      items: [

        'zkml-bionetta/tutorial-creating-a-zkml-model'
      ],
    },

    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">Solutions</span>
      `,
    },
    {
      type: 'category',
      label: 'Seedless Recovery',
      link: { type: 'doc', id: 'seedless-recovery/overview' },
      collapsed: false,
      items: [],
    },
    {
      label: 'ZK Liveness',
      type: 'category',
      link: {
        type: 'doc',
        id: 'zk-liveness/overview',
      },
      items: [],
    },
    {
      label: 'ZK Likeness',
      type: 'category',
      link: {
        type: 'doc',
        id: 'zk-likeness/overview',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'ZK Graph',
      link: { type: 'doc', id: 'zk-graph/overview' },
      collapsed: false,
      items: [],
    },

    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">Apps</span>
      `,
    },
    {
      type: 'category',
      label: 'Freedom Tool',
      link: { type: 'doc', id: 'freedom-tool/overview' },
      collapsed: true,
      items: [
        //'freedom-tool/success-stories',
        'freedom-tool/smart-contracts-reference',
      ],
    },
    {
      type: 'category',
      label: 'RariMe App',
      link: { type: 'doc', id: 'rarime-app/overview' },
      collapsed: false,
      items: [
        //'rarime-app/guide-for-ambassadors',
      ],
    },

    {
      type: 'html',
      value: `
        <div class="menu__splitter"></div>
      `,
    },
    {
      type: 'html',
      value: `
        <span class="menu__link menu__link--no-hover">Resources</span>
      `,
    },
    'resources/audits',
    'resources/glossary',
  ],
}

export default sidebars
