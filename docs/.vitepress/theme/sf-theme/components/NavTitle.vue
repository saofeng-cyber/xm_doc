<script setup lang="ts">
import { useData, withBase } from 'vitepress';

const { theme, site } = useData();

</script>

<template>
    <div class="duration-300">
        <a href="/xm_doc/" class="flex items-center">
            <slot name="nav-bar-title-before" />
            <img class="h-12 w-12 rounded-full mr-3" :src="withBase(theme.logo)" alt="" />
            <template v-if="theme.siteTitle">{{ theme.siteTitle }}</template>
            <template v-else-if="theme.siteTitle === undefined">
            <span class="text-xl font-semibold">{{ site.title }}</span>
            </template>
            <slot name="nav-bar-title-after" />
        </a>
    </div>
</template>