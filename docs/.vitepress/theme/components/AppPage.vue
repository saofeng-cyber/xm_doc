<script setup lang="ts">
import { useData, withBase } from 'vitepress';

const { frontmatter } = useData();
</script>
<template>
    <div class="relative dark:bg-gray-900 duration-300">
        <slot name="page-top" />
        <div v-if="frontmatter.img" class="relative w-full h-[486px]">
            <img class="w-full h-full object-cover" :src="withBase(frontmatter.img)" alt="">
            <div
                class="absolute text-3xl md:text-5xl text-white font-semibold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {{ frontmatter.title }}
            </div>
        </div>
        <div class="mx-auto tdoc relative flex justify-center container px-4 transition-all duration-500 ease-in-out">
            <article class="prose flex-grow dark:prose-invert md:prose-xl px-6">
                <Content />
            </article>
        </div>
        <slot name="page-bottom" />
    </div>
</template>