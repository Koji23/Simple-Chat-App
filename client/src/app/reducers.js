import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  tests: function(a = {}) {
    return a;
  }
});

export default rootReducer;