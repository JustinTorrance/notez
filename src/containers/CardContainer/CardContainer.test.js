import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';

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
});