<script setup lang="ts">
// import NavSearch from './NavSearch.vue';
import NavBarMenu from './NavBarMenu.vue';
import DocSearch from './AppDocSearch.vue'
import NavBarSocialLinks from './NavBarSocialLinks.vue';
import { defineClientComponent, useData } from 'vitepress';
import { computed } from 'vue';
const { theme } = useData()
const SwitchDark = defineClientComponent(() => {
    return import('./common/SwitchDark.vue')
})
const hasDocSearch = computed(() => {
    return theme.value.search && theme.value.search.provider === 'algolia'
})
</script>
<template>
    <div class="flex flex-1 justify-end items-center px-4">
        <slot name="nav-bar-content-before" />
        <!-- <NavSearch /> -->
        <NavBarMenu />
        <NavBarSocialLinks />
        <SwitchDark />
        <DocSearch v-if="hasDocSearch" />
        <slot name="nav-bar-content-after" />

    </div>
</template>