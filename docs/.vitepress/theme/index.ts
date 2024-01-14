// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
// import { inBrowser } from 'vitepress'
import XmVitePressTheme from "./sf-theme"
// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";
export default {
  extends: XmVitePressTheme,
  enhanceApp({ app, router }) {},
} satisfies Theme
