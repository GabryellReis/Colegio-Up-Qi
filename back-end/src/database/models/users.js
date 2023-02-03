'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}
  Users.init({
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};