<script setup lang="ts">
import { useData } from 'vitepress';

const { theme } = useData();
</script>
<template>
    <div class="hidden xl:flex justify-end">
        <ul class="flex items-center justify-around gap-x-2">
            <li v-for="{ link, icon } in theme.socialLinks">
                <a :key="link" :href="link" class="w-8 h-8 flex items-center justify-center rounded-full" target="_blank"
                    rel="noopener">
                    <font-awesome-icon size="lg" :icon="['fab', icon.svg]" />
                </a>
            </li>
        </ul>
    </div>
</template>