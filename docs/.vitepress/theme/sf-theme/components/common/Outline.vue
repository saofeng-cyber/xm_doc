<script setup lang="ts">
import OutlineItem from './OutlineItem.vue';
import { shallowRef } from 'vue';
import { getHeaders, resolveTitle } from '../../utils/outline';
import { onContentUpdated, useData } from 'vitepress';
const { frontmatter, theme } = useData()
const headers = shallowRef<any>([])
const levelTitle = shallowRef(resolveTitle(theme.value))
headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
onContentUpdated(()=>{
    headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
})

</script>

<template>
    <div v-if="headers.length" class="user_bg rounded-3xl p-6 sticky top-20">
        <div class="">
            <div class="text-sm left-8 leading-8 border-b border-slate-800 pb-2 font-semibold flex items-center">
                <font-awesome-icon size="lg" :icon="['fas', 'list']" />
                <span class="pl-2 text-lg">{{ levelTitle }}</span>
            </div>
            <OutlineItem :root="true" :headers="headers" />
        </div>
    </div>
</template>
<style lang="less" scoped>
.user_bg {
    background-color: var(--tdoc-bg-color);
    color: var(--tdoc-text-color);
}
</style>
