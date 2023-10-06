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
    "overview",
    {
      type: "category",
      label: "Identity Protocol",
      link: {
        type: "doc",
        id: "overview/identity",
      },
      items: ["overview/issuing-credentials", "overview/querying-credentials"],
    },
    {
      type: "doc",
      label: "Bridge Protocol",
      id: "overview/bridge", // TODO: redirect from "architecture/swap-bridge"
    },
  ],
  useCases: [
    "use-cases",
    "use-cases/ssi",
    "use-cases/token-agnostic", // TODO: redirect form NFT checkout
    "use-cases/polygon-id",
    "use-cases/social-graphs",
    "use-cases/multi-chain-mint",
    "use-cases/gaming-profiles",
    "use-cases/cctp",
    "use-cases/proofs",
  ],
  tutorials: [
    "tutorials",
    "tutorials/bundling", // TODO: redirect from "overview/bundling"
    "tutorials/connecting-to-wallets", // TODO: redirect from "overview/connecting-to-wallets"
    "tutorials/creating-transactions", // TODO: redirect from "overview/creating-transactions"
    "tutorials/swapping-tokens", // TODO: redirect from "overview/swapping-tokens"
  ],
  integrationGuides: ["integration-guides"],
  reference: [
    {
      type: "doc",
      id: "reference",
    },
    {
      label: "Whitepaper",
      type: "link",
      href: "/whitepaper",
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
          id: "reference/contracts/addresses",
        },
        {
          type: "doc",
          id: "reference/contracts/bridge",
        },
        {
          type: "category",
          label: "Interface",
          // link: {
          //   type: "doc",
          //   id: "reference/contracts/interface",
          // },
          collapsed: false,
          items: [
            "reference/contracts/interface/evm-reference",
            "reference/contracts/interface/near-reference",
            "reference/contracts/interface/solana-reference",
          ],
        },
      ],
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
        "reference/sdk/packages-checkout",
      ],
    },
    {
      type: "category",
      label: "Core",
      // TODO: redirect from "reference/core"
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
      id: "reference/glossary",
    },
  ],
};

module.exports = sidebars;
