import React from 'react'

import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'

import Home from './src/screens/Home'

import { persistor, store } from './src/shared/store'

import Loading from './src/shared/components/Loading'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading text="Loading persistor..." />}
        persistor={persistor}
      >
        <Home />
      </PersistGate>
    </Provider>
  )
}
