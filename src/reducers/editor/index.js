import {combineReducers} from 'redux';
//import {handleActions} from 'redux-actions';
import instrument from './instrument.js';

const editor = combineReducers({
  instrument
});

export default editor;
