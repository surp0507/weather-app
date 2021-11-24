import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {logData} from './actions'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css';



const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

store.dispatch(logData())

render(
  <Provider store={store}>
    <App />
 
  </Provider>,
  document.getElementById('root')
)
