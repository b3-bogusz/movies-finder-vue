<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  year: String,
  posterUrl: String
})
</script>

<template>
  <div class="container">
    <img :src="posterUrl" :alt="title" class="poster" />
    <div class="year">{{ year }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<style scoped>
.container {
  width: 13rem;
  align-items: left;
  margin: 2rem 1rem;
}
.poster {
  width: 13rem;
  height: 22rem;
  border: 0.1rem solid #ddd;
  border-radius: 1rem;
  cursor: pointer;
}
.year {
  font-size: 1.4rem;
  color: #666;
}
.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  word-wrap: break-word;

  &:hover {
    text-decoration: underline;
  }
}
</style>
