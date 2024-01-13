// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { MyLayout, usePlugins } from './sf-theme'



export default {
  Layout: () => {
    return h(MyLayout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
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
