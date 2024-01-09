<script setup lang="ts">
import Menu from './Menu.vue'
import { useData } from 'vitepress';

const { theme } = useData();
</script>
<template>
    <div class="flex justify-center flex-1">
        <a v-for="item in theme.nav" :key="item.text" :href="item.link"
            class="text-md px-3 leading-6 text-gray-900 hover:text-gray-500 dark:text-white">
            <div v-if="item.items">
                <Menu v-bind="item" />
            </div>
            <span v-else>{{ item.text }}</span>
        </a>
    </div>
</template>