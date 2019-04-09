import { NewNote, mapDispatchToProps } from './NewNote';
jest.mock('../../thunks/addNote');
import React from 'react';
import { shallow } from 'enzyme';

describe('NewNote', () => {
  const addNote = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewNote addNote={addNote} />)
  });

  it('should have proper default state', () => {
    expect(wrapper.state()).toEqual({
      inputs: [],
      title: '',
      listItems: []
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
    
  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const mockNote = {title: 'Walk dog', listItems: [{id: 1, text: 'Find leash'}]};
      const mockUrl = 'www.url.com';
      const actionToDispatch = addNote(mockUrl, mockNote);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addNote(mockUrl,mockNote);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});