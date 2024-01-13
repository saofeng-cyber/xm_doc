// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import Layout from '../theme/sf-theme/layout/Layout.vue'
import AppContent from '../theme/sf-theme/components/AppContent.vue';
import NavHeader from '../theme/sf-theme/components/NavHeader.vue';
import AppFooter from '../theme/sf-theme/components/AppFooter.vue';

import '../theme/sf-theme/styles/style.css';
import '../theme/sf-theme/styles/common.css';

import { usePlugins } from './plugins/usePlugin'
export default {
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
    app.component('AppContent', AppContent)
    app.component('NavHeader', NavHeader)
    app.component('AppFooter', AppFooter)
    if (!import.meta.env.SSR) {
      const nprogress = await import("nprogress")
      router.onBeforeRouteChange = (to: string) => {
        nprogress.configure({ showSpinner: false });
        nprogress.start();
      }
      router.onAfterRouteChanged = (to: string) => {
        nprogress.done();
      }
    }
    usePlugins(app, router)
  },
} satisfies Theme
