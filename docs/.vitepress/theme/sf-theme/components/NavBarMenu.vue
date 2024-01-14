<script setup lang="ts">
import NavBarMenuLink from './NavBarMenuLink.vue';
import NavBarMenuGroup from './NavBarMenuGroup.vue';
import { useData } from 'vitepress';

const { theme } = useData();

</script>
<template>
    <div class="hidden flex-1 md:flex justify-center">
        <template v-for="item in theme.nav" :key="item.text">
            <NavBarMenuLink v-if="'link' in item" :item="item" />
            <NavBarMenuGroup v-else :button="item.text" :items="item.items" />
        </template>
    </div>
</template>