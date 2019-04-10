import React from 'react';
import { Card, mapStateToProps, mapDispatchToProps } from '../Card/Card';
import { shallow } from 'enzyme';
import { deleteNote } from '../../thunks/deleteNote';
import { updateListItems } from '../../thunks/updateListItems';
import { deleteListItem, toggleCompleted } from '../../actions';
jest.mock('../../thunks/deleteNote');
jest.mock('../../thunks/updateListItems');


let wrapper;
let mockUrl;
let mockNotes;
let mockId;
let mockTitle;
let mockFunction;

describe('deleteNote', () => {
  beforeEach(() => {
    mockUrl = 'www.somenotes.com';
    mockId = '1';
    mockTitle = "mockTitle"
    mockNotes = [
      { id: '1', title: 'fakeTitle', listItems: [{id: 1, text: 'faketext'}] },
      { id: '2', title: 'fakeTitle2', listItems: [{id: 2, text: 'faketext2'}] }
    ];
    mockFunction = jest.fn()
    wrapper = shallow( 
      <Card 
        key={mockId}
        deleteNote={deleteNote} 
        id={mockId} 
        listItems={mockNotes} 
        title={mockTitle}
        deleteListItem={deleteListItem}
        notes={mockNotes}
        retrieveNotes={mockFunction}
        toggleCompleted={toggleCompleted}
        updateListItems={updateListItems}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should call the deleteNote prop with url and value', () => {
    const mockEvent = { target: { value: '1'} }
    wrapper.instance().deleteNote(mockEvent);

    expect(deleteNote).toHaveBeenCalled()
  });
});

  describe('mapStateToProps', () => {
    it('should return an array of notes', () => {
      const mockState = {
        notes: mockNotes,
        loading: false
      };
      const expected =  {
        notes: mockNotes
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    beforeEach(() => {
      mockId = '1';
      mockUrl = 'www.example.com';
    })

    it('deleteNote: should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = deleteNote(mockUrl, mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteNote(mockUrl, mockId);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('updateListItems: should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateListItems(mockUrl, mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateListItems(mockUrl, mockId);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('toggleCompleted: should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleCompleted(mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.toggleCompleted(mockId);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('deleteListItem: should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = deleteListItem(mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteListItem(mockId);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
  