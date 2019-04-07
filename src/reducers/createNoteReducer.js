export const notesReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_NOTE': 
      return [...state, action.note];
    case 'GET_NOTES':
      return action.notes;
    case "DELETE_NOTE":
      return state.filter(note => note.id != action.id);
    default: 
      return state;
  }
};
