<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <button
      @click="
        () => {
          throw new Error('Sentry test')
        }
      "
    >
      Test Sentry
    </button>
  </main>
</template>
