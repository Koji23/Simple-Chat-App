import { renderComponent , expect } from './tests/test_helper.js';
import App from './App.jsx';

describe('App' , () => {
  let component;
  beforeEach(() => {
   component = renderComponent(App);
   // console.log(component.find('.container'));
  });

  it('shows a container element', () => {
    expect(component.hasClass('container')).to.equal(true);
  });
});
