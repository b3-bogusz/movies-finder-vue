<script setup lang="ts">
interface IProps {
  title: string
  subtitle?: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: '',
  subtitle: ''
})
</script>
<template>
  <div class="typeHeader">
    <div class="typeHeader__title">{{ props.title }}</div>
    <div class="typeHeader__subtitle">{{ props.subtitle }}</div>
  </div>
</template>

<style lang="scss" scoped src="./TypeHeader.scss" />
