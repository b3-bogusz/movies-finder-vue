<script setup lang="ts">
import { ref } from 'vue'
import MoviesList from '@/modules/MoviesList/MoviesList.vue'
import TypeHeader from '@/components/TypeHeader/TypeHeader.vue'
import Logo from '@/components/Logo/Logo.vue'
import SearchInput from '@/modules/SearchInput/SearchInput.vue'

const searchMovieInput = ref<string>('')
</script>

<template>
  <main>
    <Logo />
    <SearchInput type="text" v-model="searchMovieInput" />
    <p>{{ searchMovieInput }}</p>
    <TypeHeader
      title="Your Movies"
      subtitle="Below you can find the movies that came back from your search"
    />
    <MoviesList />
  </main>
</template>

<!-- :modelValue="searchInputModel"
@update:modelValue="(newValue) => (searchInputModel = newValue)" -->
