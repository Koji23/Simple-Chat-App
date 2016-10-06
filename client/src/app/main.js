import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './App.jsx';
import reducers from './reducers.js';

const craeteStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={craeteStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('app'));

