<script setup lang="ts">
import { useData } from 'vitepress';

const { theme, site } = useData();

</script>

<template>
    <div class="duration-300">
        <a href="/xm_doc/" class="flex items-center">
            <slot name="nav-bar-title-before" />
            <img class="h-12 w-12 rounded-full mr-3" :src="theme.logo" alt="" />
            <template v-if="theme.siteTitle">{{ theme.siteTitle }}</template>
            <template v-else-if="theme.siteTitle === undefined">{{ site.title }}</template>
            <slot name="nav-bar-title-after" />
        </a>
    </div>
</template>