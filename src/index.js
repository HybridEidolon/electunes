import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import 'rxjs';
import {Observable} from 'rxjs';
import _ from 'lodash';

import './index.css';

// Set up the Redux DevTools extension if it's available
const wrapCompose =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const enhancer = wrapCompose(
);

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

function diffArray(a, b) {
  let c = [];
  _(b).filter(v => !_.find(a, vv => vv === v)).forEach(v => c.push({type: 'A', payload: v}));
  _(a).filter(v => !_.find(b, vv => vv === v)).forEach(v => c.push({type: 'D', payload: v}));
  return c;
}

// sub to state changes
const ctx = new AudioContext();
window.store = store;
const a = Observable.from(store)
  .pluck('project')
  .bufferCount(2, 1)
  .filter((p) => p[1] !== p[0])
  .map(p => diffArray(p[0].nodes, p[1].nodes));

let audioNodes = {};

a.subscribe(changes => {
  _.forEach(changes, (c) => {
    switch (c.type) {
      case 'A': {
        let osc = ctx.createOscillator();
        osc.connect(ctx.destination);
        osc.start();
        audioNodes[c.payload.id] = osc;
        break;
      }
      case 'D': {
        let node = audioNodes[c.payload.id];
        node.stop();
        node.disconnect();
        delete audioNodes[c.payload.id];
        break;
      }
    }
  });
});
