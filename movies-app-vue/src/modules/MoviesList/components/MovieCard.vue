<script setup lang="ts">
import type { Nullable, Movie } from '@/types'
import { withDefaults, defineProps } from 'vue'
import Svg from '@/components/Svg/Svg.vue'
import { iconStar } from '@/assets/svg/Svg'

interface IProps {
  movie: Nullable<Movie>
}

const props = withDefaults(defineProps<IProps>(), {
  movie: null
})

const starsArray = [1, 2, 3, 4, 5]
</script>

<template>
  <router-link v-if="props.movie" :to="`/movie/${props.movie.imdbID}`">
    <div class="movie-card">
      <img :src="props.movie?.Poster" :alt="props.movie?.Title" class="movie-card__poster" />
      <div class="movie-card__year">{{ props.movie?.Year }}</div>
      <div class="movie-card__rating">
        <Svg
          v-for="star in starsArray"
          :key="star"
          :icon="iconStar"
          :size="1.6"
          :svgClassName="'movie-card__svg'"
        />
      </div>
      <div class="movie-card__title">{{ props.movie?.Title }}</div>
    </div>
  </router-link>
</template>

<style scoped lang="scss" src="./MovieCard.scss"></style>
