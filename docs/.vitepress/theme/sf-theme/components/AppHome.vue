<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { ref } from 'vue';
const { frontmatter } = useData();
const { hero } = frontmatter.value;
const name = ref(hero.name);
const actions = ref(hero.actions);


</script>
<template>
    <div id="app_home" class="relative h-full px-4 pb-10 duration-300 ease-in-out text-white">
        <slot name="home-hero-before" />
        <!-- hero -->
        <div class="container mx-auto flex items-center justify-center flex-col lg:flex-row space-x-4">
            <div class="text-center">
                <h1 class="heroName text-4xl font-bold tracking-tigh sm:text-5xl">{{ name }}
                </h1>
                <p class="mt-12 text-lg leading-8">{{ hero.text }}</p>
                <div class="mt-10 flex items-center justify-center gap-x-6 space-x-1">
                    <a v-for="item in actions" :href="withBase(item.link)"
                        :class="[item.theme === 'brand' ? 'rounded-md bg-[#39c5bb] px-6 py-3 text-md font-semibold shadow-md' : 'text-lg font-bold  hover:text-[#39c5bb]']">
                        {{ item.text }}</a>
                </div>
            </div>
        </div>
        <slot name="home-hero-after" />
    </div>
</template>
<style lang="less" scoped>
.image-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-image: linear-gradient(60deg, #77dcf8b8 0%, #cb68eaaf 100%);
}
</style>