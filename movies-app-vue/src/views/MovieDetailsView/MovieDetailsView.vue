<script setup lang="ts">
import { useMovieDetailsWithId } from '@/composables/useMovieDetailsWithId'
import TypeHeader from '@/components/TypeHeader/TypeHeader.vue'
import Svg from '@/components/Svg/Svg.vue'
import { iconStar } from '@/assets/svg/Svg'

const { movie } = useMovieDetailsWithId()
</script>

<template>
  <div v-if="movie" class="movie">
    <div class="movie__info-wrapper">
      <div class="movie__info">
        <h1 class="movie__info-title">{{ movie.Title }}</h1>
        <div class="movie__info-year">{{ movie.Year }}</div>
        <div class="movie__info-duration">Duration: {{ movie.Runtime }}</div>
        <div class="movie__info-rating-wrapper">
          <Svg :size="1.6" :icon="iconStar" :svgClassName="'movie__info-iconStar'" />
          <div class="movie__info-imdb-rating">{{ movie.imdbRating }}</div>
          <div class="movie__info-votes">{{ movie.imdbVotes }} <br />votes</div>
        </div>
      </div>
      <div class="movie__poster-wrapper">
        <img class="movie__poster" :src="movie.Poster" :alt="movie.Title" />
      </div>
    </div>
    <TypeHeader title="Movie details" />
    <div class="movie__details">
      <div class="movie__plot">
        <p>{{ movie.Plot }}</p>
      </div>
      <div class="movie__director">
        <p><span class="movie__description">Director:</span> {{ movie.Director }}</p>
      </div>
      <div class="movie__genre">
        <p><span class="movie__description">Type:</span> {{ movie.Genre }}</p>
      </div>
      <div class="movie__country">
        <p><span class="movie__description">Production:</span> {{ movie.Country }}</p>
      </div>
      <div class="movie__release">
        <p><span class="movie__description">Released:</span> {{ movie.Released }}</p>
      </div>
      <div class="movie__actors">
        <p><span class="movie__description">Cast:</span> {{ movie.Actors }}</p>
      </div>
      <div class="movie__box-office">
        <p><span class="movie__description">Box Office:</span> {{ movie.BoxOffice }}</p>
      </div>
    </div>
    <TypeHeader title="Awards" />
    <div>
      <div class="movie__awards">
        <p>The movie has {{ movie.Awards }}.</p>
      </div>
      <div class="movie__rating-scores">
        <div class="movie__rating" v-for="(rating, index) in movie.Ratings" :key="index">
          <div class="movie__rating--value">{{ rating.Value }}</div>
          <div class="movie__rating--source">{{ rating.Source }}</div>
        </div>
      </div>
    </div>
    <div class="movie__footer">{{ new Date().getFullYear() }} Copyright &copy; MovieIP</div>
  </div>
</template>

<style scoped lnag="scss" src="./MovieDetailsView.scss"></style>
