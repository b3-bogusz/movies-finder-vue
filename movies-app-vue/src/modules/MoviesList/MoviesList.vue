<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MovieCard from './components/MovieCard.vue'
import { useMoviesWithQueryAndPage } from '@/composables/useMoviesWithQueryAndPage'
import type { Movie } from '@/types'

const moviesArray = ref<Movie[]>([])

const { getMoviesArray } = useMoviesWithQueryAndPage()

//@ts-ignore
onMounted(async () => {
  const { data } = await getMoviesArray('batman', 1)
  moviesArray.value = data.Search
  console.log(data.Search)
})
</script>

<template>
  <div v-if="moviesArray" class="wrapper">
    <MovieCard v-for="movie in moviesArray" :key="movie.imdbID" :movie="movie" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
