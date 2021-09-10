import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../store/action/counter'

import { defaultTheme, contrastTheme } from '../../constants/themes'
import { switchTheme } from '../../store/action/theme'

import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

export default function AccessibilityBtns() {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.themeReducer.theme)

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
      {theme.mode === 'default' ? (
        <S.Button
          onPress={() => {
            dispatch(switchTheme(contrastTheme))
          }}
        >
          <Icon name="adjust" size={18} color="#FFF" />
        </S.Button>
      ) : (
        <S.Button
          onPress={() => {
            dispatch(switchTheme(defaultTheme))
          }}
        >
          <Icon name="adjust" size={18} color="#FFF" />
        </S.Button>
      )}
    </S.ContainerBtns>
  )
}
