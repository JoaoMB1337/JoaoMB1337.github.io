<template>
  <section id="projects">
    <div class="wrap">
      <p class="eyebrow">03 · Projects</p>
      <h2>Things I've built</h2>

      <div class="project-grid">
        <a v-for="p in projectsData" :key="p.link" :href="p.link" target="_blank" rel="noopener"
           class="card project" v-reveal>
          <div class="project-top">
            <Icon name="github" class="project-gh" />
            <Icon name="arrow" class="project-arrow" />
          </div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.description }}</p>
          <ul class="chips">
            <li v-for="t in p.tech" :key="t">{{ t }}</li>
          </ul>
        </a>
      </div>

      <a class="more-link" href="https://github.com/JoaoMB1337?tab=repositories" target="_blank" rel="noopener">
        More on GitHub <Icon name="arrow" />
      </a>
    </div>
  </section>
</template>

<script setup>
import Icon from './Icon.vue'
import { projectsData } from '@/data/projects'
</script>
