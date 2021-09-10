import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Text, ActivityIndicator, ScrollView, Image } from 'react-native'

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
    <S.Container>
      {loading && <ActivityIndicator size="large" color="#999" />}

      {!!movies.length ? (
        <S.ContainerSection>
          <S.HeaderSection>
            <S.TextHeaderSection>Most Popular</S.TextHeaderSection>
          </S.HeaderSection>
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
                <S.MovieTitle numberOfLines={1}>{movie.title}</S.MovieTitle>
              </S.ContainerCard>
            ))}
          </ScrollView>
        </S.ContainerSection>
      ) : (
        <S.ErrorText>No results...</S.ErrorText>
      )}

      {error && !loading && <Text>{error}</Text>}
    </S.Container>
  )
}
