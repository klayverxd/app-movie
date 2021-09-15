export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

export const INITIAL_STATE = { delta: 0 } // -4 ~ 4

export default function fsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.INCREMENT:
      const newDeltaPlus = state.delta < 4 ? state.delta + 1 : state.delta
      return { delta: newDeltaPlus }
    case types.DECREMENT:
      const newDeltaMinus = state.delta > -4 ? state.delta - 1 : state.delta
      return { delta: newDeltaMinus }
    case types.RESET:
      return { delta: INITIAL_STATE.delta }
    default:
      return state
  }
}
