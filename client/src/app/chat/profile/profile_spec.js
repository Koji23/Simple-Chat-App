import { renderComponent , expect } from '../../tests/test_helper.js';
import Profile from './Profile.jsx';

describe('Profile' , () => {
  let component;
  beforeEach(() => {
   component = renderComponent(Profile);
  });

  it('has a profile class', () => {
    expect(component.hasClass('profile')).to.equal(true);
  });
});
