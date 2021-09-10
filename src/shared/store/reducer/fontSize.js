export const INITIAL_STATE = { delta: 0 } // -4 ~ 4

export default function fsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      const newDeltaPlus = state.delta < 4 ? state.delta + 1 : state.delta
      return { delta: newDeltaPlus }
    case 'DECREMENT':
      const newDeltaMinus = state.delta > -4 ? state.delta - 1 : state.delta
      return { delta: newDeltaMinus }
    case 'RESET':
      return { delta: INITIAL_STATE.delta }
    default:
      return state
  }
}
