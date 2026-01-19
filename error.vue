<template>
  <div class="error-block">
    <h2>Статус ошибки {{ error?.statusCode }}</h2>
    <button @click="handleError">Очистить ошибки</button>
  </div>
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: Object as () => NuxtError
  })

  const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
  .error-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
