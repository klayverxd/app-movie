import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.SECONDARY_HEADER_COLOR};

  flex-direction: row;

  padding: 12px 18px;
`

export const TextInput = styled.TextInput`
  border: 2px solid #fff;
  border-radius: 50px;

  color: #fff;

  font-size: 18px;

  flex: 1;

  margin-right: 12px;

  padding: 5px 12px;
`

export const ContainerButton = styled.TouchableOpacity`
  border: 2px solid #fff;
  border-radius: 50px;

  padding: 10px;

  justify-content: center;
`
