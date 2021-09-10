import { combineReducers } from 'redux'

import fontSize from './fontSize'
import movie from './movies'
import modal from './modal'
import themeReducer from './theme'

const allReducers = combineReducers({
  fontSize,
  movie,
  modal,
  themeReducer,
})

export default allReducers
