import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/reducer/user'

export default function User() {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user.user)
  const loading = useSelector(state => state.user.loading)
  const error = useSelector(state => state.user.error)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <View>
      {loading && <Text>Loading...</Text>}
      <Text>{user.data?.name}</Text>
      {error && !loading && <Text>{error}</Text>}
    </View>
  )
}
