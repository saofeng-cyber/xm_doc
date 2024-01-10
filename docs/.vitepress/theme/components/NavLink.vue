<script setup lang="ts">
import { computed } from 'vue';
import { normalizeLink } from './composables/shared'
const props = defineProps<{
    tag?: string
    href?: string
    target?: string
}>()
const tag = computed(() => props.tag ?? (props.href ? 'a' : 'span'))
</script>
<template>
    <component :is="tag" :href="href ? normalizeLink(href) : undefined" :target="target ?? undefined">
        <slot />
    </component>
</template>