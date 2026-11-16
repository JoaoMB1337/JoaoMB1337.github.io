<template>
  <header class="site-header" :class="{ scrolled: scrolled || open }">
    <nav class="wrap nav" aria-label="Main">
      <a href="#top" class="logo" @click="open = false">jb<span>.</span></a>

      <ul id="nav-links" class="nav-links" :class="{ open }">
        <li v-for="l in links" :key="l.id">
          <a :href="'#' + l.id" :class="{ active: active === l.id }"
             :aria-current="active === l.id ? 'true' : null" @click="open = false">{{ l.label }}</a>
        </li>
      </ul>

      <div class="nav-actions">
        <button class="icon-btn" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
                @click="toggleTheme">
          <Icon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
        <button class="icon-btn menu-btn" type="button" aria-controls="nav-links" :aria-expanded="open"
                :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open">
          <Icon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Icon from './Icon.vue'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' }
]

const open = ref(false)
const scrolled = ref(false)
const active = ref('')

const root = document.documentElement
const theme = ref(root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  root.dataset.theme = theme.value
  try { localStorage.setItem('theme', theme.value) } catch {}
}

const onScroll = () => { scrolled.value = scrollY > 8 }
const onKey = (e) => { if (e.key === 'Escape') open.value = false }
let observer

onMounted(() => {
  onScroll()
  addEventListener('scroll', onScroll, { passive: true })
  addEventListener('keydown', onKey)
  // Highlight the nav link of the section crossing the middle of the viewport
  observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) active.value = e.target.id }),
    { rootMargin: '-45% 0px -50% 0px' }
  )
  links.forEach((l) => { const el = document.getElementById(l.id); if (el) observer.observe(el) })
})

onUnmounted(() => {
  removeEventListener('scroll', onScroll)
  removeEventListener('keydown', onKey)
  observer?.disconnect()
})
</script>
