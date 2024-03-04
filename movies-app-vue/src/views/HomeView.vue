<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import getMoviesWithQueryAndPage from '@/utils/getMoviesWithQueryAndPage'
import MoviesList from '@/modules/MoviesList/MoviesList.vue'

const moviesArray: Ref<Array> = ref([])

onMounted(async () => {
  const { data } = await getMoviesWithQueryAndPage('batman', 1).then({})

  console.log(data.Search)
  moviesArray.value = data.Search
  // console.log(moviesArray.value, 'moviesArray.value')
})
</script>

<template>
  <main>
    <div>Home view</div>
    <MoviesList :movies="moviesArray" />
  </main>
</template>
