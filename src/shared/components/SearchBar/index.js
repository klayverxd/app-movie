import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getMovies, searchMovie } from '../../store/action/movie'

import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  return (
    <S.Container>
      <S.TextInput
        onChangeText={setSearch}
        value={search}
        placeholder="Search movie..."
        placeholderTextColor="#FFF"
      />
      <S.ContainerButton
        onPress={() =>
          search.trim() ? dispatch(searchMovie(search)) : dispatch(getMovies())
        }
      >
        <Icon name="search" size={20} color="#FFF" />
      </S.ContainerButton>
    </S.Container>
  )
}
