import { h } from 'vue';
import { EnhanceAppContext, Theme } from 'vitepress';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import DefaultTheme from 'vitepress/theme';
import FooterLinks from './components/FooterLinks.vue';
import ZoomImg from './components/ZoomImg.vue';
import { Sandbox } from 'vitepress-plugin-sandpack';
import 'vitepress-plugin-sandpack/dist/style.css';
import './style.css';

export default {
  ...DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(FooterLinks),
    });
  },

  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);

    enhanceAppWithTabs(ctx.app);
    ctx.app.component('ZoomImg', ZoomImg);
    ctx.app.component('Sandbox', Sandbox);
  }
} satisfies Theme;
