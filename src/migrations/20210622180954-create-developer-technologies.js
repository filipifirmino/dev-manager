module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DeveloperTechnologies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      devId: {
        type: Sequelize.INTEGER,
        references: { model: "Developers", key: "id" },
      },
      tecId: {
        type: Sequelize.INTEGER,
        references: { model: "Technologies", key: "id" },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("DeveloperTechnologies");
  },
};
