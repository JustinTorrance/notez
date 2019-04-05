import { combineReducers } from 'redux';
import { notesReducer } from './createNoteReducer';

const rootReducer = combineReducers({
  notes: notesReducer
});

export default rootReducer;
