import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
`

export const TextInput = styled.TextInput`
  background-color: #d9d9d9;
  padding: 5px 7px;
  flex: 1;
`

export const SearchButton = styled.Button`
  background-color: #d9d9d9;
`

export const ContainerButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.DELL_BLUE};

  padding: 10px;

  justify-content: center;
`
