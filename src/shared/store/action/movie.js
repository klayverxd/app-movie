import { types } from '../reducer/movies'

export function getMovies() {
  return {
    type: types.GET_MOVIE_REQUESTED,
  }
}

export function searchMovie(search) {
  return {
    type: types.SEARCH_MOVIE_REQUESTED,
    payload: { search },
  }
}
