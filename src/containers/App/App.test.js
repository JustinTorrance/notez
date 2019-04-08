import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';
import { isLoading } from '../../actions';

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
  
  describe(mapStateToProps, () => {
    it('should return a boolean that indicates whether isLoad is true or false', () => {
      const mockState = {
        isLoading: false
      }
      const expected = {
        loading: false
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
});
