// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

// @TODO - make our own themes, i guess
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

function getUrl() {
  return process.env.URL || "https://docs.rarimo.com";
}

function getBaseUrl() {
  return process.env.BASE_URL || "/";
}

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  /** Meta information */
  title: "Rarimo Developer Documentation",
  tagline:
    "Learn the basics of the protocol and create simple applications to connect to wallets and create cross-chain transactions.",
  url: getUrl(),
  baseUrl: getBaseUrl(),
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo-icon.png",

  // @todo we'll use these when we move to github
  // organizationName: "rarimo",
  // projectName: "rarimo-docs",

  /** Localization */
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  /** Presets https://docusaurus.io/docs/using-plugins#using-presets */
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: false,
          // @todo update when we move to github
          // editUrl: 'https://github.com/rarimo/rarimo-docs/blob/main',
          editUrl: "https://gitlab.com/rarimo/docs/-/tree/main",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-PRLLH6W",
        },
      }),
    ],
  ],

  /** Themes https://docusaurus.io/docs/using-plugins#using-themes */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: "We are professionals",
          src: "img/logo-transparent.svg",
        },
        items: [
          {
            type: "doc",
            docId: "overview",
            position: "left",
            label: "Getting started",
          },
          {
            type: "doc",
            docId: "overview/applications",
            position: "left",
            label: "Use cases",
          },
          {
            type: "doc",
            docId: "overview/design",
            position: "left",
            label: "Architecture",
          },
          {
            type: "dropdown",
            docId: "reference",
            position: "left",
            label: "Reference",
            items: [
              {
                label: "Contracts",
                type: "doc",
                docId: "developers/contracts",
              },
              {
                label: "API",
                type: "doc",
                docId: "api",
              },
              {
                label: "SDK",
                type: "doc",
                docId: "sdk",
              },
            ],
          },
          // {
          //   type: "doc",
          //   docId: "solutions",
          //   position: "left",
          //   label: "Solutions",
          // },
          {
            type: "doc",
            docId: "whitepaper",
            position: "right",
            label: "Whitepaper",
          },
          {
            href: "https://github.com/rarimo",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                html: `
                <img src="img/logo-footer.svg" alt="We are professionals"/>
              `,
              },
              {
                html: `
           <span style="margin-left: 1rem; color: #8F8F8F">© ${new Date().getFullYear()}</span>
`,
              },
            ],
          },
          {
            items: [
              {
                html: `
                <a href="https://discord.gg/cfrH3Fe7ke" class="footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Discord">
                Discord <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_1217_16813" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="#D9D9D9"/></mask><g mask="url(#mask0_1217_16813)"><path d="M5.33329 15L4.16663 13.8333L12.1666 5.83329H4.99996V4.16663H15V14.1666H13.3333V6.99996L5.33329 15Z" fill="#8F8F8F"/></g></svg>
                </a>
              `,
              },
              {
                html: `
            <a href="https://twitter.com/Rarimo_protocol" class="footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Twitter" style="margin-top: 1rem">
            Twitter <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1217_16813" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="#D9D9D9"/></mask><g mask="url(#mask0_1217_16813)"><path d="M5.33329 15L4.16663 13.8333L12.1666 5.83329H4.99996V4.16663H15V14.1666H13.3333V6.99996L5.33329 15Z" fill="#8F8F8F"/></g></svg>
            </a>`,
              },
              {
                html: `
                <a href="mailto: support@rarimo.com" class="footer__social-link" target="_blank" rel="noreferrer noopener" style="margin-top: 1rem">
                Contact
                </a>
              `,
              },
            ],
          },
        ],
      },
      algolia: {
        apiKey: "8ececec9220ccf9a750c79fc04ecc23f",
        indexName: "rar",
        contextualSearch: true,
        appId: "PBVGCPZL48",
        searchParameters: {},
        placeholder: "Search in the jungle",
        searchPagePath: "search",
      },
      prism: {
        theme: darkCodeTheme,
        defaultLanguage: "javascript",
        additionalLangauges: ["json", "shell", "solidity"],
      },
      metadata: [
        {
          name: "title",
          content: "Rarimo Docs",
        },
        {
          name: "description",
          content: "words words words",
        },
      ],
    }),

  /** Plugins https://docusaurus.io/docs/using-plugins */
  plugins: [
    [
      /** OpenAPI Docs https://github.com/PaloAltoNetworks/docusaurus-openapi-docs */
      "docusaurus-plugin-openapi-docs",
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          coreApi: {
            specPath: "static/openapi/coreApi.json", // Path to designated spec file
            outputDir: "docs/api/reference", // Output directory for generated .mdx docs
            sidebarOptions: {
              groupPathsBy: "tag",
              sidebarCollapsed: false,
            },
          },
        },
      },
    ],
    // Redirects
    [
      "@docusaurus/plugin-client-redirects",
      {
        id: "redirects-2",
        // Both from and to must start with a slash.
        // For redirects, do NOT use a trailing slash in `to`
        // but DO use a trailing slash in `from`.
        redirects: [
          {
            from: "/smorg",
            to: "/overview",
          },
        ],
      },
    ],
    [
      path.resolve(__dirname, 'src/plugin-dynamic-redirects/index.ts'),
      { // this is the options object passed to the plugin
        routes: [
          { // using Route schema from react-router
            path: '/testPluginRedirect',
            exact: false, // this is needed for sub-routes to match!
            component: '/src/components/DynamicRedirect', // <-- works, but how do I pass a param for the target page?
          },
        ],
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
};
