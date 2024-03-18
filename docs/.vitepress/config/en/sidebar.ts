import type { DefaultTheme } from 'vitepress/theme';

export const sidebar = (): DefaultTheme.Sidebar => [
  {
    text: 'Get Started',
    items: [
      { text: 'Introduction', link: '/get-started/introduction' },
      { text: 'Installation', link: '/get-started/installation' },
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
];
