import { fetchErrored } from '../actions'

export const updateListItems = (url, updatedListItem) => {
  return async (dispatch) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(updatedListItem),
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

 