const createStore = require('./createStore');
const combineReducers = require('./combineReducers');
const createBirdWithPlayerType = require('./bird');
const battle = require('./battle');

const rootReducer = combineReducers({
  battle,
  player: createBirdWithPlayerType('PLAYER'),
  enemy: createBirdWithPlayerType('ENEMY'),
});

const store = createStore({}, rootReducer);

module.exports = store;
