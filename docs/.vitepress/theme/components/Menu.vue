<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
interface Items {
    text: string;
    link: string;
}
defineProps<{
    text: string;
    items: Array<Items>;
}>()
</script>
<template>
    <Menu as="div" class="relative inline-block text-left">
        <MenuButton
            class="inline-flex w-full justify-center items-center gap-x-1.5 px-3 text-gray-900 dark:text-white hover:text-gray-500">
            {{ text }}
            <font-awesome-icon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" :icon="['fas', 'caret-down']" />
        </MenuButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                    <MenuItem v-for="(child, index ) in items" :key="index" v-slot="{ active }">
                    <a :href="child.link"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{
                            child.text }}</a>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>