import React from 'react';
import { Card } from '../Card/Card';
import { shallow } from 'enzyme';
import { deleteNote } from '../../thunks/deleteNote';


describe('deleteNote', () => {
  let wrapper;
  let mockUrl;
  let mockNotes;
  let mockId;
  let mockTitle;
  let mockFunction;

  beforeEach(() => {
    mockUrl = 'www.somenotes.com';
    mockId = '1';
    mockTitle = "mockTitle"
    mockNotes = [
      { id: '1', title: 'fakeTitle', listItems: [{id: 1, text: 'faketext'}] },
      { id: '2', title: 'fakeTitle2', listItems: [{id: 2, text: 'faketext2'}] }
    ];
    wrapper = shallow( 
      <Card 
        key={mockId}
        deleteNote={deleteNote} 
        id={mockId} 
        listItems={mockNotes} 
        title={mockTitle}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the deleteNote prop with url and value', () => {
    let e.target = 
    wrapper.instance().deleteNote();
    expect(mockFunction).toHaveBeenCalled()
    
  });
});