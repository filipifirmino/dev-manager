const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeveloperTechnologies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Developers.belongsToMany(models.Technologies, {
        as: "especialidade",
        through: DeveloperTechnologies,
        foreignKey: "devId",
        otherKey: "tecId",
      });
    }
  };
  DeveloperTechnologies.init({
    devId: DataTypes.INTEGER,
    tecId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DeveloperTechnologies',
    timestamps: false,
  });
  return DeveloperTechnologies;
};