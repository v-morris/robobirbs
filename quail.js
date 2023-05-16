const bird = require('./bird');
const store = require('./state/store');
const getRandomInt = require('./util/getRandomInt');

const defense = {
  dodge(enemy) {
    console.log(`You dodged against ${enemy}`);
  },
};

const attack = {
  plumeMissile(enemy) {
    store.dispatch({
      type: 'ATTACK',
      result: 'SUCCESS',
      hitpoints: getRandomInt(5),
    });

    const isPlayerTurn = store.getState().battle.turnIndicator === 'PLAYER';
    const isBattleSuccess = store.getState().battle.result === 'SUCCESS';

    if (isBattleSuccess) {
      console.log(`You sent a plume missile to ${enemy}`);
      if (isPlayerTurn) {
        store.dispatch({
          player: 'ENEMY',
          type: 'TAKE_DAMAGE',
          hitpoints: store.getState().battle.hitpoints,
        });
      } else {
        store.dispatch({
          player: 'PLAYER',
          type: 'TAKE_DAMAGE',
          hitpoints: store.getState().battle.hitpoints,
        });
      }
    } else {
      console.log(`You failed to attack ${enemy}`);
    }
    console.log(store.getState().battle);
    console.log(store.getState().enemy);
  },
};

const quail = Object.assign(Object.create(bird), attack, defense);

module.exports = quail;
