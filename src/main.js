import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// v-reveal: fade elements in the first time they scroll into view.
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
  : null

app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')
    io ? io.observe(el) : el.classList.add('in')
  },
  unmounted(el) { io?.unobserve(el) }
})

app.mount('#app')
