const quail = require('./quail');
const bird = require('./bird');
const store = require('./state/store');

function initiateBattle() {
  store.dispatch({ type: 'ACTIVATE_BATTLE' });
  store.dispatch({ type: 'SET_TURN', turnIndicator: 'PLAYER' });
  store.dispatch({
    type: 'INITIALIZE_PLAYER',
    player: 'PLAYER',
    details: Object.getPrototypeOf(quail),
  });
  store.dispatch({
    type: 'INITIALIZE_PLAYER',
    player: 'ENEMY',
    details: bird,
  });
}

initiateBattle();

while (store.getState().battle.isBattleActive) {
  if (store.getState().battle.turnIndicator === 'PLAYER') {
    // choose attack in UI, hardcoded for now
    quail.plumeMissile();
    store.dispatch({ type: 'SET_TURN', turnIndicator: 'ENEMY' });
  } else if (store.getState().battle.turnIndicator === 'ENEMY') {
    // hardcoding attack by cpu for now, will be randomly generated based on enemy type
    bird.pinfeatherRush();
    store.dispatch({ type: 'SET_TURN', turnIndicator: 'PLAYER' });
  }
  console.log('player hit points: ', store.getState().player.hitpoints);
  console.log('ENEMY hit points: ', store.getState().enemy.hitpoints);
  if (store.getState().enemy.hitpoints <= 0) {
    console.log('you won the battle');
    break;
  }

  if (store.getState().player.hitpoints <= 0) {
    console.log('the enemy beat you');
    break;
  }
}
