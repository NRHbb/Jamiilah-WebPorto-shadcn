<template>
    <header>
        <CustomNav/>
    </header>
    <main class="min-h-screen overflow-x-hidden">
        <RouterView />
    </main>
    <footer>
        <CustomFooter />
    </footer>
</template>

<script setup lang="ts">
import CustomFooter from '../components/CustomFooter.vue'
import { RouterView } from 'vue-router'
import CustomNav from '@/components/CustomNav.vue';
</script>

<style scoped>

</style>