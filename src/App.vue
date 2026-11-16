<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Awards />
    <Contact />
  </main>
  <footer class="site-footer">
    <div class="wrap">© {{ new Date().getFullYear() }} João Barbosa</div>
  </footer>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Awards from './components/Awards.vue'
import Contact from './components/Contact.vue'
</script>
