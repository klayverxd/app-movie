import { all } from 'redux-saga/effects'

import watchMovieSaga from './movieSaga'
import watchSearchMovie from './searchMovie'

export default function* rootSaga() {
  yield all([watchMovieSaga(), watchSearchMovie()])
}
