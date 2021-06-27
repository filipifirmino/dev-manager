'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Technologies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Technologies.belongsTo(models.DeveloperTechnologies, {foreignKey:'id', as :'tecId'});
    }
  };
  Technologies.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Technologies',
    timestamps: false,
  });
  return Technologies;
};