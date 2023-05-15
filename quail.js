const bird = require("./bird");
const store = require("./state/store");
const getRandomInt = require("./util/getRandomInt");

const defense = {
  dodge(enemy) {
    console.log(`You dodged against ${enemy}`);
  },
};

const attack = {
  plumeMissile(enemy) {
    store.dispatch({ type: "BATTLE", result: 'SUCCESS', points: getRandomInt(5) });

    if(store.getState().battle.result === 'SUCCESS'){
      console.log(`You sent a plume missile to ${enemy}`);
      // remove enemy hitpoints
    } else if(store.getState().battle.result === 'FAILURE'){
      console.log(`You failed to attack ${enemy}`);
      // do nothing to hit points
    }
  },
};

const quail = Object.assign(Object.create(bird), attack, defense);

quail.plumeMissile("robo enemy");
