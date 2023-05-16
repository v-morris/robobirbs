const initialState = {
  turnIndicator: null,
  result: null,
  hitpoints: null,
};

function battleReducer(state = initialState, action) {
  switch (action.type) {
    case 'INITIALIZE_TURN':
      state = {
        ...state,
        turnIndicator: action.turnIndicator,
      };
      break;
    case 'ATTACK':
      state = {
        ...state,
        result: action.result,
        hitpoints: action.hitpoints,
      };
      break;
    case 'DEFEND':
      state = {
        ...state,
        result: action.result,
        hitpoints: action.hitpoints,
      };
      break;
    case 'BATTLE_RESET':
      state = {
        ...state,
        ...initialState,
      };
    default:
      break;
  }
  return state;
}

module.exports = battleReducer;
