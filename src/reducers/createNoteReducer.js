export const notesReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_NOTE': 
      return [...state, action.note];
    case 'GET_NOTES':
      return action.notes;
    case 'DELETE_NOTE':
      return state.filter(note => note.id != action.id);
    case 'TOGGLE_COMPLETED':
      return state.map(note => {
        return note.listItems.map(item => {
          if (item.id === action.id) {
            return {...item, completed: !item.completed}
          } else {
            return item 
          }
      })
    })
    default: 
      return state;
  }
};
