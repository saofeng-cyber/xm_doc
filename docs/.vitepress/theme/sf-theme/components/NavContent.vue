<script setup lang="ts">
// import NavSearch from './NavSearch.vue';
import NavBarMenu from './NavBarMenu.vue';
import NavBarSocialLinks from './NavBarSocialLinks.vue';
import { defineClientComponent } from 'vitepress';
const SwitckDark = defineClientComponent(() => {
    return import('./common/SwitckDark.vue')
})
</script>
<template>
    <div class="flex flex-1 justify-end items-center">
        <slot name="nav-bar-content-before" />
        <!-- <NavSearch /> -->
        <NavBarMenu />
        <NavBarSocialLinks />
        <SwitckDark />
        <slot name="nav-bar-content-after" />

    </div>
</template>