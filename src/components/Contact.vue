<template>
  <section id="contact">
    <div class="wrap contact-grid">
      <div>
        <h2>Let's talk</h2>
        <p>
          Have a question, an opportunity or just want to say hi? Send me a message and I'll get back to you.
        </p>
        <div class="socials">
          <a href="https://github.com/JoaoMB1337" target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/joaobarbosa1337/" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" /></a>
        </div>
      </div>

      <form class="card contact-form" @submit.prevent="submit">
        <label>Name <input name="name" required autocomplete="name"></label>
        <label>Email <input name="email" type="email" required autocomplete="email"></label>
        <label>Message <textarea name="message" rows="5" required></textarea></label>
        <!-- Formspree honeypot: bots fill it, humans never see it -->
        <input type="text" name="_gotcha" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <button class="btn btn-primary" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Send message' }}
        </button>
        <p class="form-status" :class="status" role="status" aria-live="polite">
          <template v-if="status === 'ok'">Thanks! Your message was sent.</template>
          <template v-else-if="status === 'error'">Something went wrong. Please try again or reach me on LinkedIn.</template>
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'

const status = ref('idle')

const submit = async (e) => {
  status.value = 'sending'
  try {
    const res = await fetch('https://formspree.io/f/mgejqryn', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(e.target)
    })
    if (!res.ok) throw new Error(res.statusText)
    status.value = 'ok'
    e.target.reset()
  } catch {
    status.value = 'error'
  }
}
</script>
