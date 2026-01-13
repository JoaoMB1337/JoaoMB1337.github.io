<template>
  <header id="header">
    <nav class="navbar container">
      <a href="#" class="logo">JB<span class="dot">.</span></a>
      <ul class="nav-links" :class="{ 'open': isMenuOpen }">
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#skills" @click="closeMenu">Skills</a></li>
        <li><a href="#experience" @click="closeMenu">Experience</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#awards" @click="closeMenu">Awards</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
      <div class="hamburger" @click="toggleMenu" :class="{ 'open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation'

const { isMenuOpen, closeMenu, toggleMenu } = useNavigation()
</script>

<style scoped>
</style>
