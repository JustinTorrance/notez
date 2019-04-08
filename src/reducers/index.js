import { combineReducers } from 'redux';
import { notesReducer } from './createNoteReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { fetchErroredReducer } from './fetchErroredReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  isLoading: isLoadingReducer,
  error: fetchErroredReducer
});

export default rootReducer;
