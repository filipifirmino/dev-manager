'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  // sequelize.query('CREATE TRIGGER delete_relationship AFTER DELETE ON developers' +
  //    ' FOR EACH ROW' +
  //    ' BEGIN' +
  //    ' DELETE FROM DeveloperTechnologies WHERE devId = developers.id' +
  //    'END;');
  class Developers extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      // Developers.belongsTo(models.DeveloperTechnologies, {foreignKey:'id', as:'devId'});
    }
  };  

  Developers.init({
    nome: DataTypes.STRING,
    fone: DataTypes.STRING,
    celular: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developers',
    timestamps: false,
  });
  return Developers;
};