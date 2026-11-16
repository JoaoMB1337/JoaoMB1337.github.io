<template>
  <section id="awards">
    <div class="wrap">
      <h2>Programming competitions</h2>

      <div class="award-grid">
        <button v-for="c in competitions" :key="c.id" type="button" class="card award" v-reveal @click="show(c)">
          <img :src="c.image" :alt="c.name" loading="lazy">
          <span class="award-body">
            <span class="award-year">{{ c.year }}</span>
            <strong>{{ c.name }}</strong>
            <span class="award-org">{{ c.organization }}</span>
          </span>
        </button>
      </div>
    </div>

    <dialog ref="dialog" class="award-dialog" @click="onBackdrop" @close="selected = null">
      <template v-if="selected">
        <img :src="selected.image" :alt="selected.name">
        <div class="award-dialog-body">
          <h3>{{ selected.name }}</h3>
          <p class="award-org">{{ selected.organization }} · {{ selected.year }}</p>
          <p>{{ selected.description }}</p>
          <button type="button" class="btn" @click="dialog.close()">Close</button>
        </div>
      </template>
    </dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { competitions } from '@/data/competitions'

const dialog = ref(null)
const selected = ref(null)

const show = (c) => {
  selected.value = c
  dialog.value.showModal()
}
// Native <dialog>: Esc and focus handling come for free; close when clicking the backdrop.
const onBackdrop = (e) => { if (e.target === dialog.value) dialog.value.close() }
</script>
