export const notesReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_NOTE': 
      return [...state, action.note];
    case 'GET_NOTES':
      return action.notes
    default: 
      return state;
  }
};