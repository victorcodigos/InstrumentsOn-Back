'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Model {
    static associate(models) {
    }
  }
  CategoryProduct.init({
    CategoryId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryProduct',
  });
  return CategoryProduct;
};