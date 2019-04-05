import { combineReducers } from 'redux';
import { notesReducer } from './createNoteReducer';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  isLoading: isLoadingReducer,
});

export default rootReducer;
