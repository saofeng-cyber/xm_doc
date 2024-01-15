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
    <div class="NavbarGroup min-w-[288px]">
        <div :aria-expanded="open" class="button flex py-4 items-center justify-between" @click="changeOpen">
            <span class="text-lg">{{ button }}</span>
            <font-awesome-icon class="chevron_down" size="lg" :icon="['fas', 'chevron-down']" />
        </div>
        <div class="menu duration-300 ease-in-out overflow-hidden" :style="{ '--n': items?.length || 0 }">
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

    .chevron_down {
        transition: all 0.2s ease-in-out;
    }

    .button[aria-expanded="true"] .chevron_down {
        transform: rotate(180deg);
    }

    .menu {
        height: 0;
    }

    .button[aria-expanded="true"]~.menu {
        height: calc(var(--n) * 48px);
    }
}</style>