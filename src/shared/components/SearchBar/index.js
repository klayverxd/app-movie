import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchMovie } from '../../store/action/movie'

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
        placeholder="Procurar filme"
      />
      <S.ContainerButton onPress={() => dispatch(searchMovie(search))}>
        <Icon name="search" size={20} color="#FFF" />
      </S.ContainerButton>
    </S.Container>
  )
}
