<script setup lang="ts">
import { defineClientComponent } from 'vitepress'
import Giscus from '@giscus/vue';
import UserInfo from './UserInfo.vue';
const Outline = defineClientComponent(() => {
    return import('./common/Outline.vue')
})

const BackUp = defineClientComponent(() => {
    return import('./common/BackUp.vue')
})


</script>
<template>
    <div class="pt-16">
        <div class="container mx-auto px-2 xl:px-0 transition-all duration-500 ease-in-out">
            <div class="relative flex justify-center">
                <!-- <article
                    class="prose prose-img:rounded-xl flex-grow prose-invert order-1 md:prose-base xl:prose-lg px-6"> -->
                <article class="tdoc">
                    <Content />
                    <div class="comments-container">
                        <Giscus id="comments" repo="saofeng-cyber/xm_doc" repoId="R_kgDOLCQwoA"
                            category="Announcements" categoryId="DIC_kwDOLCQwoM4CcZw2" mapping="specific"
                            term="Welcome to @giscus/vue component!" reactionsEnabled="1" emitMetadata="0"
                            inputPosition="top" theme="light" lang="en" />
                    </div>
                </article>
                <!-- </article> -->
                <div class="relative text-slate-800 flex-shrink-0 order-2 hidden xl:flex flex-col max-w-[360px] pl-8">
                    <UserInfo />
                    <Outline />
                </div>
                <BackUp />
            </div>
        </div>
    </div>
</template>
<style scoped>
#comments::part(iframe) {
  width: 100%;
  margin: auto;
  display: flex;
}

</style>
