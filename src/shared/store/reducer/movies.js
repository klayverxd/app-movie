export const INITIAL_STATE = {
  movies: [],
  loading: false,
  error: null,
}

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_MOVIE_REQUESTED':
      return { ...state, loading: true }
    case 'GET_MOVIE_SUCSESS':
      return { ...state, loading: false, movies: action.movies }
    case 'GET_MOVIE_FAILED':
      return { ...state, loading: false, error: action.message }

    case 'SEARCH_MOVIE_REQUESTED':
      return { ...state, loading: true }
    case 'SEARCH_MOVIE_SUCSESS':
      return { ...state, loading: false, movies: action.movies }
    case 'SEARCH_MOVIE_FAILED':
      return { ...state, loading: false, error: action.message }
    default:
      return state
  }
}
