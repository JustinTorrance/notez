import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  let wrapper;
  let mockProps = {
    loading: false
  };

  beforeEach(() => {
    wrapper = shallow(<App loading={mockProps.loading} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should match the snapshot if loading is true', () => {
    const mockProps = {
      loading: true
    };
    expect(wrapper.debug()).toMatchSnapshot();
  });
});