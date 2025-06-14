const isCI = !!process.env.CI;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Operator for Redis Cluster',
  url: isCI ? 'https://cin.github.io' : 'http://localhost:3001',
  baseUrl: '/operator-for-redis-cluster/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'cin',
  projectName: 'operator-for-redis-cluster',
  
  // GitHub pages deployment config
  deploymentBranch: 'gh-pages',
  
  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        hideOnScroll: false,
        title: 'Operator for Redis Cluster',
        logo: {
          src: 'images/logo.svg',
          srcDark: 'images/logo.svg',
        },
        items: [
          {
            href: 'https://cin.github.io/operator-for-redis-cluster',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        defaultLanguage: 'go',
        additionalLanguages: ['go'],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Operator for Redis Cluster Documentation. Built with Docusaurus.`,
      },
    }),
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://cin.github.io/operator-for-redis-cluster',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://cin.github.io/operator-for-redis-cluster',
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-client-redirects', 
      { 
        fromExtensions: ['html', 'md'] 
      }
    ],
  ],
};

module.exports = config;
