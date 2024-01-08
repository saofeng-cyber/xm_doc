// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import Layout from './layout/Layout.vue'

import './styles/style.css';
import './styles/common.css';

import { usePlugins } from './plugins/usePlugin'
export default {
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    usePlugins(app, router)
  },
} satisfies Theme
