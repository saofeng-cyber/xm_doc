<script setup lang="ts">
import { type OutlineItem } from '../../utils/outline'
defineProps<{
    headers: Array<OutlineItem>,
    root?: boolean
}>()
</script>

<template>
    <ul :class="[root ? '' : 'pl-4']">
        <li class="break-words" v-for="{ children, link, title } in headers">
            <a class="text-base font-normal leading-8 hover:text-[#39c5bb] duration-300"
                :href="link">
                {{ title }}
            </a>
            <template v-if="children?.length">
                <OutlineItem :headers="children" />
            </template>
        </li>
    </ul>
</template>