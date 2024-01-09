<script setup lang="ts">
import NavSearch from './NavSearch.vue';
import NavBarMenu from './NavBarMenu.vue';
import NavBarSocialLinks from './NavBarSocialLinks.vue';
import { defineClientComponent, useData } from 'vitepress';
const SwitckDark = defineClientComponent(() => {
  return import('./common/SwitckDark.vue')
})
</script>
<template>
    <div class="hidden md:flex flex-1 justify-center items-center px-4">
        <slot name="nav-bar-content-before" />
        <NavSearch />
        <NavBarMenu />
        <NavBarSocialLinks />
        <SwitckDark />
        <slot name="nav-bar-content-after" />
    </div>
</template>