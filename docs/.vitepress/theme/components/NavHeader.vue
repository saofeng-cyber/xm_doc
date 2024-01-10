<script setup lang="ts">
import NavTitle from './NavTitle.vue'
import NavContent from './NavContent.vue'
import { useData } from 'vitepress'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { computed, ref } from 'vue';
const { theme, frontmatter } = useData();
const { nav } = theme.value;
const mobileMenuOpen = ref(false);

const hasNavbar = computed(() => {
  return frontmatter.value.navbar !== false
})


</script>
<template>
  <header v-if="hasNavbar"
    class="fixed inset-0 whitespace-nowrap h-16 flex items-center z-10 shadow-lg md:px-4 px-8 bg-white dark:bg-slate-900 duration-500">
    <nav class="flex w-full items-center justify-between lg:px-8" aria-label="Global">
      <NavTitle>
        <template #nav-bar-title-before>
          <slot name="nav-bar-title-before" />
        </template>
        <template #nav-bar-title-after>
          <slot name="nav-bar-title-after" />
        </template>
      </NavTitle>
      <NavContent>
        <template #nav-bar-content-before>
          <slot name="nav-bar-content-before" />
        </template>
        <template #nav-bar-content-after>
          <slot name="nav-bar-content-after" />
        </template>
      </NavContent>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-12 w-12 rounded-full" :src="theme.logo" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <font-awesome-icon bounce size="xl" :icon="['fas', 'xmark']" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in nav" :key="item.text" :href="item.link"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                  item.text }}</a>
            </div>
            <div class="py-6">
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
