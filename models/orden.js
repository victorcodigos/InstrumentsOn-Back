'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orden.belongsTo(models.User);
      //Orden.belongsToMany(models.Product, {
        //through: models.OrdenItem,
      //});
    }
  }
  Orden.init({
    day: DataTypes.DATE,
    UserId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orden',
  });
  return Orden;
};