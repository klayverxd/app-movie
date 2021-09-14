import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: '9396d75fb7c28ee5e1712096b5142a76',
  },
})

export function getFilteredMovies(search) {
  return api.get('/3/search/movie', {
    params: { query: search },
  })
}

export function getMoviesByGenres(genres) {
  return api.get('/3/discover/movie', {
    params: { with_genres: genres },
  })
}

export default api
