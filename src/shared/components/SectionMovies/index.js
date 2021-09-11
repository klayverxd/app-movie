import React from 'react'

import { Image, ScrollView } from 'react-native'

import * as S from './styles'

export default function SectionMovie({ sectionName, movies }) {
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
  )
}
