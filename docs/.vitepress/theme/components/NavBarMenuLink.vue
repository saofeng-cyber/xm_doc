<script setup lang="ts">
import NavLink from './NavLink.vue';
import { useData } from 'vitepress';
import type { DefaultTheme } from 'vitepress'
import { isActive } from './composables/shared'
const { page } = useData()
defineProps<{
    item: DefaultTheme.NavItemWithLink
}>()



</script>
<template>
    <NavLink
        class="flex justify-center items-center mx-3 text-base left-16 font-medium hover:text-indigo-400 dark:text-white dark:border-white dark dark:hover:text-indigo-400"
        :class="{ NavLink: true, active: isActive(page.relativePath, item.activeMatch || item.link, !!item.activeMatch) }"
        :href="item.link" :target="item.target">
        <span v-html="item.text"></span>
    </NavLink>
</template>
