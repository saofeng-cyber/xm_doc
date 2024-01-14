<script setup lang="ts">
import { useData } from 'vitepress'
import AppContent from '../components/AppContent.vue';
import NavHeader from '../components/NavHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import NavBarScreen from '../components/NavBarScreen.vue';
import { computed, onMounted } from 'vue';
import { navScreen } from "../store/app/app-set"

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
const useNavScreen = navScreen()


const isOpen = computed(() => {
  return useNavScreen.openMenu
})
onMounted(() => {
  if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

</script>

<template>
  <div id="web_bg"></div>
  <div class="layout" :class="frontmatter.pageClass">
    <nav-header>
      <template #nav-bar-title-before>
        <slot name="nav-bar-title-before" />
      </template>
      <template #nav-bar-title-after>
        <slot name="nav-bar-title-after" />
      </template>
      <template #nav-bar-content-before>
        <slot name="nav-bar-content-before" />
      </template>
      <template #nav-bar-content-after>
        <slot name="nav-bar-content-after" />
      </template>
    </nav-header>
    <app-content>
      <template #not-found>
        <slot name="not-found" />
      </template>
      <template #home-hero-before>
        <slot name="home-hero-before" />
      </template>
      <template #home-hero-after>
        <slot name="home-hero-after" />
      </template>
      <template #home-features-before>
        <slot name="home-features-before" />
      </template>
      <template #home-features-after>
        <slot name="home-features-after" />
      </template>
      <template #page-top>
        <slot name="page-top" />
      </template>
      <template #page-bottom>
        <slot name="page-bottom" />
      </template>
    </app-content>
    <app-footer />
    <slot name="layout-bottom" />
  </div>
  <NavBarScreen :is-open="isOpen" />
</template>
