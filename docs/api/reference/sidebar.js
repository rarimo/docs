module.exports = [
  {
    type: "category",
    label: "Chains",
    link: {
      type: "generated-index",
      title: "Chains",
      slug: "/category/api/reference/chains",
    },
    collapsed: false,
    items: [
      {
        type: "doc",
        id: "api/reference/get-chain-list",
        label: "Get supported chains list",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Tokens",
    link: {
      type: "generated-index",
      title: "Tokens",
      slug: "/category/api/reference/tokens",
    },
    collapsed: false,
    items: [
      {
        type: "doc",
        id: "api/reference/get-token-list",
        label: "Get supported list of tokens",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/reference/get-nft",
        label: "Get details about specific NFT",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Transfers",
    link: {
      type: "generated-index",
      title: "Transfers",
      slug: "/category/api/reference/transfers",
    },
    collapsed: false,
    items: [
      {
        type: "doc",
        id: "api/reference/confirm-transfer",
        label: "Confirm transfer",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/reference/create-transfer",
        label: "Create transfer",
        className: "api-method post",
      },
    ],
  },
];
