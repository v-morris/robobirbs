const store = require('./state/store');

const defense = {
  wingShield() {
    console.log(`You defended against the enemy with wing shield`);
  },
};

const attack = {
  pinfeatherRush() {
    store.dispatch({
      type: 'ATTACK',
      result: 'SUCCESS',
      hitpoints: getRandomInt(5),
    });

    const isPlayerTurn = store.getState().battle.turnIndicator === 'PLAYER';
    const isBattleSuccess = store.getState().battle.result === 'SUCCESS';

    if (isBattleSuccess) {
      console.log(`Pinfeather rush attack!`);
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
      console.log('Attack failed!');
    }
  },
};

const health = {
  hitpoints: 10,
  heal() {
    console.log(`You healed for 5 hit points`);
  },
};

const classification = {
  type: null,
  rank: null,
  class: null,
};

const bird = Object.assign(
  {},
  { level: 1 },
  health,
  classification,
  attack,
  defense
);

module.exports = bird;
