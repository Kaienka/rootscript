<script setup lang="ts">
import { config } from '@/config'
</script>

<template>
  <div v-if="!config.isProduction" class="env-badge" :data-env="config.appEnv">
    {{ config.appEnv }}
  </div>
</template>

<style scoped>
.env-badge {
  position: fixed;
  right: 8px;
  bottom: 8px;
  z-index: 1000;
  padding: 2px 8px;
  border-radius: 4px;
  font:
    600 12px/1.6 system-ui,
    sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  pointer-events: none;
}
.env-badge[data-env='development'] {
  background: #2e7d32;
}
.env-badge[data-env='preview'] {
  background: #e65100;
}
</style>
