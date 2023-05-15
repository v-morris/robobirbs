const createStore = require('./createStore');
const combineReducers = require('./combineReducers');
const playerReducer = require('./player');

const rootReducer = combineReducers({
  player: playerReducer,
});

const store = createStore({}, rootReducer);

module.exports = store;