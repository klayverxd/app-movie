import React from 'react'

import { useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../../store/action/counter'

import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

export default function AccessibilityBtns() {
  const dispatch = useDispatch()

  return (
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

      <S.Button
        onPress={() => {
          dispatch(increment())
        }}
      >
        <Icon name="adjust" size={18} color="#FFF" />
      </S.Button>
    </S.ContainerBtns>
  )
}
