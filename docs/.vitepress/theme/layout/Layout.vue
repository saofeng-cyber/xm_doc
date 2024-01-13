<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted } from 'vue';
import '../utils/autoload'

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
<style lang="less" scoped>
#web_bg {
  position: fixed;
  width: 100%;
  height: 100%;
  // background: url("	https://api.yimian.xyz/img?type=moe&size=1920x1080");
  // background: url("https://cdn.seovx.com/?mom=302");
  background: url("https://bing.img.run/rand.php");
  background-attachment: local;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: blurImg 1s 1 ease-in;
  // &::before{
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   backdrop-filter: blur(1px);
  // }

  @keyframes blurImg {
    0% {
      filter: blur(0px);
    }

    100% {
      filter: blur(5px);
    }

  }
}
</style>