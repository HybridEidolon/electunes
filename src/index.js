import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import epic from './epics'
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import 'rxjs'

import './index.css'

// Set up the Redux DevTools extension if it's available
const wrapCompose =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose

const epicMiddleware = createEpicMiddleware(epic)

const enhancer = wrapCompose(
  applyMiddleware(epicMiddleware),
  applyMiddleware(thunk)
)

const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
