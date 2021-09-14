export const Types = {
  SWITCH_THEME: 'SWITCH_THEME',
}

import { defaultTheme } from '../../constants/themes'

export const INITIAL_STATE = { theme: defaultTheme }

export default function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SWITCH_THEME:
      return { theme: action.theme }
    default:
      return state
  }
}
