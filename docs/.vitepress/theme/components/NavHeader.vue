<script setup lang="ts">
import { defineClientComponent } from 'vitepress'
import Menu from './Menu.vue'
import { useData } from 'vitepress'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { ref } from 'vue';
const { theme } = useData();
const { nav, socialLinks } = theme.value;
const mobileMenuOpen = ref(false);
const SwitckDark = defineClientComponent(() => {
  return import('./common/SwitckDark.vue')
})
</script>
<template>
  <header
    class="fixed inset-0 h-16 flex items-center z-10 shadow-lg md:px-4 px-8 bg-white dark:bg-slate-900 duration-500">
    <nav class="flex w-full items-center justify-between lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/xm_doc/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-12 w-12 rounded-full" :src="theme.logo" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <font-awesome-icon size="xl" :icon="['fas', 'bars']" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in nav" :key="item.text" :href="item.link"
          class="text-md font-bold leading-6 text-gray-900 hover:text-gray-500 dark:text-white">
          <div v-if="item.items">
            <Menu v-bind="item" />
          </div>
          <span v-else>{{ item.text }}</span>
        </a>
      </div>
      <div class="hidden  lg:flex lg:flex-1 lg:justify-end">
        <ul class="flex items-center justify-evenly">
          <li v-for="{ link, icon } in socialLinks">
            <a :key="link" :href="link" class="btn_mode mx-3">
              <font-awesome-icon size="xl" :icon="['fab', icon.svg]" />
            </a>
          </li>
        </ul>
      </div>

      <SwitckDark />
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
