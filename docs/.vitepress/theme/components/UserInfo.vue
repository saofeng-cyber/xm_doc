<script setup lang="ts">
import { useData } from 'vitepress';


const { theme, site, description } = useData();
const { socialLinks } = theme.value;

</script>
<template>
    <div class="user_bg p-6 mb-4 rounded-3xl">
        <div class="w-full flex justify-center pb-6">
            <a href="#">
                <img :src="theme.logo" alt="logo" class="w-24 h-24 rounded-full" />
            </a>
        </div>
        <h3 class="py-6 font-semibold text-3xl text-center leading-6">{{ site.title }}</h3>
        <p class="pb-4 font-semibold text-lg text-center left-5">{{ description }}</p>
        <div class="border-t border-slate-900"></div>
        <div class="pt-4">
            <ul class="flex items-center justify-evenly">
                <li v-for="{ link, icon } in socialLinks">
                    <a :key="link" :href="link" class="btn_mode mx-3 duration-200 hover:scale-125">
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
}
</style>