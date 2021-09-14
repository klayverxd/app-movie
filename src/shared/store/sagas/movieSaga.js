import { all, call, put, takeEvery } from 'redux-saga/effects'

import { getMoviesByGenres } from '../../../services/requests'

const genres = {
  action: 28,
  documentary: 99,
  animation: 16,
  scienceFiction: 878,
}

function* fetchMovies() {
  try {
    const [
      actionMovies,
      documentaryMovies,
      animationMovies,
      scienceFictionMovies,
    ] = yield all([
      call(getMoviesByGenres, genres.action),
      call(getMoviesByGenres, genres.documentary),
      call(getMoviesByGenres, genres.animation),
      call(getMoviesByGenres, genres.scienceFiction),
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
