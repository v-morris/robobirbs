const createStore = require('./createStore');
const combineReducers = require('./combineReducers');
const player = require('./player');
const battle = require('./battle');

const rootReducer = combineReducers({
  player,
  battle,
});

const store = createStore({}, rootReducer);

module.exports = store;