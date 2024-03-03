<script setup lang="ts">
import { onMounted } from 'vue'
import getMoviesWithQueryAndPage from '@/utils/getMoviesWithQueryAndPage'

onMounted(async () => {
  const { data } = await getMoviesWithQueryAndPage('batman', 1).then({})

  const moviesArray = data.Search
  console.log(moviesArray)
})
</script>

<template>
  <main>
    <div>Home view</div>
  </main>
</template>
