<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/styles/main.scss'
</script>

<template>
  <div class="app-root">
    <div class="app-root__container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-root {
  width: 100%;
  min-height: 100vh;

  &__container {
    max-width: calc(100% - 4rem);
    margin: 0 auto;

    @media (min-width: $tablet-768) {
      max-width: 92%;
    }
  }
}
</style>
