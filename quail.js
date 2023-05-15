const bird = require("./bird");
const store = require("./state/player");
const getRandomInt = require("./util/getRandomInt");

const defense = {
  dodge(enemy) {
    console.log(`You dodged against ${enemy}`);
  },
};

const attack = {
  plumeMissile(enemy) {
    store.dispatch({ type: "ATTACK", points: getRandomInt(5) });
    console.log(store.getState());
    console.log(`You sent a plume missile to ${enemy}`);
  },
};

const quail = Object.assign(Object.create(bird), attack, defense);

quail.plumeMissile("robo enemy");
