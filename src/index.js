import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, } from 'redux';
import { Provider, } from 'react-redux';
import reducer from './reducers';
import 'rxjs';

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
