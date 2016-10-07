import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Chat from './chat/Chat.jsx';
// import Login from './Login.jsx';
// import Signup from 'Signup.jsx';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Chat} />
  </Route>
);
    // <Route path="/login" component={Login} />
    // <Route path="/signup" component={Signup} />