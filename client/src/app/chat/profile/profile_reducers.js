import { UPDATE_USERNAME } from './profile_actions.js';

const initProfile = {
  username: '',
  imageURL: '',
}

export default (state = initProfile, action) => {
  switch(action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, {
        username: action.payload,
      });
  }
  return state;
}