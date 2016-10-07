import { FETCH_MESSAGES } from './messages_actions.js';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_MESSAGES:
      console.log('running message reducer', action);
      return [action.payload, ...state];
  }
  return state;
};