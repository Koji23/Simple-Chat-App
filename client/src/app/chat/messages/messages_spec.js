import { renderComponent , expect } from '../../tests/test_helper.js';
import Messages from './Messages.jsx';

describe('Messages' , () => {
  let component;
  beforeEach(() => {
   component = renderComponent(Messages);
  });

  it('has a messages class', () => {
    expect(component.hasClass('messages')).to.equal(true);
  });
});
