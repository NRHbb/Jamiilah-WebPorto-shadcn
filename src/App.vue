<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<template>
  <NavBar />
  <h1 class="text-3xl font-bold flex justify-center items-center h-screen">Welcome SHADCN vue3 starter pack</h1>
  <RouterView />
</template>


