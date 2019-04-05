import { getNotes, isLoading } from '../actions';

export const fetchNotes = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      const notes = await response.json();
      dispatch(getNotes(notes));
      dispatch(isLoading(false));
    } catch(error) {
      console.log(error)
    }
  }
}