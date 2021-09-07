import createSagaMiddleware from 'redux-saga'
import { createStore, compose, applyMiddleware } from 'redux'

import allReducers from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware(rootSaga)

const store = compose(applyMiddleware(sagaMiddleware))(createStore)(allReducers)

sagaMiddleware.run(rootSaga)

export default store
