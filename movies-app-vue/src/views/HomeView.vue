<script setup lang="ts">
import MoviesList from '@/modules/MoviesList/MoviesList.vue'
import TypeHeader from '@/components/TypeHeader/TypeHeader.vue'
import Logo from '@/components/Logo/Logo.vue'
</script>

<template>
  <main>
    <Logo />
    <TypeHeader
      title="Your Movies"
      subtitle="Below you can find the movies that came back from your search"
    />
    <MoviesList />
  </main>
</template>
