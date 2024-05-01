import { DefaultTheme } from 'vitepress/theme';
import { version } from '../../../../package.json';

export const nav = (): DefaultTheme.NavItem[] => [
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
