"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Technologies", [
      {
        name: "JAVA",
        createdAt: new Date(),
      },
      {
        name: "PYTHON",
        createdAt: new Date(),
      },
      {
        name: "JAVASCRIPT",
        createdAt: new Date(),
      },
      {
        name: "GOLANG",
        createdAt: new Date(),
      },
      {
        name: "CSHARP",
        createdAt: new Date(),
      },
      {
        name: "ELIXIR",
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Technologies", null, {});
  },
};
