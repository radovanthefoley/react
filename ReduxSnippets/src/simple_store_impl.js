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


// ------------- -------------  TYPICAL USAGE ------------- -------------

// reducer (only one in this simple case, otherwise we would combine all of them
// together by combineReducers function before creating a store):
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      // every reducer has to return original state if unknown action encountered
      return state;
  }
};

// store
const store = createStore(counter);

// listener/subscriber
const render = () => {
  document.body.innerText = store.getState();
};

// subscription
const unsubscribe = store.subscribe(render);

// action dispatch
document.addEventListener('click', () => {
  store.dispatch({
    type: 'INCREMENT',
    payload: 'whatever actula payload it is'
  });
});

// initial render (if needed)
render();