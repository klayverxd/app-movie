import React from 'react'
import { Button, Text, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../store/action/counter'

export default function Counter() {
  const counter = useSelector(state => state.counterReducer.counter)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <View>
        <Button
          onPress={() => {
            dispatch(increment())
          }}
          title="+"
          color="#841532"
        />
        <Button
          onPress={() => {
            dispatch(reset())
          }}
          title="reset"
          color="#123456"
        />
        <Button
          onPress={() => {
            dispatch(decrement())
          }}
          title="-"
          color="#8985ff"
        />
      </View>
    </View>
  )
}
