import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
  openInstrumentEditor,
  openTrackerEditor
} from '../actions';

import editor from './editor';

const currentEditor = handleActions({
  [openInstrumentEditor]: (state, _) => ('instrument'),
  [openTrackerEditor]: (state, _) => ('tracker')
}, 'instrument');

const app = combineReducers({
  currentEditor,
  editor
});

export default app;
