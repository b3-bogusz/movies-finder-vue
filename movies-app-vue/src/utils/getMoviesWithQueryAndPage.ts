import api from '@/services/api'

const getMoviesWithQueryAndPage = (query: string, page: number) => {
  return api.get('', {
    params: {
      s: query,
      type: 'movie',
      page
    }
  })
}

export default getMoviesWithQueryAndPage
