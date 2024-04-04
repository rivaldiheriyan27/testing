const { User } = require("../models");

class UserController {
  static async listUser(req, res, next) {
    try {
      console.log("INi masuk");
      res.status(200).json({
        statusCode: 200,
        message: "Berhasil"
      })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { UserController };
