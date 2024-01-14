<script setup lang="ts">
import NavBarVerticalMenuLink from './NavBarVerticalMenuLink.vue';
import { ref } from 'vue';

defineProps<{
    button?: string
    items?: any[]
}>()
const open = ref<boolean>(false)
const changeOpen = () => {
    open.value = !open.value
}
</script>
<template>
    <div class="NavbarGroup w-[288px]">
        <div :aria-expanded="open" class="button flex py-4 items-center justify-between" @click="changeOpen">
            <span class="text-lg">{{ button }}</span>
            <font-awesome-icon size="lg" :rotation="open ? 180 : 270" :icon="['fas', 'chevron-down']" />
        </div>
        <div class="menu duration-300 ease-in-out overflow-hidden" :style="{ '--n': items?.length || 0  }">
            <template v-for="item in items" :key="item.text">
                <NavBarVerticalMenuLink :item="item" :child="true" class="py-1" />
            </template>
        </div>
    </div>
</template>
<style lang="less" scoped>
.NavbarGroup {
    position: relative;
    user-select: none;
    .menu {
        height: 0;
    }
    .button[aria-expanded="true"]~.menu {
        height: calc(var(--n) * 48px);
    }
}
</style>