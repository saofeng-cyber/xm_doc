<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { formatTime } from "./composables/shared"
import { useData } from 'vitepress'
import { getOne, type OneData } from '../hooks/useOne';
const useGetOne = getOne();
const { site, page } = useData();
const props = defineProps<{
    isHome: boolean
}>()
const oneData = ref<OneData>()
const getOnData = () => {
    useGetOne.then((res: any) => {
        oneData.value = res
    })
}
const isShowHeaderContent = computed(() => {
    return props.isHome
})

onMounted(getOnData)
</script>

<template>
    <div v-if="isShowHeaderContent">
        <div class="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <h3 class=" font-bold text-3xl md:text-5xl">{{ site.title }}</h3>
            <p class="text-xl md:text-2xl mt-6 font-semibold">{{ oneData?.hitokoto || site.description }}</p>
        </div>
        <div class="absolute w-full bottom-0 text-center p-4 text-white">
            <a href="#app_home">
                <font-awesome-icon size="2x" bounce :icon="['fas', 'chevron-down']" />
            </a>
        </div>
    </div>
    <div v-if="!isShowHeaderContent"
        class="post-info absolute bottom-24 w-full flex justify-center items-center flex-col text-white">
        <h1 class="text-2xl md:text-4xl text-center">{{ page.title }}</h1>
        <div class="post-meta flex items-center pt-8 text-lg font-semibold">
            <p>🗓️ <span>{{ formatTime(page.lastUpdated) }}</span></p>
        </div>
    </div>
</template>