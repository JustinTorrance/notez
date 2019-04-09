import { fetchErrored } from '../actions'

export const updateListItems = (url, updatedNote) => {
  return async (dispatch) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(updatedNote),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(response.statusText)
      } 
    } catch(error) {
      dispatch(fetchErrored(error.message))
    }
  }
}

 