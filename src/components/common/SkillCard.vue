<template>
  <div class="skill-card">
    <i :class="skill.icon + ' skill-icon'"></i>
    <div class="skill-name">{{ skill.name }}</div>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
</style>
