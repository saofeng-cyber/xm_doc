export const xmThemeConfig = {
  // https://vitepress.dev/reference/default-theme-config
  logo: "/head.jpeg",
  nav: [
    { text: "首页", link: "/" },
    {
      text: "前端",
      items: [
        { text: "前端技术路线", link: "/web/" },
        { text: "Css3", link: "/web/css/" },
        { text: "Vue3", link: "/web/vue/" },
      ],
    },
    {
      text: "Html5",
      items: [
        {
          text: "Html5基础",
          link: "/web/html/",
        },
        {
          text: "网页适配",
          link: "/web/html/adapter/",
        },
      ],
    },
    {
      text: "Js",
      items: [
        { text: "基础", link: "/web/js/" },
        { text: "常用高效工具", link: "/web/js/jsTools" },
        { text: "一些小案例", link: "/web/js/jsDemo" },
        { text: "代码整洁之道", link: "/web/js/jsClean" },
      ],
    },
    { text: "Vue", link: "/web/vue/" },
    { text: "Browser", link: "/web/browser/" },
    {
      text: "前端面经",
      items: [
        { text: "html相关", link: "/interview/html/" },
        { text: "css相关", link: "/interview/css/" },
        { text: "js相关", link: "/interview/js/" },
        { text: "vue相关", link: "/interview/vue/" },
        { text: "工程化", link: "/interview/engine/" },
      ],
    },
    {
      text: "个人简介",
      items: [
        { text: "about", link: "/guide/mySelf" },
        { text: "myResume", link: "/guide/myResume" },
      ],
    },
  ],

  outline: {
    label: "页面导航",
    level: "deep",
  },

  sidebar: [
    {
      text: "Examples",
      items: [
        { text: "Markdown Examples", link: "/xm_doc/markdown-examples" },
        { text: "Runtime API Examples", link: "/xm_doc/api-examples" },
      ],
    },
  ],
  externalLinkIcon: true,
  notFound: {
    title: "您来到了一片荒芜之地",
    quote: "—— 谁料在这片荒芜之地，有如此多的人, 如此多的故事",
    linkLabel: "返回首页",
    linkText: "返回首页",
    code: "404",
  },

  socialLinks: [
    {
      icon: {
        svg: "github",
      },
      link: "https://github.com/saofeng-cyber",
      ariaLabel: "Github",
    },
    // {
    //     icon: {
    //         svg: 'qq',
    //     }, link: 'https://res.abeim.cn/api/qq/?qq=942391953', ariaLabel: 'QQ'
    // },
    // {
    //     icon: {
    //         svg: 'weixin',
    //     }, link: 'https://github.com/vuejs/vitepress', ariaLabel: 'WX'
    // },
  ],
  footer: {
    message: "Released under the MIT License.",
    copyright: 'Copyright © 2024-present <a href="#">洵默の小窝</a>',
  },
  editLink: {
    pattern: "https://github.com/vsaofeng-cyber/xm_doc/edit/main/docs/:path",
    text: "Edit this page on GitHub",
  },
} as any;
