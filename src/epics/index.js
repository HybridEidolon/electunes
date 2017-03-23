import {combineEpics} from 'redux-observable'
import audioSession from './audio-session'

export const rootEpic = combineEpics(
  audioSession
)

export default rootEpic
