import styled from 'styled-components'
import { s, vs } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Text from '../../../shared/components/Text'

export const LetterText = styled(Text).attrs(({ theme }) => ({
  fontSize: theme.Sizes.FONTSIZE_HEADER,
}))`
  color: ${({ theme }) => theme.Colors.WHITE};
`

export const ButtonHeader = styled.View`
  min-width: ${s(22)}px;
  height: ${vs(22)}px;
  align-items: center;
  justify-content: center;
  margin-right: ${s(2)}px;
  margin-left: ${s(8)}px;
`

export const AccessibilityButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const Button = styled.TouchableOpacity.attrs({
  accessible: true,
  accessibilityComponentType: 'button',
})``

export const HeaderContainer = styled.View`
  flex: 0.15;
  flex-direction: row;
  position: relative;
  padding-left: 2.5%;
  padding-right: 2.5%;
  align-items: center;
  justify-content: space-between;
`

// export const IconMenu = styled(Icon).attrs(({ theme }) => ({
//   name: 'menu',
//   size: 40,
//   color: theme.Colors.WHITE,
// }))``
