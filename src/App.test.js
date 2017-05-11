import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { loadState } from './localStorage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const persistedState = loadState()
  const store = createStore(
    rootReducer,
    persistedState
  )

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div)
});
