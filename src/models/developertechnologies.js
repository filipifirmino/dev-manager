'use strict';
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
     // define association here
      // models.Developers.belongsToMany(models.Technologies, {
      //   as: 'tecId',
      //   through: Developer,
      //   foreignKey: 'id',
      //   otherKey: 'id',
      // });
      // models.Technologies.belongsToMany(models.Developers, {
      //   as:'devId',
      //   through: Technologies,
      //   foreignKey: 'id',
      //   otherKey: 'id',
      // })
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