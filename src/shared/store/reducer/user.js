export const INITIAL_STATE = {
  user: {},
  loading: false,
  error: null,
}

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_USER_REQUESTED':
      return { ...state, loading: true }
    case 'GET_USER_SUCSESS':
      return { ...state, loading: false, user: action.user }
    case 'GET_USER_FAILED':
      return { ...state, loading: false, error: action.message }
    default:
      return state
  }
}

// ACTIONS
export function getUser(user) {
  return {
    type: 'GET_USER_REQUESTED',
    payload: { user },
  }
}
