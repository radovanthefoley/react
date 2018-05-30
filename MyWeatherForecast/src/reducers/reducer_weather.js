import {FETCH_WEATHER, REMOVE_WEATHER} from '../actions/index';

export default function(state = [], action) {
  // thanks to redux-promise middleware, action is intercepted if payload key is
  // of type Promise, resolves it and sends it already resolved to reducers!
  console.log('Action received: ', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // has to be immutable! + accumulation of all the searches
      return [
        action.payload.data, ...state
      ];
      //ES6 equivalent of: return [action.payload.data].concat(state);
    case REMOVE_WEATHER:
      return state.filter(weather => weather !== action.payload)
  }
  return state;
}
