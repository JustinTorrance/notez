export const fetchErroredReducer = (state = '', action) => {
  switch(action.type) {
    case 'FETCH_ERRORED':
      return action.message;
    default:
      return state;
  }
};