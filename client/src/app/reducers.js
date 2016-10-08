import { combineReducers } from 'redux';
import MessageReducer from './chat/messages/messages_reducers.js';
import ProfileReducer from './chat/profile/profile_reducers.js';

const rootReducer = combineReducers({
  messages: MessageReducer,
  profile: ProfileReducer,
});

export default rootReducer;