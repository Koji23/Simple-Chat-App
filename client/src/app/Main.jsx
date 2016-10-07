// React
import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { Router, hashHistory } from 'react-router';
// Redux + Middlware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// Components
import Routes from './routes.jsx';
import rootReducer from './reducers.js';

import App from './App.jsx';
// const logger = createLogger();
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),
// );
// const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)
//const middleware = [createLogger(), thunk, promise];

//const store = createStore(rootReducer, applyMiddleware(...middleware));

const createStoreWithMiddleware = applyMiddleware(thunk, promise, createLogger())(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.getElementById('app'));

