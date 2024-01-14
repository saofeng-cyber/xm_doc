<script setup lang="ts">
import { onMounted, ref } from 'vue';

const returnTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const topRef = ref<HTMLElement | null>(null)

onMounted(() => {
    window.addEventListener('scroll', () => {
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top >= 240) {
            topRef.value?.classList.remove('hidden')
            topRef.value?.children[0].classList.add('bounce')
        } else {
            topRef.value?.children[0].classList.remove('bounce')
            topRef.value?.classList.add('hidden')
        }
    })
})
</script>
<template>
    <div ref="topRef" class="fixed right-12 bottom-14 hidden z-[99]">
        <button
            class="w-12 h-12 flex justify-center items-center bg-[#39c5bb] hover:bg-[#ff7242] rounded-full text-white duration-300 ease-in-out"
            @click="returnTop">
            <font-awesome-icon rotation="270" :icon="['fas', 'fighter-jet']" />
        </button>
    </div>
</template>
<style lang="less" scoped>
.bounce {
    animation: bounceY 0.20s ease-in-out;
}


@keyframes bounceY {

    0%,
    100% {
        transform: translateX(0px);
        opacity: 1.0;
    }

    50% {
        transform: translateX(-45px);
        opacity: 0.6;
    }
}
</style>