import { defineConfig } from "vitepress";
// import { SearchPlugin } from 'vitepress-plugin-search';
import algolia from './algolia';

export default defineConfig({
    base: '/myBlog/',
    title: 'SY文档',
    lang: 'zh-CN',
    ignoreDeadLinks: true,
    // cleanUrls: true,
    markdown: {
        // theme: 'material-theme-ocean',
        // lineNumbers: true
    },
    // vite: {
    //     plugins: [
    //         SearchPlugin({
    //             buttonLabel: "Search",
    //             placeholder: "Search docs",
    //             previewLength: 62,
    //             tokenize: 'full',
    //             language: 'zh',
    //             context: true, // 支持搜索文档内容
    //             preset: 'performance'
    //           })
    //     ]
    // },

    themeConfig: {
        logo: '/logo.svg',
        footer: {
            message: '上海罗盘科技有限公司数据管控平台帮助文档',
            copyright: 'Copyright © 2023-present YSY'
        },
        algolia,
        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ],
        nav: [
            { text: '首页', link: '/' },
            // { text: '关于', link: '/about/' },
            { text: '前端', link: '/front/JS/' },
        ],
        // sidebar: [
        //     {
        //         text: '框架汇总',
        //         items: [        
        //             { text: 'react', link: '/front/JS/react' },
        //             { text: 'vue', link: '/front/JS/vue' },
        //             { text: 'vue3', link: '/front/JS/vue3' },
        //         ]
        //     },
        // ]
        sidebar: {
            '/front/': [
                {
                    text: 'Javascript教程',
                    collapsed: false,
                    items: [
                        { text: 'react', link: '/front/JS/react' },
                        { text: 'vue', link: '/front/JS/vue' },
                        { text: 'vue3', link: '/front/JS/vue3' },
                    ]
                },
                {
                    text: 'HTML教程',
                    collapsed: false,
                    items: [
                        { text: 'HTML基础学习', link: '/front/HTML/' },
                        { text: 'HTML高级学习', link: '/front/HTML/advanced' }
                    ]
                },
                {
                    text: 'CSS教程',
                    collapsed: false,
                    items: [
                        { text: 'CSS基础学习', link: '/front/CSS/' },
                        { text: 'CSS高级学习', link: '/front/CSS/advanced' }
                    ]
                }
            ]
        }
    }
})