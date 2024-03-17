import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';
import { npmCommandsMarkdownPlugin } from 'vitepress-plugin-npm-commands';
import { renderSandbox } from 'vitepress-plugin-sandpack';
import container from 'markdown-it-container';
import { version } from '../../package.json';

export default defineConfig({
  title: 'CDN Client',
  description: 'Localazy CDN Client Documentation',
  head: [
    ['link', { rel: 'icon', href: '/cdn-client/favicon.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      },
    ],
  ],
  base: '/cdn-client/',

  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
      md.use(npmCommandsMarkdownPlugin);
      md.use(container, 'loc-sandbox', {
        render(tokens, idx) {
          return renderSandbox(tokens, idx, 'loc-sandbox');
        },
      });
    },
    // https://shiki.style
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  themeConfig: {
    logo: { src: 'https://localazy.com/directus9/assets/89c7bdc9-387c-4267-9632-64afcddb8e5a', width: 24, height: 24 },

    nav: nav(),

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Introduction', link: '/get-started/introduction' },
          { text: 'Install', link: '/get-started/install' },
          { text: 'Metafile', link: '/get-started/metafile' },
        ],
      },
      {
        text: 'Usage',
        items: [
          {
            text: 'Get Locales',
            link: '/usage/get-locales',
          },
          {
            text: 'Get Content',
            link: '/usage/get-content',
            items: [
              { text: 'Selecting Data', link: '/usage/get-content#selecting-data' },
              { text: 'Single File', link: '/usage/get-content#single-file' },
              { text: 'Multiple Files', link: '/usage/get-content#multiple-files' },
            ],
          },
        ],
      },
      {
        text: 'Sandbox',
        items: [{ text: 'Live Demo', link: '/sandbox/live-demo' }],
      },
      {
        text: 'Examples',
        items: [{ text: 'i18next', link: '/examples/i18next' }],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Client API', link: '/reference/client-api' },
          { text: 'Types', link: '/reference/types' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'npm', link: 'https://www.npmjs.com/package/@localazy/cdn-client' },
      { icon: 'github', link: 'https://github.com/localazy/cdn-client' },
    ],

    externalLinkIcon: true,
  },
});

function nav() {
  return [
    {
      text: 'Get Started',
      link: '/get-started/introduction',
      activeMatch: '/get-started/',
    },
    {
      text: version,
      items: [
        {
          text: 'Releases',
          link: 'https://github.com/localazy/cdn-client/releases',
        },
        {
          text: 'Changelog',
          link: 'https://github.com/localazy/cdn-client/blob/main/CHANGELOG.md',
        },
      ],
    },
  ];
}
