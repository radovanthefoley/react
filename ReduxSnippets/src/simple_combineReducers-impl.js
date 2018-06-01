const combineReducers = (reducers) => {
  return(state = {}, action) => {
    return Object
      .keys(reducers)
      .reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      }, {});
  }
};

// ------------- -------------  TYPICAL USAGE ------------- -------------

const add_reducer = (state = 0, action) => {
  if (action.type === 'ADD') {
    const newState = state + 1;
    return newState;
  }
  return state;
}

const substract_reducer = (state = 0, action) => {
  if (action.type === 'SUBSTRACT') {
    const newState = state - 1;
    return newState;
  }
  return state;
}

const add = {
  type: 'ADD'
};
const substract = {
  type: 'SUBSTRACT'
};

const counter = combineReducers(
  {add: add_reducer, substract: substract_reducer}
);

const store = createStore(counter);
/* store.getState
[object Object] {
  add: 0,
  substract: 0
}*/

store.dispatch(add);

/* store.getState
[object Object] {
  add: 1,
  substract: 0
}*/
