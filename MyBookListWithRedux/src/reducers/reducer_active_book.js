// state argument is not application state, only the state this reducer is
// responsible for; redux is not allowing to return undefined state so to handle
// cases where state is incoming as undefined we do ES6 syntax to set default
// value
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
