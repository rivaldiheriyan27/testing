"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      UserId: DataTypes.STRING,
      Username: DataTypes.STRING,
      Password: DataTypes.STRING,
      Fullname: DataTypes.STRING,
      NIK: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
