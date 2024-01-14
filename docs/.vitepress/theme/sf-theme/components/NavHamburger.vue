<script setup lang="ts">
import { navScreen } from "../store/app/app-set"
const useNavScreen = navScreen()
const openScreen = () => {
    useNavScreen.setOpen(true)
}
</script>
<template>
    <div class="pl-4 block md:hidden">
        <font-awesome-icon size="xl" :icon="['fas', 'bars']" @click="openScreen" />
    </div>
</template>