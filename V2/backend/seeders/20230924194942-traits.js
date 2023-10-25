/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('traits', [{
      id: 1,
      name: "Corpo de pedra",
  	  type: "Comum",
	    description: "Seu corpo é resistente igual uma rocha",
	    hpBonus: 20,
	    damageBonus: 0,
	    dodge: false,
	    staminaBonus: 0,
	    revive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: "dededede",
  	  type: "Comum",
	    description: "Seu corpo é resistente igual uma rocha",
	    hpBonus: 20,
	    damageBonus: 0,
	    dodge: false,
	    staminaBonus: 0,
	    revive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: "Determinado",
  	  type: "Rara",
	    description: "Você ainda determinado a aguentar um pouco mais..",
	    hpBonus: 0,
	    damageBonus: 0,
	    dodge: false,
	    staminaBonus: 0,
	    revive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name: "Incansável",
  	  type: "Rara",
	    description: "Possui muito folego",
	    hpBonus: 5,
	    damageBonus: 0,
	    dodge: false,
	    staminaBonus: 10,
	    revive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      name: "Talento Natural",
  	  type: "Rara",
	    description: "Você leva jeito pra isso..",
	    hpBonus: 5,
	    damageBonus: 8,
	    dodge: false,
	    staminaBonus: 3,
	    revive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      name: "Desesperado",
  	  type: "Comum",
	    description: "Seu corpo é resistente igual uma rocha",
	    hpBonus: 20,
	    damageBonus: 0,
	    dodge: false,
	    staminaBonus: 0,
	    revive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    


  ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('traits', null, {});
  }
};