import { FETCH_MESSAGES, POST_MESSAGE, EDIT_MESSAGE } from './messages_actions.js';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case POST_MESSAGE:
      return [...state, action.payload];
    case EDIT_MESSAGE: 
      let updatedMessages = state.slice(0);
      updatedMessages.splice(action.payload.index, 1, action.payload.newMessage);
      return updatedMessages;
  }
  return state;
};

