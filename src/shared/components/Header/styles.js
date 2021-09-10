import styled from 'styled-components/native'

import TextComponent from '../Text'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.PROGRESSBAR};

  flex-direction: row;

  justify-content: space-between;

  padding: 12px 18px;
`

export const Text = styled(TextComponent)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: bold;
`
