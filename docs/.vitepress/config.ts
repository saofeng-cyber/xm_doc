import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "洵默の小窝",
  description: "时间才是最好的解药",
  base: '/xm_doc/',
  head: [
    ['link', { rel: 'icon', href: '/xm_doc/vue-nes.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/xm_doc/header.jpg',
    nav: [
      { text: '首页', link: '/xm_doc/' },
      {
        text: '前端',
        items: [
          { text: '前端技术路线', link: '/xm_doc/web/' },
          { text: 'javascript', link: '/xm_doc/web/javascript' }
        ]
      },
      { text: '示例', link: '/xm_doc/guide/markdown-examples' },
      { text: 'Api示例', link: '/xm_doc/guide/api-examples' },
      { text: '个人简介', link: '/xm_doc/guide/my-self' },
    ],

    outline: {
      label: '页面导航',
      level: 'deep'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/xm_doc/markdown-examples' },
          { text: 'Runtime API Examples', link: '/xm_doc/api-examples' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: 'github'
        }, link: 'https://github.com/vuejs/vitepress', ariaLabel: 'Github'
      },
      {
        icon: {
          svg: 'qq',
        }, link: 'https://github.com/vuejs/vitepress', ariaLabel: 'QQ'
      },
      {
        icon: {
          svg: 'weixin',
        }, link: 'https://github.com/vuejs/vitepress', ariaLabel: 'WX'
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present 洵默の小窝'
    }
  },
  markdown: {
    theme: 'github-dark',
  },
  lastUpdated: true,
  vite: {
    server: {
      host: true,
      port: 8082,
    }
  }
})
