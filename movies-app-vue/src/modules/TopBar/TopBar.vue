<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '@/modules/SearchInput/SearchInput.vue'
import Logo from '@/components/Logo/Logo.vue'
import { iconChevron } from '@/assets/svg/Svg'
import Svg from '@/components/Svg/Svg.vue'
const searchMovieInput = ref<string>('')
</script>

<template>
  <div class="top-bar">
    <div class="top-bar__logo">
      <Logo />
    </div>
    <div class="top-bar__search">
      <Svg :svgClassName="'top-bar__svg'" :icon="iconChevron" :size="1.1" /><span
        class="top-bar__go-back"
        >Go Back</span
      >
      <SearchInput type="text" v-model="searchMovieInput" />
      <p>{{ searchMovieInput }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./TopBar.scss"></style>
