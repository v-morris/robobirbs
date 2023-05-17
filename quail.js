const bird = require('./bird');
const store = require('./state/store');
const getRandomInt = require('./util/getRandomInt');

const health = {
  hitpoints: 15,
};

const defense = {
  dodge(enemy) {
    console.log(`You dodged against ${enemy}`);
  },
};

const attack = {
  // get listAttacks() {
  //   return Object.entries(Object.getOwnPropertyDescriptors(this))
  //     .filter(([, desc]) => desc.hasOwnProperty('value'))
  //     .map(([key]) => key);
  // },
  plumeMissile() {
    store.dispatch({
      type: 'ATTACK',
      result: 'SUCCESS',
      hitpoints: getRandomInt(5),
    });

    const isPlayerTurn = store.getState().battle.turnIndicator === 'PLAYER';
    const isBattleSuccess = store.getState().battle.result === 'SUCCESS';

    if (isBattleSuccess) {
      console.log('Plume missile attack!');
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
  },
};

const quail = Object.assign(Object.create(bird), attack, defense, health);

module.exports = quail;
