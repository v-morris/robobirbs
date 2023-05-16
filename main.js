const quail = require('./quail');
const store = require('./state/store');

store.dispatch({ type: 'INITIALIZE_TURN', turnIndicator: 'PLAYER' });
store.dispatch({ type: 'INITIALIZE_PLAYER', player: 'PLAYER', hitpoints: 15 });
store.dispatch({ type: 'INITIALIZE_PLAYER', player: 'ENEMY', hitpoints: 20 });

quail.plumeMissile('robo enemy');
