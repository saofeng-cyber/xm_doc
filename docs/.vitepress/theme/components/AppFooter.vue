<script setup lang="ts">
import { useData } from 'vitepress';
const { theme } = useData();
const { footer } = theme.value;
</script>
<template>
    <div class="p-8 w-full border-t border-[#e2e3e4] bg-white dark:bg-gray-900 duration-300 ease-in-out">
        <div class="text-center px-4 text-sm font-medium leading-7 text-gray-500">
            <p class="message">{{ footer.message }}</p>
            <p class="copyright">{{ footer.copyright }}</p>
        </div>
    </div>
</template>