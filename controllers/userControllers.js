const { User } = require("../models");

class UserController {
  static async listUser(req, res, next) {
    try {
      console.log("INi masuk");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { UserController };
