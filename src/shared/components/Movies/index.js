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

      <S.Text>Most Popular</S.Text>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        horizontal={true}
      >
        {movies.map(movie => (
          <S.ContainerCard key={movie.id}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
              }}
              style={{ width: 120, height: 160 }}
            />
            <S.MovieTitle>{movie.title}</S.MovieTitle>
          </S.ContainerCard>
        ))}
      </ScrollView>

      {error && !loading && <Text>{error}</Text>}
    </View>
  )
}
