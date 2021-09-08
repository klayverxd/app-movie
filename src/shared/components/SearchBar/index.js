import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { searchMovie } from '../../store/action/movie'

import * as S from './styles'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const movies = useSelector(state => state.movie.movies)
  const loading = useSelector(state => state.movie.loading)
  const error = useSelector(state => state.movie.error)

  return (
    <S.Container>
      <S.TextInput
        onChangeText={setSearch}
        value={search}
        placeholder="Procurar filme"
      />
      <S.SearchButton
        onPress={() => dispatch(searchMovie(search))}
        title="search"
      />
    </S.Container>
  )
}
