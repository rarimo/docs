// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

// @TODO - make our own themes, i guess
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

function getUrl() {
  return process.env.URL || "http://localhost:3000";
}

function getBaseUrl() {
  return process.env.BASE_URL || "/docs/";
}

function isStaging() {
  return process.env.STAGING === "true";
}

const metaDescription =
  "Rarimo developer documentation. Learn to use cross-chain self-sovereign identity protocol, zero-knowledge proofs, RariMe Snap, token bridging, and more.";

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  /** Meta information */
  title: "Rarimo Developer Portal",
  // TODO: better description
  tagline: metaDescription,
  url: getUrl(),
  baseUrl: getBaseUrl(),
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo-icon.png",
  noIndex: isStaging(),

  organizationName: "rarimo",
  projectName: "docs",

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
          showLastUpdateTime: true,
          editUrl: "https://github.com/rarimo/docs/blob/main",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-PVC393K31J",
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
          alt: "Rarimo Logo",
          src: "img/logo-transparent.svg",
        },
        items: [
          {
            href: "https://discord.gg/cfrH3Fe7ke",
            label: "Discord",
            position: "right",
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
                <img src="img/logo-footer.svg" alt="Rarimo Logo"/>
              `,
              },
              {
                html: `
           <span style="color: var(--primary-text-color)">© ${new Date().getFullYear()}</span>
`,
              },
            ],
          },
          {
            items: [
              {
                html: `
                <span>Navigation</span>`,
              },
              {
                html: `
                <a href="https://google.com/" class="footer__social-link" target="_blank" rel="noreferrer noopener">Use cases</a>`,
              },
              {
                html: `
                <a href="https://google.com/" class="footer__social-link" target="_blank" rel="noreferrer noopener">Developers</a>`,
              },
              {
                html: `
                <a href="https://google.com/" class="footer__social-link" target="_blank" rel="noreferrer noopener">Community</a>`,
              },
              {
                html: `
                <a href="https://google.com/" class="footer__social-link" target="_blank" rel="noreferrer noopener">Contact</a>`,
              },
            ],
          },
          {
            items: [
              {
                html: `
                <span>Follow Us</span>`,
              },
              {
                html: `
                <a href="https://discord.gg/cfrH3Fe7ke" class="footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Discord">
                Discord <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_1217_16813" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="currentColor"/></mask><g mask="url(#mask0_1217_16813)"><path d="M5.33329 15L4.16663 13.8333L12.1666 5.83329H4.99996V4.16663H15V14.1666H13.3333V6.99996L5.33329 15Z" fill="currentColor"/></g></svg>
                </a>
              `,
              },
              {
                html: `
            <a href="https://twitter.com/Rarimo_protocol" class="footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Twitter">
            Twitter <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1217_16813" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="currentColor"/></mask><g mask="url(#mask0_1217_16813)"><path d="M5.33329 15L4.16663 13.8333L12.1666 5.83329H4.99996V4.16663H15V14.1666H13.3333V6.99996L5.33329 15Z" fill="currentColor"/></g></svg>
            </a>`,
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
          content: "Rarimo Developer Documentation",
        },
        {
          property: "og:title",
          content: "Rarimo Developer Documentation",
        },
        {
          property: "twitter:title",
          content: "Rarimo Developer Documentation",
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "twitter:description",
          content: metaDescription,
        },
        {
          property: "og:url",
          content: "https://docs.rarimo.com",
        },
        {
          property: "og:image",
          content: "https://docs.rarimo.com/img/og-img.jpg",
        },
        {
          name: "twitter:image",
          content: "https://docs.rarimo.com/img/og-img.jpg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:image",
          content: "https://docs.rarimo.com/img/og-img.jpg",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "og:image:height",
          content: "786",
        },
        {
          property: "og:image:width",
          content: "1600",
        },
        {
          property: "og:locale",
          content: "en_GB",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    }),

  /** Plugins https://docusaurus.io/docs/using-plugins */
  plugins: [],

  themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
};
