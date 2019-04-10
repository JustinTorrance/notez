import React from 'react';
import { shallow } from 'enzyme' ;
import Input from './Input.js';

describe('Input', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Input/>)
    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('should set state to the values of form inputs', () => {
    const wrapper = shallow(<Input />);
    const mockedEvent = {
      target: {
        value: 'tacos'
      }
    }
    wrapper.instance().handleChange(mockedEvent)
    expect(wrapper.state('text')).toEqual('tacos')
  })
})