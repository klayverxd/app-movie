export const INITIAL_STATE = { fontSize: 16 }

export default function fsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      const newFsPlus =
        state.fontSize < 20 ? state.fontSize + 1 : state.fontSize
      return { fontSize: newFsPlus }
    case 'DECREMENT':
      const newFsMinus =
        state.fontSize > 12 ? state.fontSize - 1 : state.fontSize
      return { fontSize: newFsMinus }
    case 'RESET':
      return { fontSize: INITIAL_STATE.fontSize }
    default:
      return state
  }
}
