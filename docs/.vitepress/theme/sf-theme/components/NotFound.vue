<script setup lang="ts">
import { useData } from 'vitepress';
const { theme } = useData()

</script>
<template>
    <div class="flex-grow w-full pt-40 pb-24 text-center text-white">
        <p class="text-3xl font-bold md:text-6xl">
            {{ theme.notFound?.code ?? '404' }}
        </p>
        <h1 class="py-6 text-2xl font-semibold md:text-3xl">{{ theme.notFound?.title ?? 'PAGE NOT FOUND' }}</h1>
        <div class="w-20 h-[1px] mx-auto my-6 bg-gray-300"></div>
        <div class="text-base font-medium">
            {{ theme.notFound?.quote ?? '很抱歉，该页面不存在。' }}
        </div>
    </div>
</template>