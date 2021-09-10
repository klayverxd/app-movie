import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.ScrollView``

export const ContainerSection = styled.View`
  margin-bottom: 12px;
`

export const HeaderSection = styled.View`
  background-color: ${({ theme }) => theme.colors.LIGHT_BLUE};
  color: ${({ theme }) => theme.colors.WHITE};

  height: 40px;

  align-items: center;
  justify-content: center;

  margin-bottom: 12px;
`

export const TextHeaderSection = styled(TextComponent)`
  color: ${({ theme }) => theme.colors.WHITE};

  font-weight: bold;
`

export const ContainerCard = styled.View`
  flex: 1;
  margin-right: 12px;

  align-items: center;
`

export const MovieTitle = styled(TextComponent)`
  max-width: 130px;
`
