import { call, put, takeEvery } from 'redux-saga/effects'

import {
  getActionMovies,
  getAnimationMovies,
  getDocumentaryMovies,
  getScienceFictionMovies,
} from '../../../services/api'

function* fetchMovie() {
  try {
    const actionMovies = yield call(getActionMovies)
    const documentaryMovies = yield call(getDocumentaryMovies)
    const animationMovies = yield call(getAnimationMovies)
    const scienceFictionMovies = yield call(getScienceFictionMovies)

    yield put({
      type: 'GET_MOVIE_SUCSESS',
      actionMovies: actionMovies.data.results,
      documentaryMovies: documentaryMovies.data.results,
      animationMovies: animationMovies.data.results,
      scienceFictionMovies: scienceFictionMovies.data.results,
    })
  } catch (error) {
    yield put({ type: 'GET_MOVIE_FAILED', message: error.message })
  }
}

function* watchMovieSaga() {
  yield takeEvery('GET_MOVIE_REQUESTED', fetchMovie)
}

export default watchMovieSaga
