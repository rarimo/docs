// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

// @TODO - make our own themes, i guess
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

function getUrl() {
  return process.env.URL || "https://rarimo.gitlab.io";
}

function getBaseUrl() {
  return process.env.BASE_URL || "/docs/";
}

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  /** Meta information */
  title: "Welcome to Rarimo's documentation portal",
  tagline:
    "Tooling and guides to build the next generation of cross-chain integration",
  url: getUrl(),
  baseUrl: getBaseUrl(),
  trailingSlash: false,
  onBrokenLinks: "ignore",
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
            html: `
                <a href="https://discord.gg/cfrH3Fe7ke" class="footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Discord">
                  <svg size="24"   viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg"><path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z"></path></svg>
                </a>
              `,
          },
          {
            html: `
                <a href="https://github.com/rarimo" class="footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <svg size="24" class="Icons__GithubIcon-sc-dy67gv-4 JXMdA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                </a>
              `,
          },
          {
            html: `
            <a href="https://twitter.com/Rarimo_protocol" class="footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Twitter">
              <svg size="24" class="Icons__TwitterIcon-sc-dy67gv-2 cUZtui" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M31.275 5.924c-.503.223-1.02.411-1.548.564a6.842 6.842 0 0 0 1.393-2.45.516.516 0 0 0-.755-.6 12.181 12.181 0 0 1-3.6 1.422 6.904 6.904 0 0 0-4.809-1.96 6.877 6.877 0 0 0-6.813 7.757A17.587 17.587 0 0 1 3.072 4.253a.516.516 0 0 0-.846.067 6.866 6.866 0 0 0-.93 3.454c0 1.655.59 3.225 1.634 4.452a5.816 5.816 0 0 1-.919-.41.516.516 0 0 0-.767.44v.091c0 2.47 1.33 4.695 3.362 5.908a5.882 5.882 0 0 1-.522-.076.516.516 0 0 0-.588.664 6.867 6.867 0 0 0 5.032 4.605 12.153 12.153 0 0 1-6.497 1.854c-.486 0-.976-.029-1.455-.085a.517.517 0 0 0-.339.946A18.525 18.525 0 0 0 10.255 29.1c6.994 0 11.37-3.298 13.808-6.065 3.041-3.45 4.785-8.016 4.785-12.528 0-.189-.003-.38-.009-.569a13.355 13.355 0 0 0 3.074-3.255.516.516 0 0 0-.638-.759Z"></path></svg>
            </a>`,
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
  ],

  themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
};
