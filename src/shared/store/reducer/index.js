import { combineReducers } from 'redux'

import fontSize from './fontSize'
import movie from './movies'
import modalReducer from './modal'
import themeReducer from './theme'

const allReducers = combineReducers({
  fontSize,
  movie,
  modalReducer,
  themeReducer,
})

export default allReducers
