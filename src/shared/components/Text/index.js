import React from 'react'
import { useSelector } from 'react-redux'

import * as S from './styles'

export default function NewText({ children }) {
  const fontSize = useSelector(state => state.fontSize.fontSize)

  return <S.Text fontSize={fontSize}>{children}</S.Text>
}
