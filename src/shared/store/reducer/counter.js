export const INITIAL_STATE = { counter: 10 }

export default function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 }
    case 'DECREMENT':
      return { counter: state.counter - 1 }
    case 'RESET':
      return { counter: INITIAL_STATE.counter }
    default:
      return state
  }
}
