<script setup lang="ts">
import { useData } from 'vitepress'
import NotFoundVue from './NotFound.vue';
import BackUp from './common/BackUp.vue';
import Outline from './common/Outline.vue';
import UserInfo from './UserInfo.vue';
const { page } = useData()

</script>
<template>
    <div class="relative pt-32 pb-16 bg-white dark:bg-gray-900 duration-300 ease-in-out dark:text-white">
        <div class="container mx-auto px-4 xl:px-0 transition-all duration-500 ease-in-out">
            <NotFoundVue v-if="page.isNotFound" />
            <div v-else class="tdoc relative flex justify-center">
                <article class="prose flex-grow dark:prose-invert order-1 md:prose-xl px-6">
                    <Content />
                </article>
                <div class="relative flex-shrink-0 order-2 hidden lg:flex flex-col min-w-[360px] pl-8 visible">
                    <UserInfo />
                    <Outline />
                </div>
            </div>
        </div>
        <BackUp />
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
