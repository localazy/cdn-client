import { defineConfig } from 'vitepress';
import { head } from './config/en/head.js';
import { nav } from './config/en/nav.js';
import { sidebar } from './config/en/sidebar.js';
import { markdown } from './config/markdown.js';

export default defineConfig({
  title: 'CDN Client',
  titleTemplate: 'Localazy CDN Client',
  description: 'Localazy CDN Client Documentation',

  lang: 'en-US',
  base: '/cdn-client/',
  head: head(),
  lastUpdated: true,
  markdown: markdown(),

  sitemap: {
    hostname: 'https://localazy.github.io/cdn-client/',
  },

  themeConfig: {
    logo: {
      src: '/theme/localazy-logo.svg',
      width: 24,
      height: 24,
    },
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'npm', link: 'https://www.npmjs.com/package/@localazy/cdn-client' },
      { icon: 'github', link: 'https://github.com/localazy/cdn-client' },
    ],
    search: {
      provider: 'local',
    },
    externalLinkIcon: true,
  },
});
