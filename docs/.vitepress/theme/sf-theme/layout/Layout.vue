<script setup lang="ts">
import { useData } from 'vitepress'
import AppContent from '../components/AppContent.vue';
import NavHeader from '../components/NavHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import { onMounted } from 'vue';
import { useLive2d } from "vitepress-theme-website"

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
  useLive2d({
    enable: true,
    model: {
      url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/kesshouban/model.json'
    },
    display: {
      position: 'left',
      width: '135px',
      height: '300px',
      xOffset: '35px',
      yOffset: '5px'
    },
    mobile: {
      show: true
    },
    react: {
      opacity: 0.8
    }
  })
})

</script>

<template>
  <div id="web_bg"></div>
  <div v-if="frontmatter.layout" class="layout relative min-h-screen flex flex-col" :class="frontmatter.pageClass">
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
  <Content v-else />
</template>
