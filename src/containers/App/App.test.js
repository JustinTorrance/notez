import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './App';
import App from './App';
import { isLoading } from '../../actions';
jest.mock('../../thunks/fetchNotes');

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
  
  describe('mapStateToProps', () => {
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

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const fetchNotes = jest.fn();
      const actionToDispatch = fetchNotes('www.url.com');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchNotes('www.mockurl.com');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
});
