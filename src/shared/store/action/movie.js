// ACTIONS
export function getMovie(movies) {
  return {
    type: 'GET_MOVIE_REQUESTED',
    payload: { movies },
  }
}

export function searchMovie(search) {
  return {
    type: 'SEARCH_MOVIE_REQUESTED',
    payload: { search },
  }
}
