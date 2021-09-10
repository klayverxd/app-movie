import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  font-size: ${() => props => `${props.delta + 16}px`};
`
