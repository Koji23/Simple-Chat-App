import { renderComponent , expect } from '../../tests/test_helper.js';
import Messages from './Messages.jsx';
import MessageReducers from './messages_reducers.js';
import { FETCH_MESSAGES, POST_MESSAGE, EDIT_MESSAGE } from './messages_actions.js';
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
  // Reducers
  describe('Reducers', () => {
    it('handles actions with unknown type', () => {
      // expect(commentReducer()).to.be.instanceof(Array);
      expect(MessageReducers(undefined, {})).to.eql([]);
    });
    it('handles action of type FETCH_MESSAGES', () => {
      const action = { type: FETCH_MESSAGES, payload: data };
      expect(MessageReducers([], action).length).to.eql(data.messages.length);
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
