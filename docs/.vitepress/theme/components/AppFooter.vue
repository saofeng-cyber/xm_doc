<script setup lang="ts">
import { useData } from 'vitepress';
const { theme, frontmatter } = useData();
import { useSidebar } from './composables/useSide.ts'

const { hasSidebar } = useSidebar()
</script>
<template>
    <footer v-if="theme.footer && frontmatter.footer !== false" :class="{ 'has-sidebar': hasSidebar }"
        class="p-8 w-full border-t border-[#e2e3e4] bg-white dark:bg-gray-900 duration-300 ease-in-out">
        <div class="text-center px-4 text-sm font-medium leading-7 text-gray-500">
            <p v-if="theme.footer.message" class="message" v-html="theme.footer.message" />
            <p v-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright" />
        </div>
    </footer>
</template>