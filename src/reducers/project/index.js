import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
  createOscillatorNode
} from '../../actions';

const nodes = handleActions({
  [createOscillatorNode]: (state, action) => {
    return state.concat({
      id: action.payload.uuid,
      type: 'oscillator'
    });
  }
}, []);


const project = combineReducers({
  nodes
});

export default project;
