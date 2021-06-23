'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Developer.belongsTo(models.DeveloperTechnologies, {foreignKey:'id', as:'devId'});
    }
  };
  Developer.init({
    nome: DataTypes.STRING,
    fone: DataTypes.STRING,
    celular: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developer',
    timestamps: false,
  });
  return Developer;
};