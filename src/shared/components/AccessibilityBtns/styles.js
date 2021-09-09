import styled from 'styled-components/native'

import TextComponent from '../Text'

export const ContainerBtns = styled.View`
  flex-direction: row;
  width: 120px;
  justify-content: space-between;
  margin: 10px 10px;
  background-color: ${({ theme }) => theme.colors.DELL_BLUE};
`

export const Text = styled(TextComponent)`
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  background-color: ${({ theme }) => theme.colors.DARK_GRAY};
`

export const LetterText = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
`

export const Button = styled.TouchableOpacity`
  align-items: center;

  flex: 1;
  padding: 10px;
`
