<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '@/modules/SearchInput/SearchInput.vue'
import Logo from '@/components/Logo/Logo.vue'
const searchMovieInput = ref<string>('')
</script>

<template>
  <div class="top-bar">
    <div class="top-bar__logo">
      <Logo />
    </div>
    <div class="top-bar__search">
      <SearchInput type="text" v-model="searchMovieInput" />
      <p>{{ searchMovieInput }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./TopBar.scss"></style>
