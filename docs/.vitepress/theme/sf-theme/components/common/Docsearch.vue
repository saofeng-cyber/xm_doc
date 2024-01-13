<script setup lang="ts">
import docsearch from '@docsearch/js';

import '@docsearch/css';
import { onMounted } from 'vue';

onMounted(() => {
    docsearch({
        container: '#docsearch',
        appId: 'R2IYF7ETH7',
        apiKey: '599cec31baffa4868cae4e79f180729b',
        indexName: 'docsearch',
        // searchParameters: {
        //     facetFilters: ['language:en', 'version:1.0.0'],
        // },
        // insights: true,
    })
})
</script>
<template>
    <div id="docsearch"></div>
</template>
<style lang="less">
#docsearch {
    .DocSearch-Button {
        background-color: #ebedf0;
    }
}
</style>