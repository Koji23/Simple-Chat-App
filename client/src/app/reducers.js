import { combineReducers } from 'redux';
import MessageReducer from './chat/messages/messages_reducers.js';

const rootReducer = combineReducers({
  MessageReducer
});

export default rootReducer;