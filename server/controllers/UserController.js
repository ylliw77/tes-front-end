const { validPassword } = require("../helpers/bcrypter");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../models/index");
class UserController {
  static async registerHandler(req, res, next) {
    try {
      const { name, phoneNumber, password } = req.body;

      const response = await User.create({
        name,
        phoneNumber,
        password,
      });
      res.status(200).json({
        message: `Welcome to I~Ku ${name}`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async loginHandler(req, res, next) {
    try {
      const { phoneNumber, password } = req.body;
      const isUser = await User.findOne({
        where: { phoneNumber },
      });
      if (!isUser || !validPassword(password, isUser.password)) {
        throw {
          name: "USER_NOT_FOUND",
          message : "Invalid phone number/password"
        };
      }
      const payload = {
        id: isUser.phoneNumber,
        name: isUser.name,
      };
      const access_token = await generateToken(payload);
      res.json({
        message: `Hello ${isUser.name}!`,
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
