import { Options } from '@docusaurus/preset-classic'
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn'
import { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const config: Config = {
  title: 'Rarimo Docs',
  tagline:
    'Learn to use a privacy-first social protocol, which seamlessly combines various identity standards and forms a private but verifiable social graph.',
  url: process.env.URL || 'http://localhost:3000',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  noIndex: process.env.STAGING === 'true',
  trailingSlash: true,
  customFields: {
    whitepaperUrl: 'https://docs.rarimo.com/files/Rarimo_whitepaper_v3.pdf',
  },
  organizationName: 'rarimo',
  projectName: 'docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/rarimo/docs/blob/main',
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: { customCss: './src/css/custom.css' },
        gtag: { trackingID: 'G-PVC393K31J' },
      } as Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Rarimo Logo',
        src: 'img/logo-black.svg',
        srcDark: 'img/logo-white.svg',
      },
      items: [
        {
          href: 'https://t.me/+pWugh5xgDiE3Y2Jk',
          html: `
              <span class="header__social-link">
              Telegram <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1217_16813" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="currentColor"/></mask><g mask="url(#mask0_1217_16813)"><path d="M5.33329 15L4.16663 13.8333L12.1666 5.83329H4.99996V4.16663H15V14.1666H13.3333V6.99996L5.33329 15Z" fill="currentColor"/></g></svg>
              </span>`,
          position: 'right',
        },
        {
          href: 'https://github.com/rarimo',
          html: `
              <span class="header__social-link">
              GitHub <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1217_16813" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="currentColor"/></mask><g mask="url(#mask0_1217_16813)"><path d="M5.33329 15L4.16663 13.8333L12.1666 5.83329H4.99996V4.16663H15V14.1666H13.3333V6.99996L5.33329 15Z" fill="currentColor"/></g></svg>
              </span>`,
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
                  <img class="footer__logo" src="/img/logo-white.svg" alt="Rarimo Logo"/>
                  <img class="footer__logo footer__logo--black" src="/img/logo-black.svg" alt="Rarimo Logo"/>
                `,
            },
            {
              html: `<span style="color: var(--primary-text-color)">© ${new Date().getFullYear()}</span>`,
            },
          ],
        },
        {
          items: [
            {
              html: `
                <span style="font-weight: 500">Learn about Rarimo</span>`,
            },
            {
              html: `
                <a href="/" class="footer__social-link">Overview</a>`,
            },
            {
              html: `
                <a href="/zk-registry/" class="footer__social-link">ZK Registry</a>`,
            },
            {
              html: `
                <a href="/zk-passport/" class="footer__social-link">ZK Passport</a>`,
            },
            {
              html: `
                <a href="/zk-graph/" class="footer__social-link">ZK Graph</a>`,
            },
          ],
        },
        {
          items: [
            {
              html: `
                <span style="font-weight: 500">Get in touch</span>`,
            },
            {
              html: `
                <a href="https://t.me/+pWugh5xgDiE3Y2Jk" class="footer__social-link" target="_blank" rel="nofollow noreferrer noopener" aria-label="Telegram">
                Telegram <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1217_16813" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="currentColor"/></mask><g mask="url(#mask0_1217_16813)"><path d="M5.33329 15L4.16663 13.8333L12.1666 5.83329H4.99996V4.16663H15V14.1666H13.3333V6.99996L5.33329 15Z" fill="currentColor"/></g></svg>
                </a>
                `,
            },
            {
              html: `
                <a href="https://x.com/Rarimo_protocol" class="footer__social-link" target="_blank" rel="nofollow noreferrer noopener" aria-label="X">
                X <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1217_16813" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="currentColor"/></mask><g mask="url(#mask0_1217_16813)"><path d="M5.33329 15L4.16663 13.8333L12.1666 5.83329H4.99996V4.16663H15V14.1666H13.3333V6.99996L5.33329 15Z" fill="currentColor"/></g></svg>
                </a>
                `,
            },
          ],
        },
      ],
    },
    algolia: {
      apiKey: '18092da45b925ef9b6428ca707da2165',
      indexName: 'rarimo',
      appId: '4PAZA7JWOP',
      contextualSearch: false,
      searchPagePath: 'search',
      debug: true,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      defaultLanguage: 'javascript',
      additionalLanguages: ['json', 'solidity', 'bash', 'rust', 'tsx'],
    },

    metadata: [
      {
        property: 'og:image',
        content: 'https://docs.rarimo.com/img/og-img.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'og:locale',
        content: 'en_GB',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  },
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        max: 1920,
        min: 720,
        steps: 3,
        disableInDev: false,
      },
    ],
  ],
}

export default config
