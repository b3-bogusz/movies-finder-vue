<script setup lang="ts">
import { onMounted, ref } from 'vue'
import getMoviesWithQueryAndPage from '@/utils/getMoviesWithQueryAndPage'
import MoviesList from '@/modules/MoviesList/MoviesList.vue'
import type { Movie } from '@/types'

const moviesArray = ref<Movie[]>([])

onMounted(async () => {
  const { data } = await getMoviesWithQueryAndPage('batman', 1).then({})

  console.log(data.Search)
  moviesArray.value = data.Search
})

const getFunction = (): Movie[] => moviesArray.value
</script>

<template>
  <main>
    <div>Home view</div>
    <MoviesList :movies="moviesArray" :getFunction="getFunction" />
  </main>
</template>
