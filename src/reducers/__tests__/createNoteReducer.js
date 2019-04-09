import { notesReducer } from '../createNoteReducer';
import * as actions from '../../actions';

describe('notesReducer', () => {
  let state = [];

  it('should return state by default', () => {
    const action = {};
    const results = notesReducer(state, action);
    expect(results).toEqual(state);
  });

  it('should return state with a new note added', () => {
    const note = { id: '1', title: 'title', listItems: [{ id: '2', text: 'text'}] };
    const action = actions.createNote(note);
    const results = notesReducer(state, action);
    expect(results).toEqual([note]);
  });

  it('should return state with all of the notes', () => {
    const notes = [
      { id: '1', title: 'title', listItems: [{ id: '2', text: 'text'}] },
      { id: '2', title: 'title', listItems: [{ id: '3', text: 'text'}] }
  ]; 
    const action = actions.getNotes(notes);
    const result = notesReducer(state, action);
    expect(result).toEqual(notes);
  });

  it('should return updated state when note is deleted', () => {
    state = [
      { id: '1', title: 'title', listItems: [{ id: '2', text: 'text'}] },
      { id: '2', title: 'title', listItems: [{ id: '2', text: 'text'}] }
  ];
    const updatedState = [
      { id: '2', title: 'title', listItems: [{ id: '2', text: 'text'}] }
    ];
    const id = '1';
    const action = actions.deleteNoteAction(id);
    const result = notesReducer(state, action);
    expect(result).toEqual(updatedState);
  });

  it('should return updated state when listItem is deleted', () => {
    state = [
      { id: '1', title: 'title', listItems: [{ id: 'z', text: 'text'}, { id: 'y', text: 'text'}] },
      { id: '2', title: 'title', listItems: [{ id: 'x', text: 'text'}] }
    ];
    const updatedState = [
      { id: '1', title: 'title', listItems: [{ id: 'z', text: 'text'}] },
      { id: '2', title: 'title', listItems: [{ id: 'x', text: 'text'}] }
    ];
    const id = 'y';
    const action = actions.deleteListItem(id);
    const result = notesReducer(state, action);
    expect(result).toEqual(updatedState);
  });
});
