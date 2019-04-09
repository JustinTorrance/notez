import * as actions from './index';

describe('actions', () => {
  it('should return a type of CREATE_NOTE with a note', () => {
    const note = { title: 'walk dog', id: 1, listItems: [{id: 9, text: 'find leash'}]};
    const expected = {
      type: 'CREATE_NOTE',
      note,
    }
    const result = actions.createNote(note)
    expect(result).toEqual(expected)
  })

  it('should return a type of GET_NOTES with an array of notes', () => {
    const notes = [{ title: 'walk dog', id: 1, listItems: [{id: 9, text: 'find leash'}]}];
    const expected = {
      type: 'GET_NOTES',
      notes,
    }
    const result = actions.getNotes(notes)
    expect(result).toEqual(expected)
  })
})