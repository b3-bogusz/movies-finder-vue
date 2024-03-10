<script setup lang="ts">
import Svg from '@/components/Svg/Svg.vue'
import { iconSearch } from '@/assets/svg/Svg'

const modelValue = defineModel({ type: String, default: '' })
</script>

<template>
  <form class="form">
    <Svg :svgClassName="'form__svg'" :icon="iconSearch" :size="2" />
    <input v-bind="$attrs" placeholder="Search movies" class="form__input" v-model="modelValue" />
  </form>
</template>

<style scoped lang="scss" src="./SearchInput.scss"></style>
