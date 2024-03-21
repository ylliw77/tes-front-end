const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models/index");

async function verificationUser(req, res, next) {
  try {
    const { access_token } = req.headers.authorization;
    if (!access_token) {
      throw { name: "UNAUTHORIZED" };
    }
    const { id } = decodeToken(access_token.replace("Bearer", ""));
    const validUser = await User.findByPK(id);
    if (!validUser) {
      throw { name: "UNAUTHORIZED" };
    }
    req.user = {
      id: validUser.id,
      name: validUser.name,
      phoneNumber: validUser.phoneNumber,
    };
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = verificationUser