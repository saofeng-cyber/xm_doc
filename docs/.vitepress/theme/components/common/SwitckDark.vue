<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';

import { switchDark } from '../../store/switch-dark'
const useSwitchDark = switchDark()
const ballRef = ref<HTMLElement | null>(null)
const themeMode = ref(Boolean(useSwitchDark.theme === 'light'))

const changeDarkMode = (data: any) => {
    const { checked } = data.target
    useSwitchDark.setTheme(checked)
}


watch(themeMode, (val) => {
    nextTick(() => {
        if (val) {
            ballRef.value?.classList.add('ball-right')
            document.documentElement.classList.remove('dark')
        }
        else {
            ballRef.value?.classList.remove('ball-right')
            document.documentElement.classList.add('dark')
        }
    })
}, { immediate: true })

</script>
<template>
    <div class="hidden xl:block ml-3">
        <input type="checkbox" name="" v-model="themeMode" id="switch" class="hidden" @change="changeDarkMode">
        <label for="switch">
            <font-awesome-icon class="one w-4 h-4 text-[#f2c40f]" size="lg" :icon="['fas', 'moon']" />
            <font-awesome-icon class="two w-4 h-4 text-[#f2c40f]" size="lg" :icon="['fas', 'sun']" />
            <div ref="ballRef" class="ball" :class="[themeMode ? 'ball-right' : 'ball-left']"></div>
        </label>
    </div>
</template>

<style lang="less" scoped>
label {
    background-color: #294364;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 28px;
    position: relative;
    width: 52px;
    height: 25px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 5px;
    width: 19px;
    height: 19px;
    transition: transform 0.3s ease-in-out;
    transform: translateX(0);
}

.ball-left {
    transform: translateX(0);
}

.ball-right {
    transform: translateX(23px);
}

.two {
    transition: transform 0.25s linear 0.1s;
}

input[type='checkbox']:checked+label .two {
    transform: scale(0);
}


input[type='checkbox']:checked+label {
    background-color: #3c434d;
}
</style>