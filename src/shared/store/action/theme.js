import { types } from '../reducer/theme'

export function switchTheme(theme) {
  return {
    type: types.SWITCH_THEME,
    theme: theme,
  }
}
