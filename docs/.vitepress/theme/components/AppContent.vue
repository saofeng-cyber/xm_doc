<script setup lang="ts">
import NotFound from './NotFound.vue';
import AppDoc from './AppDoc.vue';
import AppPage from './AppPage.vue';
import AppHome from './AppHome.vue';
import { useData } from 'vitepress'
const { frontmatter, page } = useData()
</script>
<template>
    <div class="relative pt-16 pb-1 dark:bg-gray-900 duration-300 ease-in-out dark:text-white">
        <transition name="fade" mode="out-in">
            <slot name="not-found" v-if="page.isNotFound">
                <NotFound />
            </slot>
            <app-home v-else-if="frontmatter.layout === 'home'">
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
            </app-home>
            <app-doc v-else-if="frontmatter.layout === 'doc'" />
            <app-page v-else>
                <template #page-top>
                    <slot name="page-top" />
                </template>
                <template #page-bottom>
                    <slot name="page-bottom" />
                </template>
            </app-page>
        </transition>
    </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>