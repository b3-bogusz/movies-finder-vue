<script setup lang="ts">
import MoviesList from '@/modules/MoviesList/MoviesList.vue'
import TypeHeader from '@/components/TypeHeader/TypeHeader.vue'
import TopBar from '@/modules/TopBar/TopBar.vue'
</script>

<template>
  <main class="home-container">
    <TopBar />
    <TypeHeader
      title="Your Movies"
      subtitle="Below you can find the movies that came back from your search"
    />
    <MoviesList />
  </main>
</template>

<style scoped lang="scss" src="./HomeView.scss"></style>
