import { notesReducer } from '../createNoteReducer';
import * as actions from '../../actions';

describe('notesReducer', () => {
  const state = [];

  it('should return state by default', () => {
    const action = {};
    const results = notesReducer(state, action);
    expect(results).toEqual(state);
  });

  it('should return state with a new note added', () => {

  });

  it('should return state with all of the notes', () => {
    
  });

});
