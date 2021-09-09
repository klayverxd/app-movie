import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'

import { getMovies } from '../../store/action/movie'

import * as S from './styles'

export default function Movies() {
  const dispatch = useDispatch()

  const movies = useSelector(state => state.movie.movies)
  const loading = useSelector(state => state.movie.loading)
  const error = useSelector(state => state.movie.error)

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return (
    <View>
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
            <S.MovieTitle style={{ maxWidth: 120 }}>{movie.title}</S.MovieTitle>
          </View>
        ))}
      </ScrollView>

      {error && !loading && <Text>{error}</Text>}
    </View>
  )
}
