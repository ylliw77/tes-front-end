"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Provider.hasMany(models.Item, {
        foreignKey : "providerId"
      })

    }
  }
  Provider.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name is required",
          },
          notNull: {
            msg: "Name is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Provider",
    }
  );
  return Provider;
};
