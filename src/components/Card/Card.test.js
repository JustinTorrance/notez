import React from 'react';
import { Card, mapStateToProps, mapDispatchToProps } from '../Card/Card';
import { shallow } from 'enzyme';
import { deleteNote } from '../../thunks/deleteNote';
import { updateListItems } from '../../thunks/updateListItems';
import { deleteListItem, toggleCompleted } from '../../actions';
jest.mock('../../thunks/deleteNote');


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
    it('deleteNote: should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      mockId = '1';
      mockUrl = 'www.example.com';
      const actionToDispatch = deleteNote(mockUrl, mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteNote(mockUrl, mockId);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
  