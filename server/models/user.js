'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypter');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction, {
        foreignKey : "userId"
      })
    }
  }
  User.init({
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
    phoneNumber: { type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Phone Number is required"
        },
        notNull : {
          msg : "Phone Number is required"
        }
      }},
    password: { type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Password is required"
        },
        notNull : {
          msg : "Password is required"
        }
      }}
  }, {
    hooks : {
     async beforeCreate(user, options){
        const hashedPassword = await hashPassword(user.password)
        user.password = hashedPassword
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};