'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mobs', [{
      id: 1,
      name:"Bixo teste",
      hp: 50,
      attack: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name:"Hidra de Ferro",
      hp: 400,
      attack: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    }


  ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mobs', null, {});
  }
};
