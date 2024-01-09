<script setup lang="ts">
import NavHeader from '../components/NavHeader.vue';
import AppContent from '../components/AppContent.vue';
import AppPage from '../components/AppPage.vue';
import AppFooter from '../components/AppFooter.vue';
import NotFound from '../components/NotFound.vue';
import Home from '../components/Home.vue';
import { useData } from 'vitepress'
import { onMounted } from 'vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData()

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
  <div v-if="frontmatter.layout" class="layout relative h-full flex flex-col bg-white dark:bg-gray-900" :class="frontmatter.pageClass">
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
    <NotFound v-if="page.isNotFound" />
    <home v-else-if="frontmatter.layout === 'home'" />
    <app-content v-else-if="frontmatter.layout === 'doc'" />
    <app-page v-else />
    <app-footer />
    <slot name="layout-bottom" />
  </div>
  <Content v-else />
</template>
