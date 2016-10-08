import axios from 'axios';
import data from './fixtures/fakedata.js';

const URL = 'localhost:3000/fixtures/fakedata.json';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';

export const fetchMessages = () => {
  return {
    type: FETCH_MESSAGES,
    payload: data,  // should be request in a real api call
  }
};

export const postMessage = (message, author, id) => {
  return {
    type: POST_MESSAGE,
    payload: {
      id: id,
      timestamp: Date.now(),
      author: author === '' ? 'Anonymous' : author,
      content: message,
    },
  }
}

export const editMessage = (newMessage, messageIndex) => {
  return {
    type: EDIT_MESSAGE,
    payload: {
      index: messageIndex,
      newMessage: newMessage,
    }
  }
}