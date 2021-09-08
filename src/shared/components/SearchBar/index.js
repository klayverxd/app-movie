import React, { useState } from 'react'

import * as S from './styles'

export default function SearchBar() {
  const [searchMovie, setSearchMovie] = useState('')

  return (
    <S.Container>
      <S.TextInput
        onChangeText={setSearchMovie}
        value={searchMovie}
        placeholder="Procurar filme"
      />
      <S.SearchButton onPress={() => console.log(searchMovie)} title="search" />
    </S.Container>
  )
}
