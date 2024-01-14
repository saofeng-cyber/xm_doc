<script setup lang="ts">
import { useData, withBase } from 'vitepress';
import { watchEffect } from 'vue';
import { navScreen } from "../store/app/app-set"
const useNavScreen = navScreen()
const { theme } = useData();
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
        <div :aria-open="isOpen"
            class="NavBarContent fixed z-[1000] top-0 bottom-0 w-full overflow-y-auto bg-white p-6 duration-300 ease-out">
            <div class="flex justify-center">
                <img :src="withBase(theme.logo)" alt="logo" class="w-28 h-28 rounded-full" />
            </div>
            <div class="absolute right-6 top-6" @click="closeMenu">
                <font-awesome-icon size="xl" :icon="['fas', 'times']" />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.NavBarContent[aria-open="true"] {
    transform: translateY(0);
}

.NavBarContent[aria-open="false"] {
    transform: translateY(-100%);
}
</style>