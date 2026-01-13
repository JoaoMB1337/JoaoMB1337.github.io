<template>
  <footer>
    <div class="container">
      <p>&copy; <span id="year">{{ currentYear }}</span> João Barbosa. Built with <i class="fas fa-heart text-accent"></i> and code.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
</style>
