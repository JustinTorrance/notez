import { combineReducers } from 'redux';
import { createNoteReducer } from './createNoteReducer';

const rootReducer = combineReducers => ({
  notes: createNoteReducer
});

export default rootReducer;
