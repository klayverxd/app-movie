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

// ACTIONS
export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}
