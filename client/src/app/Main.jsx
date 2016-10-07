// React
import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { Router, browserHistory } from 'react-router';
// Redux + Middlware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// Components
import Routes from './routes.jsx';
import reducers from './reducers.js';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>
  , document.getElementById('app'));

