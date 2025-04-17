import { EnhanceAppContext } from 'vitepress';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import FooterLinks from './components/FooterLinks.vue';
import LocSandbox from './components/LocSandbox.vue';
import LocSandboxLayout from './components/LocSandboxLayout.vue';
import LocZoomImg from './components/LocZoomImg.vue';
import './index.css';

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
    ctx.app.component('LocSandboxLayout', LocSandboxLayout);
    ctx.app.component('LocSandbox', LocSandbox);
    ctx.app.component('LocZoomImg', LocZoomImg);
  },
};
