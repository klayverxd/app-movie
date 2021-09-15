export const types = {
  SWITCH_THEME: 'SWITCH_THEME',
}

import { defaultTheme } from '../../constants/themes'

export const INITIAL_STATE = { theme: defaultTheme }

export default function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SWITCH_THEME:
      return { theme: action.theme }
    default:
      return state
  }
}
