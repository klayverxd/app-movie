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
    case 'GET_MOVIE_REQUESTED':
      return { ...state, loading: true, hasFilter: false }
    case 'GET_MOVIE_SUCSESS':
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
    case 'GET_MOVIE_FAILED':
      return { ...state, loading: false, error: action.message }

    case 'SEARCH_MOVIE_REQUESTED':
      return { ...state, loading: true, hasFilter: true }
    case 'SEARCH_MOVIE_SUCSESS':
      return {
        ...state,
        loading: false,
        filteredMovies: action.filteredMovies,
        hasFilter: true,
        hasMovies: action.hasMovies,
      }
    case 'SEARCH_MOVIE_FAILED':
      return { ...state, loading: false, error: action.message }
    default:
      return state
  }
}
