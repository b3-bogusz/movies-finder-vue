<script setup lang="ts">
import TopBar from '@/modules/TopBar/TopBar.vue'

import { useMovieDetailsWithId } from '@/composables/useMovieDetailsWithId'

const { movie } = useMovieDetailsWithId()
</script>

<template>
  <div>
    <h1>Movie Details page</h1>
    <TopBar />
    <div v-if="movie">
      <img :src="movie.Poster" :alt="movie.Title" />
      <h2>{{ movie.Title }}</h2>
      <p>{{ movie.Plot }}</p>
    </div>
  </div>
</template>

<style scoped lnag="scss" src="./MovieDetailsView.scss"></style>
