import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import MovieDetailsView from '@/views/MovieDetailsView/MovieDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // path: '/movie/:id/details/:slug',
      path: '/movie/:id',
      name: 'movie-details',
      component: MovieDetailsView
    }
  ]
})

export default router
