import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'
import {
  openInstrumentEditor,
  openTrackerEditor
} from '../actions'

import project from './project'

const currentEditor = handleActions({
  [openInstrumentEditor]: (state, _) => ('instrument'),
  [openTrackerEditor]: (state, _) => ('tracker')
}, 'instrument')

export const app = combineReducers({
  currentEditor,
  project
})

export default app
