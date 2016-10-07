import axios from 'axios';

const URL = 'localhost:3000/fixtures/fakedata.json';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';

const messageActions = {
  fetchMessages: function() {
    const request = axios.get(URL);
    console.log('running message actions');
    return {
      type: FETCH_MESSAGES,
      payload: request,
    }
  },
}

export default messageActions; 