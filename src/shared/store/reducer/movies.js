export const types = {
  GET_MOVIE_REQUESTED: 'GET_MOVIE_REQUESTED',
  GET_MOVIE_SUCSESS: 'GET_MOVIE_SUCSESS',
  GET_MOVIE_FAILED: 'GET_MOVIE_FAILED',

  SEARCH_MOVIE_REQUESTED: 'SEARCH_MOVIE_REQUESTED',
  SEARCH_MOVIE_SUCSESS: 'SEARCH_MOVIE_SUCSESS',
  SEARCH_MOVIE_FAILED: 'SEARCH_MOVIE_FAILED',
}

export const INITIAL_STATE = {
  actionMovies: [],
  animationMovies: [],
  documentaryMovies: [],
  scienceFictionMovies: [],
  filteredMovies: [],
  hasFilter: false,
  hasMovies: false,
  loading: false,
  error: null,
}

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_MOVIE_REQUESTED:
      return { ...state, loading: true, hasFilter: false }
    case types.GET_MOVIE_SUCSESS:
      return {
        ...state,
        loading: false,
        actionMovies: action.actionMovies,
        animationMovies: action.animationMovies,
        documentaryMovies: action.documentaryMovies,
        scienceFictionMovies: action.scienceFictionMovies,
        hasFilter: false,
        hasMovies: true,
      }
    case types.GET_MOVIE_FAILED:
      return { ...state, loading: false, error: action.message }

    case types.SEARCH_MOVIE_REQUESTED:
      return { ...state, loading: true, hasFilter: true }
    case types.SEARCH_MOVIE_SUCSESS:
      return {
        ...state,
        loading: false,
        filteredMovies: action.filteredMovies,
        hasFilter: true,
        hasMovies: action.hasMovies,
      }
    case types.SEARCH_MOVIE_FAILED:
      return { ...state, loading: false, error: action.message }
    default:
      return state
  }
}
