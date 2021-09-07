import { combineReducers } from 'redux'

import counter from './counter'
import movie from './movies'

const allReducers = combineReducers({
  counter,
  movie,
})

export default allReducers
