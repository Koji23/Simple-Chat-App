import { renderComponent , expect } from '../tests/test_helper.js';
import Chat from './Chat.jsx';

describe('Chat' , () => {
  let component;
  beforeEach(() => {
   component = renderComponent(Chat);
  });

  it('has child three components', () => {
    expect(component.find('.conversations')).to.exist;
    expect(component.find('.messages')).to.exist;
    expect(component.find('.profile')).to.exist;
  });
});
