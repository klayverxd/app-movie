import React from 'react'

import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

import { ThemeProvider } from 'styled-components/native'
import themes from './src/shared/constants/themes'

import { Provider } from 'react-redux'
import store from './src/shared/store'

import Movies from './src/shared/components/Movies'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <SafeAreaView style={styles.container}>
          <StatusBar />

          <Movies />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
