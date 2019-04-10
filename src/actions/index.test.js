import * as actions from './index';

describe('actions', () => {
  it('should return a type of CREATE_NOTE with a note', () => {
    const note = { title: 'walk dog', id: 1, listItems: [{id: 9, text: 'find leash'}]};
    const expected = {
      type: 'CREATE_NOTE',
      note,
    }
    const result = actions.createNote(note);
    expect(result).toEqual(expected);
  });

  it('should return a type of GET_NOTES with an array of notes', () => {
    const notes = [{ title: 'walk dog', id: 1, listItems: [{id: 9, text: 'find leash'}]}];
    const expected = {
      type: 'GET_NOTES',
      notes,
    }
    const result = actions.getNotes(notes);
    expect(result).toEqual(expected);
  });

  it('should return a type of IS_LOADING with boolean', () => {
    const expected = {
      type: 'IS_LOADING',
      isLoading: false
    }
    const result = actions.isLoading(false);
    expect(result).toEqual(expected);
  });

  it('should return a type of DELETE_NOTE with an id', () => {
    const id = 4;
    const expected = {
      type: 'DELETE_NOTE',
      id
    }
    const result = actions.deleteNoteAction(id);
    expect(result).toEqual(expected);
  });

  it('should return a type of TOGGLE_COMPLETED with an id', () => {
    const id = 7;
    const expected = {
      type: 'TOGGLE_COMPLETED',
      id
    }
    const result = actions.toggleCompleted(id);
    expect(result).toEqual(expected);
  });

  it('should return a type of DELETE_LIST_ITEM with an id', () => {
    const id = 9;
    const expected = {
      type: 'DELETE_LIST_ITEM',
      id
    }
    const result = actions. deleteListItem(id);
    expect(result).toEqual(expected);
  });
});
