'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('player_traits', [
       {
      playerId: 1,
      traitId: 1,
    }, 

  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('player_traits', null, {});
  }
};
