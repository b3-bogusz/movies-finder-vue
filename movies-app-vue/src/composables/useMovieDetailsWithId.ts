import { onMounted, ref } from 'vue'
import apiClient from '@/services/api'
import { useRoute } from 'vue-router'
import type { MovieDetails, Nullable } from '@/types'

export const useMovieDetailsWithId = () => {
  const movie = ref<Nullable<MovieDetails>>(null)

  const route = useRoute()

  const getMovieDetails = async (id: string): Promise<void> => {
    const response = await apiClient.get('', {
      params: {
        i: id,
        type: 'movie'
      }
    })
    console.log(response.data)
    return (movie.value = response.data)
  }

  onMounted(async () => await getMovieDetails(route.params.id as string))

  return {
    getMovieDetails,
    movie
  }
}
