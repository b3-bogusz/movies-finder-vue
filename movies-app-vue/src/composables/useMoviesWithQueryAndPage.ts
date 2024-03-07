import apiClient from '@/services/api'

export const useMoviesWithQueryAndPage = () => {
  const getMoviesArray = (query: string, page: number): Promise<void> =>
    apiClient.get('', {
      params: {
        s: query,
        type: 'movie',
        page
      }
    })

  return {
    getMoviesArray
  }
}
