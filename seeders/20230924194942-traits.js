/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('traits', [{
      id: 1,
      name: "Corpo de pedra",
  	  type: "comum",
	    description: "seu corpo é resistente igual uma rocha",
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
      name: "Determinado",
  	  type: "Rara",
	    description: "Você ainda pode aguentar um pouco mais..",
	    hpBonus: 0,
	    damageBonus: 0,
	    dodge: false,
	    staminaBonus: 0,
	    revive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
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
      id: 2,
      name: "Determinado",
  	  type: "Rara",
	    description: "Você ainda pode aguentar um pouco mais..",
	    hpBonus: 0,
	    damageBonus: 0,
	    dodge: false,
	    staminaBonus: 0,
	    revive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    


  ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('traits', null, {});
  }
};