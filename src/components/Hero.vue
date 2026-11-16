<template>
  <section id="top" class="hero">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">Hi, I'm</p>
        <h1 class="hero-name">João Barbosa<span class="accent">.</span></h1>
        <p class="hero-role">Backend developer who keeps real operations running.</p>
        <p class="hero-lead">
          IT Analyst &amp; Developer at <strong>Nelo</strong>, building the internal systems a world-class kayak
          manufacturer runs on every day — and crunching sensor data from elite athletes.
        </p>
        <div class="hero-cta">
          <a href="#projects" class="btn btn-primary">See my work</a>
          <a href="#contact" class="btn">Get in touch</a>
        </div>
        <div class="socials">
          <a href="https://github.com/JoaoMB1337" target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/joaobarbosa1337/" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" /></a>
        </div>
      </div>

      <div class="terminal" aria-hidden="true">
        <div class="terminal-bar"><i></i><i></i><i></i><span>~/joao</span></div>
        <pre><span class="p">$</span> whoami
joao.barbosa · backend developer
<span class="p">$</span> cat stack.txt
php laravel sql python java
<span class="p">$</span> uptime
{{ years }}+ years shipping internal tools @ nelo
<span class="p">$</span> <span class="cursor">▍</span></pre>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from './Icon.vue'

const years = new Date().getFullYear() - 2021
</script>
