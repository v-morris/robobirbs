const bird = require("./bird");

const defense = {
  dodge(enemy) {
    console.log(`You dodged against ${enemy}`);
  },
};

const attack = {
  plumeMissile(enemy) {
    console.log(`You sent a plume missile to ${enemy}`);
  },
};

const quail = Object.assign(Object.create(bird), attack, defense);
