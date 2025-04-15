import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Math Courses',
  tagline: 'Master Mathematics with Our Comprehensive Courses.',
  favicon: 'img/favicon.ico',

<<<<<<< HEAD
  // Set the production url of your site here
  url: 'https://deussebyum11724.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mate-curs-site/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DeusSebyum11724', // Usually your GitHub org/user name.
  projectName: 'mate-curs-site', // Usually your repo name.
  deploymentBranch: 'gh-pages',// ramura pe care se va publica
  trailingSlash: false, 
=======
  url: 'https://deussebyum11724.github.io',
  baseUrl: '/mate-curs-site/',

  organizationName: 'DeusSebyum11724', // GitHub username
  projectName: 'mate-curs-site', // GitHub repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
>>>>>>> 22b3e64 (second commit)

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/DeusSebyum11724/mate-curs-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/DeusSebyum11724/mate-curs-site/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Math Courses',
      logo: {
        alt: 'Math Courses Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // updated to the available sidebar
          position: 'left',
          label: 'Courses',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/DeusSebyum11724/mate-curs-site',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/docs/contact', // Ensure this points to a valid document
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Courses',
          items: [
            {
              label: 'Linear Algebra',
              to: '/docs/linear-algebra',
            },
            {
              label: 'Calculus',
              to: '/docs/calculus',
            },
            {
              label: 'Probability',
              to: '/docs/probability',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DeusSebyum11724/mate-curs-site',
            },
            {
              label: 'Contact',
              to: '/docs/contact', // Ensure this points to a valid document
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Math Courses. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
