import { call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

function getApi(search) {
  return api.get('/3/search/movie', {
    params: { query: search },
  })
}

function* searchMovie({ payload: { search } }) {
  try {
    const movies = yield call(getApi, search)

    yield put({ type: 'SEARCH_MOVIE_SUCSESS', movies: movies.data.results })
  } catch (error) {
    yield put({ type: 'SEARCH_MOVIE_FAILED', message: error.message })
  }
}

export default function* watchSearchMovie() {
  yield takeLatest('SEARCH_MOVIE_REQUESTED', searchMovie)
}
