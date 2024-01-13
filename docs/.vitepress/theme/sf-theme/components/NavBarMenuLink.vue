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
    <NavLink class="flex justify-center items-center mx-3 text-base left-16"
        :class="{ NavLink: true, active: isActive(page.relativePath, item.activeMatch || item.link, !!item.activeMatch) }"
        :href="item.link" :target="item.target">
        <span v-html="item.text"></span>
    </NavLink>
</template>
<style lang="less" scoped>
.NavLink.active {
    color: #39c5bb;
    transition: color 0.3s ease-in-out;
}
</style>
