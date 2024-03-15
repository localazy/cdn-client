import { h } from 'vue';
import { EnhanceAppContext } from 'vitepress';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import { Sandbox } from 'vitepress-plugin-sandpack';
import DefaultTheme from 'vitepress/theme';
import FooterLinks from './components/FooterLinks.vue';
import ZoomImg from './components/ZoomImg.vue';
import LocSandbox from './components/LocSandbox.vue';
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
    ctx.app.component('LocSandbox', LocSandbox);
  }
};
