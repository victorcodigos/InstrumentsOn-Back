'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdenProduct extends Model {
    static associate(models) {
    }
  }
  OrdenProduct.init({
    OrdenId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrdenProduct',
  });
  return OrdenProduct;
};