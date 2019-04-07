export const createNote = (note) => ({
  type: 'CREATE_NOTE',
  note
});

export const getNotes = (notes) => ({
  type: 'GET_NOTES',
  notes
});

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
});

export const fetchErrored = (message) => ({
  type: 'FETCH_ERRORED',
  message
});

export const deleteNoteAction = (id) => ({
  type: 'DELETE_NOTE',
  id
});

export const toggleCompleted = (id) => ({
  type: 'TOGGLE_COMPLETED',
  id
})