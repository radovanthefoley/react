export default function(state = null, action) {
  // thanks to redux-promise middleware, action is intercepted if payload key is
  // of type Promise, resolves it and sends it already resolved to reducers!
  console.log('Action received: ', action);

  return state;
}
