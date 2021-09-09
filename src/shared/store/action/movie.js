// ACTIONS
export function getMovies() {
  return {
    type: 'GET_MOVIE_REQUESTED',
  }
}

export function searchMovie(search) {
  return {
    type: 'SEARCH_MOVIE_REQUESTED',
    payload: { search },
  }
}
