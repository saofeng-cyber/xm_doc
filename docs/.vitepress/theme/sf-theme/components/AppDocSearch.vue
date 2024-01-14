<script setup lang="ts">
import docsearch from '@docsearch/js';

import '@docsearch/css';

import { useData } from "vitepress"
import { onMounted } from 'vue';
const { theme } = useData()
const searchOption = theme.value.search.options
onMounted(() => {

    docsearch({
        container: '#docsearch',
        ...searchOption,
    })
})
</script>
<template>
    <div id="docsearch"></div>
</template>
<style lang="less">
#docsearch {
    margin-left: 1rem;
    margin-left: 1rem;
    .DocSearch-Button {
        background-color: #eff0f3;
    }
}
</style>