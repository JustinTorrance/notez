import { fetchErrored, isLoading, deleteNoteAction } from '../actions'

export const deleteNote = (url, id) => {
  return async (dispatch) => {
    const options = {
      method: "DELETE", 
    }
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.statusText)
      } 
      dispatch(isLoading(false));
      dispatch(deleteNoteAction(id));
    } catch(error) {
      dispatch(fetchErrored(error.message))
    }
  }
}