// posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('guide/*.md', {
    // 加载器配置
    includeSrc: true,
    render:true,
    excerpt:true,
})