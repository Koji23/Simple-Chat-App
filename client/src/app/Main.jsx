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

const createStoreWithMiddleware = applyMiddleware(thunk, promise, createLogger())(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={hashHistory} routes={Routes} />
  </Provider>
  , document.getElementById('app'));

