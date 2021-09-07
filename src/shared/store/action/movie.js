// ACTIONS
export function getMovie(movies) {
  return {
    type: 'GET_MOVIE_REQUESTED',
    payload: { movies },
  }
}
