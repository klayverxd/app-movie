import { combineReducers } from 'redux'

import fontSize from './fontSize'
import movie from './movies'

const allReducers = combineReducers({
  fontSize,
  movie,
})

export default allReducers
