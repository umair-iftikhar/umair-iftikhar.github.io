import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Umair Iftikhar',
  tagline: 'Building Ideas, One Line at a Time',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://umair-iftikhar.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'umair-iftikhar', // Usually your GitHub org/user name.
  projectName: 'umair-iftikhar.github.io', // Usually your repo name.
  deploymentBranch: 'master',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Docusaurus',
      logo: {
        alt: 'Docusaurus by Umair',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'My Vault',
        },
        {href: 'https://umair-iftikhar.medium.com', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/umair-iftikhar',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'My Vault',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/umair-iftikhar93/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/YdW5N8pF',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@UmairIftikhar',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'My Publications',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/umair-iftikhar',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Umair Iftikhar, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
