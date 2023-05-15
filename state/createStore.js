function createStore(initialState, reducer) {
  const handler = {
    set(obj, prop, value) {
      obj[prop] = value;
    },
  };

  let state = new Proxy(initialState, handler);

  function getState() {
    return Object.assign({}, state);
  }

  function dispatch(action) {
    const previousState = getState();
    state = reducer(previousState, action);
  }

  return {
    getState,
    dispatch,
  };
}

module.exports = createStore;
