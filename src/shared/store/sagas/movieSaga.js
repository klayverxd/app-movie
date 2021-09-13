import { all, call, put, takeEvery } from 'redux-saga/effects'

import {
  getActionMovies,
  getAnimationMovies,
  getDocumentaryMovies,
  getScienceFictionMovies,
} from '../../../services/api'

function* fetchMovies() {
  try {
    const [
      actionMovies,
      documentaryMovies,
      animationMovies,
      scienceFictionMovies,
    ] = yield all([
      call(getActionMovies),
      call(getDocumentaryMovies),
      call(getAnimationMovies),
      call(getScienceFictionMovies),
    ])

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
  yield takeEvery('GET_MOVIE_REQUESTED', fetchMovies)
}

export default watchMovieSaga
