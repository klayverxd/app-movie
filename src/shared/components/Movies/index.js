import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ActivityIndicator } from 'react-native'

import { getMovies } from '../../store/action/movie'

import SectionMovies from '../SectionMovies'

import * as S from './styles'

export default function Movies() {
  const dispatch = useDispatch()

  const actionMovies = useSelector(state => state.movie.actionMovies)
  const animationMovies = useSelector(state => state.movie.animationMovies)
  const documentaryMovies = useSelector(state => state.movie.documentaryMovies)
  const scienceFictionMovies = useSelector(
    state => state.movie.scienceFictionMovies
  )
  const filteredMovies = useSelector(state => state.movie.filteredMovies)
  const hasFilter = useSelector(state => state.movie.hasFilter)
  const hasMovies = useSelector(state => state.movie.hasMovies)
  const loading = useSelector(state => state.movie.loading)
  const error = useSelector(state => state.movie.error)

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return (
    <S.Container>
      {loading && <ActivityIndicator size="large" color="#999" />}

      {error && !loading ? (
        <S.ErrorText>{error}</S.ErrorText>
      ) : (
        <>
          {!hasFilter && !loading && (
            <>
              <SectionMovies
                sectionName="Action Movies"
                movies={actionMovies}
              />
              <SectionMovies
                sectionName="Animation Movies"
                movies={animationMovies}
              />
              <SectionMovies
                sectionName="Science Fiction Movies"
                movies={scienceFictionMovies}
              />
              <SectionMovies
                sectionName="Documentary Movies"
                movies={documentaryMovies}
              />
            </>
          )}

          {hasFilter && hasMovies && !loading && (
            <SectionMovies
              sectionName="Filtered Movies"
              movies={filteredMovies}
            />
          )}

          {hasFilter && !hasMovies && !loading && (
            <S.ErrorText>No results...</S.ErrorText>
          )}
        </>
      )}
    </S.Container>
  )
}
