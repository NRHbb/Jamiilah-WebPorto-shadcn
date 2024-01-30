<template>
  <div id="home">
    <Hero />
  </div>
  <div id="about">
    <About />
  </div>
  <div id="service">
    <Skill />
  </div>
  <div id="project">
    <ProjectView />
  </div>
  <div id="contact">

  </div>

</template>

<script setup lang="ts">
import Hero from "./porto/HeroView.vue"
import About from "./porto/AboutView.vue";
import Skill from "./porto/SkillView.vue";
import ProjectView from "./porto/ProjectView.vue";
</script>

<style scoped>

</style>