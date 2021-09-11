import React from 'react'
import { useSelector } from 'react-redux'

import * as S from './styles'

export default function NewText({ children, style, ...rest }) {
  const delta = useSelector(state => state.fontSize.delta)

  return (
    <S.Text delta={delta} style={style} {...rest}>
      {children}
    </S.Text>
  )
}
