import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-size: ${props => props.fontSize};
`
