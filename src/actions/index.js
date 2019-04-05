export const createNote = (note) => ({
  type: 'CREATE_NOTE',
  note
});

export const getNotes = (notes) => ({
  type: 'GET_NOTES',
  notes
})