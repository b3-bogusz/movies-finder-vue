import axios from 'axios'

const baseURL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

const api = axios.create({
  baseURL,
  responseType: 'json'
})

export default api
