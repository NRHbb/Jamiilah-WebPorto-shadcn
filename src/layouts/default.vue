<template>
    <header>
        <NavBar />
    </header>
    <main class="min-h-screen">
        <RouterView />
    </main>
    <footer>
        <Footer />
    </footer>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>

</style>