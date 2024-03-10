<script setup lang="ts">
import type { IconMarkupType } from '@/types'
import { toRefs } from 'vue'

interface IProps {
  svgClassName?: string
  icon: IconMarkupType
  size: number
}

const props = defineProps<IProps>()
const { svgClassName, icon, size } = toRefs(props)
</script>

<template>
  <svg
    :class="svgClassName"
    v-html="icon.markup"
    :viewBox="icon.viewBox"
    :style="{
      minWidth: `${size}rem`,
      maxWidth: `${size}rem`,
      width: `${size}rem`,
      minHeight: `${size}rem`,
      maxHeight: `${size}rem`,
      height: `${size}rem`
    }"
  />
</template>

<style scoped></style>
