<template>
  <div class="project-card">
    <div class="project-header">
      <i class="far fa-folder folder-icon"></i>
      <div class="project-links">
        <a :href="project.link" target="_blank" aria-label="GitHub Link"><i class="fab fa-github"></i></a>
      </div>
    </div>
    <div class="project-body">
      <h3 class="project-title">{{ project.title }}</h3>
      <div class="project-desc">
        <p>{{ project.description }}</p>
      </div>
      <ul class="project-tech-list">
        <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
</style>
