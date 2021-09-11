import React from 'react'
import { useSelector } from 'react-redux'

import { StatusBar } from 'react-native'

import styled, { ThemeProvider } from 'styled-components'

import Header from '../../shared/components/Header'
import SearchBar from '../../shared/components/SearchBar'
import Movies from '../../shared/components/Movies'
import DetailsModal from '../../shared/components/DetailsModal'

export default function Home() {
  const theme = useSelector(state => state.themeReducer.theme)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar />
        <Header />
        <SearchBar />
        <Movies />
        <DetailsModal />
      </Container>
    </ThemeProvider>
  )
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`
