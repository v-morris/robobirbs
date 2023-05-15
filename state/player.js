const createStore = require("./createStore");

const initialState = {
  player: {
    hitpoints: 10,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ATTACK":
      state.player = {
        ...state.player,
        hitpoints: state.player.hitpoints - action.points,
      };
      break;
    default:
      break;
  }

  return state;
}

const store = createStore(initialState, reducer);

module.exports = store;
