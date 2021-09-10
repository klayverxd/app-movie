import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Text = styled(TextComponent)`
  /* color: ${({ theme }) => theme.colors.DARK_GRAY}; */
`

export const ContainerBtns = styled.View`
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
  margin: 10px 10px;
`

export const ContainerCard = styled.View`
  flex: 1;
  margin-right: 12px;

  align-items: center;
`

export const MovieTitle = styled(TextComponent)`
  max-width: 130px;
`
