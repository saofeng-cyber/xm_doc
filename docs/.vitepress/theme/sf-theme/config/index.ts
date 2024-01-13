export const xmThemeConfig = {

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
        { text: '示例', link: '/guide/markdown-examples' },
        { text: 'Api示例', link: '/guide/api-examples' },
        { text: '个人简介', link: '/guide/my-self' },
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
        {
            icon: {
                svg: 'qq',
            }, link: 'https://res.abeim.cn/api/qq/?qq=942391953', ariaLabel: 'QQ'
        },
        {
            icon: {
                svg: 'weixin',
            }, link: 'https://github.com/vuejs/vitepress', ariaLabel: 'WX'
        },
    ],
    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present <a href="#">洵默の小窝</a>'
    },
    editLink: {
        pattern: 'https://github.com/vsaofeng-cyber/xm_doc/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
    },

}