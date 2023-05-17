const initialState = {
  hitpoints: null,
};

function createBirdWithPlayerType(playerType = '') {
  return function bird(state = initialState, action) {
    const { player } = action;
    if (player !== playerType) return state;

    switch (action.type) {
      case 'INITIALIZE_PLAYER':
        state = {
          ...state,
          hitpoints: action.details.hitpoints,
        };
        break;
      case 'TAKE_DAMAGE':
        state = {
          ...state,
          hitpoints: state.hitpoints - action.hitpoints,
        };
        break;
      case 'HEAL':
        state = {
          ...state,
          hitpoints: state.hitpoints + action.hitpoints,
        };
        break;
      default:
        break;
    }
    return state;
  };
}

module.exports = createBirdWithPlayerType;
