import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps, mapDispatchToProps } from './CardContainer';
jest.mock('../../thunks/fetchNotes')

describe('CardContainer', () => {
  let wrapper;
  const fetchNotes = jest.fn();
  const mockNotes = [
    {
      id: "1",
      title: "Kim's list",
      listItems: [
        {id: "a", text: "practice mui"},
        {id: "b", text: "sleep"}
      ]},
    {
      id: "2",
      title: "Josh's list",
      listItems: [
        {id: "c", text: "watch the dogz"},
        {id: "d", text: "call Hannah"}
      ]},
      {
        id: "3",
      title: "JT's list",
      listItems: [
        {id: "e", text: "don't miss the bus back to boulder"},
        {id: "f", text: "eat that doughnut"}
      ]}
  ];

  beforeEach(() => {
    wrapper = shallow(<CardContainer notes={mockNotes} fetchNotes={fetchNotes}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
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
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchNotes('www.mockurl.com');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchNotes('www.mockurl.com');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })

});