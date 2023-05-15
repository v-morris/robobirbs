const initialState = {
    type: '',
    result: '',
    points: '',
}

function battleReducer(state = {}, action){
    switch(action.type){
        case "BATTLE":
            state = {
                ...state,
                type: action.type,
                result: action.result,
                points: action.points,
            }
            break;
        case "BATTLE_RESET":
            state = {
                ...state,
                ...initialState
            }    
        default:
            break

    }
    return state;
}

module.exports = battleReducer;