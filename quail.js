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
    store.dispatch({ type: "ATTACK", points: getRandomInt(5) });
    console.log(`You sent a plume missile to ${enemy}`);
    console.log(store.getState())
  },
};

const quail = Object.assign(Object.create(bird), attack, defense);

quail.plumeMissile("robo enemy");
