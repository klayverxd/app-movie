import React from 'react'
import { useSelector } from 'react-redux'

import * as S from './styles'

export default function NewText({ children, style }) {
  const fontSize = useSelector(state => state.fontSize.fontSize)

  return (
    <S.Text fontSize={fontSize} style={style}>
      {children}
    </S.Text>
  )
}
