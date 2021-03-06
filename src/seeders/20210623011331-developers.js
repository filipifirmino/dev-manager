"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Developers", [
      {
        nome: "Steve",
        fone: "99999999999",
        celular: "99999999999",
        endereco: "Crist Drive, Los Altos, California",
        createdAt: new Date(),
      },
      {
        nome: "Wozniak",
        fone: "99999999999",
        celular: "99999999999",
        endereco: "San José, Califórnia",
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Developers", null, {});
  },
};
