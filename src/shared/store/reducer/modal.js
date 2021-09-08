export const INITIAL_STATE = { visible: false }

export default function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_VISIBLE_TRUE':
      return { visible: true }
    case 'SET_VISIBLE_FALSE':
      return { visible: false }
    default:
      return state
  }
}
