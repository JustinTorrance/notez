export const notesReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_NOTE': 
      return [...state, action.note];
    case 'GET_NOTES':
      return action.notes;
    case 'DELETE_NOTE':
      return state.filter(note => note.id != action.id);
    case 'TOGGLE_COMPLETED':
      return state.map((note) => {
        note.listItems.map((listItem) => {
          if (action.id === listItem.id) {
            listItem.completed = !listItem.completed
            return listItem
          } else {
            return listItem
          }
        })
        return note
      })
    default: 
      return state;
  }
};
