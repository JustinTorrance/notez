import React from 'react';
import { shallow } from 'enzyme' ;
import Input from './Input.js';

describe('Input', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Input/>)
    expect(wrapper).toMatchSnapshot()
  })
})