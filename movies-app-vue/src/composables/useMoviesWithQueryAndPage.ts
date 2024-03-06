import apiClient from '@/services/api'

export default function useMoviesWithQueryAndPage() {
  const getMoviesArray = (query: string, page: number): Promise => {
    return apiClient.get('', {
      params: {
        s: query,
        type: 'movie',
        page
      }
    })
  }

  return { getMoviesArray }
}
