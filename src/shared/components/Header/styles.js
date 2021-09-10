import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.PRIMARY_HEADER_COLOR};

  flex-direction: row;

  justify-content: space-between;

  padding: 12px 18px;
`

export const Text = styled(TextComponent)`
  color: #fff;

  font-size: 22px;
  font-weight: bold;
`
