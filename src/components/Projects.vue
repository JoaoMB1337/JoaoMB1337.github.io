<template>
  <section id="projects" class="container">
    <h2 class="section-title"><span class="text-accent">04.</span> Some Things I've Built</h2>
    <div class="projects-grid">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './common/ProjectCard.vue'
import { projectsData } from '@/data/projects'

const projects = projectsData
</script>

<style scoped>
</style>
