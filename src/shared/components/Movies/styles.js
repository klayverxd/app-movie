import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.ScrollView``

export const ContainerSection = styled.View`
  margin-bottom: 12px;
`

export const HeaderSection = styled.View`
  background-color: ${({ theme }) => theme.PRIMARY_HEADER_SECTION_COLOR};

  height: 40px;

  align-items: center;
  justify-content: center;

  margin-bottom: 12px;
`

export const TextHeaderSection = styled(TextComponent)`
  color: #fff;

  font-weight: bold;
`

export const ContainerCard = styled.View`
  flex: 1;
  margin-right: 12px;

  align-items: center;
`

export const MovieTitle = styled(TextComponent)`
  color: #454545;

  max-width: 130px;
`

export const ErrorText = styled(TextComponent)`
  color: #454545;

  text-align: center;

  padding: 10px;
`
