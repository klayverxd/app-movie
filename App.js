import React, { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import api from './src/services/api.js'

export default function App() {
  useEffect(() => {
    async function getMovie() {
      try {
        const res = await api.get('3/movie/550')
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  }, [])

  return (
    <View style={styles.container}>
      <Text>App Movie</Text>
      <StatusBar style="auto" />
    </View>
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
