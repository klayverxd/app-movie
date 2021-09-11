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

export function getActionMovies() {
  return api.get('/3/discover/movie', {
    params: { with_genres: 28 },
  })
}

export function getDocumentaryMovies() {
  return api.get('/3/discover/movie', {
    params: { with_genres: 99 },
  })
}

export function getAnimationMovies() {
  return api.get('/3/discover/movie', {
    params: { with_genres: 16 },
  })
}

export function getScienceFictionMovies() {
  return api.get('/3/discover/movie', {
    params: { with_genres: 878 },
  })
}

export default api
