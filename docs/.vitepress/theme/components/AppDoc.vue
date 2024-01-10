<script setup lang="ts">
import { defineClientComponent, onContentUpdated } from 'vitepress'
import UserInfo from './UserInfo.vue';
const Outline = defineClientComponent(() => {
    return import('./common/Outline.vue')
})

const BackUp = defineClientComponent(() => {
    return import('./common/BackUp.vue')
})

onContentUpdated(() => {
    import('./dataJs/post.data').then(data => {
    })
})

</script>
<template>
    <div class="pt-6">
        <div class="container mx-auto px-4 xl:px-0 transition-all duration-500 ease-in-out">
            <div class="tdoc relative flex justify-center">
                <article
                    class="prose prose-img:rounded-xl flex-grow dark:prose-invert order-1 md:prose-base xl:prose-lg px-6">
                    <Content />
                </article>
                <div class="relative flex-shrink-0 order-2 hidden lg:flex flex-col min-w-[360px] pl-8 visible">
                    <UserInfo />
                    <Outline />
                </div>
                <BackUp />
            </div>
        </div>
        <div class="bg_img fixed left-0 top-0 w-full h-full pointer-events-none"></div>
    </div>
</template>
<style scoped>
.bg_img {
    background-image: url('/xm_doc/bg.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
</style>
