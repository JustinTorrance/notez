import { getNotes, isLoading, fetchErrored } from '../actions';

export const fetchNotes = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const notes = await response.json();
      dispatch(getNotes(notes));
      dispatch(isLoading(false));
    } catch(error) {
      dispatch(fetchErrored(error.message));
    }
  }
}