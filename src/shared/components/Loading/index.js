import React from 'react'

import { ActivityIndicator } from 'react-native'

import * as S from './styles'

export default function Loading({ text }) {
  return (
    <S.Container>
      <ActivityIndicator size="large" color="#999" />
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
