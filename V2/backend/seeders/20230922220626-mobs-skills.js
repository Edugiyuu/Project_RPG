'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mob_skills', [
      {
      mobId: 1,
      skillId: 3,
    },
    {
      mobId: 2,
      skillId: 4,
    },

  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mob_skills', null, {});
  }
};
