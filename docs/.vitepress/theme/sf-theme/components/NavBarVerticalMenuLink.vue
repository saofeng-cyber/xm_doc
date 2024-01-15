<script setup lang="ts">
import NavLink from './NavLink.vue';
import { useData } from 'vitepress';
import type { DefaultTheme } from 'vitepress'
import { isActive } from './composables/shared'
const { page } = useData()
defineProps<{
    item: DefaultTheme.NavItemWithLink,
    child?: boolean
}>()



</script>
<template>
    <NavLink class="min-w-[288px] flex justify-between items-center my-2 text-base rounded-md duration-100 ease-in"
        :class="{ NavLink: true, active: isActive(page.relativePath, item.activeMatch || item.link, !!item.activeMatch), 'pl-4': child}"
        :href="item.link" :target="item.target">
        <div class="text-lg" v-html="item.text"></div>
    </NavLink>
</template>
<style lang="less" scoped>
.NavLink.active {
    color: #39c5bb;
    transition: color 0.3s ease-in-out;
}
</style>
