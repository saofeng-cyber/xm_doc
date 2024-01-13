<script setup lang="ts">
import { useData, withBase } from 'vitepress';

const { frontmatter } = useData();
</script>
<template>
    <div class="relative dark:bg-gray-900 duration-300">
        <slot name="page-top" />
        <div class="mx-auto tdoc relative flex justify-center container px-4 transition-all duration-500 ease-in-out">
            <article class="prose flex-grow prose-invert md:prose-xl px-6">
                <Content />
            </article>
        </div>
        <slot name="page-bottom" />
    </div>
</template>