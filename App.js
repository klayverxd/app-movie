import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { ThemeProvider } from 'styled-components/native'
import themes from './src/shared/constants/themes'

import { Provider } from 'react-redux'
import store from './src/shared/store'
import Movies from './src/shared/components/Movies'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Movies />
        </View>
      </ThemeProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
