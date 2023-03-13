import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test Case For App', () => {
  // eslint-disable-next-line no-unused-expressions
  it('should render button', () => {
    const wrapper = shallow(<App />)
    const buttonElement  = wrapper.find('#ClickMe');

    const expectButtonElementLength = 1;
    const expectButtonElementContext = 'Click Me';

    expect(buttonElement).toHaveLength(expectButtonElementLength);
    expect(buttonElement.text()).toEqual(expectButtonElementContext);
  })
  
  it('increments count by 1 when button is clicked', () => {
    const wrapper = shallow(<App />);
    const buttonElement  = wrapper.find('#ClickMe');
    buttonElement.simulate('click');
    
    const expected = 'You clicked me :: 1';
    const actual = wrapper.find('p').text();
    expect(actual).toEqual(expected);
  });
})
