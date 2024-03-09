<script setup lang="ts">
const modelValue = defineModel({ type: String, default: '' })
</script>

<template>
  <form class="form">
    <input v-bind="$attrs" placeholder="Search movies" class="form__input" v-model="modelValue" />
  </form>
</template>

<style scoped lang="scss" src="./SearchInput.scss"></style>

<!-- //Binding the input value to the searchInputModel ref -->
<!-- :value="searchInputModel"
@input="searchInputModel = ($event.target as HTMLInputElement).value" -->
