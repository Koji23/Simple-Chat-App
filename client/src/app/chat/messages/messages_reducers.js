import { FETCH_MESSAGES, POST_MESSAGE } from './messages_actions.js';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case POST_MESSAGE:
      return [...state, action.payload];
  }
  return state;
};