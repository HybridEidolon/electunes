import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
  createOscillatorNode,
  deleteNode,
} from '../../actions';

const nodes = handleActions({
  [createOscillatorNode]: (state, action) => {
    return state.concat({
      id: action.payload.uuid,
      type: 'oscillator',
    });
  },
  [deleteNode]: (state, action) => {
    return state.filter(v => v.id !== action.payload.uuid);
  },
}, []);


const project = combineReducers({
  nodes,
});

export default project;
