import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
  openInstrumentEditor,
  openTrackerEditor
} from '../actions';

const currentEditor = handleActions({
  [openInstrumentEditor]: (state, _) => ('instrument'),
  [openTrackerEditor]: (state, _) => ('tracker')
}, 'instrument');

const app = combineReducers({
  currentEditor
});

export default app;
