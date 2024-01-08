<script setup lang="ts">
import { type OutlineItem } from '../../utils/outline'
defineProps<{
    headers: Array<OutlineItem>,
    root?: boolean
}>()
</script>

<template>
    <ul :class="[root ? '' : 'pl-4']">
        <li class="break-words whitespace-nowrap" v-for="{ children, link, title } in headers">
            <a class="text-sm font-medium text-slate-600 dark:text-white leading-8 hover:text-slate-400 duration-300"
                :href="link">
                {{ title }}
            </a>
            <template v-if="children?.length">
                <OutlineItem :headers="children" />
            </template>
        </li>
    </ul>
</template>