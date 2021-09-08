import { call, put, takeEvery } from 'redux-saga/effects'

import api from '../../../services/api'

function getApi() {
  return api.get('/3/movie/popular')
}

function* fetchMovie() {
  try {
    const movies = yield call(getApi)
    yield put({ type: 'GET_MOVIE_SUCSESS', movies: movies.data.results })
  } catch (error) {
    yield put({ type: 'GET_MOVIE_FAILED', message: error.message })
  }
}

function* watchMovieSaga() {
  yield takeEvery('GET_MOVIE_REQUESTED', fetchMovie)
}

export default watchMovieSaga
