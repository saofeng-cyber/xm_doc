<script setup lang="ts">
import { useData, withBase } from 'vitepress';


const { theme, site, description } = useData();
const { socialLinks } = theme.value;

</script>
<template>
    <div class="user_bg py-6 px-4 mb-4 rounded-3xl">
        <div class="w-full flex justify-center pb-6">
            <a href="#" class="relative">
                <img :src="withBase(theme.logo)" alt="logo" class="w-28 h-28 rounded-full" />
            </a>
        </div>
        <h3 class="py-4 font-semibold text-2xl text-center leading-6">{{ site.title }}</h3>
        <p class="pb-4 font-semibold text-lg text-center left-5">{{ description }}</p>
        <div class="flex justify-center items-center p-3 h-12 w-full">
            <a class="bg-[#39c5bb] hover:bg-[#ff7242] text-white w-full h-11 rounded-full flex items-center justify-center duration-300 ease-in-out"
                href="https://github.com/saofeng-cyber" target="_blank">前往小窝</a>
        </div>
        <div class="pt-4">
            <ul class="flex items-center justify-evenly">
                <li v-for="{ link, icon } in socialLinks">
                    <a :key="link" :href="link" class="mx-3">
                        <font-awesome-icon size="xl" :icon="['fab', icon.svg]" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less" scoped>
.user_bg {
    background-color: rgba(255, 255, 255, 0.88);

    a:hover img {
        transform: rotate(30deg) scale(1.2);
    }


    img {
        animation: imgShadow 800ms linear infinite alternate;
        transition: transform 0.5s ease-in-out;
    }

    @keyframes imgShadow {

        0% {
            box-shadow: 0px 0px 6px rgb(57, 197, 188);
        }

        50% {
            box-shadow: 0px 0px 12px rgb(57, 197, 188);
        }

        100% {
            box-shadow: 0px 0px 24px rgb(57, 197, 188);
        }
    }
}
</style>