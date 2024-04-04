"use strict";
const { hashPassword } = require("../helpers/bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const User = require("../data/user.json");
    User.forEach((us) => {
      us.createdAt = new Date();
      us.updatedAt = new Date();
      const hash = hashPassword(us.Password, 10);
      us.Password = hash;
    });
    await queryInterface.bulkInsert("Users", User, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      restartIdentity: true,
    });
  },
};
