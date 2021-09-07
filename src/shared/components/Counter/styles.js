import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #d9d9d9;
  padding: 5px 7px;
`

export const MovieTitle = styled.Text`
  color: #000;
  background-color: ${({ theme }) => theme.Colors.WHITE};
`
