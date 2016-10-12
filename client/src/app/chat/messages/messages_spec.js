import { renderComponent , expect } from '../../tests/test_helper.js';
import Messages from './Messages.jsx';
import MessageReducers from './messages_reducers.js';
import { FETCH_MESSAGES, POST_MESSAGE, EDIT_MESSAGE } from './messages_actions.js';
import { fetchMessages, postMessage, editMessage } from './messages_actions';
import data from './fixtures/fakedata.js';

describe('Messages' , () => {
  let component, fakeMessage;
  beforeEach(() => {
   component = renderComponent(Messages);
   fakeMessage = {
      id: 99,
      timestamp: 1475948656962,
      author: 'Anonymous',
      content: 'Hello World',
    };
  });
  // Markup
  describe('Markup', () => {
    it('has a messages class', () => {
      expect(component.hasClass('messages')).to.equal(true);
    });
  });
  // Actions
  describe('Actions', () => {
    it('sends a FETCH_MESSAGES action with fixed data in payload', () => {
      expect(fetchMessages()).to.eql({type: FETCH_MESSAGES, payload: data});
    });
    it('sends a POST_MESSAGE action with new data in payload', () => {
      let postAction = postMessage('Hello World', 'Anonymous', 99);
      postAction.payload.timestamp = fakeMessage.timestamp;
      expect(postAction).to.eql({type: POST_MESSAGE, payload: fakeMessage});
    });
    it('sends an EDIT_MESSAGE action with new data in payload', () => {
      expect(editMessage(fakeMessage, 0)).to.eql({
        type: EDIT_MESSAGE, 
        payload: {
          index: 0,
          newMessage: fakeMessage
        }
      });
    });
  });
  // Reducers
  describe('Reducers', () => {
    it('handles actions with unknown type', () => {
      // expect(commentReducer()).to.be.instanceof(Array);
      expect(MessageReducers(undefined, {})).to.eql([]);
    });
    it('handles action of type FETCH_MESSAGES', () => {
      const action = { type: FETCH_MESSAGES, payload: data };
      expect(MessageReducers([], action).length).to.equal(data.messages.length);
    });
    it('handles action of type POST_MESSAGE', () => {
      const action = { type: POST_MESSAGE, payload: fakeMessage };
      expect(MessageReducers([], action)[0]).to.eql(fakeMessage);
    });
    it('handles action of type EDIT_MESSAGE', () => {
      const action = { 
        type: EDIT_MESSAGE, 
        payload:  {
          index: 0,
          newMessage: fakeMessage
        }
      };
      expect(MessageReducers(data.messages, action)[0]).to.eql(fakeMessage);
    });
  });

});
