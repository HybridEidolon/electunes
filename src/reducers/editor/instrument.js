import uuid from 'uuid';

import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
  createOscillatorNode
} from '../../actions';

const nodes = handleActions({
  [createOscillatorNode]: (state, _) => {
    return state.concat({
      id: uuid(),
      type: 'oscillator',
      props: {}
    });
  }
}, []);

const instrument = combineReducers({
  nodes
});

export default instrument
