import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, FlatList } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../../store/action/movie'

export default function Movies() {
  const dispatch = useDispatch()
  const [searchMovie, setSearchMovie] = useState('')

  const movies = useSelector(state => state.movie.movies)
  const loading = useSelector(state => state.movie.loading)
  const error = useSelector(state => state.movie.error)

  useEffect(() => {
    dispatch(getMovie())
  }, [])

  return (
    <View>
      {loading && <Text>Loading...</Text>}
      <TextInput
        onChangeText={setSearchMovie}
        value={searchMovie}
        placeholder="Procurar filme"
        style={{ backgroundColor: 'gray', padding: 10 }}
      />
      <Button onPress={() => console.log(searchMovie)} title="Mostrar search" />
      {/* <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={movie => movie.id}
      /> */}
      {movies.map(movie => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
      {error && !loading && <Text>{error}</Text>}
    </View>
  )
}
