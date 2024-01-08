<script setup lang="ts">
import OutlineItem from './OutlineItem.vue';
import { shallowRef } from 'vue';
import { getHeaders, resolveTitle } from '../../utils/outline';
import { useData, onContentUpdated } from 'vitepress';
const { frontmatter, theme } = useData()
const headers = shallowRef<any>([])
onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
})

const levelTitle = shallowRef(resolveTitle(theme.value))


</script>

<template>
    <div v-if="headers.length" class="sticky top-20">
        <div class="border-l pl-6">
            <div class="text-sm text-slate-700 dark:text-white left-8 leading-8 border-b font-semibold">{{ levelTitle }}
            </div>
            <OutlineItem :root="true" :headers="headers" />
        </div>
    </div>
</template>
