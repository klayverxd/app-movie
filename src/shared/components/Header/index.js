import React from 'react'

import AccessibilityBtns from '../AccessibilityBtns'

import * as S from './styles'

export default function Header() {
  return (
    <S.Container>
      <S.Text>APP-MOVIE</S.Text>
      <AccessibilityBtns />
    </S.Container>
  )
}
