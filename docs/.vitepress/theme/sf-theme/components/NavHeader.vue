<script setup lang="ts">
import NavTitle from './NavTitle.vue'
import NavContent from './NavContent.vue'
import NavHamburger from './NavHamburger.vue';
import HeaderContent from './HeaderContent.vue';
import { useData } from 'vitepress'


import { computed, onMounted, ref } from 'vue';
const { theme, frontmatter, site } = useData();
const { nav } = theme.value;
const navRef = ref<HTMLElement>();
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
      navRef.value!.style.cssText = "background-color: rgba(255, 255, 255, 0.96);color: #000;box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08);";
    } else {
      navRef.value!.style.cssText = "background-color: transparent;box-shadow: none;";
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
  <header v-if="hasNavbar" :class="[isHome ? 'h-screen' : 'h-[420px]']"
    class="duration-500 relative w-full text-white ease-in-out">
    <nav ref="navRef" class="fixed w-full top-0 z-[90] flex items-center h-16 justify-between px-4" aria-label="Global">
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
      <NavHamburger />
    </nav>
    <HeaderContent :is-home="isHome" />
  </header>
</template>
