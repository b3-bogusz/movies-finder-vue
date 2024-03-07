import axios from 'axios'

const baseURL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

const apiClient = axios.create({
  baseURL,
  responseType: 'json'
})

export default apiClient
