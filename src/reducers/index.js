import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import track from './track'

export default combineReducers({
  track,
  routing : routeReducer
})
