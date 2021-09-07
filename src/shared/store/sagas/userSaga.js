import { call, put, takeEvery } from 'redux-saga/effects'

import api from '../../../services/api'

function getApi() {
  return api.get('/users/klayverxd')
}

function* fetchUser() {
  try {
    const user = yield call(getApi)
    yield put({ type: 'GET_USER_SUCSESS', user: user })
  } catch (error) {
    yield put({ type: 'GET_USER_FAILED', message: error.message })
  }
}

function* userSaga() {
  yield takeEvery('GET_USER_REQUESTED', fetchUser)
}

export default userSaga
