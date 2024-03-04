<script setup lang="ts">
import MovieCard from './components/MovieCard.vue'

const props = defineProps({
  movies: Array
})
</script>

<template>
  <div class="wrapper">
    <MovieCard
      v-for="movie in movies"
      :key="movie.imdbID"
      :id="movie.imdbID"
      :title="movie.Title"
      :year="movie.Year"
      :posterUrl="movie.Poster"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
