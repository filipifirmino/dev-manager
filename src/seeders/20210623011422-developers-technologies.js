"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("DeveloperTechnologies", [
      {
        devId: 1,
        tecId: 1,
        createdAt: new Date(),
      },
      {
        devId: 1,
        tecId: 2,
        createdAt: new Date(),
      },
      {
        devId: 2,
        tecId: 3,
        createdAt: new Date(),
      },
      {
        devId: 2,
        tecId: 4,
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("DeveloperTechnologies", null, {});
  },
};
