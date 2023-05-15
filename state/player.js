const initialState = {
  hitpoints: 10,
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case "ATTACK":
      state = {
        ...state,
        hitpoints: state.hitpoints - action.points,
      };
      break;
    default:
      break;
  }

  return state;
}

module.exports = playerReducer;