'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('player_skills', [
      {
      playerId: 1,
      skillId: 1,
    },
    {
      playerId: 1,
      skillId: 2,
    }

  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('player_skills', null, {});
  }
};
