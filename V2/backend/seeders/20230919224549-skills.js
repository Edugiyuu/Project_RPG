'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skills', [
      {
      id: 1,
      name:"Ataque basico",
      damage: 10,
      heal: 0,
      stun: false,
      stamina: 0,
      mobSkill:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name:"Ataque pesado",
      damage: 15,
      heal: 0,
      stun: true,
      stamina: 2,
      mobSkill:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name:"Ataque basico de mob",
      damage: 5,
      heal: 0,
      stun: false,
      stamina: 0,
      mobSkill:true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name:"Regeneração",
      damage: 0,
      heal: 10,
      stun: false,
      stamina: 0,
      mobSkill:true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};