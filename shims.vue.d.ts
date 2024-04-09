declare module 'busuanzi.pure.js';
declare module 'markdown-it-container';
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent
    export default component
}