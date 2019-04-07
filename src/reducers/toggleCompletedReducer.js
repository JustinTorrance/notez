// export const toggleCompletedReducer = (state = [], action) => {
//   switch(action.type) {
//   case 'TOGGLE_COMPLETED':
//   return state.map(item => {
//     // console.log(item)
//     if (action.id === item) {
//       return { ...item, completed: !item.completed };
//     } else {
//       return item
//     }
//   })
//   default: 
//   return state;
//   }
// }