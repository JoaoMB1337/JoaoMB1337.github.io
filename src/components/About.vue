<template>
  <section id="about">
    <div class="wrap">
      <h2>About me</h2>

      <div class="about-grid" v-reveal>
        <div class="about-text">
          <p>
            I'm João, a developer from Portugal who likes software that quietly does its job. My path started
            hands-on, repairing hardware and supporting users, before moving into web, desktop and mobile development.
          </p>
          <p>
            Today I work at <strong>Nelo - M.A.R Kayaks</strong>, where I build and maintain the internal applications
            behind daily operations, and analyse sensor data to help elite athletes get faster.
          </p>
          <p>
            Because I've also been the person fixing the machines, I care about systems that are reliable,
            easy to maintain and pleasant for the people who use them every day.
          </p>
        </div>
        <figure class="portrait">
          <img src="https://github.com/JoaoMB1337.png?size=460" alt="Portrait of João Barbosa" width="300" height="300" loading="lazy">
        </figure>
      </div>

      <h3 class="sub">Tech I work with</h3>
      <div class="stack-grid">
        <div v-for="s in stack" :key="s.group" class="card stack-card" v-reveal>
          <h4>{{ s.group }}</h4>
          <ul class="chips">
            <li v-for="item in s.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stack } from '@/data/stack'
</script>
