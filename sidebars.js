/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  whitepaper: [
    "whitepaper",
    "whitepaper/problem_statement",
    "whitepaper/protocol-vision",
    "whitepaper/architecture-and-operating-principles",
    "whitepaper/main-flow-of-messages-transferring",
    "whitepaper/rarimo-identity-sub-protocol",
    "whitepaper/light-wallet-supporting",
    "whitepaper/security-and-efficiency",
    "whitepaper/utilities-of-the-token",
    "whitepaper/governance",
    "whitepaper/summary",
    "whitepaper/sources",
  ],
  overview: [
    {
      type: "doc",
      label: "About Rarimo",
      id: "overview",
    },
    {
      type: "doc",
      label: "Identity Protocol",
      id: "overview/identity",
    },
    {
      type: "doc",
      label: "Bridging Protocol",
      id: "overview/bridge",
    },
  ],
  useCases: [
    "use-cases",
    "use-cases/ssi",
    "use-cases/proof-of-humanity",
    "use-cases/token-agnostic",
    "use-cases/polygon-id",
    "use-cases/social-graphs",
    "use-cases/multi-chain-mint",
    "use-cases/gaming-profiles",
    "use-cases/cctp",
    "use-cases/proofs",
    "use-cases/state-replication",
  ],
  tutorials: [
    "tutorials",
    "tutorials/bundling",
    "tutorials/connecting-to-wallets",
    "tutorials/creating-transactions",
    "tutorials/swapping-tokens",
  ],
  howToGuides: [
    "how-to-guides",
    "how-to-guides/zkp-verification",
    "how-to-guides/setup-issuer",
    "how-to-guides/validator-setup",
    "how-to-guides/staking",
    "how-to-guides/poh-offchain-verification",
    "how-to-guides/poh-questn",
    "how-to-guides/poh-zealy",
    "how-to-guides/poh-galxe",
    "how-to-guides/polygon-id-state-replication",
  ],
  reference: [
    {
      type: "doc",
      id: "reference",
    },
    {
      type: "category",
      label: "Contracts",
      link: {
        type: "doc",
        id: "reference/contracts",
      },
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/contracts/identity",
        },
        {
          type: "category",
          label: "Bridge Protocol Contracts",
          link: {
            type: "doc",
            id: "reference/contracts/bridge",
          },
          collapsed: false,
          items: [
            "reference/contracts/bridge/evm",
            "reference/contracts/bridge/near",
            "reference/contracts/bridge/solana",
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "reference/proof-of-humanity",
    },
    {
      type: "doc",
      id: "reference/api",
    },
    {
      type: "category",
      label: "JavaScript SDK",
      link: {
        type: "doc",
        id: "reference/sdk",
      },
      collapsed: true,
      items: [
        "reference/sdk/packages-base",
        "reference/sdk/packages-provider",
        "reference/sdk/packages-bridge",
        "reference/sdk/packages-identity",
      ],
    },
    {
      type: "category",
      label: "Core",
      link: {
        type: "doc",
        id: "reference/core",
      },
      collapsed: true,
      items: [
        "reference/core/rarimocore",
        "reference/core/tokenmanager",
        "reference/core/oraclemanager",
        "reference/core/tss",
        "reference/core/oracles",
      ],
    },
    {
      type: "doc",
      id: "reference/audits",
    },
    {
      type: "doc",
      id: "reference/glossary",
    },
  ],
};

module.exports = sidebars;
