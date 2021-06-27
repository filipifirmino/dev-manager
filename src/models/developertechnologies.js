module.exports = (sequelize, _dataTypes) => {
  const DeveloperTechnologies = sequelize.define(
    "DeveloperTechnologies",
    {},
    { timestamps: false }
  );

  DeveloperTechnologies.associate = (models) => {
    models.Developers.belongsToMany(models.Technologies, {
      as: "especialidade",
      through: DeveloperTechnologies,
      foreignKey: "devId",
      otherKey: "tecId",
    });
    models.Technologies.belongsToMany(models.Developers, {
      as: "Desenvolvedor",
      through: DeveloperTechnologies,
      foreignKey: "tecId",
      otherKey: "devId",
    });
  };
  return DeveloperTechnologies;
};
