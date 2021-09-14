export const Types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

export const INITIAL_STATE = { delta: 0 } // -4 ~ 4

export default function fsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INCREMENT:
      const newDeltaPlus = state.delta < 4 ? state.delta + 1 : state.delta
      return { delta: newDeltaPlus }
    case Types.DECREMENT:
      const newDeltaMinus = state.delta > -4 ? state.delta - 1 : state.delta
      return { delta: newDeltaMinus }
    case Types.RESET:
      return { delta: INITIAL_STATE.delta }
    default:
      return state
  }
}
