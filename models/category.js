'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Product, {
        through: models.CategoryProduct,
      });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    nationality: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};