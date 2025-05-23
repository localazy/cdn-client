import container from 'markdown-it-container';
import { MarkdownOptions } from 'vitepress';
import { npmCommandsMarkdownPlugin } from 'vitepress-plugin-npm-commands';
import { renderSandbox } from 'vitepress-plugin-sandpack';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

export const markdown = (): MarkdownOptions => ({
  lineNumbers: true,
  config(md): void {
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
});
