import styled from 'styled-components/native'

import TextComponent from '../Text'

export const ContainerModal = styled.View`
  align-items: center;

  flex: 1;
  justify-content: center;
`

export const ContentModal = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.PRIMARY_HEADER_SECTION_COLOR};

  border-radius: 20px;

  border-width: 2px;
  border-color: #fff;

  elevation: 200;

  margin: 20px;
  padding: 35px;
  padding-bottom: 25px;
`

export const ContainerHeader = styled.View`
  flex-direction: row;
`

export const ContentHeader = styled.View`
  flex: 1;
  margin-left: 16px;

  height: 160px;
  justify-content: space-between;
`

export const MovieImage = styled.Image`
  width: 120px;
  height: 160px;

  border-width: 1px;
  border-color: #fff;
`

export const MovieTitle = styled(TextComponent)`
  color: #fff;
  flex: 1.5;
  font-weight: bold;
`

export const Details = styled(TextComponent)`
  color: #fff;
  flex: 1;
`
export const OverviewText = styled(TextComponent)`
  color: #fff;

  margin-top: 14px;
  margin-bottom: 14px;

  text-align: justify;
`
export const ButtonClose = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.SECONDARY_HEADER_COLOR};
  border-width: 1px;
  border-color: #fff;

  color: #fff;

  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  padding-left: 16px;

  elevation: 2;
`

export const ButtonText = styled(TextComponent)`
  color: #fff;

  font-weight: bold;

  text-align: center;
`
