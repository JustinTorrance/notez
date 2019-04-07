import { fetchErrored } from '../actions'

export const addNote = (url, newNote) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(response.statusText)
      } else {
        const data = await response.json()
        return data
      }
    } catch(error) {
      dispatch(fetchErrored(error.message))
    }
  }
}

 