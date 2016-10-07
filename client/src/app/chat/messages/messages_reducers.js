import { FETCH_MESSAGES, POST_MESSAGE } from './messages_actions.js';

// const initMessagesState = {
//   messages: [],
//   last_seen: 0,
// };

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case POST_MESSAGE:
      console.log(state, action );
      return [action.payload, ...state];
  }
  return state;
};