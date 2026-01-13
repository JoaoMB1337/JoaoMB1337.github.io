<template>
  <section id="skills" class="container">
    <h2 class="section-title"><span class="text-accent">02.</span> Skills</h2>
    <div class="skills-grid">
      <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </section>
</template>

<script setup>
import SkillCard from './common/SkillCard.vue'
import { skillsData } from '@/data/skills'

const skills = skillsData
</script>

<style scoped>
</style>
