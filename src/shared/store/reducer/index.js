import { combineReducers } from 'redux'

import fontSize from './fontSize'
import movie from './movies'
import modal from './modal'

const allReducers = combineReducers({
  fontSize,
  movie,
  modal,
})

export default allReducers
