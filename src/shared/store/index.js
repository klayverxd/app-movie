import { createStore, compose, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import { persistStore, persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

import allReducers from './reducer'
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const sagaMiddleware = createSagaMiddleware(rootSaga)

let composed = compose(applyMiddleware(sagaMiddleware))

export let store = createStore(persistedReducer, composed)
export let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
