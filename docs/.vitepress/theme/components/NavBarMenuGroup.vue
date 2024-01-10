<script setup lang="ts">
import NavBarMenuLink from './NavBarMenuLink.vue';
import { ref, defineProps } from 'vue';

defineProps<{
    button?: string
    items?: any[]
}>()
const open = ref<boolean>(false)
</script>
<template>
    <div class="px-2 NavbarGroup h-16 flex items-center" @mouseenter="open = true" @mouseleave="open = false">
        <button type="button" aria-haspopup="true" class="button" :aria-expanded="open" @click="open = !open">
            <span v-if="button" class="hover:text-indigo-300 dark:text-white dark:hover:text-indigo-400">
                <span v-if="button" v-html="button" class="mr-1"></span>
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </span>
            <font-awesome-icon v-else :icon="['fas', 'chevron-down']" />
        </button>
        <div
            class="menu p-3 rounded-lg absolute border shadow-lg bg-white dark:bg-slate-800 dark:border-slate-600 visible top-12 -translate-x-1/2 duration-300">
            <template v-for="item in items" :key="item.text">
                <NavBarMenuLink :item="item" class="py-1" />
            </template>
        </div>
    </div>
</template>
<style lang="less" scoped>
.NavbarGroup {
    position: relative;

    .menu {
        opacity: 0;
        visibility: hidden;
    }

    .button[aria-expanded="true"]~.menu {
        opacity: 1 !important;
        visibility: visible !important;
    }
}
</style>