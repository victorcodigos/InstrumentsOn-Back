'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category)
      Product.belongsToMany(models.Category, {
        through: models.CategoryProduct,
      });
      // define association here
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
      },
      CategoryId: DataTypes.INTEGER
    }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};