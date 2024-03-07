<script setup lang="ts">
import MoviesList from '@/modules/MoviesList/MoviesList.vue'
import TypeHeader from '@/components/TypeHeader/TypeHeader.vue'
</script>

<template>
  <main>
    <TypeHeader
      title="Your Movies"
      subtitle="Below you can find the movies that came back from your search"
    />
    <MoviesList />
  </main>
</template>
