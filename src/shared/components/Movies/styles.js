import styled from 'styled-components/native'

export const ContainerBtns = styled.View`
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
  margin: 10px 10px;
`

export const MovieTitle = styled.Text`
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`
