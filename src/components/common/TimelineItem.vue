<template>
  <div class="timeline-item">
    <div class="timeline-content">
      <span class="timeline-date">{{ experience.date }}</span>
      <h3 class="timeline-title">{{ experience.title }}</h3>
      <div class="timeline-company">{{ experience.company }}</div>
      <ul class="timeline-desc">
        <li v-for="(desc, i) in experience.description" :key="i">{{ desc }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
</style>
