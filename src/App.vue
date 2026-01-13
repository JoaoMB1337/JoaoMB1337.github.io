<template>
  <div class="app-container">
    <Header />

    <main>
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/common/Header.vue'
import HeroSection from './components/common/HeroSection.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Awards from './components/Awards.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useTheme } from './composables/useTheme'

// Initialize theme on app load
const { initTheme } = useTheme()
initTheme()
</script>

<style>
</style>
