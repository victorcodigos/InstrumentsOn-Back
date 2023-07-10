'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Orden, {
        through: models.OrdenProduct,
      });
      Product.belongsToMany(models.Category, {
        through: models.CategoryProduct,
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Introduce a name please",
          },
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Introduce a name please",
          },
        },
      },
      year: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            message: "Introduce a year please",
          },
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            message: "Introduce price please",
          },
        },
      }    }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};