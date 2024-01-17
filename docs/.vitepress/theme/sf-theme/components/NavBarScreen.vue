<script setup lang="ts">
import { useData, withBase } from 'vitepress';
import { watchEffect } from 'vue';
import { navScreen } from "../store/app/app-set"
import NavBarVerticalMenuLink from './NavBarVerticalMenuLink.vue';
import NavBarMenuVerticalGroup from './NavBarMenuVerticalGroup.vue';
const useNavScreen = navScreen()
const { theme, site } = useData();
const props = defineProps<{ isOpen: boolean }>();
watchEffect(() => {
    if (props.isOpen) {
        document.body.classList.add('overflow-hidden');
    }
    else {
        document.body.classList.remove('overflow-hidden');
    }
})

const closeMenu = () => {
    useNavScreen.setOpen(false)
}

</script>
<template>
    <div class="NavBarSCreen">
        <div :aria-expanded="isOpen"
            class="NavBarContent fixed z-[1000] top-0 h-full w-full overflow-y-auto p-6 duration-300 ease-out">
            <div class="absolute right-6 top-6" @click="closeMenu">
                <font-awesome-icon size="xl" :icon="['fas', 'times']" />
            </div>
            <div class="flex justify-center">
                <img :src="withBase(theme.logo)" alt="logo" class="imgAnimateShadow w-28 h-28 rounded-full" />
            </div>
            <h3 class="py-6 font-semibold text-2xl text-center leading-6">{{ site.title }}</h3>
            <div class="w-full mt-6 flex flex-col items-center">
                <template v-for="item in theme.nav" :key="item.text">
                    <NavBarVerticalMenuLink v-if="'link' in item" :item="item" />
                    <NavBarMenuVerticalGroup v-else :button="item.text" :items="item.items" />
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.NavBarContent {
    background-color: var(--tdoc-side-color);
    backdrop-filter: blur(10px);
    color: #ffffff;
}

.NavBarContent[aria-expanded="true"] {
    transform: translateY(0);
}

.NavBarContent[aria-expanded="false"] {
    transform: translateY(-100%);
}
</style>