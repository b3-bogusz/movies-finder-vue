<script setup lang="ts">
import MovieCard from './components/MovieCard.vue'
import type { Movie } from '@/types'
import type { Nullable } from '@/types'

interface IProps {
  movies: Nullable<Movie[]>
  getFunction?: () => Movie[]
}

const props = withDefaults(defineProps<IProps>(), {
  movies: null,
  // movies: () => ({}),
  getFunction: () => []
})
</script>

<template>
  <div class="wrapper">
    <MovieCard v-for="movie in props.movies" :key="movie.imdbID" :movie="movie" />
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
