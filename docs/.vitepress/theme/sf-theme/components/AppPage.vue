<script setup lang="ts">
</script>
<template>
    <div class="relativ duration-300">
        <slot name="page-top" />
        <div class="mx-auto relative flex justify-center container px-4 transition-all duration-500 ease-in-out">
            <article class="tdoc">
                <Content />
            </article>
        </div>
        <slot name="page-bottom" />
    </div>
</template>