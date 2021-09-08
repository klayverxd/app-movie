import React from 'react'
import { Text, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../store/action/counter'

import * as S from './styles'

export default function AccessibilityBtns() {
  const fontSize = useSelector(state => state.fontSize.fontSize)

  const dispatch = useDispatch()

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>FontSize: {fontSize}</Text>
      <S.ContainerBtns>
        <S.Button
          onPress={() => {
            dispatch(decrement())
          }}
          title="A-"
        />
        <S.Button
          onPress={() => {
            dispatch(reset())
          }}
          title="A"
        />
        <S.Button
          onPress={() => {
            dispatch(increment())
          }}
          title="A+"
        />
      </S.ContainerBtns>
    </View>
  )
}
