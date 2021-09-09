import React from 'react'
import { View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../store/action/counter'

import * as S from './styles'

export default function AccessibilityBtns() {
  const fontSize = useSelector(state => state.fontSize.fontSize)

  const dispatch = useDispatch()

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <S.Text>APP-MOVIE: {fontSize}</S.Text>
      <S.ContainerBtns>
        <S.Button
          onPress={() => {
            dispatch(decrement())
          }}
        >
          <S.LetterText>A-</S.LetterText>
        </S.Button>
        <S.Button
          onPress={() => {
            dispatch(reset())
          }}
        >
          <S.LetterText>A</S.LetterText>
        </S.Button>
        <S.Button
          onPress={() => {
            dispatch(increment())
          }}
        >
          <S.LetterText>A+</S.LetterText>
        </S.Button>
      </S.ContainerBtns>
    </View>
  )
}
