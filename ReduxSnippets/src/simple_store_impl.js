// https://egghead.io/lessons/react-redux-implementing-store-from-scratch
// simplified, yet functional createStore implementation

// Reducer is typically composition of many pure functions (by combineReducers
// function), each responsible for its own partition of state. Redux aggregates
// results into single global state object.

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    // return unsubscribe implementation right away, very nice :)
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  // call to obtain initial state when createStore is called with given reducer
  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  };
};

// getState(), dispatch(), and subscribe() are Redux essential functions over
// global state tree (store)