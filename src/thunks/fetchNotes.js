import { getNotes } from '../actions';

export const fetchNotes = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      const notes = await response.json()
      dispatch(getNotes(notes))
    } catch(error) {
      console.log(error)
    }
  }
}