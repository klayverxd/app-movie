import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'

import SearchBar from '../SearchBar'

import { getMovie } from '../../store/action/movie'

export default function Movies() {
  const dispatch = useDispatch()

  const movies = useSelector(state => state.movie.movies)
  const loading = useSelector(state => state.movie.loading)
  const error = useSelector(state => state.movie.error)

  useEffect(() => {
    dispatch(getMovie())
  }, [])

  return (
    <View>
      <SearchBar />
      {loading && <ActivityIndicator size="large" color="#999" />}

      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        {movies.map(movie => (
          <View style={{ flex: 1, margin: 12 }} key={movie.id}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
              }}
              style={{ width: 120, height: 160 }}
            />
            <Text style={{ maxWidth: 120 }}>{movie.title}</Text>
          </View>
        ))}
      </ScrollView>

      {error && !loading && <Text>{error}</Text>}
    </View>
  )
}
