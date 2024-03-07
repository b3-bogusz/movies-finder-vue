<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MovieCard from './components/MovieCard.vue'
import { useMoviesWithQueryAndPage } from '@/composables/useMoviesWithQueryAndPage'

const moviesArray = ref([])

const { getMoviesArray } = useMoviesWithQueryAndPage()

onMounted(async () => {
  const { data } = await getMoviesArray('batman', 1)
  moviesArray.value = data.Search
})
</script>

<template>
  <div class="wrapper">
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
