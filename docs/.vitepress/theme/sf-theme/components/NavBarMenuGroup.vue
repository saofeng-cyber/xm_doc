<script setup lang="ts">
import NavBarMenuLink from './NavBarMenuLink.vue';
import { ref } from 'vue';

defineProps<{
    button?: string
    items?: any[]
}>()
const open = ref<boolean>(false)
</script>
<template>
    <div class="px-2 NavbarGroup h-16 flex items-center" @mouseenter="open = true" @mouseleave="open = false">
        <button type="button" aria-haspopup="true" class="button" :aria-expanded="open" @click="open = !open">
            <span v-if="button" class="text-base">
                <span v-if="button" v-html="button" class="mr-1"></span>
                <font-awesome-icon size="2xs" :icon="['fas', 'chevron-down']" />
            </span>
            <font-awesome-icon v-else :icon="['fas', 'chevron-down']" />
        </button>
        <div
            class="menu p-2 rounded-md absolute bg-white text-slate-700 shadow-lg top-12 duration-300 ease-in-out">
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
        transform: translateY(0);
    }

    .button[aria-expanded="true"]~.menu {
        opacity: 1 !important;
        visibility: visible !important;
        transform: translateY(1);
    }
}
</style>