const inventory = {};

const defense = {
  wingShield(enemy) {
    console.log(`You defended against ${enemy}`);
  },
};

const attack = {
  pinfeatherRush(enemy) {
    console.log(`You landed a hit on ${enemy}`);
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
  health,
  classification,
  attack,
  defense,
  inventory,
  {
    level: 1,
  }
);

module.exports = bird;
