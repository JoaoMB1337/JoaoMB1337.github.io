<template>
  <section id="experience">
    <div class="wrap">
      <h2>Where I've worked</h2>

      <ol class="timeline">
        <li v-for="job in experienceData" :key="job.company" class="job" v-reveal>
          <p class="job-date">{{ job.date }}</p>
          <div>
            <h3>{{ job.title }} <span class="accent">@ {{ job.company }}</span></h3>
            <ul class="job-desc">
              <li v-for="d in job.description" :key="d">{{ d }}</li>
            </ul>
            <ul class="chips">
              <li v-for="t in job.stack" :key="t">{{ t }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { experienceData } from '@/data/experience'
</script>
