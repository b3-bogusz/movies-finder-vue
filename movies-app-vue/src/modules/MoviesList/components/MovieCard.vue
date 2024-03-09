<script setup lang="ts">
import type { Movie } from '@/types'
import type { Nullable } from '@/types'
import { withDefaults, defineProps } from 'vue'

interface IProps {
  movie: Nullable<Movie>
}

const props = withDefaults(defineProps<IProps>(), {
  movie: null
})
</script>

<template>
  <div class="container">
    <img :src="props.movie?.Poster" :alt="props.movie?.Title" class="poster" />
    <div class="year">{{ props.movie?.Year }}</div>
    <div class="title">{{ props.movie?.Title }}</div>
  </div>
</template>

<style scoped>
.container {
  width: 13rem;
  align-items: left;
}
.poster {
  width: 13rem;
  height: 22rem;
  border: 0.1rem solid #ddd;
  border-radius: 1rem;
  cursor: pointer;
}
.year {
  font-size: 1.4rem;
  color: #666;
}
.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  word-wrap: break-word;

  &:hover {
    text-decoration: underline;
  }
}
</style>
