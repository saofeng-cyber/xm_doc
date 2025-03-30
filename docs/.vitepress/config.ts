import { xmThemeConfig } from "./theme/sf-theme/config/index";
import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";
import markdownItContainer from "markdown-it-container";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "孙明刚の小窝",
  description: "Hope you have a good day 🎉🎉🎉",
  base: "/xm_doc/",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/xm_doc/head.jpeg" }],
  ],
  themeConfig: xmThemeConfig,
  cleanUrls: true,
  markdown: {
    theme: "github-dark",
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    linkify: true,
    typographer: true,
    config(md) {
      md.use(timeline).use(markdownItContainer);
    },
  },
  lastUpdated: true,
  vite: {
    plugins: [],
    server: {
      host: true,
      port: 8082,
    },
  },
});
