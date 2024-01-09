<script setup lang="ts">
import { useData } from 'vitepress';
const { theme } = useData()

</script>
<template>
    <div class="w-full pt-40 pb-24 text-center flex-grow">
        <p class="text-3xl md:text-6xl font-bold">
            {{ theme.notFound?.code ?? '404' }}
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold py-6">{{ theme.notFound?.title ?? 'PAGE NOT FOUND' }}</h1>
        <div class="w-20 h-[1px] mx-auto my-6 bg-gray-300"></div>
        <div class="text-base font-medium">
            {{ theme.notFound?.quote ?? '很抱歉，该页面不存在。' }}
        </div>
    </div>
</template>