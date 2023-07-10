'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orden extends Model {
    static associate(models) {
      Orden.belongsTo(models.User);
      Orden.belongsToMany(models.Product, {
        through: models.OrdenProduct,
      });
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