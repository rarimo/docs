// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @TODO - make our own themes, i guess
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  /** Meta information */
  title: 'Rarimo Docs',
  tagline: 'Tooling and guides to build the next generation of cross-chain integration',
  url: 'https://rarify-protocol.gitlab.io/', // @todo docs.rarimo.com
  baseUrl: '/platform-engineering/rarimo-docs-docusaurus/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/confused-dog.gif',

  // @todo we'll use these when we move to github
  organizationName: 'rarimo',
  projectName: 'rarimo-docs',

  /** Localization */
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  /** Presets https://docusaurus.io/docs/using-plugins#using-presets */
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          // @todo this should be our public github repo for "edit this page" feature
          // editUrl: 'https://github.com/rarimo/rarimo-docs/blob/main',
          editUrl: 'https://gitlab.com/rarify-protocol/platform-engineering/rarimo-docs-docusaurus/-/tree/main',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  /** Themes https://docusaurus.io/docs/using-plugins#using-themes */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'Rarimo Docs',
        logo: {
          alt: 'We are professionals',
          src: 'img/confused-dog.gif',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'smart-contracts',
            position: 'left',
            label: 'Contracts',
          },
          {
            type: 'doc',
            docId: 'api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'solutions',
            position: 'left',
            label: 'Solutions',
          },
          {
            href: 'https://github.com/rarimo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
      },
      prism: {
        theme: darkCodeTheme,
        defaultLanguage: 'javascript',
        additionalLangauges: ['json', 'shell', 'solidity'],
      },
      // @todo Google Analytics
      metadata: [
        {
          name: 'title',
          content: 'Rarimo Docs',
        },
        {
          name: 'description',
          content: 'words words words',
        }
      ]
    }),

    /** Plugins https://docusaurus.io/docs/using-plugins */
    plugins: [
      [
        /** OpenAPI Docs https://github.com/PaloAltoNetworks/docusaurus-openapi-docs */
        'docusaurus-plugin-openapi-docs',
        {
          id: "apiDocs",
          docsPluginId: "classic",
          config: {
            coreApi: { 
              specPath: "openapi/coreApi.json", // Path to designated spec file
              outputDir: "docs/api/reference", // Output directory for generated .mdx docs
              sidebarOptions: {
                groupPathsBy: "tag",
              },
            },
          },
        },
      ],
    ],

    themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
};