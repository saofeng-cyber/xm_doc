<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { ref } from 'vue';
const { frontmatter } = useData();
const { hero } = frontmatter.value;
const name = ref(hero.name);
const actions = ref(hero.actions);
// const whiteName = () => {
//     let index = 0;
//     function readName() {
//         setTimeout(() => {
//             name.value = (hero.name as string).slice(0, index) + "_"
//             index += 1;
//             if (index >= hero.name.length + 1) {
//                 index = 0;
//             }
//             readName();
//         }, 250);
//     }
//     readName();
// }

// onContentUpdated(whiteName)


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
                        :class="[item.theme === 'brand' ? 'rounded-md bg-gray-800 px-6 py-3 text-md font-semibold shadow-md duration-200' : 'text-lg font-bold  hover:text-gray-600']">
                        {{ item.text }}</a>
                </div>
            </div>
        </div>
        <slot name="home-hero-after" />
        <!-- feature -->
        <!-- <slot name="home-features-before" />
        <div
            class="my-12 mx-auto flex justify-center items-start flex-col lg:flex-row space-y-6 lg:space-y-0 space-x-0 lg:space-x-6">
            <div v-for="item in features" :key="item.title"
                class="w-full rounded-xl shadow-lg dark:shadow-slate-950 dark:bg-slate-900 px-4">
                <div class="uppercase pt-8 text-lg font-semibold space-x-4 dark:text-white">
                    <font-awesome-icon size="3x" :icon="item.icon" />
                    <span>{{ item.title }}</span>
                </div>
                <div class="text-center mt-8">
                    <a href="#"
                        class="px-8 py-4 font-semibold bg-slate-900 dark:bg-slate-600 text-white rounded-lg shadow-lg hover:bg-slate-700">
                        开始学习
                    </a>
                </div>
                <p class="pt-12 pb-10 font-semibold dark:text-white">{{ item.details }}</p>
            </div>
        </div>
        <slot name="home-features-after" /> -->
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