import React from 'react'
import { useDispatch } from 'react-redux'
import {
  decrementFontSize,
  incrementFontSize,
  recoveryFontSize,
} from '../../../shared/store/ducks/config/font'

import * as S from './styles'

const AccessibilityBtns = () => {
  const dispatch = useDispatch()

  const aFontPlus = () => {
    dispatch(incrementFontSize())
  }

  const aFontMinus = () => {
    dispatch(decrementFontSize())
  }

  const aFontRecovery = () => {
    dispatch(recoveryFontSize())
  }

  const renderAccessibilityBtns = () => {
    return (
      <S.AccessibilityButtons>
        <S.Button onPress={aFontMinus}>
          <S.ButtonHeader>
            <S.LetterText>A-</S.LetterText>
          </S.ButtonHeader>
        </S.Button>

        <S.Button onPress={aFontRecovery}>
          <S.ButtonHeader>
            <S.LetterText>A</S.LetterText>
          </S.ButtonHeader>
        </S.Button>

        <S.Button onPress={aFontPlus}>
          <S.ButtonHeader>
            <S.LetterText>A+</S.LetterText>
          </S.ButtonHeader>
        </S.Button>

        <S.Button>
          <S.ButtonHeader>
            <S.IconMenu />
          </S.ButtonHeader>
        </S.Button>
      </S.AccessibilityButtons>
    )
  }

  return <S.HeaderContainer>{renderAccessibilityBtns()}</S.HeaderContainer>
}

export default AccessibilityBtns
