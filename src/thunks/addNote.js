export const addNote = (url, newNote) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('data', data)
    } catch(error) {
      console.log(error)
    }
  }
}

