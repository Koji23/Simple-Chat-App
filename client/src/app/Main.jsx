// React
import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { Router, browserHistory } from 'react-router';
// Redux + Middlware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// Components
import Routes from './routes.jsx';
import rootReducer from './reducers.js';

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger),
);
// const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

// const middleware = [logger, thunk, reduxPromise];
// const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>
  , document.getElementById('app'));

