import { combineReducers } from 'redux';
import { notesReducer } from './createNoteReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { fetchErroredReducer } from './fetchErroredReducer';
// import { toggleCompletedReducer } from './toggleCompletedReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  isLoading: isLoadingReducer,
  error: fetchErroredReducer,
  // completedListItem: toggleCompletedReducer
});

export default rootReducer;
