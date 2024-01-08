<script setup lang="ts">
import NavHeader from '../components/NavHeader.vue';
import AppContent from '../components/AppContent.vue';
import AppPage from '../components/AppPage.vue';
import AppFooter from '../components/AppFooter.vue';
import Home from '../components/Home.vue';
import { useData } from 'vitepress'
import { onMounted } from 'vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()

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
  <div class="layout relative w-full bg-white dark:bg-gray-900">
    <nav-header />
    <home v-if="frontmatter.layout === 'home'" />
    <app-page v-else-if="frontmatter.layout === 'page'" />
    <app-content v-else />
    <app-footer v-if="frontmatter.layout === 'home'" />
  </div>
</template>
