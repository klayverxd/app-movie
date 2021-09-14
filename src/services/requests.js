import api from './api'

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
