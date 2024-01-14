import { defineConfig } from 'vitepress';
import timeline from "vitepress-markdown-timeline"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "洵默の小窝",
  description: "Hope you have a good day 🎉🎉🎉",
  base: '/xm_doc/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/xm_doc/vue-nes.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/header.jpeg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          { text: '前端技术路线', link: '/web/' },
          { text: 'javascript', link: '/web/javascript' }
        ]
      },
      { text: '个人简介', link: '/guide/mySelf' },
    ],

    outline: {
      label: '页面导航',
      level: 'deep'
    },
    externalLinkIcon: true,
    notFound: {
      title: '您来到了一片荒芜之地',
      quote: '—— 谁料在这片荒芜之地，有如此多的人, 如此多的故事',
      linkLabel: '返回首页',
      linkText: '返回首页',
      code: '404',
    },

    socialLinks: [
      {
        icon: {
          svg: 'github'
        }, link: 'https://github.com/saofeng-cyber', ariaLabel: 'Github'
      },
      // {
      //   icon: {
      //     svg: 'qq',
      //   }, link: 'https://res.abeim.cn/api/qq/?qq=942391953', ariaLabel: 'QQ'
      // },
      // {
      //   icon: {
      //     svg: 'weixin',
      //   }, link: 'https://github.com/vuejs/vitepress', ariaLabel: 'WX'
      // },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/saofeng-cyber/xm_doc" target="_blank">洵默の小窝</a>'
    },
    editLink: {
      pattern: 'https://github.com/saofeng-cyber/xm_doc/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '8NVRCTCGT5',
        apiKey: 'e385f437fe5fa725ded3a672a8278f51',
        indexName: 'xm_doc'
      }
    }
  },
  cleanUrls: true,
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    linkify: true,
    typographer: true,
    config(md) {
      md.use(timeline)
    }
  },
  lastUpdated: true,
  vite: {
    plugins:[],
    server: {
      host: true,
      port: 8082,
    },
  }
})
