<script setup lang="ts">
import NavTitle from './NavTitle.vue'
import NavContent from './NavContent.vue'
import { useData } from 'vitepress'
import { fomatTime } from "./composables/shared.ts"
import { computed, onMounted, ref } from 'vue';
const { theme, frontmatter, site, page } = useData();
const { nav } = theme.value;
const headerRef = ref<HTMLElement>();
const hasNavbar = computed(() => {
  return frontmatter.value.navbar !== false
})

const isHome = computed(() => {
  return frontmatter.value.layout === 'home'
})
const description = ref(site.value.description);

onMounted(() => {
  whiteName()
  window.addEventListener("scroll", () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top >= 64) {
      headerRef.value!.style.cssText = "background-color: rgba(255, 255, 255, 0.96);color: #000;box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08);";
    } else {
      headerRef.value!.style.cssText = "background-color: transparent;box-shadow: none;";
    }
  })
})
const whiteName = () => {
  let index = 0;
  function readName() {
    setTimeout(() => {
      description.value = (site.value.description as string).slice(0, index) + "_"
      index += 1;
      if (index >= site.value.description.length + 1) {
        index = 0;
      }
      readName();
    }, 250);
  }
  readName();
}


</script>
<template>
  <div class="relative" :class="[isHome ? 'h-screen' : 'h-[420px]']">
    <header ref="headerRef" v-if="hasNavbar"
      class="fixed inset-0 whitespace-nowrap h-16 text-white font-bold flex items-center z-10 md:px-4 px-8 duration-500 ease-in-out">
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
    </header>
    <div v-if="isHome" class="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
      <h3 class=" font-bold text-3xl md:text-5xl">{{ site.title }}</h3>
      <p class="text-xl md:text-2xl mt-6 font-semibold">{{ description }}</p>
    </div>
    <div v-if="isHome" class="absolute w-full bottom-0 text-center p-4 text-white">
      <a href="#app_home">
        <font-awesome-icon size="2x" bounce :icon="['fas', 'chevron-down']" />
      </a>
    </div>
    <div v-if="!isHome" class="post-info absolute bottom-24 w-full flex justify-center items-center flex-col text-white">
      <h1 class="text-2xl md:text-4xl text-center">{{ page.title }}</h1>
      <div class="post-meta py-4 w-full flex justify-center items-center text-2xl">
          <p>🗓️</p>
          <p class="ml-2">{{ fomatTime(page.lastUpdated) }}</p>
      </div>
    </div>

  </div>
</template>
