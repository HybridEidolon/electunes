import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore();
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
