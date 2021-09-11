import { call, put, takeLatest } from 'redux-saga/effects'

import { getFilteredMovies } from '../../../services/api'

function* searchMovie({ payload: { search } }) {
  try {
    const filteredMovies = yield call(getFilteredMovies, search)
    const hasMovies = !!filteredMovies.data.results.length

    console.log('searchMovie-hasMovies', hasMovies)

    yield put({
      type: 'SEARCH_MOVIE_SUCSESS',
      filteredMovies: filteredMovies.data.results,
      hasMovies: hasMovies,
    })
  } catch (error) {
    yield put({ type: 'SEARCH_MOVIE_FAILED', message: error.message })
  }
}

export default function* watchSearchMovie() {
  yield takeLatest('SEARCH_MOVIE_REQUESTED', searchMovie)
}
