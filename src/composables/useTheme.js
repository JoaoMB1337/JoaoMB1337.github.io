import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDarkMode = ref(false)

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    document.body.classList.toggle('light-mode', isDarkMode.value)
    localStorage.setItem('theme', isDarkMode.value ? 'light' : 'dark')
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      isDarkMode.value = true
      document.body.classList.add('light-mode')
    }
  }

  onMounted(initTheme)

  return {
    isDarkMode,
    toggleTheme,
    initTheme
  }
}
