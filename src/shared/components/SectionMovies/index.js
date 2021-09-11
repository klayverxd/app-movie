import React from 'react'

import { useDispatch } from 'react-redux'

import { Image, ScrollView } from 'react-native'

import { setModalVisible } from '../../store/action/modal'

import * as S from './styles'

export default function SectionMovie({ sectionName, movies }) {
  const dispatch = useDispatch()

  return (
    <S.ContainerSection>
      <S.HeaderSection>
        <S.TextHeaderSection>{sectionName}</S.TextHeaderSection>
      </S.HeaderSection>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        horizontal={true}
      >
        {movies.map(movie => (
          <S.ContainerCard
            key={movie.id}
            onPress={() =>
              dispatch(
                setModalVisible({
                  visible: true,
                  title: movie.title,
                  image: movie.poster_path,
                  release_date: movie.release_date,
                  vote_average: movie.vote_average,
                  overview: movie.overview,
                })
              )
            }
          >
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
  )
}
