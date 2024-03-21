'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Provider,{
        foreignKey : "providerId"
      })
      Item.hasMany(models.Transaction, {
        foreignKey : "itemId"
      })
    }
  }
  Item.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Name is required"
        },
        notNull : {
          msg : "Name is required"
        }
      }
    },
    price: { type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Price is required"
        },
        notNull : {
          msg : "Price is required"
        }
      }},
    providerId: { type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Please select your Provider"
        },
        notNull : {
          msg : "Please select your Provider"
        }
      }}
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};