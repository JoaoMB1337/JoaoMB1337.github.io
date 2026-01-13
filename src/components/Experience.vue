<template>
  <section id="experience" class="container">
    <h2 class="section-title"><span class="text-accent">03.</span> Where I've Worked</h2>
    <div class="timeline">
      <TimelineItem v-for="(job, index) in experiences" :key="index" :experience="job" />
    </div>
  </section>
</template>

<script setup>
import TimelineItem from './common/TimelineItem.vue'
import { experienceData } from '@/data/experience'

const experiences = experienceData
</script>

<style scoped>
</style>
