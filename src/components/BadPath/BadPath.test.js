import React from 'react';
import { shallow } from 'enzyme';
import BadPath from './BadPath';

describe('BadPath', () => {
  const wrapper = shallow(<BadPath />);

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});